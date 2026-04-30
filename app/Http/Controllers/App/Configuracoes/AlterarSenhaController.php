<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Configuracoes;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

/** Responsável por alterar a senha do usuário autenticado. */
class AlterarSenhaController extends Controller
{
    /**
     * Valida a senha atual e aplica a nova senha ao usuário.
     * A senha é armazenada com hash via cast do modelo User.
     */
    public function __invoke(Request $request): RedirectResponse
    {

    }
}
