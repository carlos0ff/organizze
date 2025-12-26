<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rules\In;

use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/testes', function () {
    return Inertia::render('Testes');
});

