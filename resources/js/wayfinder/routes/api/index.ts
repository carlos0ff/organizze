import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Api\AuthController::auth
* @see app/Http/Controllers/Api/AuthController.php:12
* @route '/api/auth'
*/
export const auth = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: auth.url(options),
    method: 'post',
})

auth.definition = {
    methods: ["post"],
    url: '/api/auth',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AuthController::auth
* @see app/Http/Controllers/Api/AuthController.php:12
* @route '/api/auth'
*/
auth.url = (options?: RouteQueryOptions) => {
    return auth.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AuthController::auth
* @see app/Http/Controllers/Api/AuthController.php:12
* @route '/api/auth'
*/
auth.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: auth.url(options),
    method: 'post',
})

const api = {
    auth: Object.assign(auth, auth),
}

export default api