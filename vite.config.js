import { defineConfig } from 'vite';
import path from 'path';
import laravel from 'laravel-vite-plugin';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    publicDir: 'public/assets',
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
        vue()
    ],
    resolve:{
        alias:{
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
