import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Web\LandingController::index
* @see app/Http/Controllers/Web/LandingController.php:15
* @route '/'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\LandingController::index
* @see app/Http/Controllers/Web/LandingController.php:15
* @route '/'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\LandingController::index
* @see app/Http/Controllers/Web/LandingController.php:15
* @route '/'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\LandingController::index
* @see app/Http/Controllers/Web/LandingController.php:15
* @route '/'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Web\LandingController::planos
* @see app/Http/Controllers/Web/LandingController.php:23
* @route '/planos'
*/
export const planos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: planos.url(options),
    method: 'get',
})

planos.definition = {
    methods: ["get","head"],
    url: '/planos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\LandingController::planos
* @see app/Http/Controllers/Web/LandingController.php:23
* @route '/planos'
*/
planos.url = (options?: RouteQueryOptions) => {
    return planos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\LandingController::planos
* @see app/Http/Controllers/Web/LandingController.php:23
* @route '/planos'
*/
planos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: planos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\LandingController::planos
* @see app/Http/Controllers/Web/LandingController.php:23
* @route '/planos'
*/
planos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: planos.url(options),
    method: 'head',
})

const LandingController = { index, planos }

export default LandingController