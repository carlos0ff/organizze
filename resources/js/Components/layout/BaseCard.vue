<script setup lang="ts">
defineProps<{
    title?: string;
}>();
</script>

<template>
    <div class="max-w-122.5 bg-[#FEFDF9] shadow-custom-form-shadow flex w-full flex-col items-center rounded-lg px-5 py-8 sm:py-12 sm:px-8">
        <h2 v-if="title" class="text-[#2E312D] text-2xl mb-6 font-semibold text-center">
            {{ title }}
        </h2>
        <slot />
    </div>
</template>
