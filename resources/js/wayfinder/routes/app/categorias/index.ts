import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::store
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:31
* @route '/app/categorias'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/app/categorias',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::store
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:31
* @route '/app/categorias'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::store
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:31
* @route '/app/categorias'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::update
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:55
* @route '/app/categorias/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/categorias/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::update
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:55
* @route '/app/categorias/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::update
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:55
* @route '/app/categorias/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::destroy
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:63
* @route '/app/categorias/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/app/categorias/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::destroy
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:63
* @route '/app/categorias/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::destroy
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:63
* @route '/app/categorias/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const categorias = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default categorias