<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
    /**
     * Redireciona o usuário para a autenticação via provedor social (Google).
     */
    public function redirectToProvider(): \Illuminate\Http\RedirectResponse
    {
        // TODO: return Socialite::driver('google')->redirect();
    }

    /**
     * Recebe o callback do provedor e autentica o usuário.
     */
    public function handleProviderCallback(): \Illuminate\Http\RedirectResponse
    {
        // TODO: $user = Socialite::driver('google')->user();
    }
}
