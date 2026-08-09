<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Dashboard;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Exibe o painel principal do usuário.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Dashboard/Index');
    }

    /**
     * Retorna as estatísticas consolidadas do usuário.
     */
    public function stats(): \Inertia\Response
    {
        return inertia('App/Dashboard/Stats');
    }
}
