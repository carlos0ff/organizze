<?php

namespace App\Services\Finance\Http;

use App\Contracts\Finance\TransactionServiceInterface;
use App\Http\Clients\FinanceServiceClient;
use App\Models\Transaction;
use Illuminate\Support\Collection;

/**
 * Implementação do serviço de transações que consome a API financeira via HTTP.
 *
 * @package App\Services\Finance\Http
 */
class TransactionHttpService implements TransactionServiceInterface
{
    /**
     * @param  FinanceServiceClient  $client  Cliente HTTP para a API financeira
     */
    public function __construct(private FinanceServiceClient $client) {}

    /**
     * Lista as transações do usuário com filtros opcionais via API externa.
     *
     * @param  int        $userId   Identificador do usuário
     * @param  array      $filters  Filtros opcionais: type, month, year
     * @return Collection           Coleção de transações retornadas pela API
     */
    public function list(int $userId, array $filters = []): Collection
    {
        $response = $this->client->get('/api/transactions', [
            ...$filters,
            'user_id' => $userId,
        ]);

        return collect($response->json());
    }

    /**
     * Cria uma nova transação para o usuário via API externa.
     *
     * @param  int          $userId  Identificador do usuário
     * @param  array        $data    Dados da transação (type, description, amount, date, etc.)
     * @return Transaction           Transação criada com os dados retornados pela API
     */
    public function create(int $userId, array $data): Transaction
    {
        $response = $this->client->post('/api/transactions', [
            ...$data,
            'user_id' => $userId,
        ]);

        return (new Transaction)->forceFill($response->json());
    }

    /**
     * Atualiza uma transação existente via API externa.
     *
     * @param  Transaction  $transaction  Transação a ser atualizada
     * @param  array        $data         Dados a atualizar
     * @return Transaction                Transação atualizada com os dados retornados pela API
     */
    public function update(Transaction $transaction, array $data): Transaction
    {
        $response = $this->client->put("/api/transactions/{$transaction->id}", $data);

        return $transaction->forceFill($response->json());
    }

    /**
     * Remove uma transação via API externa.
     *
     * @param  Transaction  $transaction  Transação a ser removida
     * @return void
     */
    public function delete(Transaction $transaction): void
    {
        $this->client->delete("/api/transactions/{$transaction->id}");
    }

    /**
     * Verifica se a transação pertence ao usuário especificado.
     *
     * @param  Transaction  $transaction  Transação a verificar
     * @param  int          $userId       Identificador do usuário a comparar
     * @return void
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException  HTTP 403 se não for o dono
     */
    public function authorizeOwner(Transaction $transaction, int $userId): void
    {
        abort_if($transaction->user_id !== $userId, 403);
    }
}
