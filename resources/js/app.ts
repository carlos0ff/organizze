import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';

import { ZiggyVue, route } from 'ziggy-js';
import { Ziggy } from './ziggy';

// Expõe route() globalmente para funcionar em <script setup> e templates
(window as any).route = (name: string, params?: any, absolute?: boolean) =>
    route(name, params, absolute, Ziggy);

/**
 *
 */
const app = createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>(['./pages/**/*.vue', '../images/**', '../fonts/**'])),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

/**
 *
 **/
