<?php

namespace App\Http\Controllers\App\Support\Ticket;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Reabre um ticket que foi fechado, permitindo continuar o atendimento
class ReopenTicketController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
