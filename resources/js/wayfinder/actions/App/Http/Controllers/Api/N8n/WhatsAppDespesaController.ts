import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\N8n\WhatsAppDespesaController::store
* @see app/Http/Controllers/Api/N8n/WhatsAppDespesaController.php:16
* @route '/api/n8n/webhook'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/n8n/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\N8n\WhatsAppDespesaController::store
* @see app/Http/Controllers/Api/N8n/WhatsAppDespesaController.php:16
* @route '/api/n8n/webhook'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\N8n\WhatsAppDespesaController::store
* @see app/Http/Controllers/Api/N8n/WhatsAppDespesaController.php:16
* @route '/api/n8n/webhook'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const WhatsAppDespesaController = { store }

export default WhatsAppDespesaController