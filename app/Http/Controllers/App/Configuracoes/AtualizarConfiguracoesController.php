<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Configuracoes;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

/** Responsável por atualizar as informações pessoais do usuário nas configurações. */
class AtualizarConfiguracoesController extends Controller
{
    /**
     * Valida e persiste as alterações de nome e e-mail do usuário.
     * Invalida a verificação de e-mail quando o endereço é alterado.
     */
    public function __invoke(Request $request): RedirectResponse
    {

    }
}
