<?php

namespace App\Http\Controllers\Painel;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Inertia\Inertia;

/** Responsável por exibir o painel administrativo com métricas gerais. */
class DashboardController extends Controller
{
    public function index(): \Inertia\Response
    {
       return Inertia::render('Painel/Dashboard');
    }
}
