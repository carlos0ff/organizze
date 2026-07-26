<script setup lang="ts">
import { Github, Linkedin, Youtube, Twitter } from 'lucide-vue-next';

</script>
<template>
    <!-- Footer -->
    <footer class="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p class="mb-4 sm:mb-0">
            &copy; {{ new Date().getFullYear() }} Organizze. Todos os direitos reservados.
        </p>

        <div class="flex space-x-6">
            <Github class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-gray-600" />
            <Linkedin class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-blue-600" />
            <Youtube class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-red-600" />
            <Twitter class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-blue-400" />
        </div>
    </footer>
</template>
