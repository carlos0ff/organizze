<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;

class BankConnectionController extends Controller
{
    public function index(): \Inertia\Response
    {
        return inertia('App/ConexaoBancaria/Index');
    }
}
