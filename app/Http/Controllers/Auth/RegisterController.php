<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Exibe o formulário de cadastro.
     */
    public function index(): \Inertia\Response
    {
        return \Inertia\Inertia::render('Auth/Cadastro');
    }

    /**
     * Registra um novo usuário.
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'email'                 => ['required', 'email', 'unique:users,email'],
            'password'              => ['required', 'min:8', 'confirmed'],
            'password_confirmation' => ['required'],
        ]);

        // TODO: criar usuário e autenticar
    }
}
