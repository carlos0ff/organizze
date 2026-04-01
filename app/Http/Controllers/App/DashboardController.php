<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Exibe o painel de controle.
     */
    public function index() : \Inertia\Response
    {
        return Inertia::render('App/Dashboard/Index');
    }

    /**
     * Exibe as estatísticas do usuário.
     */
    public function stats() : \Inertia\Response
    {
        return inertia('App/Dashboard');
    }

    /**
     * Exibe as notificações do usuário.
     */
    public function notifications()
    {
        // Lógica para obter notificações do usuário
    }

    /**
     * Exibe o perfil do usuário.
     */
    public function profile()
    {
        // Lógica para exibir o perfil do usuário
    }

}

