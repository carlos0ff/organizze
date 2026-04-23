<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TransactionController;
use App\Http\Controllers\Api\SpendingLimitController;

/**
 * Auth
 */
Route::post('/auth', [AuthController::class, 'login'])->name("api.auth");

/**
 * Transactions
 */
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('transactions', TransactionController::class);
    Route::apiResource('spending-limits', SpendingLimitController::class)->except(['show']);
});