import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see routes/web/admin.php:14
* @route '/panel'
*/
export const panel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: panel.url(options),
    method: 'get',
})

panel.definition = {
    methods: ["get","head"],
    url: '/panel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web/admin.php:14
* @route '/panel'
*/
panel.url = (options?: RouteQueryOptions) => {
    return panel.definition.url + queryParams(options)
}

/**
* @see routes/web/admin.php:14
* @route '/panel'
*/
panel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: panel.url(options),
    method: 'get',
})

/**
* @see routes/web/admin.php:14
* @route '/panel'
*/
panel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: panel.url(options),
    method: 'head',
})

const admin = {
    panel: Object.assign(panel, panel),
}

export default admin