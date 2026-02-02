<script setup>
import { ref } from 'vue';

/** Elementos  **/
import Navbar from '@/Components/layout/Navbar.vue';
import Footer from '@/Components/layout/Footer.vue';

</script>

<template>
    <div class="min-h-screen flex flex-col bg-gray-50">

        <!-- Navbar -->
        <Navbar />

        <!-- Content -->
            <main class="flex-1 pt-12 lg:pt-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                    <section class="mt-8">
                        <!-- Card Principal com sombra bem leve -->
                        <div class="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] p-6 lg:p-8 border border-gray-50 max-w-7xl mx-auto">
                            <div class="flex flex-col lg:flex-row items-center justify-between gap-10">

                                <!-- BLOCO 1 - GREETING + RECEITA/DESPESA -->
                                <div class="flex-1 w-full">
                                    <!-- Greeting -->
                                    <div class="mb-6">
                                        <p class="text-[13px] text-gray-400 mb-1 font-medium">Bom dia,</p>
                                        <div class="flex items-center gap-2">
                                            <h1 class="text-xl font-bold text-gray-600 tracking-tight">Rogério Dória</h1>
                                            <span class="text-2xl">🌤️</span>
                                        </div>
                                    </div>

                                    <!-- Receita e Despesa -->
                                    <div class="flex gap-5">
                                        <!-- Card Receita -->
                                        <div class="bg-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.03),0_4px_6px_-2px_rgba(0,0,0,0.02)] border border-gray-50/50 px-6 py-5 flex-1 flex flex-col items-center justify-center min-h-[110px] transition-all hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)]">
                                            <p class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">receita mensal</p>
                                            <p class="text-xl font-extrabold text-green-500/90">R$ 823,95</p>
                                        </div>

                                        <!-- Card Despesa -->
                                        <div class="bg-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.03),0_4px_6px_-2_rgba(0,0,0,0.02)] border border-gray-50/50 px-6 py-5 flex-1 flex flex-col items-center justify-center min-h-[110px] transition-all hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)]">
                                            <p class="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">despesa mensal</p>
                                            <p class="text-xl font-extrabold text-red-400/90">R$ 1.319.61</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- DIVISOR 1 -->
                                <div class="hidden lg:block w-px h-28 bg-gray-100/80"></div>

                                <!-- BLOCO 2 - SALDO GERAL -->
                                <div class="flex flex-col items-center lg:items-start justify-between h-full py-1">
                                    <div class="text-center lg:text-left mb-6">
                                        <p class="text-[10px] tracking-widest text-gray-400 mb-2 font-semibold uppercase">Saldo geral</p>
                                        <div class="flex items-center gap-3">
                                            <p class="text-xl font-extrabold text-gray-600/90">R$ 22.321,25</p>
                                            <button class="text-gray-400 hover:text-gray-500 transition-all duration-75 py-2" title="Mostrar / ocultar saldo">
                                                <i class="fas fa-eye text-lg hover:text-sky-500 cursor-pointer"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Ver Relatórios -->
                                    <a href="#" class="bg-white rounded-md shadow-[0_6px_14px_-4px_rgba(0,0,0,0.04)] border border-gray-100 px-4 py-2 flex items-center gap-2 text-gray-600 hover:bg-sky-50/60 hover:border-sky-100 hover:shadow-[0_12px_20px_-6px_rgba(0,0,0,0.06)] active:scale-[0.97] ransition-all duration-300 group w-full">
                                        <i class="fas fa-chart-line text-base transition-transform duration-300 group-hover:scale-110 group-hover:text-sky-500"></i>
                                        <span class="text-xs font-semibold transition-colors duration-300 group-hover:text-sky-600">
                                            Ver relatórios
                                        </span>
                                    </a>
                                </div>

                                <!-- DIVISOR 2 -->
                                <div class="hidden lg:block w-px h-28 bg-gray-100/80"></div>

                                <!-- BLOCO 3 - ACESSO RÁPIDO -->
                                <div class="w-full lg:w-auto">
                                    <h3 class="text-[15px] font-bold text-gray-600 mb-6 text-center lg:text-left tracking-tight">Acesso rápido</h3>
                                    <div class="flex justify-center lg:justify-start gap-4">
                                        <!-- DESPESA -->
                                        <button class="flex flex-col items-center bg-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.03),0_4px_6px_-2px_rgba(0,0,0,0.02)] border border-gray-50/50 p-5 w-[100px] transition-all hover:shadow-[0_20_25px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 group">
                                            <div class="w-12 h-12 rounded-full border-[2.5px] border-red-500/40 flex items-center justify-center mb-3 group-hover:border-red-400 transition-colors">
                                                <i class="far fa-minus text-2xl text-red-600"></i>
                                            </div>
                                            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter group-hover:text-gray-600 transition-colors">DESPESA</span>
                                        </button>

                                        <!-- RECEITA -->
                                        <button class="flex flex-col items-center bg-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.03),0_4px_6px_-2px_rgba(0,0,0,0.02)] border border-gray-50/50 p-5 w-[100px] transition-all hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 group">
                                            <div class="w-12 h-12 rounded-full border-[2.5px] border-green-400/40 flex items-center justify-center mb-3 group-hover:border-green-400 transition-colors">
                                                <i class="fas fa-plus text-2xl text-green-600"></i>
                                            </div>
                                            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter group-hover:text-gray-600 transition-colors">RECEITA</span>
                                        </button>

                                        <!-- TRANSFERÊNCIA -->
                                        <button class="flex flex-col items-center bg-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.03),0_4px_6px_-2px_rgba(0,0,0,0.02)] border border-gray-50/50 p-5 w-[100px] transition-all hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 group">
                                            <div class="w-12 h-12 rounded-full border-[2.5px] border-gray-200 flex items-center justify-center mb-3 group-hover:border-gray-300 transition-colors">
                                                <i class="fad fa-exchange-alt text-gray-400 text-lg"></i>
                                            </div>
                                            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter group-hover:text-gray-600 transition-colors">TRANSF.</span>
                                        </button>

                                        <!-- IMPORTAR -->
                                        <button class="flex flex-col items-center bg-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.03),0_4px_6px_-2px_rgba(0,0,0,0.02)] border border-gray-50/50 p-5 w-[100px] transition-all hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 group">
                                            <div class="w-12 h-12 rounded-full border-[2.5px] border-sky-400/40 flex items-center justify-center mb-3 group-hover:border-sky-400 transition-colors">
                                                <i class="fad fa-download text-sky-400 fa-lg"></i>
                                            </div>
                                            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter group-hover:text-gray-600 transition-colors">IMPORTAR</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- PRINCIPAL: Minhas Contas + Maiores Gastos -->
                    <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-8">
                        <div class="space-y-6">
                            <!-- TUTORIAL: PRIMEIROS PASSOS -->
                            <div class="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 mt-5 hidden">
                                <div class="flex items-center justify-between mb-6">
                                    <div class="flex items-center gap-4">
                                        <!-- Ć¨cone -->
                                        <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                                            <i class="fas fa-chart-line text-green-500 text-xl"></i>
                                        </div>
                                        <!-- Texto -->
                                        <div>
                                            <h3 class="text-base font-bold text-gray-700">Primeiros passos</h3>
                                            <p class="text-sm text-gray-400">1 de 5 tarefas completas</p>
                                        </div>
                                    </div>
                                    <!-- BotĆ£o Continuar -->
                                    <button class="bg-green-100/80 hover:bg-green-100 text-green-700 font-bold py-2.5 px-6 rounded-xl transition-colors text-sm cursor-pointer">
                                        Continuar
                                    </button>
                                </div>

                                <!-- Barra de Progresso Segmentada -->
                                <div class="flex gap-2 h-2">
                                    <div class="flex-1 bg-green-500 rounded-full"></div>
                                    <div class="flex-1 bg-gray-100 rounded-full"></div>
                                    <div class="flex-1 bg-gray-100 rounded-full"></div>
                                    <div class="flex-1 bg-gray-100 rounded-full"></div>
                                    <div class="flex-1 bg-gray-100 rounded-full"></div>
                                </div>
                            </div>

                            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mt-5">
                                <div class="text-lg font-semibold text-gray-600 mb-4">
                                    <h3 class="text-[#787878] font-semibold mb-4 capitalize text-lg">minhas contas</h3>
                                    <p class="flex items-center justify-between text-gray-500 text-sm cursor-pointer mb-6">
                                        Esconder saldo das contas poupanças / investimentos
                                        <i class="fas fa-eye-slash fa-md text-gray-400 hover:text-blue-500"></i>
                                    </p>

                                    <!-- Lista de Contas com Novo Design -->
                                    <div class="divide-y divide-gray-50">
                                        <div class="flex items-center justify-between py-4">
                                            <div class="flex items-center gap-4">
                                                <div class="relative">
                                                    <div class="w-11 h-11 bg-[#EC0000] rounded-full flex items-center justify-center shadow-sm">
                                                        <i class="fas fa-university text-white text-lg"></i>
                                                    </div>
                                                    <div class="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                                        <i class="fas fa-link text-[7px] text-white"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="text-[14px] font-bold text-gray-700 leading-tight">Conta Santander</p>
                                                    <p class="text-[12px] text-gray-400 font-normal">Conta conectada</p>
                                                </div>
                                            </div>
                                            <p class="text-[15px] font-bold text-blue-700">
                                                <span>R$ 1.486,45</span>
                                            </p>
                                        </div>

                                        <!-- Caixa -->
                                        <div class="flex items-center justify-between py-4">
                                            <div class="flex items-center gap-4">
                                                <div class="w-11 h-11 bg-[#005CA9] rounded-full flex items-center justify-center shadow-sm">
                                                    <i class="fas fa-x text-orange-400 text-lg font-black"></i>
                                                </div>
                                                <div>
                                                    <p class="text-[14px] font-bold text-gray-700 leading-tight">Conta Caixa Econômica</p>
                                                    <p class="text-[12px] text-gray-400 font-normal">Conta manual</p>
                                                </div>
                                            </div>
                                            <p class="text-[15px] font-bold text-blue-700">
                                                <span>R$ 5.468,99</span>
                                            </p>
                                        </div>

                                        <!-- Inter -->
                                        <div class="flex items-center justify-between py-4">
                                            <div class="flex items-center gap-4">
                                                <div class="w-11 h-11 bg-[#FF7A00] rounded-full flex items-center justify-center shadow-sm">
                                                    <span class="text-white font-bold text-[10px] italic">inter</span>
                                                </div>
                                                <div>
                                                    <p class="text-[14px] font-bold text-gray-700 leading-tight">Conta Inter</p>
                                                    <p class="text-[12px] text-gray-400 font-normal">Conta manual</p>
                                                </div>
                                            </div>
                                            <p class="text-[15px] font-bold text-blue-700">
                                                <span>R$ 3.645,00</span>
                                            </p>
                                        </div>

                                        <!-- Nubank -->
                                        <div class="flex items-center justify-between py-4">
                                            <div class="flex items-center gap-4">
                                                <div class="relative">
                                                    <div class="w-11 h-11 bg-[#8A05BE] rounded-full flex items-center justify-center shadow-sm">
                                                        <span class="text-white font-bold text-base">nu</span>
                                                    </div>
                                                    <div class="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                                        <i class="fas fa-link text-[7px] text-white"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="text-[14px] font-bold text-gray-700 leading-tight">Conta Nubank</p>
                                                    <p class="text-[12px] text-gray-400 font-normal">Conta conectada</p>
                                                </div>
                                            </div>
                                            <p class="text-[15px] font-bold text-blue-700">
                                                <span>R$ 4.345,17</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Cartão de Creditos -->
                            <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <div class="flex items-center justify-between mb-4">
                                    <h4 class="text-lg font-semibold text-gray-900">Cartão de Crédito</h4>
                                    <a href="#cartoes" class="text-sm font-medium text-primary hover:text-primary-dark">Gerenciar</a>
                                </div>

                                <div class="space-y-4">
                                    <div class="rounded-xl p-4 transition">
                                        <div class="flex items-start justify-between gap-4">
                                            <div class="flex items-center gap-3">
                                                <div class="w-12 h-12 rounded-xl bg-linear-to-br from-purple-600 to-purple-500 flex items-center justify-center ring-1 ring-purple-300/40 shadow-sm">
                                                    <i class="fas fa-credit-card text-white text-lg"></i>
                                                </div>
                                                <div>
                                                    <div class="flex items-center gap-2">
                                                        <p class="font-semibold text-gray-900">Nubank • <span class="text-gray-600 text-sm">•••• 1234</span></p>
                                                        <i class="fab fa-cc-mastercard text-[#EB001B] text-lg" title="Mastercard" aria-label="Bandeira Mastercard"></i>
                                                    </div>
                                                    <p class="text-xs text-gray-500">
                                                        Fechamento: <span class="font-medium text-gray-700">10/10</span> •
                                                        Vencimento: <span class="font-medium text-gray-700">15/10</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <!-- Direita: status -->
                                            <div class="text-right">
                                                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700">Fatura aberta</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="rounded-xl p-4 transition">
                                    <div class="flex items-start justify-between gap-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center ring-1 ring-orange-300/40 shadow-sm">
                                                <i class="fas fa-credit-card text-white text-lg"></i>
                                            </div>
                                        <div>
                                            <div class="flex items-center gap-2">
                                                <p class="font-semibold text-gray-900">Inter • <span class="text-gray-600 text-sm">•••• 9876</span></p>
                                                <i class="fab fa-cc-visa text-blue-600 text-lg" title="Visa" aria-label="Bandeira Visa"></i>
                                            </div>
                                            <p class="text-xs text-gray-500">
                                                Fechamento: <span class="font-medium text-gray-700">17/10</span> •
                                                Vencimento: <span class="font-medium text-gray-700">20/10</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="text-right">
                                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-100 text-red-700">Vencido</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Coluna da direita: Charts, Relatórios de metas -->
                    <div class="space-y-6">
                        <!-- CARD: GRÁFICO DE DESPESAS POR CATEGORIA -->
                        <div class="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 mt-5">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-[#787878] font-semibold capitalize">Despesas por Categoria</h3>
                                <select class="text-xs text-gray-500 bg-gray-50 border-none rounded-lg px-2 py-1 focus:ring-0 cursor-pointer">
                                    <option>Este mês</option>
                                    <option>Mês passado</option>
                                </select>
                            </div>

                            <div class="flex flex-col md:flex-row items-center gap-8">
                                <!-- Gráfico Donut Simulado com CSS -->
                                <div class="relative w-40 h-40">
                                    <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
                                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-gray-100" stroke-width="3.5"></circle>
                                        <!-- Alimentação (40%) -->
                                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-orange-400" stroke-width="3.5" stroke-dasharray="40, 100" stroke-dashoffset="0"></circle>
                                        <!-- Moradia (30%) -->
                                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-blue-500" stroke-width="3.5" stroke-dasharray="30, 100" stroke-dashoffset="-40"></circle>
                                        <!-- Transporte (20%) -->
                                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-purple-500" stroke-width="3.5" stroke-dasharray="20, 100" stroke-dashoffset="-70"></circle>
                                        <!-- Outros (10%) -->
                                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-green-500" stroke-width="3.5" stroke-dasharray="10, 100" stroke-dashoffset="-90"></circle>
                                    </svg>
                                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                                        <span class="text-xs text-gray-400 uppercase font-medium">Total</span>
                                        <span class="text-sm font-bold text-gray-700">R$ 2.470</span>
                                    </div>
                                </div>

                                <!-- Legenda -->
                                <div class="flex-1 space-y-3 w-full">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <span class="w-3 h-3 rounded-full bg-orange-400"></span>
                                            <span class="text-sm text-gray-600">Alimentação</span>
                                        </div>
                                        <span class="text-sm font-bold text-gray-700">40%</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <span class="w-3 h-3 rounded-full bg-blue-500"></span>
                                            <span class="text-sm text-gray-600">Moradia</span>
                                        </div>
                                        <span class="text-sm font-bold text-gray-700">30%</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <span class="w-3 h-3 rounded-full bg-purple-500"></span>
                                            <span class="text-sm text-gray-600">Transporte</span>
                                        </div>
                                        <span class="text-sm font-bold text-gray-700">20%</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <span class="w-3 h-3 rounded-full bg-green-500"></span>
                                            <span class="text-sm text-gray-600">Outros</span>
                                        </div>
                                        <span class="text-sm font-bold text-gray-700">10%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- CARD: METAS FINANCEIRAS -->
                        <div class="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-[#787878] font-semibold capitalize">Minhas Metas</h3>
                                <button class="text-blue-600 text-xs font-bold hover:underline cursor-pointer">Ver todas</button>
                            </div>

                            <div class="space-y-6">
                                <!-- Meta 1: Reserva de Emergência -->
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                                                <i class="fas fa-shield-alt text-blue-500"></i>
                                            </div>
                                            <div>
                                                <p class="text-sm font-bold text-gray-700">Reserva de Emergência</p>
                                                <p class="text-[11px] text-gray-400">Meta: R$ 15.000,00</p>
                                            </div>
                                        </div>
                                        <span class="text-sm font-bold text-blue-600">65%</span>
                                    </div>
                                    <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div class="bg-blue-500 h-full rounded-full" style="width: 65%"></div>
                                    </div>
                                </div>

                                <!-- Meta 2: Viagem de Férias -->
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                                                <i class="fas fa-plane text-orange-400"></i>
                                            </div>
                                            <div>
                                                <p class="text-sm font-bold text-gray-700">Viagem de Férias</p>
                                                <p class="text-[11px] text-gray-400">Meta: R$ 5.000,00</p>
                                            </div>
                                        </div>
                                        <span class="text-sm font-bold text-orange-500">30%</span>
                                    </div>
                                    <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div class="bg-orange-400 h-full rounded-full" style="width: 30%"></div>
                                    </div>
                                </div>

                                <!-- Meta 3: Novo MacBook -->
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                                                <i class="fas fa-laptop text-purple-500"></i>
                                            </div>
                                            <div>
                                                <p class="text-sm font-bold text-gray-700">Novo MacBook</p>
                                                <p class="text-[11px] text-gray-400">Meta: R$ 12.000,00</p>
                                            </div>
                                        </div>
                                        <span class="text-sm font-bold text-purple-600">15%</span>
                                    </div>
                                    <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div class="bg-purple-500 h-full rounded-full" style="width: 15%"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Botão Adicionar Meta -->
                            <button class="w-full mt-6 py-3 border-2 border-dashed border-gray-100 rounded-2xl text-gray-400 text-sm font-medium hover:border-blue-200 hover:text-blue-500 transition-all cursor-pointer flex items-center justify-center gap-2">
                                <i class="fas fa-plus-circle"></i>
                                Criar nova meta
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>
