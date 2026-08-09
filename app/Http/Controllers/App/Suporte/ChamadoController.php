<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Suporte;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChamadoController extends Controller
{
    /**
     * Lista os chamados de suporte do usuário.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Suporte/Chamado/Index');
    }

    /**
     * Exibe o formulário para abertura de chamado.
     */
    public function create(): \Inertia\Response
    {
        return inertia('App/Suporte/Chamado/Create');
    }

    /**
     * Abre um novo chamado de suporte.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e salvar chamado
    }

    /**
     * Exibe os detalhes e histórico de um chamado.
     */
    public function show(int $id): \Inertia\Response
    {
        return inertia('App/Suporte/Chamado/Show', ['id' => $id]);
    }

    /**
     * Registra uma resposta em um chamado aberto.
     */
    public function responder(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e salvar resposta no chamado
    }

    /**
     * Fecha um chamado de suporte.
     */
    public function fechar(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: fechar chamado
    }

    /**
     * Reabre um chamado previamente fechado.
     */
    public function reabrir(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: reabrir chamado
    }

    /**
     * Registra a avaliação do atendimento de um chamado.
     */
    public function avaliar(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: salvar avaliação do chamado
    }
}
