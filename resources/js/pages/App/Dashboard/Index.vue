<script setup>
import { ref } from 'vue';

import {
    // Redes Sociais / Branding
    Github, Linkedin, Youtube, Twitter,
    // Navegação e UI
    ChevronDown, EyeOff, Info, Download, Plus, Minus, Menu, LogOut, Settings,
    // Relatórios e Gráficos
    CalendarRange, CirclePlus, Scale, CloudSun, TrendingUp, Layers, Ellipsis,
    // Menu Usuário e Ações
    User, Gem, ArrowRightLeft, Bell,
    // Categorias/Financeiro
    Home, Wifi, Car, Utensils, Wallet, Star, Square, Circle
} from 'lucide-vue-next';

</script>


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

    <!-- Content -->
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

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            <!-- Minhas Contas -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-[380px] flex flex-col">
                <div class="flex justify-between items-center mb-5 flex-shrink-0">
                    <h2 class="font-bold text-gray-700 text-sm uppercase tracking-tight">Minhas Contas</h2>
                    <button class="text-[10px] font-semibold text-gray-400 flex items-center hover:text-emerald-600 transition-colors uppercase">
                        <EyeOff class="mr-1 w-3 h-3" /> Ocultar
                    </button>
                </div>

                <!-- Empty State -->
                <div class="flex-1 flex flex-col items-center justify-center text-center space-y-3">
                    <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                        <Plus class="w-6 h-6" />
                    </div>
                    <div>
                        <p class="text-sm font-bold text-gray-400">Nenhuma conta encontrada</p>
                        <p class="text-[11px] text-gray-300">Conecte seu banco para gerenciar seu saldo.</p>
                    </div>
                    <button class="mt-2 px-4 py-1.5 text-[11px] font-bold text-emerald-600 border border-emerald-100 rounded-full hover:bg-emerald-50 transition-all uppercase">
                        Conectar Agora
                    </button>
                </div>

                <!-- Footer -->
                <div class="mt-4 pt-3 border-t border-gray-50 flex-shrink-0">
                    <button class="w-full py-2 text-[11px] font-bold text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-all uppercase tracking-wide">
                        + Gerenciar Contas
                    </button>
                </div>
            </div>

            <!-- Maiores Gastos do Mês -->
            <div class="bg-white rounded-md shadow-sm p-6 flex flex-col h-full">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700 text-sm">Maiores Gastos do Mês</h2>
                    <button class="text-[10px] text-gray-400 border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors">
                        Relatório Detalhado
                    </button>
                </div>

                <div class="flex flex-col sm:flex-row items-center gap-8">
                    <div class="relative flex justify-center">
                        <svg class="w-44 h-44 transform -rotate-90 drop-shadow-sm" viewBox="0 0 160 160">
                            <circle cx="80" cy="80" r="70" stroke="#f8fafc" stroke-width="14" fill="transparent" />

                            <circle cx="80" cy="80" r="70" stroke="#8b5cf6" stroke-width="14" fill="transparent"
                                stroke-dasharray="439.8" stroke-dashoffset="357" stroke-linecap="round" />

                            <circle cx="80" cy="80" r="70" stroke="#f472b6" stroke-width="14" fill="transparent"
                                stroke-dasharray="439.8" stroke-dashoffset="412.8"
                                :transform="`rotate(${18.83 * 3.6} 80 80)`" stroke-linecap="round" />

                            <circle cx="80" cy="80" r="70" stroke="#22d3ee" stroke-width="14" fill="transparent"
                                stroke-dasharray="439.8" stroke-dashoffset="432"
                                :transform="`rotate(${(18.83 + 6.18) * 3.6} 80 80)`" stroke-linecap="round" />
                        </svg>

                        <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <span class="text-[9px] text-gray-400 font-black uppercase tracking-tighter">Total Gasto</span>
                            <span class="text-2xl font-black text-slate-800">R$ 2.4k</span>
                        </div>
                    </div>

                    <div class="flex-1 w-full space-y-4">
                        <div v-for="(item, idx) in [
                            { label: 'Presentes', percent: '18,83%', value: 'R$ 465,25', color: 'bg-purple-500' },
                            { label: 'Alimentação', percent: '6,18%', value: 'R$ 152,70', color: 'bg-pink-400' },
                            { label: 'Lazer', percent: '1,81%', value: 'R$ 44,72', color: 'bg-cyan-400' },
                            { label: 'Lazer', percent: '1,81%', value: 'R$ 44,72', color: 'bg-cyan-400' }
                        ]" :key="idx" class="flex justify-between items-center p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                            <div class="flex items-center">
                                <div :class="`w-2.5 h-2.5 rounded-full ${item.color} mr-3 shadow-sm`"></div>
                                <span class="text-xs font-medium text-slate-600">{{ item.label }}</span>
                            </div>
                            <div class="text-right">
                                <p class="text-xs font-bold text-slate-800">{{ item.percent }}</p>
                                <p class="text-[9px] text-slate-400">{{ item.value }}</p>
                            </div>
                        </div>

                        <div class="pt-3 mt-2 border-t border-slate-50">
                            <div class="bg-emerald-50 rounded-lg py-2 px-3 flex items-center justify-center gap-2">
                                <TrendingUp class="w-3 h-3 text-emerald-500" />
                                <p class="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">
                                    -5% em relação ao mês anterior
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cartão de Crédito  -->
            <div class="bg-white rounded-md shadow-sm p-6 flex flex-col min-h-[420px]">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700">Cartão de Crédito</h2>
                    <button class="text-xs text-emerald-500 font-medium hover:underline">Gerenciar</button>
                </div>

                <div class="space-y-4 flex-1 overflow-y-auto">
                    <!-- Empty State -->
                <div class="flex-1 flex flex-col items-center justify-center text-center space-y-4">

                    <div class="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                        <Plus class="w-6 h-6" />
                    </div>

                    <div>
                        <p class="text-sm font-bold text-gray-400">
                            Nenhum cartão encontrado
                        </p>
                        <p class="text-[11px] text-gray-300">
                            Adicione um cartão para acompanhar suas faturas
                        </p>
                    </div>

                    <button class="mt-2 px-4 py-1.5 text-[11px] font-bold text-emerald-600 border border-emerald-100 rounded-full hover:bg-emerald-50 transition-all uppercase">
                        Adicionar Cartão
                    </button>

                </div>
                    <!--
                    <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-800 text-white shadow-lg relative overflow-hidden group transition-transform ">
                        <div class="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

                        <div class="flex justify-between items-start mb-8">
                            <div>
                                <p class="text-[10px] uppercase opacity-80 font-bold tracking-widest">Nubank Platinum</p>
                                <p class="text-base font-medium tracking-[0.2em] mt-1">•••• 1234</p>
                            </div>
                            <div class="w-10 h-6 bg-amber-400/20 rounded-md border border-amber-400/30"></div> </div>

                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[9px] opacity-70 mb-1 font-semibold">VALOR DA FATURA</p>
                                <p class="text-2xl font-black">R$ 840,00</p>
                            </div>
                            <div class="text-right">
                                <span class="text-[9px] bg-white/20 backdrop-blur-md px-2 py-1 rounded-full font-bold uppercase border border-white/10">Fatura aberta</span>
                                <p class="text-[9px] opacity-70 mt-2 font-bold">Vence em 15/10</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-800 text-white shadow-lg relative overflow-hidden group transition-transform ">
                        <div class="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

                        <div class="flex justify-between items-start mb-8">
                            <div>
                                <p class="text-[10px] uppercase opacity-80 font-bold tracking-widest">
                                    Banco Inter
                                </p>
                                <p class="text-base font-medium tracking-[0.2em] mt-1">
                                    •••• 1234
                                </p>
                            </div>
                            <div class="w-10 h-6 bg-amber-400/20 rounded-md border border-amber-400/30"></div>
                        </div>

                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[9px] opacity-70 mb-1 font-semibold">VALOR DA FATURA</p>
                                <p class="text-2xl font-black">R$ 840,00</p>
                            </div>
                            <div class="text-right">
                                <span class="text-[9px] bg-white/20 backdrop-blur-md px-2 py-1 rounded-full font-bold uppercase border border-white/10">Fatura aberta</span>
                                <p class="text-[9px] opacity-70 mt-2 font-bold">Vence em 15/10</p>
                            </div>
                        </div>
                    </div>

                    -->

                    <button
                        class="
                        w-full p-4 border-2 border-dashed border-gray-100 rounded-xl flex flex-col
                        items-center justify-center text-gray-400 hover:border-emerald-200
                        hover:text-emerald-500 hover:cursor-pointer hover:bg-emerald-50/50 transition-all group" >
                        <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                            <Plus class="w-5 h-5" />
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-widest">Novo Cartão</span>
                    </button>
                </div>
            </div>

            <!-- Metas de Outubro -->
            <div class="bg-white rounded-md shadow-sm p-6 flex flex-col min-h-[420px]">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700">Metas de Outubro</h2>
                    <div class="text-right">
                        <span class="text-2xl font-black text-emerald-500">65%</span>
                        <p class="text-[9px] text-gray-400 uppercase font-bold">Progresso Geral</p>
                    </div>
                </div>

                <div class="space-y-5 flex-1 overflow-y-auto">
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-car text-xs"></i>
                                </div>
                                <span class="text-xs font-bold text-gray-700">Transporte</span>
                            </div>
                            <span class="text-xs font-bold text-gray-500">65%</span>
                        </div>

                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-blue-400 h-full w-[65%] transition-all duration-500"></div>
                        </div>

                        <div class="flex justify-between mt-1">
                            <p class="text-[9px] text-gray-400">
                                Gasto: <span class="font-bold text-gray-600">R$ 260,00</span>
                            </p>
                            <p class="text-[9px] text-gray-400">
                                Meta: <span class="font-bold text-gray-600">R$ 400,00</span>
                            </p>
                        </div>
                    </div>

                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-utensils text-xs"></i>
                                </div>
                                <span class="text-xs font-bold text-gray-700">Alimentação</span>
                            </div>
                            <span class="text-xs font-bold text-orange-500">80%</span>
                        </div>
                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-orange-400 h-full w-[80%] transition-all duration-500"></div>
                        </div>
                        <div class="flex justify-between mt-1">
                            <p class="text-[9px] text-gray-400">Gasto: <span class="font-bold text-gray-600">R$ 800,00</span></p>
                            <p class="text-[9px] text-gray-400">Meta: <span class="font-bold text-gray-600">R$ 1.000,00</span></p>
                        </div>
                    </div>
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-utensils text-xs"></i>
                                </div>
                                <span class="text-xs font-bold text-gray-700">Alimentação</span>
                            </div>
                            <span class="text-xs font-bold text-orange-500">80%</span>
                        </div>
                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-orange-400 h-full w-[80%] transition-all duration-500"></div>
                        </div>
                        <div class="flex justify-between mt-1">
                            <p class="text-[9px] text-gray-400">Gasto: <span class="font-bold text-gray-600">R$ 800,00</span></p>
                            <p class="text-[9px] text-gray-400">Meta: <span class="font-bold text-gray-600">R$ 1.000,00</span></p>
                        </div>
                    </div>
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-utensils text-xs"></i>
                                </div>
                                <span class="text-xs font-bold text-gray-700">Alimentação</span>
                            </div>
                            <span class="text-xs font-bold text-orange-500">20%</span>
                        </div>
                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-green-400 h-full w-[20%] transition-all duration-500"></div>
                        </div>
                        <div class="flex justify-between mt-1">
                            <p class="text-[9px] text-gray-400">Gasto: <span class="font-bold text-gray-600">R$ 800,00</span></p>
                            <p class="text-[9px] text-gray-400">Meta: <span class="font-bold text-gray-600">R$ 1.000,00</span></p>
                        </div>
                    </div>

                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-utensils text-xs"></i>
                                </div>
                                <span class="text-xs font-bold text-gray-700">Alimentação</span>
                            </div>
                            <span class="text-xs font-bold text-orange-500">20%</span>
                        </div>
                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-green-400 h-full w-[20%] transition-all duration-500"></div>
                        </div>
                        <div class="flex justify-between mt-1">
                            <p class="text-[9px] text-gray-400">Gasto: <span class="font-bold text-gray-600">R$ 800,00</span></p>
                            <p class="text-[9px] text-gray-400">Meta: <span class="font-bold text-gray-600">R$ 1.000,00</span></p>
                        </div>
                    </div>

                    <button class="w-full py-2 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-lg hover:bg-emerald-100 flex items-center justify-center">
                        <CirclePlus class="w-4 h-4 mr-1" /> Criar Nova Meta
                    </button>
                </div>
            </div>
        </div>

        <!-- Mostrar  Depesas -->
        <div class="mt-6 bg-white rounded-md shadow-sm p-6">
            <div class="space-y-4">
                <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-red-50 text-red-400 rounded-full flex items-center justify-center">
                            <Home class="w-4 h-4" />
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-800">Aluguel
                                <span class="text-[10px] text-orange-500 font-normal ml-2">vence em 2 dias</span>
                            </p>
                            <p class="text-[10px] text-gray-400">Categoria: Casa • Vencimento: 10/11</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm font-bold text-gray-800">R$ 1.200,00</p>
                        <Ellipsis class="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                </div>

                <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-red-50 text-red-400 rounded-full flex items-center justify-center">
                            <Home class="w-4 h-4" />
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-800">Aluguel
                                <span class="text-[10px] text-orange-500 font-normal ml-2">vence em 2 dias</span>
                            </p>
                            <p class="text-[10px] text-gray-400">Categoria: Casa • Vencimento: 10/11</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm font-bold text-gray-800">R$ 1.200,00</p>
                        <Ellipsis class="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                </div>

                <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-red-50 text-red-400 rounded-full flex items-center justify-center">
                            <Home class="w-4 h-4" />
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-800">Aluguel
                                <span class="text-[10px] text-orange-500 font-normal ml-2">vence em 2 dias</span>
                            </p>
                            <p class="text-[10px] text-gray-400">Categoria: Casa • Vencimento: 10/11</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm font-bold text-gray-800">R$ 1.200,00</p>
                        <Ellipsis class="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                </div>

            </div>

            <div class="mt-4 flex justify-between items-center">
                <p class="text-[10px] text-gray-400">
                    3 contas listadas • Total: <span class="font-bold text-gray-600">R$ 1.540,00</span>
                </p>
                <button class="text-[10px] font-bold text-emerald-500 uppercase hover:underline flex items-center">
                    Ver todas as contas <ArrowRightLeft class="ml-1 w-3 h-3" />
                </button>
            </div>
        </div>

        <!-- footer -->
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
    </main>
</template>
