<script setup lang="ts">

const navLinks = [
    { label: 'Recursos', href: '#recursos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Planos', href: '#planos' },
    { label: 'Blog', href: '/blog' },
]
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-[]/90 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="/" class="flex items-center gap-2">
                    <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                         alt="Organizze"
                         class="h-8 w-auto"
                    />
                </a>

                <!-- Desktop nav -->
                <nav class="hidden md:flex items-center gap-8">
                    <a v-for="link in navLinks" :key="link.label" :href="link.href"
                       class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        {{ link.label }}
                    </a>
                </nav>

                <!-- CTA -->
                <div class="hidden md:flex items-center gap-3">
                    <a href="/auth/entrar" class="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                        Entrar
                    </a>
                    <a href="/auth/cadastro"
                       class="bg-[#16C64F] hover:bg-[#12a842] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                        Começar grátis
                    </a>
                </div>

                <!-- Mobile toggle -->
                <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-gray-600">
                    <X v-if="mobileMenuOpen" class="w-5 h-5" />
                    <Menu v-else class="w-5 h-5" />
                </button>
            </div>
        </div>

        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
            <a v-for="link in navLinks" :key="link.label" :href="link.href"
               class="text-sm font-medium text-gray-700">{{ link.label }}</a>
            <hr class="border-gray-100" />
            <a href="/auth/entrar" class="text-sm font-medium text-gray-700">Entrar</a>
            <a href="/auth/cadastro"
               class="bg-[#16C64F] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                Começar grátis
            </a>
        </div>
    </header>

</template>
