<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Suporte;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    /**
     * Lista todas as perguntas frequentes.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Suporte/Faq/Index');
    }

    /**
     * Exibe os detalhes de uma pergunta frequente.
     */
    public function show(int $id): \Inertia\Response
    {
        return inertia('App/Suporte/Faq/Show', ['id' => $id]);
    }

    /**
     * Busca perguntas frequentes por termo.
     */
    public function buscar(Request $request): \Inertia\Response
    {
        return inertia('App/Suporte/Faq/Index');
    }
}
