<?php

use App\Http\Controllers\Auth\Login\LoginController;
use App\Http\Controllers\Auth\Registro\RegistroController;
use App\Http\Controllers\Auth\Senha\RecuperarSenhaController;
use App\Http\Controllers\Auth\Senha\RedefinirSenhaController;
use App\Http\Controllers\Auth\Social\LoginSocialController;

Route::prefix('auth')->middleware('guest')->group(function () {

    /** Login **/
    Route::get('/entrar',  [LoginController::class, 'index'])->name('auth.login');
    Route::post('/entrar', [LoginController::class, 'authenticate'])->name('auth.authenticate');
    Route::post('/sair',   [LoginController::class, 'logout'])->name('auth.logout')->withoutMiddleware('guest');

    /** Cadastro **/
    Route::get('/cadastro',  [RegistroController::class, 'index'])->name('auth.register');
    Route::post('/cadastro', [RegistroController::class, 'store'])->name('auth.register.store');

    /** Recuperação de senha **/
    Route::get('/recuperar',  [RecuperarSenhaController::class, 'index'])->name('auth.forgot');
    Route::post('/recuperar', [RecuperarSenhaController::class, 'enviar'])->name('auth.forgot.send');

    /** Redefinição de senha **/
    Route::get('/redefinir/{token}', [RedefinirSenhaController::class, 'index'])->name('auth.reset');
    Route::post('/redefinir',        [RedefinirSenhaController::class, 'update'])->name('auth.reset.update');

    /** Login social **/
    Route::get('/social/redirecionar', [LoginSocialController::class, 'redirecionar'])->name('auth.social.redirect');
    Route::get('/social/callback',     [LoginSocialController::class, 'callback'])->name('auth.social.callback');
});
