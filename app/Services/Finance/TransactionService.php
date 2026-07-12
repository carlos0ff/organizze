<?php

namespace App\Services\Finance;

use App\Contracts\Finance\TransactionServiceInterface;
use App\Models\Transaction;
use Illuminate\Support\Collection;

/**
 * Serviço responsável pelas operações de transações financeiras com acesso direto ao banco de dados.
 *
 * @package App\Services\Finance
 */
class TransactionService implements TransactionServiceInterface
{
    /**
     * Lista as transações do usuário com filtros opcionais por tipo, mês e ano.
     *
     * @param  int        $userId   Identificador do usuário
     * @param  array      $filters  Filtros opcionais: type, month, year
     * @return Collection           Transações ordenadas por data e ID decrescentes
     */
    public function list(int $userId, array $filters = []): Collection
    {
        $query = Transaction::where('user_id', $userId);

        if (!empty($filters['type'])) {
            $query->where('type', $filters['type']);
        }

        if (!empty($filters['month'])) {
            $query->whereMonth('date', $filters['month']);
        }

        if (!empty($filters['year'])) {
            $query->whereYear('date', $filters['year']);
        }

        return $query->orderBy('date', 'desc')->orderBy('id', 'desc')->get();
    }

    /**
     * Cria uma nova transação financeira para o usuário especificado.
     *
     * @param  int          $userId  Identificador do usuário
     * @param  array        $data    Dados da transação (type, description, amount, date, etc.)
     * @return Transaction           Transação recém-criada
     */
    public function create(int $userId, array $data): Transaction
    {
        return Transaction::create([
            ...$data,
            'user_id' => $userId,
            'paid'    => $data['paid'] ?? false,
        ]);
    }

    /**
     * Atualiza os dados de uma transação existente.
     *
     * @param  Transaction  $transaction  Transação a ser atualizada
     * @param  array        $data         Dados a atualizar
     * @return Transaction                Transação atualizada e recarregada do banco
     */
    public function update(Transaction $transaction, array $data): Transaction
    {
        $transaction->update($data);

        return $transaction->fresh();
    }

    /**
     * Remove uma transação do banco de dados.
     *
     * @param  Transaction  $transaction  Transação a ser removida
     * @return void
     */
    public function delete(Transaction $transaction): void
    {
        $transaction->delete();
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
