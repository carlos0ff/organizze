<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(): \Inertia\Response
    {
        $now = now();

        $stats = [
            'total_users'        => User::count(),
            'active_users'       => User::where('status', 'active')->count(),
            'new_users_month'    => User::whereMonth('created_at', $now->month)->whereYear('created_at', $now->year)->count(),
            'suspended_users'    => User::where('status', 'suspended')->count(),

            'plan_free'          => User::where('plan', 'free')->count(),
            'plan_basic'         => User::where('plan', 'basic')->count(),
            'plan_pro'           => User::where('plan', 'pro')->count(),

            'total_transactions' => Transaction::count(),
            'transactions_month' => Transaction::whereMonth('created_at', $now->month)->whereYear('created_at', $now->year)->count(),
        ];

        $userGrowth = User::selectRaw('MONTH(created_at) as month, YEAR(created_at) as year, COUNT(*) as total')
            ->whereYear('created_at', $now->year)
            ->groupBy('year', 'month')
            ->orderBy('month')
            ->get()
            ->map(fn ($r) => ['month' => $r->month, 'total' => $r->total]);

        $recentUsers = User::latest()->limit(8)->get(['id', 'name', 'email', 'plan', 'status', 'created_at']);

        return Inertia::render('Panel/Dashboard/Index', compact('stats', 'userGrowth', 'recentUsers'));
    }
}
