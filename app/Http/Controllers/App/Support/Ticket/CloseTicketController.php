<?php

namespace App\Http\Controllers\App\Support\Ticket;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * Fecha um ticket de suporte marcando-o como resolvido pelo usuário
 */
class CloseTicketController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
