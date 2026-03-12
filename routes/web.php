<?php
declare(strict_types=1);

/** Web Routes **/
use Illuminate\Support\Facades\Route;

/**
 * Rotas públicas (landing, blog, páginas institucionais)
 **/
require __DIR__.'/web/public.php';

/**
 * Rotas de autenticação
 **/
require __DIR__.'/web/auth.php';

/**
 * Rotas administrativas
 **/
require __DIR__.'/web/admin.php';

/**
 * Rotas da aplicação (usuários autenticados)
 **/
require __DIR__.'/web/app.php';
