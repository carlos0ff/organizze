<?php

namespace App\Http\Controllers\Blog\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShowPostController extends Controller
{
    // Exibe o conteúdo completo de um post publicado pelo slug, com categoria, tags e posts relacionados
    public function __invoke(Request $request)
    {
        return inertia('Blog/Posts/Show');
    }
}
