<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Panel\DashboardController;
use App\Http\Controllers\Panel\UserController;
use App\Http\Controllers\Panel\ReportController;

/**
 * Painel administrativo — prefixo /panel, protegido por auth + admin
 */
Route::prefix('panel')
    ->middleware(['auth', 'admin'])
    ->name('panel.')
    ->group(function () {

        /** Dashboard **/
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        /** Usuários **/
        Route::get('/usuarios',           [UserController::class, 'index'])  ->name('users.index');
        Route::get('/usuarios/{user}',    [UserController::class, 'show'])   ->name('users.show');
        Route::put('/usuarios/{user}',    [UserController::class, 'update']) ->name('users.update');
        Route::delete('/usuarios/{user}', [UserController::class, 'destroy'])->name('users.destroy');

        /** Relatórios **/
        Route::get('/relatorios', [ReportController::class, 'index'])->name('reports.index');
    });
