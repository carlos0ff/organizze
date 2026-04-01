<template>
    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        <div class="relative h-48 overflow-hidden">
            <img
                :src="image"
                :alt="alt"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">{{ category }}</span>
        </div>
        <div class="p-5 flex flex-col flex-1">
            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                <a :href="href">{{ title }}</a>
            </h3>
            <p class="text-sm text-gray-600 line-clamp-3 leading-relaxed mt-2">{{ description }}</p>
            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                <span class="text-xs text-gray-500">{{ readTime }} min</span>
                <a :href="href" class="text-xs text-green-700 hover:text-green-800 transition-colors">Ler artigo →</a>
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    image: { type: String, required: true },
    alt: { type: String, default: '' },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    readTime: { type: [String, Number], required: true },
    href: { type: String, default: '#' },
})
</script>
