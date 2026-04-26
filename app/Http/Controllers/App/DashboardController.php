<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Blog\Post;
use Inertia\Inertia;

/** Responsável por exibir o painel administrativo com métricas gerais. */
class DashboardController extends Controller
{
    public function index(): \Inertia\Response
    {
        $recentPosts = Post::where('status', 'published')
            ->latest('published_at')
            ->limit(3)
            ->get(['id', 'title', 'slug', 'content', 'published_at', 'reading_time', 'views']);

        return Inertia::render('App/Dashboard/Index', [
            'recentPosts' => $recentPosts,
        ]);
    }
}
