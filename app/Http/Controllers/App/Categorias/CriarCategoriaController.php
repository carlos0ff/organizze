<?php

namespace App\Http\Controllers\App\Categorias;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/** Responsável por criar uma nova categoria de transação. */
class CriarCategoriaController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('App/Categories/Create');
    }
}
