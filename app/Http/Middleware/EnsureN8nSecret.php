<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureN8nSecret
{
    public function handle(Request $request, Closure $next): Response
    {
        $secret = config('services.n8n.secret');

        if (empty($secret) || $request->header('X-N8N-Secret') !== $secret) {
            return response()->json([
                'error'   => 'Unauthorized',
                'message' => 'Header X-N8N-Secret inválido ou ausente.',
            ], 401);
        }

        return $next($request);
    }
}
