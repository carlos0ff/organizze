<?php

namespace App\Http\Controllers\App\Suporte\Chamado;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * Lista todos os tickets de suporte do usuário autenticado, com filtro por status (aberto, fechado, em andamento)
*/
class ListarChamadosController extends Controller
{
    public function __invoke(Request $request)
    {
        //
    }
}
