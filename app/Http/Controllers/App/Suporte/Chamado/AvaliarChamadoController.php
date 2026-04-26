<?php

namespace App\Http\Controllers\App\Suporte\Chamado;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Registra a avaliação de satisfação do usuário após o encerramento de um ticket
/** Responsável por registrar a avaliação do atendimento de um chamado. */
class AvaliarChamadoController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
