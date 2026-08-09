import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
import register702019 from './register'
import forgot05cbb4 from './forgot'
import reset0fffd7 from './reset'
import social from './social'
/**
* @see \App\Http\Controllers\Auth\Login\LoginController::login
* @see app/Http/Controllers/Auth/Login/LoginController.php:20
* @route '/auth/entrar'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/auth/entrar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::login
* @see app/Http/Controllers/Auth/Login/LoginController.php:20
* @route '/auth/entrar'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::login
* @see app/Http/Controllers/Auth/Login/LoginController.php:20
* @route '/auth/entrar'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::login
* @see app/Http/Controllers/Auth/Login/LoginController.php:20
* @route '/auth/entrar'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::authenticate
* @see app/Http/Controllers/Auth/Login/LoginController.php:30
* @route '/auth/entrar'
*/
export const authenticate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
})

authenticate.definition = {
    methods: ["post"],
    url: '/auth/entrar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::authenticate
* @see app/Http/Controllers/Auth/Login/LoginController.php:30
* @route '/auth/entrar'
*/
authenticate.url = (options?: RouteQueryOptions) => {
    return authenticate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::authenticate
* @see app/Http/Controllers/Auth/Login/LoginController.php:30
* @route '/auth/entrar'
*/
authenticate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::logout
* @see app/Http/Controllers/Auth/Login/LoginController.php:57
* @route '/auth/sair'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/auth/sair',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::logout
* @see app/Http/Controllers/Auth/Login/LoginController.php:57
* @route '/auth/sair'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::logout
* @see app/Http/Controllers/Auth/Login/LoginController.php:57
* @route '/auth/sair'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::register
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:16
* @route '/auth/cadastro'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/auth/cadastro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::register
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:16
* @route '/auth/cadastro'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::register
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:16
* @route '/auth/cadastro'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::register
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:16
* @route '/auth/cadastro'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::forgot
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:16
* @route '/auth/recuperar'
*/
export const forgot = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgot.url(options),
    method: 'get',
})

forgot.definition = {
    methods: ["get","head"],
    url: '/auth/recuperar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::forgot
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:16
* @route '/auth/recuperar'
*/
forgot.url = (options?: RouteQueryOptions) => {
    return forgot.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::forgot
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:16
* @route '/auth/recuperar'
*/
forgot.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgot.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::forgot
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:16
* @route '/auth/recuperar'
*/
forgot.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forgot.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::reset
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:16
* @route '/auth/redefinir/{token}'
*/
export const reset = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(args, options),
    method: 'get',
})

reset.definition = {
    methods: ["get","head"],
    url: '/auth/redefinir/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::reset
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:16
* @route '/auth/redefinir/{token}'
*/
reset.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return reset.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::reset
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:16
* @route '/auth/redefinir/{token}'
*/
reset.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::reset
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:16
* @route '/auth/redefinir/{token}'
*/
reset.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reset.url(args, options),
    method: 'head',
})

const auth = {
    login: Object.assign(login, login),
    authenticate: Object.assign(authenticate, authenticate),
    logout: Object.assign(logout, logout),
    register: Object.assign(register, register702019),
    forgot: Object.assign(forgot, forgot05cbb4),
    reset: Object.assign(reset, reset0fffd7),
    social: Object.assign(social, social),
}

export default auth