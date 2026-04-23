import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\AuthController::login
* @see app/Http/Controllers/Api/AuthController.php:12
* @route '/api/auth'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/auth',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AuthController::login
* @see app/Http/Controllers/Api/AuthController.php:12
* @route '/api/auth'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AuthController::login
* @see app/Http/Controllers/Api/AuthController.php:12
* @route '/api/auth'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

const AuthController = { login }

export default AuthController