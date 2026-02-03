<?php


use Illuminate\Support\Facades\Route;

use Illuminate\Validation\Rules\In;
use Illuminate\Cache\Console\ForgetCommand;

use Inertia\Inertia;

/** Controllers  **/
use App\Http\Controllers\App\DashboardController;
use App\Http\Controllers\Web\BlogController;
use Illuminate\Container\Attributes\DB;

/**
 * Web Route
 */
Route::get('/', function () {
    return Inertia::render('Testes');
});


/**
 * Blog - Grupo de rotas do Blog
 * Todas as rotas deste grupo terão prefixo "blog"
 */
Route::prefix("blog")->group(function(){

    /** Blog Home **/
    Route::get("/", [BlogController::class , "index"])->name("blog.home");

    /** Blog post { SLUG } **/
    Route::get("/post", [BlogController::class , "post"])->name("blog.post");

    /** Blog Categorys { SLUG } **/
    Route::get("/{category}", [BlogController::class , "index"])->name("blog.category");

});


/**
 * Auth Routes - Grupo de rotas de autenticação
 * Todas as rotas deste grupo terão prefixo "auth"
*/
Route::prefix('auth')->middleware('guest')->group(function(){

    /**  Rota de login **/
    Route::get('/entrar', function () {
        return Inertia::render('Auth/Entrar');
    })->name('auth.login');

    /** Rota de cadastro de usuário **/
    Route::get('/cadastro', function(){
        return Inertia::render('Auth/Cadastro');
    })->name('auth.register');

    /** Rota de recuperação de senha **/
    Route::get('/recuperar', function(){
        return Inertia::render('Auth/Recuperar');
    })->name('auth.forget');
});


/**
 * App - Grupo de rotas com prefixo "App"
 * Todas as rotas dentro deste grupo terão URL iniciando com /app
 **/
Route::prefix("app")->group(function () {

    /** Rota principal do app **/
    Route::get('/', [DashboardController::class, "index"])->name('app.dashboard');

    /** Rota para listar contas **/
    Route::get('/contas', [DashboardController::class, "index"])->name('app.account');

});





