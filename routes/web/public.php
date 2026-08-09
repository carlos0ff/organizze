<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\LandingController;
use App\Http\Controllers\Blog\Categoria\CategoriaController;
use App\Http\Controllers\Blog\BlogController;

/** Landing Page **/
Route::get('/', [LandingController::class, 'index'])->name('web.home');
Route::get('/planos', [LandingController::class, 'planos'])->name('web.planos');


/**
 * Blog - Grupo de rotas do Blog
 * Todas as rotas deste grupo terão prefixo "blog"
 */
Route::prefix("blog")->group(function(){

    /** Blog Home **/
    Route::get("/", [BlogController::class , "index"])->name("blog.home");

    /** Blog Artigos **/
    Route::get("/artigos", [BlogController::class, "articles"])->name("blog.articles");

    /** Blog post { SLUG } **/
    Route::get("/post/{slug?}", [BlogController::class , "post"])->name("blog.post");

    /** Blog Categorys { SLUG } **/
    Route::get("/categoria/{category}", [CategoriaController::class , "show"])->name("blog.category");

});
