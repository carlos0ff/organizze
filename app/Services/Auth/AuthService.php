<?php

namespace App\Services\Auth;

use App\Contracts\Auth\AuthServiceInterface;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

/**
 * Serviço responsável pelas operações de autenticação do usuário na aplicação.
 *
 * @package App\Services\Auth
 */
class AuthService implements AuthServiceInterface
{
    /**
     * Tenta autenticar o usuário com as credenciais fornecidas.
     *
     * @param  array  $credentials  Array com email e password do usuário
     * @param  bool   $remember     Se verdadeiro, cria cookie de sessão persistente
     * @return bool                 True se a autenticação for bem-sucedida
     */
    public function attemptLogin(array $credentials, bool $remember = false): bool
    {
        return Auth::attempt($credentials, $remember);
    }

    /**
     * Encerra a sessão do usuário autenticado atualmente.
     *
     * @return void
     */
    public function logout(): void
    {
        Auth::logout();
    }

    /**
     * Retorna o usuário autenticado na sessão atual.
     *
     * @return User|null  Instância do usuário autenticado ou null se não houver sessão
     */
    public function currentUser(): ?User
    {
        /** @var User|null */
        return Auth::user();
    }
}
