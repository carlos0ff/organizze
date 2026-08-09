<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth\Social;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;

class LoginSocialController extends Controller
{
    /**
     * Redireciona o usuário para a autenticação via provedor social (Google).
     */
    public function redirecionar(): \Illuminate\Http\RedirectResponse
    {
        // TODO: return Socialite::driver('google')->redirect();
    }

    /**
     * Recebe o callback do provedor e autentica o usuário.
     */
    public function callback(): \Illuminate\Http\RedirectResponse
    {
        // TODO: $user = Socialite::driver('google')->user();
    }
}
