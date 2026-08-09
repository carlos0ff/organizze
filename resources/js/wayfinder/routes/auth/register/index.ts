import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
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

const register = {
    store: Object.assign(store, store),
}

export default register