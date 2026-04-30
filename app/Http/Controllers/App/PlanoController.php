<?php

declare(strict_types=1);

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;

/** Responsável por exibir e gerenciar o plano de assinatura do usuário. */
class PlanoController extends Controller
{
    public function index(): \Inertia\Response
    {
        return inertia('App/Plano/Index');
    }
}
