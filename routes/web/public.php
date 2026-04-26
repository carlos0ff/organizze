<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

/**
 * Blog Controller
 * Controllers relacionados ao blog, como exibição de posts, categorias, etc.
 */
use App\Http\Controllers\Blog\Post\ListPostsController;
use App\Http\Controllers\Blog\Post\ShowPostController;
use App\Http\Controllers\Web\HomeController;

Route::get("/", function (){
    redirect("/app");
})->name("home");

/**
 * Blog - Grupo de rotas do Blog
 * Todas as rotas deste grupo terão prefixo "blog"
 */
Route::prefix("blog")->group(function(){

    /** Blog Home **/
    Route::get("/", ListPostsController::class)->name("blog.home");

    /** Blog post { SLUG } **/
    Route::get("/post/{slug}", ShowPostController::class)->name("blog.post");

    /** Blog Categoria { SLUG } **/
    Route::get("/categoria/{category}", ListPostsController::class)->name("blog.category");

    /** Blog Artigos **/
    Route::get("/artigos", ListPostsController::class)->name("blog.articles");

});

/**
 * http://localhost/blog
 * http://localhost/blog/post/como-viver-na-lagoa
 * http://localhost/blog/categoria/controle
 * sail artisan make:controller ./App/Conta/DeleteAccountController --invokable
 */


