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
 * Auth Routes
*/
Route::get('/entrar', function () {
    return Inertia::render('auth/LoginForm');
})->name('auth.login');


Route::get('/app', function () {
    return Inertia::render('app/Dashboard');
})->name('app.dashboard');

