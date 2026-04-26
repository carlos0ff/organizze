<?php

/** Auth Controllers  **/
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

/**
 * Auth Routes - Grupo de rotas de autenticação
 * Todas as rotas deste grupo terão prefixo "auth"
*/
Route::prefix('auth')->middleware('guest')->group(function(){

    /**  Rota de login **/
    Route::get('/entrar', [LoginController::class, "index"])->name('auth.login');
    Route::post('/entrar', [LoginController::class, "authenticate"])->name('auth.login');

    /** Rota de cadastro de usuário **/
    Route::get('/cadastro', [RegisterController::class, "index"])->name('auth.register');
    Route::post('/cadastro', [RegisterController::class, "authenticate"])->name('auth.register');

    /** Rota de recuperação de senha **/
    Route::get('/recuperar', [ForgotPasswordController::class, "index"])->name('auth.forget');
    Route::get('/recuperar', [ForgotPasswordController::class, "index"])->name('auth.forget');
});

