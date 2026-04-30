<script setup>

</script>

<template>

    <!-- NAV -->
    <nav class="bg-[#22c75e] shadow-lg fixed top-0 left-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="shrink-0 flex items-center">
                        <img
                            style="filter: brightness(0) invert(1)"
                            src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                            alt="Organizze"
                            class="logo h-8 w-auto"
                        />
                    </div>
                </div>

                <div class="hidden md:flex items-center space-x-8">
                    <a href="/app" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">Visão Geral</a>
                    <a href="#lancamentos" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">Lançamentos</a>

                    <div class="relative group">
                        <a href="#relatorios" class="flex items-center gap-1 text-white font-medium text-sm">
                            Relatórios
                            <ChevronDown class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                        </a>

                        <div class="absolute left-0 mt-3 w-64 rounded-lg bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-200" >
                            <a href="#relatorios/mensal" class="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-t-xl" >
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-indigo-500">
                                    <CalendarRange class="w-4 h-4" />
                                </span>
                                Mensal
                            </a>
                            <a href="#relatorios/anual" class="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-blue-500">
                                    <TrendingUp class="w-4 h-4" />
                                </span>
                                Anual
                            </a>
                            <a href="#relatorios/categorias" class="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-purple-500">
                                    <Layers class="w-4 h-4" />
                                </span>
                                Por Categoria
                            </a>
                            <a href="#relatorios/receitas-despesas" class="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100" >
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-green-500">
                                    <Scale class="w-4 h-4" />
                                </span>
                                Receitas vs Despesas
                            </a>
                        </div>
                    </div>

                    <a href="#limites-gastos" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">
                        Limite de Gastos
                    </a>
                    <a href="#conexao-bancaria" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">Conexão Bancária</a>
                </div>

                <div class="flex items-center space-x-4">
                    <button class="relative text-white hover:text-gray-200 transition-colors">
                        <Bell class="w-6 h-6" />
                        <span class="absolute top-0 right-0 flex h-2.5 w-2.5">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                    </button>

                    <div class="relative group">
                        <button class="flex items-center gap-2">
                            <img src="https://i.pravatar.cc/100?img=12" class="h-9 w-9 rounded-full ring-2 ring-white/30" />
                            <div class="hidden lg:flex flex-col items-start">
                                <span class="text-sm text-white font-medium">Thiago Santos</span>
                                <span class="text-[10px] text-white/80">Plano Gratuito</span>
                            </div>
                            <ChevronDown class="w-4 h-4 text-white" />
                        </button>

                        <div class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                            <div class="p-2">
                                <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">
                                    <User class="w-4 h-4" /> Perfil
                                </a>
                                <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">
                                    <Gem class="w-4 h-4 text-amber-500" /> Meu Plano
                                </a>
                                <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">
                                    <Settings class="w-4 h-4" /> Configurações
                                </a>

                                <div class="border-t my-1"></div>

                                <button class="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                    <LogOut class="w-4 h-4" /> Sair
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
