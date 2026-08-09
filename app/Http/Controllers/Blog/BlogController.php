<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;

class BlogController extends Controller
{
    /**
     * Exibe a página inicial do blog.
     */
    public function index(): \Inertia\Response
    {
        return inertia('Blog/Home/Index');
    }

    /**
     * Exibe a listagem de artigos.
     */
    public function articles(): \Inertia\Response
    {
        return inertia('Blog/Articles/Index');
    }

    /**
     * Exibe um post pelo slug.
     *
     * @param string $slug Slug do post
     */
    public function post(string $slug = ''): \Inertia\Response
    {
        return inertia('Blog/Posts/Show', ['slug' => $slug]);
    }
}
