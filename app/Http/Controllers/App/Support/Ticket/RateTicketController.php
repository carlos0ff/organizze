<?php

namespace App\Http\Controllers\App\Support\Ticket;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Registra a avaliação de satisfação do usuário após o encerramento de um ticket
class RateTicketController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
