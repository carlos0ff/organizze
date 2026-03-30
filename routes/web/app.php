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

    /** **/
    Route::get("/assinatura", [AccountController::class, "signature"])->name('app.signature');
});
