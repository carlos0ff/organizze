<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Validation\Rules\In;
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
    return Inertia::render('auth/Login');
})->name('auth.login');

Route::get('/cadastro', function(){
    return Inertia::render('auth/Register');
})->name('auth.register');

Route::get('/recuperar', function(){
    return Inertia::render('auth/ForgotPassword');
})->name('auth.forget');


/**
 * App
 */
Route::get('/app', function () {
    return Inertia::render('app/Dashboard');
})->name('app.dashboard');

