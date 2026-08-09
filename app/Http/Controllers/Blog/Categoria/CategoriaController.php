<?php

declare(strict_types=1);

namespace App\Http\Controllers\Blog\Categoria;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    /**
     * Lista todas as categorias do blog.
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('Blog/Categoria/Index');
    }

    /**
     * Exibe os posts de uma categoria específica.
     *
     * @param string $categoria Slug da categoria
     */
    public function show(string $categoria): \Inertia\Response
    {
        return Inertia::render('Blog/Categoria/Show', [
            'categoria' => $categoria,
        ]);
    }
}
