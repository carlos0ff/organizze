<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\CartaoCredito;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FaturaController extends Controller
{
    /**
     * Lista as faturas de um cartão.
     */
    public function index(int $cartaoId): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Fatura/Index', ['cartaoId' => $cartaoId]);
    }

    /**
     * Exibe os detalhes de uma fatura.
     */
    public function show(int $id): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Fatura/Show', ['id' => $id]);
    }

    /**
     * Registra o pagamento de uma fatura.
     *
     * @param int $id ID da fatura
     */
    public function pagar(Request $request, int $id): \Illuminate\Http\RedirectResponse
    {
        // TODO: registrar pagamento da fatura
    }

    /**
     * Exporta a fatura em formato PDF ou CSV.
     *
     * @param int $id ID da fatura
     */
    public function exportar(int $id): \Symfony\Component\HttpFoundation\StreamedResponse
    {
        // TODO: gerar e exportar fatura
    }

    /**
     * Exibe a página de impressão da fatura.
     *
     * @param int $id ID da fatura
     */
    public function imprimir(int $id): \Inertia\Response
    {
        return inertia('App/CartaoCredito/Fatura/Imprimir', ['id' => $id]);
    }
}
