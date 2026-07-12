<?php

namespace App\Services\Finance\Http;

use App\Contracts\Finance\SpendingLimitServiceInterface;
use App\Http\Clients\FinanceServiceClient;
use App\Models\SpendingLimit;
use Illuminate\Support\Collection;

/**
 * Implementação do serviço de limites de gastos que consome a API financeira via HTTP.
 *
 * @package App\Services\Finance\Http
 */
class SpendingLimitHttpService implements SpendingLimitServiceInterface
{
    /**
     * @param  FinanceServiceClient  $client  Cliente HTTP para a API financeira
     */
    public function __construct(private FinanceServiceClient $client) {}

    /**
     * Lista os limites de gastos com o total gasto no período, via API externa.
     *
     * @param  int        $userId  Identificador do usuário
     * @param  int        $month   Mês do período (1-12)
     * @param  int        $year    Ano do período
     * @return Collection          Coleção de limites com o campo spent calculado
     */
    public function listWithSpent(int $userId, int $month, int $year): Collection
    {
        $response = $this->client->get('/api/spending-limits', [
            'user_id' => $userId,
            'month'   => $month,
            'year'    => $year,
        ]);

        return collect($response->json());
    }

    /**
     * Cria ou atualiza o limite de gastos de uma categoria via API externa.
     *
     * @param  int           $userId  Identificador do usuário
     * @param  array         $data    Dados do limite (category, limit_amount, icon, color)
     * @return SpendingLimit          Limite criado ou atualizado
     */
    public function createOrUpdate(int $userId, array $data): SpendingLimit
    {
        $response = $this->client->post('/api/spending-limits', [
            ...$data,
            'user_id' => $userId,
        ]);

        return (new SpendingLimit)->forceFill($response->json());
    }

    /**
     * Atualiza um limite de gastos existente via API externa.
     *
     * @param  SpendingLimit  $limit  Limite a ser atualizado
     * @param  array          $data   Dados a atualizar
     * @return SpendingLimit          Limite atualizado com os dados retornados pela API
     */
    public function update(SpendingLimit $limit, array $data): SpendingLimit
    {
        $response = $this->client->put("/api/spending-limits/{$limit->id}", $data);

        return $limit->forceFill($response->json());
    }

    /**
     * Remove um limite de gastos via API externa.
     *
     * @param  SpendingLimit  $limit  Limite a ser removido
     * @return void
     */
    public function delete(SpendingLimit $limit): void
    {
        $this->client->delete("/api/spending-limits/{$limit->id}");
    }
}
