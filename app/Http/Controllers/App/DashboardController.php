<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Exibe o painel de controle.
     */
    public function index() : \Inertia\Response
    {
        return inertia('App/Dashboard/Index');
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
    public function profile():  \Inertia\Response
    {
        // Lógica para exibir o perfil do usuário

        return inertia('App/Dashboard/Perfil/Index');
    }

}
