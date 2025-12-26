<?php

namespace App\Providers;

use Generator;
use Faker\Factory;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;



class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Strict mode apenas fora de produção
        Model::shouldBeStrict(! app()->isProduction());

        // Bloqueia operações destrutivas fora de produção
        DB::prohibitDestructiveCommands(! app()->isProduction());

        // Otimizações do Vite
        Vite::useAggressivePrefetching();

        // Força HTTPS em produção
        if (app()->isProduction()) {
            URL::forceHttps();
        }

        // Política padrão de senha
        // Password::defaults(function () {
        //     return Password::min(8)
        //         ->mixedCase()
        //         ->letters()
        //         ->numbers()
        //         ->uncompromised();
        // });

        $this->app->singleton(Generator::class, function () {
            return Factory::create('pt_BR');
        });
    }
}
