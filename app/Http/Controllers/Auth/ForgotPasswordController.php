<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    /**
     * Exibe o formulário de recuperação de senha.
     */
    public function index(): \Inertia\Response
    {
        return \Inertia\Inertia::render('Auth/Recuperar');
    }

    /**
     * Envia o link de redefinição de senha para o e-mail informado.
     */
    public function sendResetLinkEmail(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate(['email' => ['required', 'email']]);

        // TODO: enviar e-mail com link de recuperação
    }
}
