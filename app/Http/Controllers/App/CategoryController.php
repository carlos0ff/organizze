<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Exibe a lista de categorias.
     * @return \Inertia\Response
     */
    public function index() : \Inertia\Response
    {
        return inertia('App/Categories/Index');
    }

    /**
     * Exibe o formulário para criar uma nova categoria.
     * @return \Inertia\Response
     */
    public function create() : \Inertia\Response
    {
        return inertia('App/Categories/Create');
    }

    /**
     * Exibe o formulário para editar uma categoria existente.
     * @param int $id
     * @return \Inertia\Response
     */
    public function edit(int $id) : \Inertia\Response
    {
        return inertia('App/Categories/Edit', ['id' => $id]);
    }

    /**
     *  Armazena uma nova categoria.
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function store(Request $request): void
    {
        // Lógica para armazenar a categoria
    }

    /**
     * Atualiza uma categoria existente.
     * @param int $id
     * @return void
     */
    public function update(Request $request, int $id): void
    {
        // Lógica para atualizar a categoria
    }

    /**
     * Remove uma categoria.
     * @param int $id
     * @return void
     */
    public function destroy(int $id): void
    {
        // Lógica para remover a categoria
    }
}
