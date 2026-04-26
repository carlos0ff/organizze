<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

use Inertia\Inertia;

/** Responsável pela autenticação do usuário (login e logout). */
class LoginController extends Controller
{
    /**
     * Mostra a página de login.
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('Auth/Entrar');
    }

    /**
     * Processa a tentativa de login do usuário.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function authenticate(Request $request): \Illuminate\Http\RedirectResponse
    {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'min:6'],
        ]);

        if (!Auth::attempt($credentials, $request->boolean('remember'))) {
            return back()->withErrors([
                'email' => 'E-mail ou senha incorretos.',
            ])->onlyInput('email');
        }

        $request->session()->regenerate();

        return redirect()->intended('/app');
    }

    /**
     * Desloga o usuário autenticado.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request): \Illuminate\Http\RedirectResponse
    {
        // Lógica para deslogar o usuário
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect("/");
    }

    /**
     * Valida as credenciais do usuário.
     * @param  array  $credentials
     * @return bool
     */
    protected function validateCredentials(array $credentials): bool
    {
 

        
    }
}
