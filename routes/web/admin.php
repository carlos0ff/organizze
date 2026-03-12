<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

/** Auth Controllers  **/
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

/** App Controller **/
use App\Http\Controllers\App\DashboardController;
use App\Http\Controllers\App\SettingsController;
use App\Http\Controllers\App\AccountController;

/**
 * App - Grupo de rotas do Administração
 * Todas as rotas deste grupo terão prefixo "app"
 */
Route::prefix("panel")->group(function () {

    /** Rota principal do app **/
    Route::get('/', [DashboardController::class, "index"])->name('app.dashboard');

    /** Rota de configurações do app **/
    Route::get('/configuracoes', [SettingsController::class, "index"])->name('app.settings');

    /** Rota de contas do app **/
    Route::get('/contas', [AccountController::class, "index"])->name('app.conta');
});
