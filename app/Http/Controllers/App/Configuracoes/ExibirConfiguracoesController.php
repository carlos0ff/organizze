<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Configuracoes;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/** Responsável por exibir a página de configurações gerais da conta do usuário. */
class ExibirConfiguracoesController extends Controller
{
    /**
     * Exibe a página principal de configurações com os dados atuais do usuário.
     */
    public function __invoke(Request $request): \Inertia\Response
    {

    }
}
