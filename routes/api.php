<?php

declare(strict_types=1);

use App\Http\Controllers\Api\N8n\WhatsAppDespesaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Integração n8n → Poupai
|--------------------------------------------------------------------------
|
| Autenticação via header X-N8N-Secret (middleware ensure.n8n.secret).
| Rate limit: 30 requisições por minuto (limiter "n8n").
|
*/
Route::prefix('n8n')->middleware(['throttle:n8n', 'ensure.n8n.secret'])->group(function () {
    Route::post('/webhook', [WhatsAppDespesaController::class, 'store'])->name('api.n8n.webhook');
});
