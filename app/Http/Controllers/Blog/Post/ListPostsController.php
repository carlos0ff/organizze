<?php

namespace App\Http\Controllers\Blog\Post;

use App\Http\Controllers\Controller;
use App\Models\Blog\Post;
use Illuminate\Http\Request;

use Inertia\Inertia;

/** Responsável por listar os posts publicados do blog. */
class ListPostsController extends Controller
{
    // Lista todos os posts com paginação, filtro por categoria/tag/status e ordenação por data de publicação
    public function __invoke(Request $request)
    {

        // $post = Post::all();

        return inertia('Blog/Postagens/List');
    }
}
