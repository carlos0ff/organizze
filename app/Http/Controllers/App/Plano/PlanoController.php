<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Plano;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PlanoController extends Controller
{
    /**
     * Exibe os planos disponíveis para assinatura.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Plano/Index');
    }

    /**
     * Exibe os detalhes do plano atual do usuário.
     */
    public function show(): \Inertia\Response
    {
        return inertia('App/Plano/Show');
    }

    /**
     * Processa a assinatura ou upgrade de plano.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: processar assinatura do plano
    }

    /**
     * Cancela a assinatura do plano atual.
     */
    public function destroy(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: cancelar assinatura
    }
}
