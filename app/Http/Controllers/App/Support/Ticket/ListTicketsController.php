<?php

namespace App\Http\Controllers\App\Support\Ticket;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * Lista todos os tickets de suporte do usuário autenticado, com filtro por status (aberto, fechado, em andamento)
*/
class ListTicketsController extends Controller
{
    public function __invoke(Request $request)
    {
        //
    }
}
