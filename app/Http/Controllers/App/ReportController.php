<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;

class ReportController extends Controller
{
    public function mensal(): \Inertia\Response
    {
        return inertia('App/Relatorios/Mensal');
    }

    public function anual(): \Inertia\Response
    {
        return inertia('App/Relatorios/Anual');
    }

    public function categorias(): \Inertia\Response
    {
        return inertia('App/Relatorios/Categorias');
    }

    public function receitasDespesas(): \Inertia\Response
    {
        return inertia('App/Relatorios/ReceitasDespesas');
    }
}
