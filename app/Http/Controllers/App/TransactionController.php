<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $month = (int) $request->get('month', now()->month);
        $year  = (int) $request->get('year', now()->year);

        $transactions = Transaction::where('user_id', Auth::id())
            ->whereMonth('date', $month)
            ->whereYear('date', $year)
            ->orderBy('date', 'desc')
            ->orderBy('id', 'desc')
            ->get();

        return Inertia::render('App/Lancamentos/Index', [
            'transactions' => $transactions,
            'filters'      => ['month' => $month, 'year' => $year],
        ]);
    }
}
