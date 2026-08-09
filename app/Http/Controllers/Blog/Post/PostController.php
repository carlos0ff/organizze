<?php

declare(strict_types=1);

namespace App\Http\Controllers\Blog\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Lista todos os posts publicados.
     */
    public function index(): \Inertia\Response
    {
        return inertia('Blog/Posts/Index');
    }

    /**
     * Exibe o formulário de criação de post.
     */
    public function create(): \Inertia\Response
    {
        return inertia('Blog/Posts/Create');
    }

    /**
     * Salva um novo post.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'title'   => ['required', 'string', 'max:255'],
            'slug'    => ['required', 'string', 'unique:posts,slug'],
            'content' => ['required', 'string'],
        ]);

        // TODO: salvar post
    }

    /**
     * Exibe um post específico.
     */
    public function show(Post $post): \Inertia\Response
    {
        return inertia('Blog/Posts/Show', ['post' => $post]);
    }

    /**
     * Exibe o formulário de edição de post.
     */
    public function edit(Post $post): \Inertia\Response
    {
        return inertia('Blog/Posts/Edit', ['post' => $post]);
    }

    /**
     * Atualiza um post existente.
     */
    public function update(Request $request, Post $post): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'title'   => ['required', 'string', 'max:255'],
            'content' => ['required', 'string'],
        ]);

        // TODO: atualizar post
    }

    /**
     * Remove um post.
     */
    public function destroy(Post $post): \Illuminate\Http\RedirectResponse
    {
        // TODO: excluir post
    }
}
