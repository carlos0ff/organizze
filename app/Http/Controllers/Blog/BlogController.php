<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * Exibe a lista de posts do blog.
     * @return \Inertia\Response
     */
    public function index() : \Inertia\Response
    {
        return inertia('Blog/Index');
    }

    /**
     * Exibe a listagem de artigos.
     */
    public function articles(): \Inertia\Response
    {
        return inertia('Blog/Articles/Index');
    }

    /**
     * Exibe a página de um post.
     */
    public function post(string $slug = ''): \Inertia\Response
    {
        return inertia('Blog/Posts/Show', ['slug' => $slug]);
    }
}
