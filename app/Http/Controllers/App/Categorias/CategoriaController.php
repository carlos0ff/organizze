<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Categorias;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Lista todas as categorias do usuário.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Categorias/Index');
    }

    /**
     * Exibe o formulário de criação de categoria.
     */
    public function create(): \Inertia\Response
    {
        return inertia('App/Categorias/Create');
    }

    /**
     * Salva uma nova categoria.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e salvar categoria
    }

    /**
     * Exibe os detalhes de uma categoria.
     */
    public function show(int $id): \Inertia\Response
    {
        return inertia('App/Categorias/Show', ['id' => $id]);
    }

    /**
     * Exibe o formulário de edição de categoria.
     */
    public function edit(int $id): \Inertia\Response
    {
        return inertia('App/Categorias/Edit', ['id' => $id]);
    }

    /**
     * Atualiza uma categoria existente.
     */
    public function update(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e atualizar categoria
    }

    /**
     * Remove uma categoria.
     */
    public function destroy(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: excluir categoria
    }
}
