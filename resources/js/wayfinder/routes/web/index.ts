import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Web\LandingController::home
* @see app/Http/Controllers/Web/LandingController.php:15
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Web\LandingController::home
* @see app/Http/Controllers/Web/LandingController.php:15
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Web\LandingController::home
* @see app/Http/Controllers/Web/LandingController.php:15
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Web\LandingController::home
* @see app/Http/Controllers/Web/LandingController.php:15
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
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

const web = {
    home: Object.assign(home, home),
    planos: Object.assign(planos, planos),
}

export default web