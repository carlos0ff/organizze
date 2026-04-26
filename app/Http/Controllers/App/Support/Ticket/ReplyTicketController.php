<?php

namespace App\Http\Controllers\App\Support\Ticket;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Adiciona uma nova mensagem/resposta a um ticket de suporte existente
class ReplyTicketController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
