<template>
    <nav class="flex items-center justify-center gap-2 mt-12">
        <button
            :disabled="currentPage <= 1"
            class="px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            @click="$emit('change', currentPage - 1)"
        >
            ← Anterior
        </button>

        <button
            v-for="page in totalPages"
            :key="page"
            :class="[
                'w-9 h-9 rounded-md text-sm font-medium transition',
                page === currentPage
                    ? 'bg-green-700 text-white'
                    : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
            ]"
            @click="$emit('change', page)"
        >
            {{ page }}
        </button>

        <button
            :disabled="currentPage >= totalPages"
            class="px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            @click="$emit('change', currentPage + 1)"
        >
            Próxima →
        </button>
    </nav>
</template>

<script setup>
defineProps({
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true },
})

defineEmits(['change'])
</script>
