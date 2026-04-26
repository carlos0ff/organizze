<?php

namespace App\Http\Controllers\App\Suporte\Chamado;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Exibe os detalhes de um ticket específico com todo o histórico de mensagens e status atual
/** Responsável por exibir os detalhes e histórico de um chamado. */
class VisualizarChamadoController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
