<?php

namespace App\Http\Controllers\Blog\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeletePostController extends Controller
{
    // Remove permanentemente um post do blog; apenas rascunhos e posts despublicados podem ser excluídos
    public function __invoke(Request $request)
    {
        //
    }
}
