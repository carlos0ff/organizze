<template>
    <nav class="bg-[#22c75e] shadow-lg fixed top-0 left-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="shrink-0 flex items-center">
                        <img style="filter: brightness(0) invert(1);"
                             src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                             alt="Organizze" class="logo h-8 w-auto" />
                    </div>
                </div>

                <div class="hidden md:flex items-center space-x-8">
                    <a href="/app" class="relative text-white font-medium text-sm hover:after:w-10">Visão Geral</a>
                    <a href="#lancamentos" class="relative text-white font-medium text-sm hover:after:w-10">Lançamentos</a>

                    <div class="relative group">
                        <a href="#relatorios" class="flex items-center gap-1 text-white font-medium text-sm">
                            Relatórios
                            <ChevronDown class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                        </a>

                        <div class="absolute left-0 mt-3 w-64 rounded-lg bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-200">
                            <a href="#relatorios/mensal" class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-t-xl">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-indigo-500">
                                    <CalendarRange class="w-4 h-4" />
                                </span>
                                Mensal
                            </a>
                            <a href="#relatorios/anual" class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-blue-500">
                                    <TrendingUp class="w-4 h-4" />
                                </span>
                                Anual
                            </a>
                            <a href="#relatorios/categorias" class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-purple-500">
                                     <Layers class="w-4 h-4" />
                                </span>
                                Por Categoria
                            </a>
                            <a href="#relatorios/receitas-despesas" class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-green-500">
                                    <Scale class="w-4 h-4" />
                                </span>
                                Receitas vs Despesas
                            </a>
                        </div>
                    </div>

                    <a href="#limites-gastos" class="text-white font-medium text-sm">Limite de Gastos</a>
                    <a href="#conexao-bancaria" class="text-white font-medium text-sm">Conexão Bancária</a>
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
                        <button class="flex items-center gap-3">
                            <img src="https://i.pravatar.cc/100?img=12" class="h-9 w-9 rounded-full ring-2 ring-white/30" />
                            <div class="hidden lg:flex flex-col items-start">
                                <span class="text-sm text-white font-medium">Thiago Santos</span>
                                <span class="text-[10px] text-white/80">Plano Gratuito</span>
                            </div>
                            <ChevronDown class="w-4 h-4 text-white" />
                        </button>

                        <div class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                            <div class="p-2">
                                <a href="#" class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"><User class="w-4 h-4" /> Perfil</a>
                                <a href="#" class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"><Gem class="w-4 h-4 text-amber-500" /> Meu Plano</a>
                                <a href="#" class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"><Settings class="w-4 h-4" /> Configurações</a>
                                <div class="border-t my-1"></div>
                                <button class="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"><LogOut class="w-4 h-4" /> Sair</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div class="lg:col-span-2 bg-white rounded-md shadow-sm p-6">
                <div class="flex justify-between items-start mb-6">
                    <h1 class="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                        Bom dia, Rogério Dória <CloudSun class="text-amber-400" />
                    </h1>
                    <button class="flex items-center text-xs text-emerald-600 font-medium border border-emerald-100 px-3 py-1 rounded hover:bg-emerald-50">
                        <TrendingUp class="w-3 h-3 mr-1" /> ver relatórios
                    </button>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <p class="text-[10px] text-gray-400 uppercase font-bold">receita mensal</p>
                        <p class="text-xl font-bold text-emerald-600">R$ 5.500,00</p>
                    </div>
                    <div>
                        <p class="text-[10px] text-gray-400 uppercase font-bold">despesa mensal</p>
                        <p class="text-xl font-bold text-red-500">R$ 2.470,80</p>
                    </div>
                    <div class="group cursor-pointer">
                        <p class="text-[10px] text-gray-400 uppercase font-bold flex items-center">
                            saldo geral <EyeOff class="ml-1 w-3 h-3" />
                        </p>
                        <p class="text-xl font-bold text-emerald-600">R$ ---</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-md shadow-sm p-6">
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-4">Acesso rápido</p>
                <div class="flex justify-between items-center">
                    <div class="text-center group cursor-pointer">
                        <div class="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-400 mb-2 group-hover:bg-red-100 transition-colors">
                            <Minus class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Despesa</span>
                    </div>
                    <div class="text-center group cursor-pointer">
                        <div class="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-2 group-hover:bg-emerald-100 transition-colors">
                            <Plus class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Receita</span>
                    </div>
                    <div class="text-center group cursor-pointer">
                        <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-400 mb-2 group-hover:bg-blue-100 transition-colors">
                            <ArrowRightLeft class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Transf.</span>
                    </div>
                    <div class="text-center group cursor-pointer">
                        <div class="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2 group-hover:bg-emerald-100 transition-colors">
                            <Download class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Importar</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white rounded-md shadow-sm p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-bold text-gray-700">Minhas Contas</h2>
                    <button class="text-xs text-gray-400 flex items-center hover:text-emerald-600">
                        <EyeOff class="mr-1 w-3 h-3" /> Esconder saldo
                    </button>
                </div>
                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                                <Star class="w-4 h-4" />
                            </div>
                            <div>
                                <p class="text-sm font-bold text-gray-800">Caixa Econômica</p>
                                <p class="text-xs text-gray-400">Conta Corrente</p>
                            </div>
                        </div>
                        <p class="text-sm font-bold text-emerald-600">R$ 4.200,00</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
                                <Square class="w-4 h-4" />
                            </div>
                            <div>
                                <p class="text-sm font-bold text-gray-800">Caixa Xadrez</p>
                                <p class="text-xs text-gray-400">Outros</p>
                            </div>
                        </div>
                        <p class="text-sm font-bold text-emerald-600">R$ 150,00</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-md shadow-sm p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700">Metas</h2>
                    <span class="text-2xl font-black text-emerald-500">65%</span>
                </div>
                <div class="space-y-4">
                    <div class="group">
                        <div class="flex justify-between items-center mb-1">
                            <div class="flex items-center gap-2">
                                <Car class="w-4 h-4 text-blue-500" />
                                <span class="text-xs font-bold text-gray-700">Transporte</span>
                            </div>
                            <span class="text-xs font-bold text-gray-500">65%</span>
                        </div>
                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-blue-400 h-full w-[65%]"></div>
                        </div>
                    </div>
                    <button class="w-full py-2 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-lg hover:bg-emerald-100 flex items-center justify-center">
                        <CirclePlus class="w-4 h-4 mr-1" /> Criar Nova Meta
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
