<?php

namespace App\Services\Blog;

use App\Contracts\Blog\CategoryServiceInterface;
use App\Models\Blog\Categories;
use Illuminate\Support\Collection;

/**
 * Serviço responsável pelas operações de CRUD de categorias do blog.
 *
 * @package App\Services\Blog
 */
class CategoryService implements CategoryServiceInterface
{
    /**
     * Retorna todas as categorias do blog.
     *
     * @return Collection  Coleção de todas as categorias
     */
    public function list(): Collection
    {
        return Categories::all();
    }

    /**
     * Cria uma nova categoria no banco de dados.
     *
     * @param  array       $data  Dados da categoria (nome, slug, descrição)
     * @return Categories         Categoria recém-criada
     */
    public function create(array $data): Categories
    {
        return Categories::create($data);
    }

    /**
     * Atualiza os dados de uma categoria existente.
     *
     * @param  Categories  $category  Categoria a ser atualizada
     * @param  array       $data      Dados a atualizar
     * @return Categories             Categoria atualizada e recarregada do banco
     */
    public function update(Categories $category, array $data): Categories
    {
        $category->update($data);

        return $category->fresh();
    }

    /**
     * Remove uma categoria do banco de dados.
     *
     * @param  Categories  $category  Categoria a ser removida
     * @return void
     */
    public function delete(Categories $category): void
    {
        $category->delete();
    }
}
