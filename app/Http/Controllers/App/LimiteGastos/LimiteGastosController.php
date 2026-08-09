<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\LimiteGastos;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LimiteGastosController extends Controller
{
    /**
     * Lista os limites de gastos configurados pelo usuário.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Limites/Index');
    }

    /**
     * Exibe o formulário de criação de limite.
     */
    public function create(): \Inertia\Response
    {
        return inertia('App/Limites/Create');
    }

    /**
     * Salva um novo limite de gastos.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e salvar limite de gastos
    }

    /**
     * Exibe os detalhes de um limite de gastos.
     */
    public function show(int $id): \Inertia\Response
    {
        return inertia('App/Limites/Show', ['id' => $id]);
    }

    /**
     * Exibe o formulário de edição de limite.
     */
    public function edit(int $id): \Inertia\Response
    {
        return inertia('App/Limites/Edit', ['id' => $id]);
    }

    /**
     * Atualiza um limite de gastos existente.
     */
    public function update(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e atualizar limite
    }

    /**
     * Remove um limite de gastos.
     */
    public function destroy(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: excluir limite
    }
}
