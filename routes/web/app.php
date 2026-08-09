<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\App\CartaoCredito\CartaoController;
use App\Http\Controllers\App\Categorias\CategoriaController;
use App\Http\Controllers\App\Configuracoes\ConfiguracoesController;
use App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController;
use App\Http\Controllers\App\Conta\ContaController;
use App\Http\Controllers\App\Dashboard\DashboardController;
use App\Http\Controllers\App\Lancamento\LancamentoController;
use App\Http\Controllers\App\LimiteGastos\LimiteGastosController;
use App\Http\Controllers\App\Perfil\PerfilController;
use App\Http\Controllers\App\Plano\PlanoController;
use App\Http\Controllers\App\Relatorio\RelatorioController;
use App\Http\Controllers\App\Suporte\AjudaController;
use App\Http\Controllers\App\Suporte\ChamadoController;

Route::prefix('app')->middleware('auth')->group(function () {

    /** Dashboard **/
    Route::get('/', [DashboardController::class, 'index'])->name('app.dashboard');
    Route::get('/stats', [DashboardController::class, 'stats'])->name('app.dashboard.stats');

    /** Contas **/
    Route::get('/contas', [ContaController::class, 'index'])->name('app.contas');
    Route::get('/contas/criar', [ContaController::class, 'create'])->name('app.contas.create');
    Route::post('/contas', [ContaController::class, 'store'])->name('app.contas.store');
    Route::get('/contas/{id}', [ContaController::class, 'show'])->name('app.contas.show');
    Route::get('/contas/{id}/editar', [ContaController::class, 'edit'])->name('app.contas.edit');
    Route::put('/contas/{id}', [ContaController::class, 'update'])->name('app.contas.update');
    Route::delete('/contas/{id}', [ContaController::class, 'destroy'])->name('app.contas.destroy');
    Route::patch('/contas/{id}/arquivar', [ContaController::class, 'arquivar'])->name('app.contas.arquivar');
    Route::patch('/contas/{id}/desarquivar', [ContaController::class, 'desarquivar'])->name('app.contas.desarquivar');

    /** Lançamentos **/
    Route::get('/lancamentos', [LancamentoController::class, 'index'])->name('app.lancamentos');
    Route::get('/lancamentos/criar', [LancamentoController::class, 'create'])->name('app.lancamentos.create');
    Route::post('/lancamentos/despesa', [LancamentoController::class, 'despesa'])->name('app.lancamentos.despesa');
    Route::post('/lancamentos/receita', [LancamentoController::class, 'receita'])->name('app.lancamentos.receita');
    Route::post('/lancamentos/transferencia', [LancamentoController::class, 'transferencia'])->name('app.lancamentos.transferencia');
    Route::get('/lancamentos/{id}', [LancamentoController::class, 'show'])->name('app.lancamentos.show');
    Route::get('/lancamentos/{id}/editar', [LancamentoController::class, 'edit'])->name('app.lancamentos.edit');
    Route::put('/lancamentos/{id}', [LancamentoController::class, 'update'])->name('app.lancamentos.update');
    Route::delete('/lancamentos/{id}', [LancamentoController::class, 'destroy'])->name('app.lancamentos.destroy');
    Route::patch('/lancamentos/{id}/status', [LancamentoController::class, 'alterarStatus'])->name('app.lancamentos.status');
    Route::patch('/lancamentos/{id}/conciliar', [LancamentoController::class, 'conciliar'])->name('app.lancamentos.conciliar');
    Route::post('/lancamentos/{id}/copiar', [LancamentoController::class, 'copiar'])->name('app.lancamentos.copiar');

    /** Cartão de Crédito **/
    Route::get('/cartoes', [CartaoController::class, 'index'])->name('app.cartoes');
    Route::get('/cartoes/criar', [CartaoController::class, 'create'])->name('app.cartoes.create');
    Route::post('/cartoes', [CartaoController::class, 'store'])->name('app.cartoes.store');
    Route::get('/cartoes/{id}', [CartaoController::class, 'show'])->name('app.cartoes.show');
    Route::get('/cartoes/{id}/editar', [CartaoController::class, 'edit'])->name('app.cartoes.edit');
    Route::put('/cartoes/{id}', [CartaoController::class, 'update'])->name('app.cartoes.update');
    Route::delete('/cartoes/{id}', [CartaoController::class, 'destroy'])->name('app.cartoes.destroy');
    Route::patch('/cartoes/{id}/arquivar', [CartaoController::class, 'arquivar'])->name('app.cartoes.arquivar');
    Route::patch('/cartoes/{id}/desarquivar', [CartaoController::class, 'desarquivar'])->name('app.cartoes.desarquivar');

    /** Categorias **/
    Route::get('/categorias', [CategoriaController::class, 'index'])->name('app.categorias');
    Route::post('/categorias', [CategoriaController::class, 'store'])->name('app.categorias.store');
    Route::put('/categorias/{id}', [CategoriaController::class, 'update'])->name('app.categorias.update');
    Route::delete('/categorias/{id}', [CategoriaController::class, 'destroy'])->name('app.categorias.destroy');

    /** Relatórios **/
    Route::prefix('relatorios')->name('app.relatorios.')->group(function () {
        Route::get('/', [RelatorioController::class, 'index'])->name('index');
        Route::get('/categorias', [RelatorioController::class, 'categorias'])->name('categorias');
        Route::get('/contas', [RelatorioController::class, 'contas'])->name('contas');
        Route::get('/receita-vs-despesa', [RelatorioController::class, 'receitaVsDespesa'])->name('receita-vs-despesa');
        Route::get('/tags', [RelatorioController::class, 'tags'])->name('tags');
        Route::get('/imprimir', [RelatorioController::class, 'imprimir'])->name('imprimir');
        Route::get('/baixar', [RelatorioController::class, 'baixar'])->name('baixar');
    });

    /** Limites de Gastos **/
    Route::get('/limites', [LimiteGastosController::class, 'index'])->name('app.limites');
    Route::post('/limites', [LimiteGastosController::class, 'store'])->name('app.limites.store');
    Route::put('/limites/{id}', [LimiteGastosController::class, 'update'])->name('app.limites.update');
    Route::delete('/limites/{id}', [LimiteGastosController::class, 'destroy'])->name('app.limites.destroy');

    /** Perfil **/
    Route::get('/perfil', [PerfilController::class, 'index'])->name('app.perfil');
    Route::get('/perfil/editar', [PerfilController::class, 'edit'])->name('app.perfil.edit');
    Route::put('/perfil', [PerfilController::class, 'update'])->name('app.perfil.update');

    /** Configurações **/
    Route::get('/configuracoes', [ConfiguracoesController::class, 'index'])->name('app.configuracoes');
    Route::put('/configuracoes', [ConfiguracoesController::class, 'update'])->name('app.configuracoes.update');
    Route::put('/configuracoes/senha', [ConfiguracoesController::class, 'alterarSenha'])->name('app.configuracoes.senha');
    Route::delete('/configuracoes/conta', [ConfiguracoesController::class, 'excluirConta'])->name('app.configuracoes.excluir');

    /** Conexão Bancária **/
    Route::get('/conexao-bancaria', [ConexaoBancariaController::class, 'index'])->name('app.conexao-bancaria');
    Route::post('/conexao-bancaria', [ConexaoBancariaController::class, 'store'])->name('app.conexao-bancaria.store');
    Route::delete('/conexao-bancaria/{id}', [ConexaoBancariaController::class, 'destroy'])->name('app.conexao-bancaria.destroy');

    /** Plano **/
    Route::get('/plano', [PlanoController::class, 'index'])->name('app.plano');
    Route::post('/plano', [PlanoController::class, 'store'])->name('app.plano.store');
    Route::delete('/plano', [PlanoController::class, 'destroy'])->name('app.plano.cancelar');

    /** Suporte **/
    Route::get('/ajuda', [AjudaController::class, 'index'])->name('app.ajuda');
    Route::get('/chamados', [ChamadoController::class, 'index'])->name('app.chamados');
    Route::post('/chamados', [ChamadoController::class, 'store'])->name('app.chamados.store');
    Route::get('/chamados/{id}', [ChamadoController::class, 'show'])->name('app.chamados.show');
    Route::post('/chamados/{id}/responder', [ChamadoController::class, 'responder'])->name('app.chamados.responder');
    Route::patch('/chamados/{id}/fechar', [ChamadoController::class, 'fechar'])->name('app.chamados.fechar');
    Route::patch('/chamados/{id}/reabrir', [ChamadoController::class, 'reabrir'])->name('app.chamados.reabrir');
    Route::post('/chamados/{id}/avaliar', [ChamadoController::class, 'avaliar'])->name('app.chamados.avaliar');
});
