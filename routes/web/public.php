<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

/**
 * Blog Controller
 * Controllers relacionados ao blog, como exibição de posts, categorias, etc.
 */
use App\Http\Controllers\Blog\Post\ListPostsController;
use App\Http\Controllers\Blog\Post\ShowPostController;

// Route::get("/", )->name();

/**
 * Blog - Grupo de rotas do Blog
 * Todas as rotas deste grupo terão prefixo "blog"
 */
Route::prefix("blog")->group(function(){

    /** Blog Home **/
    Route::get("/", ListPostsController::class)->name("blog.home");

    /** Blog post { SLUG } **/
    Route::get("/post/{slug}", ShowPostController::class)->name("blog.post");

    /** Blog Categorys { SLUG } **/
    // Route::get("/categoria/{category}", CategoryController::class)->name("blog.category");

});

/**
 * http://localhost/blog
 * http://localhost/blog/post/como-viver-na-lagoa
 * http://localhost/blog/categoria/controle
 * sail artisan make:controller ./App/Account/DeleteAccountController --invokable
 */


