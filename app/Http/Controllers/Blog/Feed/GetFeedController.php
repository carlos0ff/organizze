<?php

namespace App\Http\Controllers\Blog\Feed;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/** Responsável por gerar o feed RSS/Atom do blog. */
class GetFeedController extends Controller
{
    // Gera e retorna o feed RSS/Atom com os posts publicados mais recentes do blog
    public function __invoke(Request $request)
    {
        //
    }
}
