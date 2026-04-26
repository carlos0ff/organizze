<?php

namespace App\Http\Controllers\App\Conta;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

/** Responsável por exibir e gerenciar as contas financeiras do usuário. */
class ContaController extends Controller
{
    /**
     * Exibe os detalhes da conta do usuário.
     * @return \Inertia\Response
     */
    public function index() : \Inertia\Response
    {
        return Inertia::render('App/Cards/Index');
    }

    /**
     * Exibe o formulário para criar uma nova conta.
     * @return \Inertia\Response
     */
    public function create() : \Inertia\Response
    {
        // Lógica para exibir o formulário de criação de conta
    }

    /**
     * Armazena uma nova conta.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        // Lógica para armazenar a nova conta
    }

    /**
     * Exibe os detalhes de uma conta específica.
     * @param int $id
     * @return \Inertia\Response
     */
    public function show(int $id) : \Inertia\Response
    {
        // Lógica para exibir os detalhes da conta
    }

    /**
     * Exibe o formulário para editar os detalhes da conta.
     * @return \Inertia\Response
     */
    public function edit() : \Inertia\Response
    {
        return Inertia::render('App/Conta/Edit');
    }

    /**
     * Atualiza os detalhes da conta do usuário.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function signature(): \Inertia\Response
    {
        // PROVISORIO

        return Inertia::render('App/Signature/Index');
    }
}
