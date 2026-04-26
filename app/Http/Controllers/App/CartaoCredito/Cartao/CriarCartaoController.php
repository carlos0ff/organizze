<?php

namespace App\Http\Controllers\App\CartaoCredito\Cartao;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/** Responsável por criar um novo cartão de crédito. */
class CriarCartaoController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render();

    }
}

