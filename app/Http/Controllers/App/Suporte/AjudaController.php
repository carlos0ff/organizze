<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Suporte;

use App\Http\Controllers\Controller;

class AjudaController extends Controller
{
    /**
     * Exibe a central de ajuda.
     */
    public function index(): \Inertia\Response
    {
        return inertia('App/Suporte/Ajuda/Index');
    }
}
