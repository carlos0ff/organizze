<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

/**
 * Auth Controllers
 * Controllers relacionados à autenticação, como login, registro, recuperação de senha, etc.
 */
use App\Http\Controllers\App\DashboardController;
use App\Http\Controllers\App\SettingsController;
use App\Http\Controllers\App\AccountController;
use App\Http\Controllers\App\ReportController;
use App\Http\Controllers\App\SubscriptionController;
use App\Http\Controllers\App\TransactionController;
use App\Http\Controllers\App\BudgetController;
use App\Http\Controllers\App\BankConnectionController;


/**
 * App - Grupo de rotas com prefixo "App"
 * Todas as rotas dentro deste grupo terão URL iniciando com /app
 **/
Route::prefix("app")->group(function () {

    /** Rota principal do app **/
    Route::get('/', [DashboardController::class, "index"])->name('app.dashboard');

    Route::get('/contas', [AccountController::class, "index"])->name('app.conta');

    /** **/
    Route::get('/cards', [AccountController::class, "index"])->name('app.cards');

    /** Rota para listar contas **/
    Route::get('/configuracao', [SettingsController::class, "index"])->name('app.settings');

    /** Assinatura **/
    Route::get('/assinatura', [SubscriptionController::class, 'index'])->name('app.assinatura');

    /** Lançamentos **/
    Route::get('/lancamentos', [TransactionController::class, 'index'])->name('app.lancamentos');

    /** Limites de Gastos **/
    Route::get('/limites', [BudgetController::class, 'index'])->name('app.limites');

    /** Conexão Bancária **/
    Route::get('/conexao-bancaria', [BankConnectionController::class, 'index'])->name('app.conexao-bancaria');

    /** Relatórios **/
    Route::prefix('relatorios')->group(function () {
        Route::get('/mensal',            [ReportController::class, 'mensal'])->name('app.relatorios.mensal');
        Route::get('/anual',             [ReportController::class, 'anual'])->name('app.relatorios.anual');
        Route::get('/categorias',        [ReportController::class, 'categorias'])->name('app.relatorios.categorias');
        Route::get('/receitas-despesas', [ReportController::class, 'receitasDespesas'])->name('app.relatorios.receitas-despesas');
    });

});
