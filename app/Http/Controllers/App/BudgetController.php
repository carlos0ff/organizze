<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;

class BudgetController extends Controller
{
    public function index(): \Inertia\Response
    {
        return inertia('App/Limites/Index');
    }
}
