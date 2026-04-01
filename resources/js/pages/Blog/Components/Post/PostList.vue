<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        <PostCard
            v-for="post in posts"
            :key="post.id"
            :image="post.image"
            :alt="post.alt"
            :category="post.category"
            :title="post.title"
            :description="post.description"
            :read-time="post.readTime"
            :href="post.href"
        />
    </div>
</template>

<script setup>
import PostCard from './PostCard.vue'

defineProps({
    posts: {
        type: Array,
        required: true,
    },
})
</script>
