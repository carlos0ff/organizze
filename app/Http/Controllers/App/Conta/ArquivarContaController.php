<?php

namespace App\Http\Controllers\App\Conta;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

/** Responsável por arquivar (desativar) uma conta financeira. */
class ArquivarContaController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Conta/ArchiveAccount');
    }
}
