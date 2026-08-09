import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::index
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:16
* @route '/auth/cadastro'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/auth/cadastro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::index
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:16
* @route '/auth/cadastro'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::index
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:16
* @route '/auth/cadastro'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::index
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:16
* @route '/auth/cadastro'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::store
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:24
* @route '/auth/cadastro'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/auth/cadastro',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::store
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:24
* @route '/auth/cadastro'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Registro\RegistroController::store
* @see app/Http/Controllers/Auth/Registro/RegistroController.php:24
* @route '/auth/cadastro'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const RegistroController = { index, store }

export default RegistroController