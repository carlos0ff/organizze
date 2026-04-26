<?php

declare(strict_types=1);

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;

/** Responsável pelo gerenciamento do perfil do usuário. */
class PerfilController extends Controller
{
    public function index(): \Inertia\Response
    {
        return inertia('App/Perfil/Index');
    }
}
