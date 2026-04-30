<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Configuracoes;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

/** Responsável por encerrar permanentemente a conta do usuário autenticado. */
class ExcluirContaController extends Controller
{
    /**
     * Confirma a senha, encerra a sessão e exclui o registro do usuário.
     * A operação é irreversível — todos os dados vinculados são removidos via cascade.
     */
    public function __invoke(Request $request): RedirectResponse
    {

    }
}
