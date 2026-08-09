<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Perfil;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PerfilController extends Controller
{
    /**
     * Exibe o perfil do usuário autenticado.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Perfil/Index');
    }

    /**
     * Exibe o formulário de edição do perfil.
     */
    public function edit(): \Inertia\Response
    {
        return inertia('App/Perfil/Edit');
    }

    /**
     * Atualiza os dados do perfil do usuário.
     */
    public function update(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e atualizar perfil
    }
}
