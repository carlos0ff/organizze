<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
    /**
     * Redireciona o usuário para a página de autenticação do Google
     */
    public  function redirectToProvider()
    {

    }

    /**
     * Obtém as informações do usuário do Google e faz o login
     */
    public function handleProviderCallback() 
    {

    }
}
