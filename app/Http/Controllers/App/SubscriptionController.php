<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;

class SubscriptionController extends Controller
{
    public function index(): \Inertia\Response
    {
        return inertia('App/Assinatura/Index');
    }
}
