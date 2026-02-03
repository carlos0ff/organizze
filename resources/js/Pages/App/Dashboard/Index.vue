
<template>

        <!-- Header Azul -->
        <div class="h-72 bg-[#10b981] w-full fixed top-0 shadow-md z-0">
            <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
                <!-- Logo -->
                <div class="text-2xl font-bold flex items-center w-1/4">
                    <i class="fas fa-coffee mr-2"></i> Organizze
                </div>

                <!-- Navbar Centralizada -->
                <nav class="hidden md:flex space-x-8 text-sm font-medium justify-center flex-1">
                    <a href="#" class="nav-link active">Visão Geral</a>
                    <a href="#" class="nav-link">Lançamentos</a>
                    <a href="#" class="nav-link">Relatórios</a>
                    <a href="#" class="nav-link">Limite de Gastos</a>
                    <a href="#" class="nav-link">Conexão Bancária</a>
                </nav>

                <!-- Perfil -->
                <div class="flex items-center space-x-4 w-1/4 justify-end">
                    <div class="relative">
                        <i class="fas fa-bell"></i>
                        <span class="absolute -top-2 -right-2 bg-red-500 text-[10px] rounded-full px-1">3</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <img src="https://ui-avatars.com/api/?name=Thiago+Santos&background=ffffff&color=10b981" class="w-8 h-8 rounded-full border-2 border-white">
                        <div class="text-xs hidden sm:block">
                            <p class="font-bold">Thiago Santos</p>
                            <p class="opacity-75">Plano Gratuito</p>
                        </div>
                        <i class="fas fa-chevron-down text-[10px]"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-72 relative z-10"></div>

        <!-- Conteúdo Principal -->
        <main class="relative max-w-7xl mx-auto px-4 pb-12 -mt-48 z-20">

            <!-- Botões no topo (sobrepondo o header) -->
            <div class="flex flex-col md:flex-row justify-between items-end mb-8 text-white">
                <div></div>
                <div class="mt-4 md:mt-0 flex space-x-3">
                    <button class="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center relative z-30">
                        <i class="fas fa-download mr-2"></i> Exportar
                    </button>
                    <button class="bg-white text-emerald-600 px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-emerald-50 transition-all flex items-center relative z-30">
                        <i class="fas fa-plus-circle mr-2"></i> Novo Lançamento
                    </button>
                </div>
            </div>

            <!-- Boas vindas e Acesso Rápido -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div class="lg:col-span-2 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h1 class="text-md font-light text-gray-500">
                                Bom dia, <i class="fas fa-cloud text-blue-400 ml-4 text-[1.5em]"></i>
                            </h1>
                            <p class="text-[22px] text-gray-800/80 flex items-center font-semibold">
                                Rogério Dória
                            </p>
                        </div>
                        <button class="text-xs text-blue-600 font-medium border border-blue-100 px-3 py-1 rounded hover:bg-blue-50">
                            <i class="fas fa-chart-line mr-1"></i> ver relatórios
                        </button>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div>
                            <p class="text-xs text-gray-500 uppercase mb-1">receita mensal</p>
                            <p class="text-xl font-bold text-green-600">R$ 5.500,00</p>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 uppercase mb-1">despesa mensal</p>
                            <p class="text-xl font-bold text-red-500">R$ 2.470,80</p>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 uppercase mb-1">saldo geral <i class="far fa-eye-slash ml-1 cursor-pointer"></i></p>
                            <p class="text-xl font-bold text-green-600">R$ ---</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6">
                    <p class="text-xs font-bold text-gray-400 uppercase mb-4">Acesso rápido</p>
                    <div class="flex justify-between items-center px-2">
                        <div class="text-center group cursor-pointer">
                            <div class="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-400 mb-2 group-hover:bg-red-100 transition-colors">
                                <i class="fas fa-minus"></i>
                            </div>
                            <span class="text-[10px] uppercase font-bold text-gray-500">Despesa</span>
                        </div>
                        <div class="text-center group cursor-pointer">
                            <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-2 group-hover:bg-green-100 transition-colors">
                                <i class="fas fa-plus"></i>
                            </div>
                            <span class="text-[10px] uppercase font-bold text-gray-500">Receita</span>
                        </div>
                        <div class="text-center group cursor-pointer">
                            <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-400 mb-2 group-hover:bg-blue-100 transition-colors">
                                <i class="fas fa-exchange-alt"></i>
                            </div>
                            <span class="text-[10px] uppercase font-bold text-gray-500">Transf.</span>
                        </div>
                        <div class="text-center group cursor-pointer">
                            <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2 group-hover:bg-blue-100 transition-colors">
                                <i class="fas fa-file-import"></i>
                            </div>
                            <span class="text-[10px] uppercase font-bold text-gray-500">Importar</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grid de Widgets -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <!-- Minhas Contas -->
                <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-bold text-gray-700">Minhas Contas</h2>
                        <button class="text-xs text-gray-400 hover:text-gray-600">
                            <i class="fas fa-eye-slash mr-1"></i> Esconder saldo
                        </button>
                    </div>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                                    <i class="fas fa-star"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800">Caixa Econômica</p>
                                    <p class="text-xs text-gray-400">Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-green-600">R$ -----</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs">
                                    <i class="fas fa-square"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800">Caixa Xadrez</p>
                                    <p class="text-xs text-gray-400">Outros</p>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-green-600">R$ -----</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">
                                    <i class="fas fa-wallet"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800">Carteira</p>
                                    <p class="text-xs text-gray-400">Outros</p>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-green-600">R$ -----</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                                    INTER
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800">Inter</p>
                                    <p class="text-xs text-gray-400">Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-green-600">R$ -----</p>
                        </div>
                    </div>
                </div>

                <!-- Maiores Gastos -->
                <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="font-bold text-gray-700">Maiores Gastos do Mês Atual</h2>
                        <button class="text-xs text-gray-400 border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">Ver Relatório</button>
                    </div>
                    <div class="flex items-center">
                        <div class="w-1/2 relative flex justify-center">
                            <div class="w-32 h-32 rounded-full border-16 border-blue-500 border-t-purple-500 border-r-pink-400 border-l-cyan-400"></div>
                        </div>

                        <div class="w-1/2 space-y-2">
                            <div class="flex justify-between items-center text-[11px]">
                                <span class="flex items-center"><i class="fas fa-circle text-purple-500 mr-2 text-[8px]"></i> Presentes e Doações</span>
                                <span class="font-bold">18,83%</span>
                            </div>

                            <div class="flex justify-between items-center text-[11px]">
                                <span class="flex items-center"><i class="fas fa-circle text-pink-400 mr-2 text-[8px]"></i> Alimentação</span>
                                <span class="font-bold">6,18%</span>
                            </div>

                            <div class="flex justify-between items-center text-[11px]">
                                <span class="flex items-center"><i class="fas fa-circle text-cyan-400 mr-2 text-[8px]"></i> Lazer e Hobbies</span>
                                <span class="font-bold">1,81%</span>
                            </div>

                            <div class="flex justify-between items-center text-[11px]">
                                <span class="flex items-center"><i class="fas fa-circle text-blue-300 mr-2 text-[8px]"></i> Saúde e Bem-estar</span>
                                <span class="font-bold">1,25%</span>
                            </div>

                            <div class="flex justify-between items-center text-[11px]">
                                <span class="flex items-center"><i class="fas fa-circle text-yellow-400 mr-2 text-[8px]"></i> Transporte</span>
                                <span class="font-bold">0,92%</span>
                            </div>

                            <div class="flex justify-between items-center text-[11px]">
                                <span class="flex items-center"><i class="fas fa-circle text-red-300 mr-2 text-[8px]"></i> Educação</span>
                                <span class="font-bold">0,45%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cartão de Crédito -->
                <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="font-bold text-gray-700">Cartão de Crédito</h2>
                        <button class="text-xs text-emerald-500 font-medium hover:underline">Gerenciar</button>
                    </div>

                    <div class="space-y-4">
                        <!-- Nubank -->
                        <div class="p-4 rounded-xl bg-linear-to-r from-purple-700 to-purple-600 text-white shadow-md relative overflow-hidden">
                            <div class="flex justify-between items-start mb-4 relative z-10">
                                <div>
                                    <p class="text-[10px] uppercase opacity-80 font-bold">Nubank Platinum</p>
                                    <p class="text-sm font-bold tracking-widest">•••• 1234</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-end relative z-10">
                                <div>
                                    <p class="text-[9px] opacity-70">Vencimento: 15/10</p>
                                    <p class="text-lg font-black">R$ 840,00</p>
                                </div>
                                <div class="flex flex-col items-end gap-2">

                                    <svg class="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                                        <path d="M7.2795 5.4336c-1.1815 0-2.1846.4628-2.9432 1.252h-.002c-.0541-.0022-.1074-.002-.162-.002-1.5436 0-2.9925.8835-3.699 2.2559-.3088.5996-.4234 1.2442-.459 1.9003-.0321.589 0 1.1863 0 1.7696v5.6523H3.184s.0022-2.784 0-5.1777c-.0014-1.6112-.0118-3.0471 0-3.3418.056-1.3937.4372-2.3053 1.1484-3.0508 2.3585.0018 3.8852 1.6091 3.9705 4.168.0196.5874.0254 3.7304.0254 3.7304v3.672h3.1678v-4.965c0-1.5007.0127-2.8006-.0918-3.6952-.292-2.5-1.821-4.168-4.1248-4.168zm8.3903.3008l-3.166.0039v4.9648c0 1.5009-.0127 2.8007.0919 3.6953.2921 2.5001 1.821 4.168 4.1248 4.168 1.1815 0 2.1846-.4628 2.9432-1.252.0542.0023.1093.002.164.002 1.5435 0 2.9905-.8835 3.6971-2.2558.3088-.5997.4233-1.2442.459-1.9004.032-.5889 0-1.1862 0-1.7695V5.7383H20.816s-.0022 2.784 0 5.1777c.0015 1.6113.0119 3.047 0 3.3418-.056 1.3935-.4372 2.3053-1.1483 3.0508-2.3586-.0018-3.8853-1.6091-3.9706-4.168-.0196-.5874-.0273-2.0437-.0273-3.7324Z"/>
                                    </svg>

                                    <!-- Status da fatura -->
                                    <span class="text-[9px] bg-white/20 px-2 py-1 rounded font-bold uppercase">
                                        Fatura aberta
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Banco Inter -->
                        <div class="p-4 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-md relative overflow-hidden">
                            <div class="flex justify-between items-start mb-4 relative z-10">
                                <div>
                                    <p class="text-[10px] uppercase opacity-80 font-bold">Banco Inter Gold</p>
                                    <p class="text-sm font-bold tracking-widest">•••• 5678</p>
                                </div>
                            </div>

                            <div class="flex justify-between items-end relative z-10">
                                <div>
                                    <p class="text-[9px] opacity-70">Vencimento: 20/10</p>
                                    <p class="text-lg font-black">R$ 1.230,00</p>
                                </div>
                                <div class="flex flex-col items-end gap-2">
                                    <svg class="w-12 h-5" viewBox="0 0 201.5 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                        <g>
                                            <path d="M8.2,5.9c0,0.1,0,0.2,0,0.5v1c0,0.2,0,0.4,0,0.5c0.1,3.2,2.8,5.8,6.2,5.9c0.1,0,0.3,0,0.5,0c0.3,0,0.4,0,0.5,0
                                                c3.4-0.1,6.1-2.7,6.2-5.9c0-0.1,0-0.2,0-0.5v-1c0-0.3,0-0.4,0-0.5c-0.1-3.2-2.8-5.8-6.2-5.9c-0.1,0-0.2,0-0.5,0c-0.3,0-0.4,0-0.5,0
                                                C11.1,0.1,8.3,2.7,8.2,5.9L8.2,5.9z" fill="white" />

                                            <path d="M96.7,28.6v26.2c0,4.6,1.8,6.6,7.3,6.6c2.3,0,4.6-0.6,6-1.1v10.6c-2.3,0.8-5.9,1.2-8.8,1.2
                                                c-11.7,0-17.2-5.8-17.2-16V3.1h12.7V20H110v8.6L96.7,28.6L96.7,28.6z M96.7,28.6" fill="white" />
                                            <path d="M114.3,44.5c0-15.5,9.8-26.1,25.5-26.1c16.7,0,25,12.2,24.2,29.9h-36.6c0.7,9.1,4.9,13.7,12.5,13.7
                                                c6.4,0,9.8-3.1,11.2-7.4h12.4C161.1,65.3,152.6,72,139.7,72c-15.9,0-25.5-10.5-25.5-26.2V44.5z M139.6,28.6
                                                c-7,0-11.1,3.7-12.3,11.1l23.8-0.2C150.4,32.6,146.7,28.6,139.6,28.6L139.6,28.6z M139.6,28.6" fill="white" />
                                            <path d="M58.4,18.4c-8.2,0-13.2,4.8-15.8,9.6l-0.6-8H29.9v50.5h12.7V42.1c0-8.4,4.4-13.5,11.2-13.5S63,33,63,40.7v29.7
                                                h12.7V38C75.7,26.7,70.8,18.4,58.4,18.4L58.4,18.4z M183.7,28c3.2-6.3,9.8-9.6,14.8-9.6c0.9,0,2.3,0.1,3,0.3v9.9
                                                c-1.2-0.1-2.5-0.2-3.7-0.2c-9,0-14.1,5.4-14.1,14.7v27.4H171V20h12.3L183.7,28z M0,20v8.6h8.6v41.9h12.7V20H0z M0,20" fill="white"/>
                                        </g>
                                    </svg>

                                    <!-- Status da fatura -->
                                    <span class="text-[9px] bg-red-500 px-2 py-1 rounded font-bold uppercase">
                                        Vencida
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Botão Adicionar Cartão -->
                        <button class="w-full p-4 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-emerald-300 hover:text-emerald-500 hover:bg-emerald-50 transition-all group">
                            <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                                <i class="fas fa-plus"></i>
                            </div>
                            <span class="text-xs font-bold uppercase tracking-wider">Adicionar Cartão de Crédito</span>
                        </button>
                    </div>
                </div>

                <!-- Metas de Outubro -->
                <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-bold text-gray-700">Metas de Outubro</h2>
                        <span class="text-xl font-bold text-green-500">65%</span>
                    </div>
                    <div class="space-y-3">
                        <div class="p-3 border border-gray-100 rounded-lg flex items-center space-x-4">
                            <div class="relative w-10 h-10 flex items-center justify-center">
                                <svg class="w-full h-full transform -rotate-90">
                                    <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="3" fill="transparent" class="text-gray-100" />
                                    <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="113" stroke-dashoffset="39" class="text-blue-400" />
                                </svg>
                                <span class="absolute text-[8px] font-bold">65%</span>
                            </div>
                            <div class="flex-1">
                                <p class="text-xs font-bold text-gray-700">Transporte</p>
                                <p class="text-[10px] text-gray-400">Meta: R$ 400,00 • Gasto: R$ 260,00</p>
                            </div>
                        </div>
                        <div class="p-3 border border-gray-100 rounded-lg flex items-center space-x-4">
                            <div class="relative w-10 h-10 flex items-center justify-center">
                                <svg class="w-full h-full transform -rotate-90">
                                    <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="3" fill="transparent" class="text-gray-100" />
                                    <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="113" stroke-dashoffset="22" class="text-orange-400" />
                                </svg>
                                <span class="absolute text-[8px] font-bold">80%</span>
                            </div>
                            <div class="flex-1">
                                <p class="text-xs font-bold text-gray-700">Alimentação</p>
                                <p class="text-[10px] text-gray-400">Meta: R$ 1.000,00 • Gasto: R$ 800,00</p>
                            </div>
                        </div>
                        <button class="w-full text-center text-[10px] font-bold text-green-500 uppercase pt-2 hover:underline">Análise Completa</button>
                    </div>
                </div>

                <!-- Contas a Pagar -->
                <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 lg:col-span-2">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-bold text-gray-700">Contas a Pagar</h2>
                        <div class="flex items-center text-xs text-gray-500 cursor-pointer">
                            Próximos 7 dias <i class="fas fa-chevron-down ml-2 text-[10px]"></i>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 bg-red-50 text-red-400 rounded-full flex items-center justify-center text-xs">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800">Aluguel <span class="text-[10px] text-orange-500 font-normal ml-2">vence em 2 dias</span></p>
                                    <p class="text-[10px] text-gray-400">Categoria: Casa • Vencimento: 10/11</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <p class="text-sm font-bold text-gray-800">R$ 1.200,00</p>
                                <i class="fas fa-ellipsis-h text-gray-300 cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center text-xs">
                                    <i class="fas fa-wifi"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800">Internet <span class="text-[10px] text-green-500 font-normal ml-2">em 5 dias</span></p>
                                    <p class="text-[10px] text-gray-400">Categoria: Serviços • Vencimento: 13/11</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <p class="text-sm font-bold text-gray-800">R$ 120,00</p>
                                <i class="fas fa-ellipsis-h text-gray-300 cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 bg-yellow-50 text-yellow-500 rounded-full flex items-center justify-center text-xs">
                                    <i class="fas fa-bolt"></i>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800">Luz <span class="text-[10px] bg-red-50 text-red-500 px-1 rounded font-normal ml-2">vencido</span></p>
                                    <p class="text-[10px] text-gray-400">Categoria: Casa • Vencimento: 05/11</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <p class="text-sm font-bold text-red-500">-R$ 220,00</p>
                                <i class="fas fa-ellipsis-h text-gray-300 cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-between items-center">
                        <p class="text-[10px] text-gray-400">3 contas listadas • Total: <span class="font-bold text-gray-600">R$ 1.540,00</span></p>
                        <button class="text-[10px] font-bold text-green-500 uppercase hover:underline">Ver todas as contas</button>
                    </div>
                </div>

            </div>

            <!-- Footer -->
            <footer class="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center text-[10px] text-gray-400">
                <p>© 2025 Seu Projeto. Todos os direitos reservados.</p>
                <div class="flex space-x-4">
                    <i class="fab fa-github cursor-pointer hover:text-gray-600"></i>
                    <i class="fab fa-linkedin cursor-pointer hover:text-gray-600"></i>
                    <i class="fab fa-twitter cursor-pointer hover:text-gray-600"></i>
                </div>
            </footer>
        </main>

</template>
