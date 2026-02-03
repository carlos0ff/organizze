<template>
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">

                <!-- Logo -->
                <div class="flex items-center shrink-0">
                    <a href="#" class="flex items-center gap-2 transition-opacity hover:opacity-80" >
                        <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d" alt="Organizze" class="h-8 w-auto" />
                        <span class="hidden text-sm font-medium text-gray-600 sm:inline">Blog</span>
                    </a>
                </div>

                <!-- Menu / Links Centralizado -->
                <div class="hidden md:flex items-center justify-center space-x-8 flex-1">
                    <a href="#home" class="capitalize relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </a>
                    <a href="#categorias" class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Categorias
                    </a>
                    <a href="#depoimentos" class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Artigos
                    </a>
                    <a href="#mais-lidos" class="relative inline-flex items-center text-sm font-medium text-[#1a202c] group">
                        <span class="relative z-10 px-1 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-[#2d3748]">
                            Mais lidos
                        </span>
                        <span class="absolute left-0 bottom-1 w-full h-1.5 bg-linear-to-r from-[#48bb78] to-[#38a169] opacity-80 transition-all duration-300 ease-out group-hover:h-4 group-hover:opacity-100 group-hover:from-[#38a169] group-hover:to-[#2f855a] animate-pulse shadow-sm group-hover:shadow-md group-hover:shadow-[#48bb78]/30"></span>
                    </a>
                </div>

                <div class="flex items-center gap-3">
                    <!-- Search Bar -->
                    <div class="hidden md:flex items-center relative">
                        <button class="p-2 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        <div class="absolute top-14 right-0 w-80">
                            <div class="bg-white rounded-xl shadow-xl border border-gray-200 p-4 hidden">
                                <div class="relative">
                                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input type="text" placeholder="Buscar artigos..." class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16C64F]/30 focus:border-[#16C64F]" />
                                </div>

                                <div class="mt-4 text-sm">
                                    <p class="text-gray-500 font-medium mb-2"> Buscas recentes:</p>

                                    <div class="space-y-1">
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition">
                                            Como organizar finanças
                                        </a>
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition">
                                            Dicas de produtividade
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Organizze -->
                    <a href="#Organizze" class="relative overflow-hidden px-6 py-2 rounded-md font-medium text-white bg-[#117641] group">
                        <span class="absolute inset-0 bg-[#006A33] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        <span class="relative z-10 capitalize">conhaça o Organizze</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!--  -->
    <main class="flex-1 pt-12 lg:pt-20">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        </div>
    </main>

</template>
