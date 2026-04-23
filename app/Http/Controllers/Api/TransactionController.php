<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class TransactionController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Transaction::where('user_id', Auth::id());

        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }

        if ($request->filled('month')) {
            $query->whereMonth('date', $request->month);
        }

        if ($request->filled('year')) {
            $query->whereYear('date', $request->year);
        }

        $transactions = $query->orderBy('date', 'desc')->orderBy('id', 'desc')->get();

        return response()->json($transactions);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'type'        => ['required', Rule::in(['despesa', 'receita', 'transferencia'])],
            'description' => ['required', 'string', 'max:255'],
            'amount'      => ['required', 'numeric', 'min:0.01'],
            'date'        => ['required', 'date'],
            'account'     => ['nullable', 'string', 'max:100'],
            'category'    => ['nullable', 'string', 'max:100'],
            'note'        => ['nullable', 'string'],
            'paid'        => ['boolean'],
        ]);

        $transaction = Transaction::create([
            ...$data,
            'user_id' => Auth::id(),
            'paid'    => $data['paid'] ?? false,
        ]);

        return response()->json($transaction, 201);
    }

    public function show(Transaction $transaction): JsonResponse
    {
        $this->authorizeOwner($transaction);

        return response()->json($transaction);
    }

    public function update(Request $request, Transaction $transaction): JsonResponse
    {
        $this->authorizeOwner($transaction);

        $data = $request->validate([
            'type'        => [Rule::in(['despesa', 'receita', 'transferencia'])],
            'description' => ['string', 'max:255'],
            'amount'      => ['numeric', 'min:0.01'],
            'date'        => ['date'],
            'account'     => ['nullable', 'string', 'max:100'],
            'category'    => ['nullable', 'string', 'max:100'],
            'note'        => ['nullable', 'string'],
            'paid'        => ['boolean'],
        ]);

        $transaction->update($data);

        return response()->json($transaction);
    }

    public function destroy(Transaction $transaction): JsonResponse
    {
        $this->authorizeOwner($transaction);
        $transaction->delete();

        return response()->json(null, 204);
    }

    private function authorizeOwner(Transaction $transaction): void
    {
        abort_if($transaction->user_id !== Auth::id(), 403);
    }
}
