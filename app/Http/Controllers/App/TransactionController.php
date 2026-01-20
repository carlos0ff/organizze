<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TransactionController extends Controller
{

    /**
     * Exibe a lista de transações.
     */
    public function index() : \Inertia\Response
    {
        return inertia('App/Transactions/Index');
    }

    /**
     * Exibe o formulário para criar uma nova transação.
     */
    public function create() : \Inertia\Response
    {
        return inertia('App/Transactions/Create');
    }

    /**
     * Exibe o formulário para editar uma transação existente.
     * @param int $id
     */
    public function edit(int $id) : \Inertia\Response
    {
        return inertia('App/Transactions/Edit', ['id' => $id]);
    }

    /**
     * Armazena uma nova transação.
     */
    public function store(Request $request)
    {
        // Lógica para armazenar a transação
    }

    /**
     * Atualiza uma transação existente.
     * @param int $id
     */
    public function update(Request $request, int $id)
    {
        // Lógica para atualizar a transação
    }

    /**
     * Remove uma transação.
     * @param int $id
     */
    public function destroy(int $id)
    {
        // Lógica para remover a transação
    }
}
