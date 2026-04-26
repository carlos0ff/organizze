<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

/** Responsável pela integração com conexões bancárias externas. */
class ConexaoBancariaController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('App/ConexaoBancaria/Index');
    }
}
