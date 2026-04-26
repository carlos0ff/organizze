<?php

namespace App\Http\Controllers\App\Suporte\Chamado;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Adiciona uma nova mensagem/resposta a um ticket de suporte existente
/** Responsável por registrar uma resposta em um chamado de suporte. */
class ResponderChamadoController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
