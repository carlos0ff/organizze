<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

/** Responsável por exibir a página inicial pública do site. */
class HomeController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Web/Index');
    }
}
