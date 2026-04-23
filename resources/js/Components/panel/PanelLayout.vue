<script setup>
import Sidebar from '@/Components/panel/Sidebar.vue';

defineProps({
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
});
</script>

<template>
    <div class="min-h-screen bg-gray-50 flex">
        <Sidebar />

        <div class="flex-1 ml-60 flex flex-col min-h-screen">
            <!-- Top bar -->
            <header class="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between shrink-0">
                <div>
                    <h1 class="text-base font-bold text-gray-800">{{ title }}</h1>
                    <p v-if="subtitle" class="text-xs text-gray-400 mt-0.5">{{ subtitle }}</p>
                </div>
                <slot name="actions" />
            </header>

            <!-- Page content -->
            <main class="flex-1 px-8 py-6">
                <slot />
            </main>
        </div>
    </div>
</template>
