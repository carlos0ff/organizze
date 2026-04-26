<?php

namespace App\Http\Controllers\App\Support\Ticket;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Exibe os detalhes de um ticket específico com todo o histórico de mensagens e status atual
class ShowTicketController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
