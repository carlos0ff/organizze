<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    /**
     * Exibe a página de login.
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('Auth/Entrar');
    }

    /**
     * Processa a tentativa de login do usuário.
     */
    public function authenticate(Request $request): \Illuminate\Http\RedirectResponse
    {
        $validated = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'min:8', 'max:255'],
        ]);

        // TODO: tentar autenticar e redirecionar
    }

    /**
     * Encerra a sessão do usuário autenticado.
     */
    public function logout(Request $request): \Illuminate\Http\RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('auth.login');
    }
}
