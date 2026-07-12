import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/user/two-factor-secret-key',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

const TwoFactorSecretKeyController = { show }

export default TwoFactorSecretKeyController