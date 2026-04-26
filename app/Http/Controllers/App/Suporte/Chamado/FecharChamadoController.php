<?php

namespace App\Http\Controllers\App\Suporte\Chamado;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * Fecha um ticket de suporte marcando-o como resolvido pelo usuário
 */
class FecharChamadoController extends Controller
{
    public function __invoke(Request $request, string $ticketId)
    {
        //
    }
}
