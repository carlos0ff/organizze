<?php

namespace App\Http\Controllers\App\Categories;

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



// sail artisan make:controller Blog/Post/ListPostsController --invokable
// sail artisan make:controller Blog/Post/ShowPostController --invokable
// sail artisan make:controller Blog/Post/CreatePostController --invokable
// sail artisan make:controller Blog/Post/UpdatePostController --invokable
// sail artisan make:controller Blog/Post/DeletePostController --invokable
// sail artisan make:controller Blog/Post/PublishPostController --invokable


// sail artisan make:controller Blog/Category/ListCategoriesController --invokable
// sail artisan make:controller Blog/Category/CreateCategoryController --invokable
// sail artisan make:controller Blog/Category/UpdateCategoryController --invokable
// sail artisan make:controller Blog/Category/DeleteCategoryController --invokable

// sail artisan make:controller Blog/Tag/ListTagsController --invokable
// sail artisan make:controller Blog/Tag/CreateTagController --invokable
// sail artisan make:controller Blog/Tag/UpdateTagController --invokable
// sail artisan make:controller Blog/Tag/DeleteTagController --invokable


// sail artisan make:controller Blog/Feed/GetFeedController --invokable

// sail artisan make:controller Panel/DashboardController
// sail artisan make:controller Panel/UserController --resource
// sail artisan make:controller Panel/Blog/PostController --resource
// sail artisan make:controller Panel/Finance/TransactionController --resource
// sail artisan make:controller Panel/ReportController
