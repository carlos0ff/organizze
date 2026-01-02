<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rules\In;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Cache\Console\ForgetCommand;
use Inertia\Inertia;

/**
 * Web Route
 */
Route::get('/', function () {
    return Inertia::render('Testes');
});

/**
 * Testes Route
 */
Route::get('/teste', function () {
    return Inertia::render('Testes');
});

/**
 * Authentication Routes
 */
Route::middleware(['guest'])->group(function () {
    /**
     * Login
     */
    Route::get('/entrar', [LoginController::class, 'index'])->name('auth.login');
    Route::post('/entrar', [LoginController::class, 'store'])->name('auth.login.store');

    /**
     * Cadastro
     */
    // Route::get('/cadastrar', [RegisterController::class, 'create'])->name('auth.register');
    // Route::post('/cadastar', [RegisterController::class, 'store'])->name('auth.register.store');

    /**
     * Recuperação de Senha | Esqueci a Senha
     */
    // Route::get('/recuperar-senha', [ForgetPasswordController::class, 'update'])->name('auth.password');
    // Rout e::post('/recuperar-senha', [ForgetPasswordController::class, 'store'])->name('auth.password.email');
});

Route::get('/entrar', function () {
    return Inertia::render('auth/LoginForm');
})->name('auth.login');

Route::get('/cadastar', function () {
    return Inertia::render('auth/RegisterForm');
})->name('auth.register');

