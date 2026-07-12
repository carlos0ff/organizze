import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/user/two-factor-recovery-codes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/user/two-factor-recovery-codes',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const RecoveryCodeController = { index, store }

export default RecoveryCodeController