<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/** Responsável por redefinir a senha do usuário via token. */
class ResetPasswordController extends Controller
{
    /**
     * Mostra a página de redefinição de senha.
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        return \Inertia\Inertia::render('auth/ResetPassword');
    }

    /**
     * Processa a redefinição de senha.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request)
    {
        // Lógica para redefinir a senha do usuário
    }

    /**
     * Valida o token de redefinição de senha.
     * @param  string  $token
     * @return bool
     */
    protected function validateToken(string $token): bool
    {
        // Lógica para validar o token
    }

    

}
