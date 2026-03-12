import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite";

import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import vue from '@vitejs/plugin-vue';

/** **/
import laravel from 'laravel-vite-plugin';

/**
 *
 */
export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.ts',
        ]),
        wayfinder({
            path: "resources/js/wayfinder",
            formVariants: false,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },

        }),
    ],
    server: {
        hmr: {
            host: 'localhost',
        },
    },
    resolve: {
        alias: {
            '@': '/resources/js',
            'ziggy-js': '/vendor/tightenco/ziggy',
        },
    },
});
