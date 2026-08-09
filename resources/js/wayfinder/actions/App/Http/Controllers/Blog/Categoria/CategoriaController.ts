import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Blog\Categoria\CategoriaController::show
* @see app/Http/Controllers/Blog/Categoria/CategoriaController.php:25
* @route '/blog/categoria/{category}'
*/
export const show = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/blog/categoria/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Categoria\CategoriaController::show
* @see app/Http/Controllers/Blog/Categoria/CategoriaController.php:25
* @route '/blog/categoria/{category}'
*/
show.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: args.category,
    }

    return show.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Categoria\CategoriaController::show
* @see app/Http/Controllers/Blog/Categoria/CategoriaController.php:25
* @route '/blog/categoria/{category}'
*/
show.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Categoria\CategoriaController::show
* @see app/Http/Controllers/Blog/Categoria/CategoriaController.php:25
* @route '/blog/categoria/{category}'
*/
show.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

const CategoriaController = { show }

export default CategoriaController