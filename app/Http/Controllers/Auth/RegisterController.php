<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Mostra a página de registro.
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        return \Inertia\Inertia::render('Auth/Cadastro');
    }

    public function authenticate(Request $request): \Inertia\Response
    {
        return  "hELL";
    }
}
