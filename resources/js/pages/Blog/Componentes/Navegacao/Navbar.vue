<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Search, X, Menu } from 'lucide-vue-next';

const searchOpen = ref(false);
const mobileOpen = ref(false);
const searchQuery = ref('');
</script>

<template>
    <nav class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">

                <!-- Logo -->
                <RouterLink to="/blog" class="flex items-center gap-2 shrink-0 transition-opacity hover:opacity-80">
                    <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                        alt="Organizze" class="h-7 w-auto" />
                    <span class="hidden text-sm font-semibold text-gray-500 sm:inline">Blog</span>
                </RouterLink>

                <!-- Links desktop -->
                <div class="hidden md:flex items-center justify-center gap-6 flex-1">
                    <RouterLink to="/blog"
                        class="relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#22c75e] after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </RouterLink>
                    <RouterLink to="/blog/artigos"
                        class="relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#22c75e] after:transition-all after:duration-300 hover:after:w-full">
                        Artigos
                    </RouterLink>
                    <a href="#temas"
                        class="relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#22c75e] after:transition-all after:duration-300 hover:after:w-full">
                        Categorias
                    </a>
                    <a href="#mais-artigos"
                        class="relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#22c75e] after:transition-all after:duration-300 hover:after:w-full">
                        Mais lidos
                    </a>
                </div>

                <!-- Ações direita -->
                <div class="flex items-center gap-3">
                    <!-- Busca -->
                    <div class="hidden md:block relative">
                        <button @click="searchOpen = !searchOpen"
                            class="p-2 text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition cursor-pointer">
                            <component :is="searchOpen ? X : Search" class="w-4 h-4" />
                        </button>

                        <transition name="dropdown">
                            <div v-if="searchOpen" class="absolute top-12 right-0 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-4">
                                <div class="relative">
                                    <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input v-model="searchQuery" type="text" placeholder="Buscar artigos..."
                                        class="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22c75e]/30 focus:border-[#22c75e]"
                                        autofocus />
                                </div>

                                <div v-if="!searchQuery" class="mt-3">
                                    <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Buscas recentes</p>
                                    <div class="space-y-1">
                                        <a href="#" class="flex items-center gap-2 text-sm text-gray-600 hover:text-[#22c75e] transition py-1">
                                            <Search class="w-3 h-3 text-gray-300" /> Como organizar finanças
                                        </a>
                                        <a href="#" class="flex items-center gap-2 text-sm text-gray-600 hover:text-[#22c75e] transition py-1">
                                            <Search class="w-3 h-3 text-gray-300" /> Investimentos para iniciantes
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- CTA -->
                    <RouterLink to="/app"
                        class="relative overflow-hidden px-5 py-2 rounded-lg font-semibold text-sm text-white bg-[#117641] group transition-colors hover:bg-[#0d5c31]">
                        Usar o Organizze
                    </RouterLink>

                    <!-- Mobile hamburger -->
                    <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 text-gray-600">
                        <component :is="mobileOpen ? X : Menu" class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <transition name="slide-down">
            <div v-if="mobileOpen" class="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
                <RouterLink to="/blog" @click="mobileOpen = false"
                    class="block py-2 text-sm font-medium text-gray-700 hover:text-[#22c75e]">Home</RouterLink>
                <a href="#mais-artigos" @click="mobileOpen = false"
                    class="block py-2 text-sm font-medium text-gray-700 hover:text-[#22c75e]">Artigos</a>
                <a href="#" @click="mobileOpen = false"
                    class="block py-2 text-sm font-medium text-gray-700 hover:text-[#22c75e]">Categorias</a>
                <div class="pt-3 border-t border-gray-100">
                    <div class="relative">
                        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Buscar artigos..."
                            class="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#22c75e]" />
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.2s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-8px); }

.slide-down-enter-active, .slide-down-leave-active { transition: all 0.2s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
