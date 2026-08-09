<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class LandingController extends Controller
{
    /**
     * Exibe a landing page principal.
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('Web/Index');
    }

    /**
     * Exibe a página de planos e preços.
     */
    public function planos(): \Inertia\Response
    {
        return Inertia::render('Web/Plano/Index');
    }
}
