<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth\Senha;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecuperarSenhaController extends Controller
{
    /**
     * Exibe o formulário de recuperação de senha.
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('Auth/Recuperar');
    }

    /**
     * Envia o link de redefinição de senha para o e-mail informado.
     */
    public function enviar(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate(['email' => ['required', 'email']]);

        // TODO: enviar e-mail com link de recuperação
    }
}
