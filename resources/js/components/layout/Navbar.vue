<script>

</script>

<template>
    <nav class="bg-[#22c75e] shadow-lg fixed top-0 left-0 w-full z-50" >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">

            <!-- Logotype -->
            <div class="flex items-center">
                <div class="shrink-0 flex items-center">
                    <img  style="filter: brightness(0) invert(1);" src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d" alt="Organizze" class="logo h-8 w-auto" />
                </div>
            </div>

            <!-- NavLinks -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="/app" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10" >Visão Geral</a>
                <a href="#lancamentos" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">Lançamentos</a>

                <div class="relative group">
                    <a href="#relatorios" class="flex items-center gap-1 text-white font-medium text-sm relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all **:after:duration-300 hover:after:w-10">
                        Relatórios
                        <i class="far fa-angle-down transition-transform duration-300 group-hover:rotate-180"></i>
                    </a>

                    <div class="absolute left-0 mt-3 w-64 rounded-lg bg-white shadow-lg opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 border border-slate-200" >
                        <a href="#relatorios/mensal" class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-t-xl">
                            <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-indigo-500">
                                <i class="fas fa-calendar-alt text-sm"></i>
                            </span>
                            Mensal
                        </a>

                        <a href="#relatorios/anual" class="items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 hidden">
                            <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-blue-500">
                                <i class="fas fa-chart-line text-sm"></i>
                            </span>
                            Anual
                        </a>

                        <a href="#relatorios/categorias" class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                            <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-purple-500">
                                <i class="fas fa-layer-group text-sm"></i>
                            </span>
                            Por Categoria
                        </a>

                        <a href="#relatorios/receitas-despesas" class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                            <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-green-500">
                                <i class="fas fa-balance-scale text-sm"></i>
                            </span>
                            Receitas vs Despesas
                        </a>
                    </div>
                </div>

                <a href="#limites-gastos" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">Limite de Gastos</a>
                <a href="#conexao-bancaria" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">Conexão Bancária</a>
            </div>

            <!-- Notificações -->
            <div class="hidden md:flex items-center space-x-4 ">
                <div class="hidden md:flex items-center space-x-4">
                    <div class="relative group">

                        <button class="relative text-white hover:text-gray-200 transition-colors focus:outline-none">
                            <i class="fas fa-bell fa-lg"></i>

                            <div class="absolute -top-0.5 -right-1 flex h-2.5 w-2.5 roundend-full">
                                <span class="absolute inline-flex w-full h-full rounded-full bg-red-400 opacity-75 animate-pulse"></span>
                                <span class="relative inline-flex h-2.5 w-3.5 rounded-full bg-red-500"></span>
                            </div>
                        </button>

                        <!-- Menu Dropdown -->
                        <div class="absolute right-0 mt-3 w-80 rounded-xl bg-white shadow-lg border border-slate-200 ring-1 ring-black/5 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                            <div class="px-4 py-3 border-b border-slate-200">
                                <p class="text-sm font-semibold text-slate-800">Notificações</p>
                            </div>

                            <div class="flex items-start gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 transition">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-red-500">
                                    <i class="fas fa-exclamation-circle text-sm"></i>
                                </span>
                                <div>
                                    <p class="font-medium">Conta vence hoje</p>
                                    <p class="text-xs text-slate-500">Fatura Cartão • R$ 450,00</p>
                                </div>
                            </div>

                            <!-- Item -->
                            <div class="flex items-start gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 transition">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-blue-500">
                                    <i class="fas fa-info-circle text-sm"></i>
                                </span>
                                <div>
                                    <p class="font-medium">Novo recurso disponível</p>
                                    <p class="text-xs text-slate-500">
                                        Agora você pode conectar sua conta bancária!
                                    </p>
                                </div>
                            </div>

                            <!-- Footer -->
                            <a href="/notificacoes" class="block text-center text-sm font-medium text-indigo-600 px-4 py-3 border-t border-slate-200 hover:bg-slate-50 rounded-b-xl">
                                Ver todas
                            </a>
                        </div>
                    </div>
                </div>



                <!-- Perfil Usuário -->
                <div class="relative" >
                    <button class="flex items-center gap-3 group">
                        <img src="https://i.pravatar.cc/100?img=12" alt="Seu perfil" class="h-9 w-9 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/60 transition" />
                            <div class="hidden lg:flex flex-col items-start">
                                <span class="text-sm text-white leading-4">Thiago Santos</span>
                                <span class="text-[11px] text-white/80 leading-3">Plano Gratuito</span>
                            </div>
                        <i class="fas fa-chevron-down text-white/90 text-xs"></i>
                    </button>

                    <!-- Menu do usuário -->
                    <div class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg ring-1 ring-black/5 z-50 hidden">
                        <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                            <img src="https://i.pravatar.cc/100?img=12" alt="Seu perfil" class="h-10 w-10 rounded-full object-cover" />
                            <div>
                                <p class="text-sm font-medium text-gray-900">Thiago Santos</p>
                                <p class="text-xs text-gray-500">thiagosantos@email.com</p>
                            </div>
                        </div>

                        <!-- Links do menu -->
                        <div class="capitalize">
                            <a href="" class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <i class="far fa-user-circle w-5"></i>
                                <span>Meu perfil</span>
                            </a>

                            <a href="/assinatura" class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <i class="far fa-gem w-5"></i>
                                <span>Meu plano</span>
                            </a>

                            <a href="/configuracoes" class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <i class="far fa-cogs w-5"></i>
                                <span>configurações</span>
                            </a>

                            <a href="/help" class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <i class="far fa-life-ring w-5"></i>
                                <span>Ajuda & Suporte</span>
                            </a>
                        </div>

                        <div class="border-t border-gray-100"></div>

                        <button class="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                            <i class="fas fa-sign-out-alt w-5"></i>
                            <a href="" class="font-semibold p-auto cursor-pointer py-1">Sair</a>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" aria-label="Abrir menu">
                    <i class="fas fa-bars w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden bg-primary-dark">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/app" class="text-white block px-3 py-2 rounded-md text-base font-medium">Visão Geral</a>
                <a href="/transacoes" class="text-white block px-3 py-2 rounded-md text-base font-medium">Lançamentos</a>
                <a href="/relatorios" class="text-white block px-3 py-2 rounded-md text-base font-medium">Relatórios</a>
                <a href="/lancamentos-gastos" class="text-white block px-3 py-2 rounded-md text-base font-medium">Limite de Gastos</a>
                <a href="/conexao-bancaria" class="text-white block px-3 py-2 rounded-md text-base font-medium">Conexão Bancária</a>
            </div>
        </div>
    </nav>
</template>
