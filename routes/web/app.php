<?php

declare(strict_types=1);

use App\Http\Controllers\App\Account\AccountController;
use App\Http\Controllers\App\BankConnectionController;
use App\Http\Controllers\App\DashboardController;
use App\Http\Controllers\App\HelpController;
use App\Http\Controllers\App\PlanController;
use App\Http\Controllers\App\ProfileController;
use App\Http\Controllers\App\SettingsController;
use App\Http\Controllers\App\SpendingLimitController;
use App\Http\Controllers\App\Transaction\TransactionController;
use Illuminate\Support\Facades\Route;

/**
 * Auth Controllers
 * Controllers relacionados à autenticação, como login, registro, recuperação de senha, etc.
 */


/**
 * App - Grupo de rotas com prefixo "App"
 * Todas as rotas dentro deste grupo terão URL iniciando com /app
 **/
Route::prefix("app")->group(function () {

    /** Rota principal do app **/
    Route::get('/', [DashboardController::class, "index"])->name('app.dashboard');

    Route::get('/contas', [AccountController::class, "index"])->name('app.conta');

    /** **/
    Route::get('/cartao', [AccountController::class, "index"])->name('app.cards');

    /** Rota para listar contas **/
    Route::get('/configuracao', [SettingsController::class, "index"])->name('app.settings');

    /** Lançamentos **/
    Route::get('/lancamentos', [TransactionController::class, 'index'])->name('app.lancamentos');

    /** Limites de Gastos **/
    Route::get('/limites-gastos', [SpendingLimitController::class, 'index'])->name('app.limites-gastos');

    /** Conexão Bancária **/
    Route::get('/conexao-bancaria', [BankConnectionController::class, 'index'])->name('app.conexao-bancaria');

    /** **/
    Route::get("/assinatura", [AccountController::class, "signature"])->name('app.signature');

    /** Perfil **/
    Route::get('/perfil', [ProfileController::class, 'index'])->name('app.perfil');

    /** Meu Plano **/
    Route::get('/plano', [PlanController::class, 'index'])->name('app.plano');

    /** Ajuda & Suporte **/
    Route::get('/ajuda', [HelpController::class, 'index'])->name('app.ajuda');
});
