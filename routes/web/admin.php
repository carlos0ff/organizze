<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Painel\DashboardController;
use App\Http\Controllers\Painel\UsuarioController;
use App\Http\Controllers\Painel\RelatorioController;

/**
 * Painel administrativo — prefixo /painel, protegido por auth + admin
 */
Route::prefix('painel')
    ->middleware(['auth', 'admin'])
    ->name('painel.')
    ->group(function () {

        /** Dashboard **/
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        /** Usuários **/
        Route::get('/usuarios',           [UsuarioController::class, 'index'])  ->name('usuarios.index');
        Route::get('/usuarios/{usuario}', [UsuarioController::class, 'show'])   ->name('usuarios.show');
        Route::put('/usuarios/{usuario}', [UsuarioController::class, 'update']) ->name('usuarios.update');
        Route::delete('/usuarios/{usuario}', [UsuarioController::class, 'destroy'])->name('usuarios.destroy');

        /** Relatórios **/
        Route::get('/relatorios', [RelatorioController::class, 'index'])->name('relatorios.index');
    });
