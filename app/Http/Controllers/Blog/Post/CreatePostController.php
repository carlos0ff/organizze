<?php

namespace App\Http\Controllers\Blog\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/** Responsável por criar um novo post no blog. */
class CreatePostController extends Controller
{
    // Valida e persiste um novo post com título, slug, conteúdo, categoria e tags; salva como rascunho por padrão
    public function __invoke(Request $request)
    {
        //
    }
}
