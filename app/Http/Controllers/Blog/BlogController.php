<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * Exibe a lista de posts do blog.
     * @return \Inertia\Response
     */
    public function index() : \Inertia\Response
    {
        return inertia('Blog/Index');
    }

    /**
     * Exibe a página de posts do blog.
     * @return \Inertia\Response
     */
    public function post(): \Inertia\Response
    {
        return inertia('Blog/Post/Index');
    }

}
