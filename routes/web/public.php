<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

/**
 * Blog Controller
 * Controllers relacionados ao blog, como exibição de posts, categorias, etc.
 */
use App\Http\Controllers\Blog\CategoryController;
use App\Http\Controllers\Blog\BlogController;


/**
 * Blog - Grupo de rotas do Blog
 * Todas as rotas deste grupo terão prefixo "blog"
 */
Route::prefix("blog")->group(function(){

    /** Blog Home **/
    Route::get("/", [BlogController::class , "index"])->name("blog.home");

    /** Blog post { SLUG } **/
    Route::get("/post/", [BlogController::class , "post"])->name("blog.post");

    /** Blog Categorys { SLUG } **/
    Route::get("/categoria/{category}", [CategoryController::class , "show"])->name("blog.category");

});

/**
 * http://localhost/blog
 * http://localhost/blog/post/como-viver-na-lagoa
 * http://localhost/blog/categoria/controle
 */


