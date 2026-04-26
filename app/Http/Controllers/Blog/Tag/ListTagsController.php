<?php

namespace App\Http\Controllers\Blog\Tag;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/** Responsável por listar as tags do blog. */
class ListTagsController extends Controller
{
    // Retorna todas as tags disponíveis com a contagem de posts vinculados a cada uma
    public function __invoke(Request $request)
    {
        //
    }
}
