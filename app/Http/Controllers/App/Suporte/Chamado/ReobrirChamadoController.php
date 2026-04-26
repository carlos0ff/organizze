<?php

namespace App\Http\Controllers\App\Suporte\Chamado;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Reabre um ticket que foi fechado, permitindo continuar o atendimento
/** Responsável por reabrir um chamado de suporte encerrado. */
class ReobrirChamadoController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
