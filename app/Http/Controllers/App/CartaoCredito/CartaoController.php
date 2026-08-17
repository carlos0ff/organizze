<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\CartaoCredito;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartaoController extends Controller
{
    /**
     * Lista todos os cartões de crédito do usuário.
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('App/CartaoCredito/Index');
    }

    /**
     * Exibe o formulário de criação de cartão.
     */
    public function create(): \Inertia\Response
    {
        return Inertia::render('App/CartaoCredito/Create');
    }

    /**
     * Salva um novo cartão de crédito.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e salvar cartão
    }

    /**
     * Exibe os detalhes de um cartão específico.
     */
    public function show(int $id): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Show', ['id' => $id]);
    }

    /**
     * Exibe o formulário de edição do cartão.
     */
    public function edit(int $id): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Edit', ['id' => $id]);
    }

    /**
     * Atualiza os dados de um cartão.
     */
    public function update(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e atualizar cartão
    }

    /**
     * Remove um cartão de crédito.
     */
    public function destroy(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: excluir cartão
    }

    /**
     * Arquiva um cartão de crédito.
     */
    public function arquivar(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: arquivar cartão
    }

    /**
     * Desarquiva um cartão de crédito.
     */
    public function desarquivar(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: desarquivar cartão
    }
}
