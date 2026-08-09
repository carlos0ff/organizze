<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

/**
 * Rotas administrativas (painel interno)
 * Protegidas por auth + role admin
 */
Route::prefix('panel')->middleware(['auth'])->group(function () {

    /** Rota principal do painel **/
    Route::get('/', function () {
        return redirect()->route('app.dashboard');
    })->name('admin.panel');
});
