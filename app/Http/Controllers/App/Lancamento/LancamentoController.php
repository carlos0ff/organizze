<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Lancamento;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LancamentoController extends Controller
{
    /**
     * Lista os lançamentos do usuário.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Lancamentos/Index');
    }

    /**
     * Exibe o formulário de criação de lançamento.
     */
    public function create(): \Inertia\Response
    {
        return inertia('App/Lancamentos/Create');
    }

    /**
     * Salva uma nova despesa.
     */
    public function despesa(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e salvar despesa
    }

    /**
     * Salva uma nova receita.
     */
    public function receita(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e salvar receita
    }

    /**
     * Salva uma nova transferência entre contas.
     */
    public function transferencia(Request $request): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e salvar transferência
    }

    /**
     * Exibe os detalhes de um lançamento.
     */
    public function show(int $id): \Inertia\Response
    {
        return inertia('App/Lancamentos/Show', ['id' => $id]);
    }

    /**
     * Exibe o formulário de edição de lançamento.
     */
    public function edit(int $id): \Inertia\Response
    {
        return inertia('App/Lancamentos/Edit', ['id' => $id]);
    }

    /**
     * Atualiza um lançamento existente.
     */
    public function update(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: validar e atualizar lançamento
    }

    /**
     * Remove um lançamento.
     */
    public function destroy(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: excluir lançamento
    }

    /**
     * Altera o status de um lançamento (pago/pendente/ignorado).
     */
    public function alterarStatus(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: atualizar status do lançamento
    }

    /**
     * Concilia um lançamento com o extrato bancário.
     */
    public function conciliar(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: conciliar lançamento
    }

    /**
     * Copia um lançamento existente.
     */
    public function copiar(int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: copiar lançamento
    }

    /**
     * Exporta os lançamentos filtrados em CSV/Excel.
     */
    public function exportar(Request $request): \Symfony\Component\HttpFoundation\StreamedResponse
    {
        // TODO: gerar e exportar lançamentos
    }

    /**
     * Exibe a página de impressão dos lançamentos.
     */
    public function imprimir(Request $request): \Inertia\Response
    {
        return inertia('App/Lancamentos/Imprimir');
    }
}
