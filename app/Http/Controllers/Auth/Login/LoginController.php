<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth\Login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
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
     *
     * @throws ValidationException
     */
    public function authenticate(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $this->verificarLimiteDeRequisicoes($request);

        if (! Auth::attempt($request->only('email', 'password'), $request->boolean('remember'))) {
            RateLimiter::hit($this->chaveThrottle($request));

            throw ValidationException::withMessages([
                'email' => __('auth.failed'),
            ]);
        }

        RateLimiter::clear($this->chaveThrottle($request));

        $request->session()->regenerate();

        return redirect()->intended(route('app.dashboard'));
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

    /**
     * Garante que o usuário não excedeu o limite de tentativas de login.
     *
     * @throws ValidationException
     */
    private function verificarLimiteDeRequisicoes(Request $request): void
    {
        if (! RateLimiter::tooManyAttempts($this->chaveThrottle($request), 5)) {
            return;
        }

        $segundos = RateLimiter::availableIn($this->chaveThrottle($request));

        throw ValidationException::withMessages([
            'email' => __('auth.throttle', [
                'seconds' => $segundos,
                'minutes' => ceil($segundos / 60),
            ]),
        ]);
    }

    /**
     * Gera a chave única de throttle para o usuário/IP.
     */
    private function chaveThrottle(Request $request): string
    {
        return Str::transliterate(Str::lower($request->input('email')) . '|' . $request->ip());
    }
}
