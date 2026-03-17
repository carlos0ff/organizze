<template>
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">

                <!-- Logo -->
                <div class="flex items-center shrink-0">
                    <a href="#" class="flex items-center gap-2 transition-opacity hover:opacity-80">
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
                    <a href="#artigos" class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Artigos
                    </a>
                    <a href="#mais-lido" class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Mais lido
                    </a>
                </div>

                <div class="flex items-center gap-3">
                    <!-- Search Bar -->
                    <div class="hidden md:flex items-center relative">
                        <button class="p-2 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                                    <p class="text-gray-500 font-medium mb-2">Buscas recentes:</p>
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
                        <span class="relative z-10">Conheça o Organizze</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <main class="flex-1 pt-12 lg:pt-20">


        <!-- Footer -->
        <footer class="bg-[#2F4F3F] mt-10">
            <div class="max-w-6xl mx-auto px-4 py-10">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    <div class="flex flex-col gap-4">
                        <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d" alt="Organizze" class="h-8 w-auto" style="filter: brightness(0) invert(1);" />
                        <p class="text-sm text-gray-300 max-w-xs leading-relaxed">
                            Simplificando o controle financeiro para você tomar decisões melhores todos os dias.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 class="text-sm font-semibold text-white mb-3">Institucional</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Quem somos</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Trabalhe conosco</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="text-sm font-semibold text-white mb-3">Ajuda</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Central de ajuda</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Contato</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="text-sm font-semibold text-white mb-3">Legal</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Termos de uso</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Privacidade</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4">
                        <h4 class="text-sm font-semibold text-white">Baixe o app</h4>
                        <div class="flex gap-3">
                            <a href="#" class="hover:opacity-90 transition">
                                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" class="h-10" />
                            </a>
                            <a href="#" class="hover:opacity-90 transition">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-10"/>
                            </a>
                        </div>

                        <!-- QR Code -->
                        <div class="flex items-center gap-3 mt-2">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.organizze.com.br" alt="QR Code para download do app" class="h-20 w-20 rounded-md bg-white p-1" />
                            <p class="text-xs text-gray-300 leading-snug max-w-30">
                                Escaneie o QR Code e baixe o app no seu celular
                            </p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-[#3A5849] mt-10 pt-4">
                    <p class="text-center text-xs text-gray-300">
                        © {{ new Date().getFullYear() }} Organizze Tecnologia Ltda. CNPJ 35.381.093/0001-26
                    </p>
                </div>
            </div>
        </footer>
    </main>
</template>
