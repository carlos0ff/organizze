<?php

namespace App\Http\Controllers\App\Categories;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CreateCategoryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('App/Categories/Create');
    }
}
