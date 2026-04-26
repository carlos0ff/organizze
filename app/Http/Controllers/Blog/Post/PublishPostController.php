<?php

namespace App\Http\Controllers\Blog\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/** Responsável por publicar um post rascunho do blog. */
class PublishPostController extends Controller
{
    // Publica um rascunho definindo o status como publicado e registrando a data de publicação
    public function __invoke(Request $request)
    {
        //
    }
}
