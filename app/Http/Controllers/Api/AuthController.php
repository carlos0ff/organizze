<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
{
    $credentials = $request->only('email', 'password');

    if (!Auth::attempt($credentials)) {
        return response()->json([
            'message' => 'Credenciais inválidas'
        ], 401);
    }

    return response()->json([
        'message' => 'Login realizado com sucesso',
        'user' => Auth::user()
    ]);
}
}