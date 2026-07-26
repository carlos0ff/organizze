<?php

declare(strict_types=1);

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;

class SuporteController extends Controller
{
    public function index(): \Inertia\Response
    {
        return inertia('App/Suporte/Index');
    }
}
