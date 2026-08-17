import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\N8n\WhatsAppDespesaController::webhook
* @see app/Http/Controllers/Api/N8n/WhatsAppDespesaController.php:16
* @route '/api/n8n/webhook'
*/
export const webhook = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

webhook.definition = {
    methods: ["post"],
    url: '/api/n8n/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\N8n\WhatsAppDespesaController::webhook
* @see app/Http/Controllers/Api/N8n/WhatsAppDespesaController.php:16
* @route '/api/n8n/webhook'
*/
webhook.url = (options?: RouteQueryOptions) => {
    return webhook.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\N8n\WhatsAppDespesaController::webhook
* @see app/Http/Controllers/Api/N8n/WhatsAppDespesaController.php:16
* @route '/api/n8n/webhook'
*/
webhook.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

const n8n = {
    webhook: Object.assign(webhook, webhook),
}

export default n8n