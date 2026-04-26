<?php

declare(strict_types=1);

use App\Http\Controllers\App\Conta\ContaController;
use App\Http\Controllers\App\ConexaoBancariaController;
use App\Http\Controllers\App\DashboardController;
//use App\Http\Controllers\App\Suporte\AjudaController;
use App\Http\Controllers\App\PlanoController;
use App\Http\Controllers\App\PerfilController;
use App\Http\Controllers\App\ConfiguracoesController;
use App\Http\Controllers\App\LimiteGastosController;
use App\Http\Controllers\App\Lancamento\LancamentoController;
use Illuminate\Support\Facades\Route;


/**
 * App - Grupo de rotas com prefixo "App"
 * Todas as rotas dentro deste grupo terão URL iniciando com /app
 **/
Route::prefix("app")->group(function () {

    /** Rota principal do app **/
    Route::get('/', [DashboardController::class, "index"])->name('app.dashboard');

    /** **/
    Route::get('/contas', [ContaController::class, "index"])->name('app.conta');

    /** **/
    Route::get('/cartao', [ContaController::class, "index"])->name('app.cards');

    /** Rota para listar configurações **/
    Route::get('/configuracao', [ConfiguracoesController::class, "index"])->name('app.settings');

    /** Lançamentos **/
    Route::get('/lancamentos', [LancamentoController::class, 'index'])->name('app.lancamentos');

    /** Limites de Gastos **/
    Route::get('/limites-gastos', [LimiteGastosController::class, 'index'])->name('app.limites-gastos');

    /** Conexão Bancária **/
    Route::get('/conexao-bancaria', [ConexaoBancariaController::class, 'index'])->name('app.conexao-bancaria');

    /** **/
    Route::get("/assinatura", [ContaController::class, "signature"])->name('app.signature');

    /** Perfil **/
    Route::get('/perfil', [PerfilController::class, 'index'])->name('app.perfil');

    /** Meu Plano **/
    Route::get('/plano', [PlanoController::class, 'index'])->name('app.plano');

    /** Ajuda & Suporte **/
//    Route::get('/ajuda', [AjudaController::class, 'index'])->name('app.ajuda');
});
