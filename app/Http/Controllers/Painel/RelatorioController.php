<?php

namespace App\Http\Controllers\Painel;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

/** Responsável por exibir os relatórios gerenciais no painel administrativo. */
class RelatorioController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Panel/Reports/Index');
    }
}
