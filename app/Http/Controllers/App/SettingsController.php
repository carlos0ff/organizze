<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    /**
     * Exibe as configurações do usuário.
     */
    public function index() : \Inertia\Response
    {
        return inertia('App/Settings/Index');
    }

    /**
     * Atualiza as configurações do usuário.
     */
    public function update(Request $request){
        // Lógica para atualizar as configurações
    }

    /**
     * Redefine a senha do usuário.
     */
    public function changePassword(Request $request){
        // Lógica para redefinir a senha
    }

    /**
     * Configurações de notificações.
     *
     */
    public function notifications() : \Inertia\Response
    {
        return inertia('App/Settings/Notifications');
    }

    /**
     * Configurações de privacidade.
     */
    public function privacy() : \Inertia\Response
    {
        return inertia('App/Settings/Privacy');
    }

    /**
     * Exclui a conta do usuário.
     */
    public function deleteAccount(Request $request)
    {
        // Lógica para excluir a conta do usuário
    }

}
