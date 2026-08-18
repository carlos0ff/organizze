<?php

declare(strict_types=1);

namespace Tests\Feature\N8n;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class WhatsAppDespesaTest extends TestCase
{
    use RefreshDatabase;

    private const SECRET = 'test-n8n-secret-123';
    private const EMAIL  = 'usuario@poupai.test';

    protected function setUp(): void
    {
        parent::setUp();

        config([
            'services.n8n.secret'     => self::SECRET,
            'services.n8n.user_email' => self::EMAIL,
        ]);
    }

    private function payload(array $overrides = []): array
    {
        return array_merge([
            'type'        => 'despesa',
            'description' => 'Almoço',
            'amount'      => 35.00,
            'date'        => '2026-08-15',
            'category'    => 'Alimentação',
            'note'        => 'Registrado pelo WhatsApp: Gastei R$ 35 no almoço',
            'paid'        => true,
        ], $overrides);
    }

    private function secretHeader(): array
    {
        return ['X-N8N-Secret' => self::SECRET];
    }

    private function criarUsuario(string $email = self::EMAIL): int
    {
        DB::table('users')->insert([
            'first_name'        => 'Teste',
            'last_name'         => 'N8n',
            'email'             => $email,
            'email_verified_at' => now(),
            'password'          => Hash::make('password'),
            'created_at'        => now(),
            'updated_at'        => now(),
        ]);

        return DB::table('users')->where('email', $email)->value('id');
    }

    // ── Autenticação ─────────────────────────────────────────────────────────

    public function test_rejeita_sem_header_secret(): void
    {
        $this->postJson('/api/n8n/webhook', $this->payload())
            ->assertStatus(401)
            ->assertJsonFragment(['error' => 'Unauthorized']);
    }

    public function test_rejeita_secret_errado(): void
    {
        $this->withHeaders(['X-N8N-Secret' => 'errado'])
            ->postJson('/api/n8n/webhook', $this->payload())
            ->assertStatus(401);
    }

    // ── Validação ─────────────────────────────────────────────────────────────

    public function test_rejeita_payload_vazio(): void
    {
        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', [])
            ->assertStatus(422)
            ->assertJsonFragment(['error' => 'validation_error'])
            ->assertJsonValidationErrors(['type', 'description', 'amount', 'date']);
    }

    public function test_rejeita_type_invalido(): void
    {
        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload(['type' => 'invalido']))
            ->assertStatus(422)
            ->assertJsonValidationErrors(['type']);
    }

    public function test_rejeita_amount_zero(): void
    {
        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload(['amount' => 0]))
            ->assertStatus(422)
            ->assertJsonValidationErrors(['amount']);
    }

    public function test_rejeita_amount_negativo(): void
    {
        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload(['amount' => -10]))
            ->assertStatus(422)
            ->assertJsonValidationErrors(['amount']);
    }

    public function test_rejeita_data_formato_invalido(): void
    {
        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload(['date' => '15/08/2026']))
            ->assertStatus(422)
            ->assertJsonValidationErrors(['date']);
    }

    public function test_rejeita_description_vazia(): void
    {
        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload(['description' => '']))
            ->assertStatus(422)
            ->assertJsonValidationErrors(['description']);
    }

    // ── Usuário ───────────────────────────────────────────────────────────────

    public function test_retorna_404_quando_usuario_nao_encontrado(): void
    {
        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload())
            ->assertStatus(404)
            ->assertJsonFragment(['error' => 'user_not_found']);
    }

    // ── Sucesso ───────────────────────────────────────────────────────────────

    public function test_registra_despesa_com_sucesso(): void
    {
        $this->criarUsuario();

        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload())
            ->assertStatus(201)
            ->assertJsonFragment(['success' => true])
            ->assertJsonPath('data.type', 'despesa')
            ->assertJsonPath('data.description', 'Almoço')
            ->assertJsonPath('data.category', 'Alimentação')
            ->assertJsonPath('data.paid', true);

        $this->assertDatabaseHas('transactions', [
            'description' => 'Almoço',
            'category'    => 'Alimentação',
            'paid'        => 1,
        ]);
    }

    public function test_registra_despesa_sem_category(): void
    {
        $this->criarUsuario();

        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload(['category' => null]))
            ->assertStatus(201);

        $this->assertDatabaseHas('transactions', [
            'description' => 'Almoço',
            'category'    => null,
        ]);
    }

    public function test_registra_valor_decimal(): void
    {
        $this->criarUsuario();

        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload([
                'amount'      => 25.90,
                'description' => 'Mercado',
                'category'    => 'Mercado',
            ]))
            ->assertStatus(201);

        $this->assertDatabaseHas('transactions', ['amount' => '25.90']);
    }

    public function test_transacao_vinculada_ao_usuario_correto(): void
    {
        $idUsuario = $this->criarUsuario();
        $idOutro   = $this->criarUsuario('outro@poupai.test');

        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload());

        $this->assertDatabaseHas('transactions', ['user_id' => $idUsuario]);
        $this->assertDatabaseMissing('transactions', ['user_id' => $idOutro]);
    }

    public function test_aceita_todos_os_tipos_validos(): void
    {
        $this->criarUsuario();

        foreach (['despesa', 'receita', 'transferencia'] as $type) {
            $this->withHeaders($this->secretHeader())
                ->postJson('/api/n8n/webhook', $this->payload(['type' => $type]))
                ->assertStatus(201);
        }

        $this->assertDatabaseCount('transactions', 3);
    }

    public function test_resposta_contem_id_da_transacao(): void
    {
        $this->criarUsuario();

        $this->withHeaders($this->secretHeader())
            ->postJson('/api/n8n/webhook', $this->payload())
            ->assertStatus(201)
            ->assertJsonStructure([
                'success',
                'message',
                'data' => ['id', 'type', 'description', 'amount', 'date', 'category', 'paid'],
            ]);
    }
}
