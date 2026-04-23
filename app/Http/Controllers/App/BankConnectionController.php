<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class BankConnectionController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('App/ConexaoBancaria/Index');
    }
}
