<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function index(): \Inertia\Response
    {
        $usersByPlan = User::selectRaw('plan, COUNT(*) as total')->groupBy('plan')->pluck('total', 'plan');

        $usersByMonth = User::selectRaw('MONTH(created_at) as month, COUNT(*) as total')
            ->whereYear('created_at', now()->year)
            ->groupBy('month')
            ->orderBy('month')
            ->pluck('total', 'month');

        $txByMonth = Transaction::selectRaw('MONTH(date) as month, SUM(amount) as total')
            ->whereYear('date', now()->year)
            ->where('type', 'despesa')
            ->groupBy('month')
            ->orderBy('month')
            ->pluck('total', 'month');

        return Inertia::render('Panel/Reports/Index', compact('usersByPlan', 'usersByMonth', 'txByMonth'));
    }
}
