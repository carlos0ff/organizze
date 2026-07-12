<?php

namespace App\Services\Finance;

use App\Contracts\Finance\SpendingLimitServiceInterface;
use App\Models\SpendingLimit;
use App\Models\Transaction;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

/**
 * Serviço responsável pelas operações de limites de gastos com acesso direto ao banco de dados.
 *
 * @package App\Services\Finance
 */
class SpendingLimitService implements SpendingLimitServiceInterface
{
    /**
     * Lista os limites de gastos do usuário com o total gasto no período informado.
     *
     * @param  int        $userId  Identificador do usuário
     * @param  int        $month   Mês do período (1-12)
     * @param  int        $year    Ano do período
     * @return Collection          Coleção de limites com o campo spent calculado
     */
    public function listWithSpent(int $userId, int $month, int $year): Collection
    {
        $limits = SpendingLimit::where('user_id', $userId)->get();

        $spent = Transaction::where('user_id', $userId)
            ->where('type', 'despesa')
            ->whereMonth('date', $month)
            ->whereYear('date', $year)
            ->select('category', DB::raw('SUM(amount) as total'))
            ->groupBy('category')
            ->pluck('total', 'category');

        return $limits->map(fn ($limit) => [
            ...$limit->toArray(),
            'spent' => (float) ($spent[$limit->category] ?? 0),
        ]);
    }

    /**
     * Cria ou atualiza o limite de gastos de uma categoria para o usuário especificado.
     *
     * @param  int           $userId  Identificador do usuário
     * @param  array         $data    Dados do limite (category, limit_amount, icon, color)
     * @return SpendingLimit          Limite criado ou atualizado
     */
    public function createOrUpdate(int $userId, array $data): SpendingLimit
    {
        return SpendingLimit::updateOrCreate(
            ['user_id' => $userId, 'category' => $data['category']],
            [...$data, 'user_id' => $userId],
        );
    }

    /**
     * Atualiza os dados de um limite de gastos existente.
     *
     * @param  SpendingLimit  $limit  Limite a ser atualizado
     * @param  array          $data   Dados a atualizar
     * @return SpendingLimit          Limite atualizado e recarregado do banco
     */
    public function update(SpendingLimit $limit, array $data): SpendingLimit
    {
        $limit->update($data);

        return $limit->fresh();
    }

    /**
     * Remove um limite de gastos do banco de dados.
     *
     * @param  SpendingLimit  $limit  Limite a ser removido
     * @return void
     */
    public function delete(SpendingLimit $limit): void
    {
        $limit->delete();
    }
}
