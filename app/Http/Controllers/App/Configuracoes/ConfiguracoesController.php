<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Configuracoes;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfiguracoesController extends Controller
{
    /**
     * Exibe a página de configurações do usuário.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Configuracoes/Index');
    }

    /**
     * Atualiza as configurações gerais do usuário.
     */
    public function update(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e atualizar configurações
    }

    /**
     * Altera a senha do usuário autenticado.
     */
    public function alterarSenha(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar senha atual e salvar nova senha
    }

    /**
     * Exclui permanentemente a conta do usuário.
     */
    public function excluirConta(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: confirmar senha e excluir conta
    }
}
