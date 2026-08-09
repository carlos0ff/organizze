<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\ConexaoBancaria;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConexaoBancariaController extends Controller
{
    /**
     * Lista as conexões bancárias do usuário.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/ConexaoBancaria/Index');
    }

    /**
     * Exibe o formulário para conectar um banco.
     */
    public function create(): \Inertia\Response
    {
        return inertia('App/ConexaoBancaria/Create');
    }

    /**
     * Salva uma nova conexão bancária.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: criar conexão bancária (Open Finance)
    }

    /**
     * Exibe os detalhes de uma conexão bancária.
     */
    public function show(int $id): \Inertia\Response
    {
        return inertia('App/ConexaoBancaria/Show', ['id' => $id]);
    }

    /**
     * Remove uma conexão bancária.
     */
    public function destroy(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: desconectar banco
    }
}
