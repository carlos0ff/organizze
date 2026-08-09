<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Relatorio;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RelatorioController extends Controller
{
    /**
     * Exibe a página inicial de relatórios.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Relatorio/Index');
    }

    /**
     * Exibe o relatório de gastos por categoria.
     */
    public function categorias(): \Inertia\Response
    {
        return inertia('App/Relatorio/Categorias');
    }

    /**
     * Exibe o relatório de saldo por conta.
     */
    public function contas(): \Inertia\Response
    {
        return inertia('App/Relatorio/Contas');
    }

    /**
     * Exibe o relatório de receitas vs despesas.
     */
    public function receitaVsDespesa(): \Inertia\Response
    {
        return inertia('App/Relatorio/ReceitaVsDespesa');
    }

    /**
     * Exibe o relatório de gastos por tag.
     */
    public function tags(): \Inertia\Response
    {
        return inertia('App/Relatorio/Tags');
    }

    /**
     * Gera e baixa o relatório em PDF ou CSV.
     */
    public function baixar(Request $request): \Symfony\Component\HttpFoundation\StreamedResponse
    {
        // TODO: gerar e retornar arquivo de relatório
    }

    /**
     * Exibe a página de impressão do relatório.
     */
    public function imprimir(Request $request): \Inertia\Response
    {
        return inertia('App/Relatorio/Imprimir');
    }
}
