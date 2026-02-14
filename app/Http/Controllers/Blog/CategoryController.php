<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    /**
     * Categorias e posts (dados em memória)
     */
    private array $categories = [
        'tech' => [
            ['id' => 1, 'title' => 'Post sobre Laravel'],
            ['id' => 2, 'title' => 'Post sobre Vue.js'],
        ],
        'lifestyle' => [
            ['id' => 3, 'title' => 'Post sobre hábitos saudáveis'],
            ['id' => 4, 'title' => 'Post sobre viagem'],
        ],
    ];

    /**
     * Lista de categorias
     */
    public function index(): Response
    {
        return Inertia::render('Blog/Category/Index', [
            'categories' => array_keys($this->categories),
        ]);
    }

    /**
     * Posts por categoria
     */
    public function show(string $category): Response
    {
        abort_unless(array_key_exists($category, $this->categories), 404);

        return Inertia::render('Blog/Category/Show', [
            'category' => $category,
            'posts' => $this->categories[$category],
        ]);
    }
}
