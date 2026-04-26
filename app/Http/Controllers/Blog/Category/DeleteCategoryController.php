<?php

namespace App\Http\Controllers\Blog\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeleteCategoryController extends Controller
{
    // Remove uma categoria do blog; impede a exclusão se houver posts vinculados
    public function __invoke(Request $request)
    {
        //
    }
}
