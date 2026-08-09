<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth\Senha;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RedefinirSenhaController extends Controller
{
    /**
     * Exibe o formulário de redefinição de senha.
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('Auth/Redefinir');
    }

    /**
     * Redefine a senha do usuário a partir do token enviado por e-mail.
     */
    public function update(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'token'                 => ['required'],
            'email'                 => ['required', 'email'],
            'password'              => ['required', 'min:8', 'confirmed'],
            'password_confirmation' => ['required'],
        ]);

        // TODO: validar token e redefinir senha
    }
}
