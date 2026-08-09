<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Lancamento;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImportacaoController extends Controller
{
    /**
     * Importa lançamentos a partir de um arquivo OFX (Open Financial Exchange).
     */
    public function ofx(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e processar arquivo OFX
    }

    /**
     * Importa lançamentos a partir de uma planilha CSV ou Excel.
     */
    public function planilha(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e processar planilha
    }
}
