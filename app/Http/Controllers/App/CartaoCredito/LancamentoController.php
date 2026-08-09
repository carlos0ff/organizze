<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\CartaoCredito;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LancamentoController extends Controller
{
    /**
     * Lista os lançamentos de um cartão.
     */
    public function index(int $cartaoId): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Lancamento/Index', ['cartaoId' => $cartaoId]);
    }

    /**
     * Exibe o formulário de criação de lançamento no cartão.
     */
    public function create(): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Lancamento/Create');
    }

    /**
     * Salva um novo lançamento no cartão.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e salvar lançamento
    }

    /**
     * Exibe os detalhes de um lançamento.
     */
    public function show(int $id): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Lancamento/Show', ['id' => $id]);
    }

    /**
     * Exibe o formulário de edição de lançamento.
     */
    public function edit(int $id): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Lancamento/Edit', ['id' => $id]);
    }

    /**
     * Atualiza um lançamento do cartão.
     */
    public function update(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e atualizar lançamento
    }

    /**
     * Remove um lançamento do cartão.
     */
    public function destroy(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: excluir lançamento
    }

    /**
     * Duplica um lançamento existente.
     */
    public function duplicar(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: duplicar lançamento
    }

    /**
     * Filtra lançamentos por critérios.
     */
    public function filtrar(Request $request): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Lancamento/Index');
    }

    /**
     * Move um lançamento avulso para uma fatura.
     */
    public function moverParaFatura(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: mover lançamento para fatura
    }
}
