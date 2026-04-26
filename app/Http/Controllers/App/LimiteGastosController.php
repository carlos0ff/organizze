<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\SpendingLimit;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

/** Responsável pelo gerenciamento dos limites de gastos por categoria. */
class LimiteGastosController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $month = (int) $request->get('month', now()->month);
        $year  = (int) $request->get('year', now()->year);

        $limits = SpendingLimit::where('user_id', Auth::id())->get();

        $spent = Transaction::where('user_id', Auth::id())
            ->where('type', 'despesa')
            ->whereMonth('date', $month)
            ->whereYear('date', $year)
            ->select('category', DB::raw('SUM(amount) as total'))
            ->groupBy('category')
            ->pluck('total', 'category');

        $limitsWithSpent = $limits->map(fn ($limit) => [
            ...$limit->toArray(),
            'spent' => (float) ($spent[$limit->category] ?? 0),
        ]);

        return Inertia::render('App/LimitesGastos/Index', [
            'limits'  => $limitsWithSpent,
            'filters' => ['month' => $month, 'year' => $year],
        ]);
    }
}
