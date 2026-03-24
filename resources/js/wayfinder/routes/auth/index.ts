import { queryParams, type RouteDefinition, type RouteQueryOptions } from './../../wayfinder';
/**
 * @see \App\Http\Controllers\Auth\LoginController::login
 * @see app/Http/Controllers/Auth/LoginController.php:19
 * @route '/auth/entrar'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
});

login.definition = {
    methods: ['get', 'head'],
    url: '/auth/entrar',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\Auth\LoginController::login
 * @see app/Http/Controllers/Auth/LoginController.php:19
 * @route '/auth/entrar'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\LoginController::login
 * @see app/Http/Controllers/Auth/LoginController.php:19
 * @route '/auth/entrar'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\Auth\LoginController::login
 * @see app/Http/Controllers/Auth/LoginController.php:19
 * @route '/auth/entrar'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\Auth\LoginController::authenticate
 * @see app/Http/Controllers/Auth/LoginController.php:29
 * @route '/auth/entrar'
 */
export const authenticate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
});

authenticate.definition = {
    methods: ['post'],
    url: '/auth/entrar',
} satisfies RouteDefinition<['post']>;

/**
 * @see \App\Http\Controllers\Auth\LoginController::authenticate
 * @see app/Http/Controllers/Auth/LoginController.php:29
 * @route '/auth/entrar'
 */
authenticate.url = (options?: RouteQueryOptions) => {
    return authenticate.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\LoginController::authenticate
 * @see app/Http/Controllers/Auth/LoginController.php:29
 * @route '/auth/entrar'
 */
authenticate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
});

/**
 * @see \App\Http\Controllers\Auth\RegisterController::authenticate
 * @see app/Http/Controllers/Auth/RegisterController.php:0
 * @route '/auth/cadastro'
 */
export const authenticate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
});

authenticate.definition = {
    methods: ['post'],
    url: '/auth/cadastro',
} satisfies RouteDefinition<['post']>;

/**
 * @see \App\Http\Controllers\Auth\RegisterController::authenticate
 * @see app/Http/Controllers/Auth/RegisterController.php:0
 * @route '/auth/cadastro'
 */
authenticate.url = (options?: RouteQueryOptions) => {
    return authenticate.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\RegisterController::authenticate
 * @see app/Http/Controllers/Auth/RegisterController.php:0
 * @route '/auth/cadastro'
 */
authenticate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
});

/**
 * @see \App\Http\Controllers\Auth\RegisterController::register
 * @see app/Http/Controllers/Auth/RegisterController.php:14
 * @route '/auth/cadastro'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
});

register.definition = {
    methods: ['get', 'head'],
    url: '/auth/cadastro',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\Auth\RegisterController::register
 * @see app/Http/Controllers/Auth/RegisterController.php:14
 * @route '/auth/cadastro'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\RegisterController::register
 * @see app/Http/Controllers/Auth/RegisterController.php:14
 * @route '/auth/cadastro'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\Auth\RegisterController::register
 * @see app/Http/Controllers/Auth/RegisterController.php:14
 * @route '/auth/cadastro'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\Auth\ForgotPasswordController::forget
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:14
 * @route '/auth/recuperar'
 */
export const forget = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forget.url(options),
    method: 'get',
});

forget.definition = {
    methods: ['get', 'head'],
    url: '/auth/recuperar',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\Auth\ForgotPasswordController::forget
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:14
 * @route '/auth/recuperar'
 */
forget.url = (options?: RouteQueryOptions) => {
    return forget.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\ForgotPasswordController::forget
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:14
 * @route '/auth/recuperar'
 */
forget.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forget.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\Auth\ForgotPasswordController::forget
 * @see app/Http/Controllers/Auth/ForgotPasswordController.php:14
 * @route '/auth/recuperar'
 */
forget.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forget.url(options),
    method: 'head',
});

const auth = {
    login: Object.assign(login, login),
    authenticate: Object.assign(authenticate, authenticate),
    register: Object.assign(register, register),
    forget: Object.assign(forget, forget),
};

export default auth;
