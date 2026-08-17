<?php

namespace App\Contracts\Finance;

use App\Models\Transaction;
use Illuminate\Support\Collection;

interface TransactionServiceInterface
{
    public function list(int $userId, array $filters = []): Collection;

    public function create(int $userId, array $data): Transaction;

    public function update(Transaction $transaction, array $data): Transaction;

    public function delete(Transaction $transaction): void;

    public function authorizeOwner(Transaction $transaction, int $userId): void;
}
