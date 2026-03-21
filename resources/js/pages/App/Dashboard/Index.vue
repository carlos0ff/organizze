<script setup>
import { ref, computed } from 'vue';
// Importação agrupada por categoria para melhor organização
import {
    // Social
    Github,
    Linkedin,
    Youtube,
    Twitter,

    // Navegação e UI
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    Ellipsis,

    // Ações
    EyeOff,
    Info,
    Download,
    Plus,
    Minus,
    LogOut,
    Settings,

    // Calendário e Tempo
    CalendarRange,
    CloudSun,

    // Finanças e Compras
    CreditCard,
    Wallet,
    TrendingUp,
    ArrowRightLeft,

    // Categorias
    Home,
    Wifi,
    Car,
    Utensils,
    TvMinimalPlay,
    GraduationCap,
    HeartPulse,
    TreePalm,
    Gift,
    ShoppingCart,
    Gamepad2,

    // Geral
    CirclePlus,
    Scale,
    Layers,
    User,
    Gem,
    Bell,
    Star,
    Square,
    Circle,
} from 'lucide-vue-next';

const isModalOpen = ref(false);

const toggleModal = (id) => {
    const modal = document.getElementById(id);

    if (!modal) return;

    const isHidden = modal.classList.contains('opacity-0');

    if (isHidden) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100', 'pointer-events-auto');
        document.body.classList.add('modal-active');
    } else {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100', 'pointer-events-auto');
        document.body.classList.remove('modal-active');
    }
};

// lista de cartões
const cards = ref([
    { bank: 'Banco do Brasil', number: '•••• 5544', value: 'R$ 3.400,00', status: 'Aberta' },
    { bank: 'Santander', number: '•••• 9876', value: 'R$ 860,00', status: 'Fechada' },
    { bank: 'Inter', number: '•••• 4321', value: 'R$ 1.240,00', status: 'Aberta' },
    { bank: 'Inter', number: '•••• 4321', value: 'R$ 1.240,00', status: 'Aberta' },
]);

// limite máximo
const MAX_CARDS = 4;

// verificação
const isLimitReached = computed(() => cards.value.length >= MAX_CARDS);
</script>

<template>
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
                    <a
                        href="/app"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10"
                        >Visão Geral</a
                    >
                    <a
                        href="#lancamentos"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10"
                        >Lançamentos</a
                    >

                    <div class="relative group">
                        <a href="#relatorios" class="flex items-center gap-1 text-white font-medium text-sm">
                            Relatórios
                            <ChevronDown class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                        </a>

                        <div
                            class="absolute left-0 mt-3 w-64 rounded-lg bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-200"
                        >
                            <a
                                href="#relatorios/mensal"
                                class="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-t-xl"
                            >
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
                            <a
                                href="#relatorios/receitas-despesas"
                                class="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100"
                            >
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-green-500">
                                    <Scale class="w-4 h-4" />
                                </span>
                                Receitas vs Despesas
                            </a>
                        </div>
                    </div>

                    <a
                        href="#limites-gastos"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10"
                    >
                        Limite de Gastos
                    </a>
                    <a
                        href="#conexao-bancaria"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10"
                        >Conexão Bancária</a
                    >
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

                        <div
                            class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50"
                        >
                            <div class="p-2">
                                <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"
                                    ><User class="w-4 h-4" /> Perfil</a
                                >
                                <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"
                                    ><Gem class="w-4 h-4 text-amber-500" /> Meu Plano</a
                                >
                                <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"
                                    ><Settings class="w-4 h-4" /> Configurações</a
                                >
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

    <!-- Content -->
    <main class="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div class="lg:col-span-2 bg-white rounded-md shadow-sm p-6">
                <div class="flex justify-between items-start mb-6">
                    <h1 class="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                        Bom dia, { { Rogério Dória } } <CloudSun class="text-amber-400" />
                    </h1>
                    <button
                        class="flex items-center text-xs text-emerald-600 font-medium border border-emerald-100 px-3 py-1 rounded hover:bg-emerald-50"
                    >
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
                        <p class="text-[10px] text-gray-400 uppercase font-bold flex items-center">saldo geral <EyeOff class="ml-1 w-3 h-3" /></p>
                        <p class="text-xl font-bold text-emerald-600">R$ ---</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-md shadow-sm p-6">
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-4">Acesso rápido</p>
                <div class="flex justify-between items-center">
                    <div class="text-center group cursor-pointer">
                        <div
                            class="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-400 mb-2 group-hover:bg-red-100 transition-colors"
                        >
                            <Minus class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Despesa</span>
                    </div>
                    <div class="text-center group cursor-pointer">
                        <div
                            class="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-2 group-hover:bg-emerald-100 transition-colors"
                        >
                            <Plus class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Receita</span>
                    </div>
                    <div class="text-center group cursor-pointer">
                        <div
                            class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-400 mb-2 group-hover:bg-blue-100 transition-colors"
                        >
                            <ArrowRightLeft class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Transf.</span>
                    </div>
                    <div class="text-center group cursor-pointer">
                        <div
                            class="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2 group-hover:bg-emerald-100 transition-colors"
                        >
                            <Download class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Importar</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- CARD DE TUTORIAL -->
        <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-50 p-6">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                        <i class="fas fa-chart-line text-green-500 text-xl"></i>
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-gray-700">Primeiros passos</h3>
                        <p class="text-sm text-gray-400">1 de 5 tarefas completas</p>
                    </div>
                </div>
                <button class="bg-green-50 text-green-600 font-bold py-2 px-6 rounded-xl text-sm hover:bg-green-100 transition-colors">
                    Continuar
                </button>
            </div>
            <div class="flex gap-2 h-1.5">
                <div class="flex-1 bg-green-500 rounded-full"></div>
                <div class="flex-1 bg-gray-100 rounded-full"></div>
                <div class="flex-1 bg-gray-100 rounded-full"></div>
                <div class="flex-1 bg-gray-100 rounded-full"></div>
                <div class="flex-1 bg-gray-100 rounded-full"></div>
            </div>
        </div>

        <!-- START | INÍCIO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <!-- Minhas Contas -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 h-[460px] p-5 flex flex-col">
                <div class="flex justify-between items-center mb-5 flex-shrink-0">
                    <div>
                        <h2 class="font-bold text-gray-700 text-sm uppercase tracking-tight">Minhas Contas</h2>
                        <p class="text-xs text-gray-500">Gerencie suas contas</p>
                    </div>
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
                    <button
                        class="mt-2 px-4 py-1.5 text-[11px] font-bold text-emerald-600 border border-emerald-100 rounded-full hover:bg-emerald-50 transition-all uppercase"
                    >
                        Conectar Agora
                    </button>
                </div>

                <!-- <div class="flex-1 overflow-hidden pr-1">
                    <div class="space-y-1">
                        <div class="flex justify-between items-center p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <Star class="w-5 h-5" />
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800 leading-tight">Conta 1</p>
                                    <p class="text-[11px] text-gray-400 mt-0.5">Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-emerald-600">R$ 1.000,00</p>
                        </div>

                         <div class="flex justify-between items-center p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <Star class="w-5 h-5" />
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800 leading-tight">Conta 2</p>
                                    <p class="text-[11px] text-gray-400 mt-0.5">Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-emerald-600">R$ 1.000,00</p>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <Star class="w-5 h-5" />
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800 leading-tight">Conta 3</p>
                                    <p class="text-[11px] text-gray-400 mt-0.5">Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-emerald-600">R$ 1.000,00</p>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <Star class="w-5 h-5" />
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800 leading-tight">Conta 4</p>
                                    <p class="text-[11px] text-gray-400 mt-0.5">Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-emerald-600">R$ 1.000,00</p>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <Star class="w-5 h-5" />
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-gray-800 leading-tight">Conta 5</p>
                                    <p class="text-[11px] text-gray-400 mt-0.5">Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-bold text-emerald-600">R$ 1.000,00</p>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="mt-4 pt-4 border-t border-gray-50 flex-shrink-0">
                    <button class="w-full py-2.5 text-[11px] font-bold text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all uppercase tracking-widest flex items-center justify-center">
                        <Plus class="w-3 h-3 mr-2" /> Gerenciar Contas
                    </button>
                </div> -->
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col h-[460px]">
                <!-- HEADER -->
                <div class="flex justify-between items-center mb-4 flex-shrink-0">
                    <div>
                        <h2 class="font-bold text-gray-700 text-sm uppercase tracking-tight">Maiores Gastos</h2>
                        <p class="text-xs text-gray-500">Resumo do mês</p>
                    </div>

                    <button
                        class="text-[10px] font-semibold text-emerald-600 border border-emerald-100 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition uppercase"
                    >
                        Relatório
                    </button>
                </div>

                <div class="flex-1 flex items-center overflow-hidden gap-5">
                    <!-- GRÁFICO -->
                    <div class="relative flex items-center justify-center p-6 rounded-2xl">
                        <div class="relative group transition-all duration-700 cursor-pointer">
                            <svg class="w-64 h-64 transform -rotate-90" viewBox="0 0 200 200">
                                <!-- Círculo de fundo com gradiente -->
                                <defs>
                                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color: #f1f5f9; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #e2e8f0; stop-opacity: 1" />
                                    </linearGradient>

                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #8b5cf6; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #a78bfa; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #f43f5e; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #fb7185; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #ec4899; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #f472b6; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #06b6d4; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #22d3ee; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #10b981; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #34d399; stop-opacity: 1" />
                                    </linearGradient>
                                </defs>

                                <!-- Círculo base -->
                                <circle cx="100" cy="100" r="85" fill="url(#bgGradient)" stroke="#e2e8f0" stroke-width="1.5" />

                                <!-- Círculo de track -->
                                <circle cx="100" cy="100" r="82" stroke="#e2e8f0" stroke-width="14" fill="transparent" stroke-linecap="round" />

                                <!-- Segmentos com gradientes e animação -->
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="82"
                                    stroke="url(#gradient1)"
                                    stroke-width="14"
                                    fill="transparent"
                                    stroke-dasharray="515.2"
                                    stroke-dashoffset="360"
                                    stroke-linecap="round"
                                >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="360" dur="1.5s" fill="freeze" />
                                </circle>

                                <circle
                                    cx="100"
                                    cy="100"
                                    r="82"
                                    stroke="url(#gradient2)"
                                    stroke-width="14"
                                    fill="transparent"
                                    stroke-dasharray="515.2"
                                    stroke-dashoffset="430"
                                    stroke-linecap="round"
                                    transform="rotate(95 100 100)"
                                >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="430" dur="1.5s" fill="freeze" begin="0.2s" />
                                </circle>

                                <circle
                                    cx="100"
                                    cy="100"
                                    r="82"
                                    stroke="url(#gradient3)"
                                    stroke-width="14"
                                    fill="transparent"
                                    stroke-dasharray="515.2"
                                    stroke-dashoffset="445"
                                    stroke-linecap="round"
                                    transform="rotate(135 100 100)"
                                >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="445" dur="1.5s" fill="freeze" begin="0.4s" />
                                </circle>

                                <circle
                                    cx="100"
                                    cy="100"
                                    r="82"
                                    stroke="url(#gradient4)"
                                    stroke-width="14"
                                    fill="transparent"
                                    stroke-dasharray="515.2"
                                    stroke-dashoffset="475"
                                    stroke-linecap="round"
                                    transform="rotate(170 100 100)"
                                >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="475" dur="1.5s" fill="freeze" begin="0.6s" />
                                </circle>

                                <circle
                                    cx="100"
                                    cy="100"
                                    r="82"
                                    stroke="url(#gradient5)"
                                    stroke-width="14"
                                    fill="transparent"
                                    stroke-dasharray="515.2"
                                    stroke-dashoffset="490"
                                    stroke-linecap="round"
                                    transform="rotate(205 100 100)"
                                >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="490" dur="1.5s" fill="freeze" begin="0.8s" />
                                </circle>
                            </svg>

                            <!-- Card central sem sombras -->
                            <div
                                class="absolute inset-0 flex flex-col items-center justify-center m-10 bg-white rounded-full border border-gray-100 transition-all duration-500"
                            >
                                <div class="flex flex-col items-center gap-1">
                                    <span class="text-xs text-indigo-500 font-bold uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-full">
                                        Total
                                    </span>

                                    <div class="flex items-baseline gap-0.5 mt-1">
                                        <span class="text-sm font-bold text-slate-500">R$</span>
                                        <span class="text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                                            2.450
                                        </span>
                                    </div>

                                    <div class="flex flex-col items-center mt-1">
                                        <div class="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full"></div>
                                        <span class="text-[10px] text-slate-400 font-medium mt-1">vs mês anterior</span>
                                        <span class="text-xs font-semibold text-emerald-500">+12.5%</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Tooltip flutuante no hover -->
                            <div
                                class="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            >
                                <div
                                    class="bg-slate-800 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap flex items-center gap-1.5 shadow-lg"
                                >
                                    <TrendingUp class="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Ver detalhes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- LISTA -->
                    <div class="flex-1 space-y-1 overflow-hidden">
                        <div class="flex justify-between items-center p-2 rounded-lg bg-purple-50 border border-purple-100">
                            <div class="flex items-center gap-2.5">
                                <div class="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white">
                                    <Gift class="w-4 h-4" />
                                </div>
                                <div>
                                    <p class="text-[11px] font-semibold text-gray-800">Presentes</p>
                                    <p class="text-[9px] text-gray-400">Maior gasto</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-[11px] font-bold text-purple-600">18,83%</p>
                                <p class="text-[9px] text-gray-400">R$ 465,25</p>
                            </div>
                        </div>

                        <!-- OUTROS -->
                        <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition group">
                            <div class="flex items-center gap-2.5">
                                <div
                                    class="w-7 h-7 flex items-center justify-center rounded-full bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition"
                                >
                                    <ShoppingCart class="w-3.5 h-3.5" />
                                </div>
                                <span class="text-[11px] text-gray-700">Compras</span>
                            </div>
                            <div class="text-right">
                                <p class="text-[11px] font-bold">9,20%</p>
                                <p class="text-[9px] text-gray-400">R$ 230,00</p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition group">
                            <div class="flex items-center gap-2.5">
                                <div
                                    class="w-7 h-7 flex items-center justify-center rounded-full bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition"
                                >
                                    <Utensils class="w-3.5 h-3.5" />
                                </div>
                                <span class="text-[11px] text-gray-700">Alimentação</span>
                            </div>
                            <div class="text-right">
                                <p class="text-[11px] font-bold">6,18%</p>
                                <p class="text-[9px] text-gray-400">R$ 152,70</p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition group">
                            <div class="flex items-center gap-2.5">
                                <div
                                    class="w-7 h-7 flex items-center justify-center rounded-full bg-cyan-50 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition"
                                >
                                    <Gamepad2 class="w-3.5 h-3.5" />
                                </div>
                                <span class="text-[11px] text-gray-700">Lazer</span>
                            </div>
                            <div class="text-right">
                                <p class="text-[11px] font-bold">1,81%</p>
                                <p class="text-[9px] text-gray-400">R$ 44,72</p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition group">
                            <div class="flex items-center gap-2.5">
                                <div
                                    class="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition"
                                >
                                    <Car class="w-3.5 h-3.5" />
                                </div>
                                <span class="text-[11px] text-gray-700">Transporte</span>
                            </div>
                            <div class="text-right">
                                <p class="text-[11px] font-bold">12%</p>
                                <p class="text-[9px] text-gray-400">R$ 300,00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- FOOTER -->
                <div class="pt-3 mt-2 border-t border-gray-50 flex-shrink-0">
                    <div class="bg-emerald-50 rounded-lg py-2 px-3 flex items-center justify-center gap-2">
                        <TrendingUp class="w-3 h-3 text-emerald-500" />
                        <p class="text-[10px] text-emerald-600 font-bold uppercase">-5% vs mês anterior</p>
                    </div>
                </div>
            </div>

            <!-- SEÇÃO: CARTÃO DE CRÉDITO -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full min-h-[720px]">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-lg font-bold text-gray-800">Meus Cartões</h2>
                        <p class="text-xs text-gray-500">Exibindo os últimos 3 cartões</p>
                    </div>
                    <button
                        @click="isModalOpen = true"
                        class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg transition-all"
                    >
                        Ver Todos
                    </button>
                </div>

                <!-- Lista de Cartões (Espaçada para alinhar com 6 metas) -->
                <div class="flex-1 flex flex-col justify-start space-y-6">
                    <!-- Cartão 1 -->
                    <div
                        class="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-100 group transition-transform hover:scale-[1.01]"
                    >
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-[10px] uppercase tracking-widest opacity-80 font-bold">Banco Inter</p>
                                <p class="text-sm font-medium tracking-[0.2em]">•••• 4321</p>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                                alt="Mastercard"
                                class="h-6 opacity-90"
                            />
                        </div>
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] opacity-70 mb-1 font-semibold uppercase">Fatura Atual</p>
                                <p class="text-xl font-extrabold">R$ 1.240,00</p>
                            </div>
                            <span class="text-[10px] font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30"
                                >Aberta</span
                            >
                        </div>
                    </div>

                    <!-- Cartão 2 -->
                    <div
                        class="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-100 group transition-transform hover:scale-[1.01]"
                    >
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-[10px] uppercase tracking-widest opacity-80 font-bold">Santander</p>
                                <p class="text-sm font-medium tracking-[0.2em]">•••• 9876</p>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg/960px-Visa_Inc._logo_%282005%E2%80%932014%29.svg.png"
                                alt="Visa"
                                class="h-4 opacity-90 brightness-0 invert"
                            />
                        </div>
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] opacity-70 mb-1 font-semibold uppercase">Fatura Atual</p>
                                <p class="text-xl font-extrabold">R$ 860,00</p>
                            </div>
                            <span class="text-[10px] font-bold bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10"
                                >Fechada</span
                            >
                        </div>
                    </div>

                    <!-- Cartão 3 -->
                    <div
                        class="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-800 text-white shadow-lg shadow-purple-100 group transition-transform hover:scale-[1.01]"
                    >
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-[10px] uppercase tracking-widest opacity-80 font-bold">Nubank</p>
                                <p class="text-sm font-medium tracking-[0.2em]">•••• 1122</p>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                                alt="Mastercard"
                                class="h-6 opacity-90"
                            />
                        </div>
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] opacity-70 mb-1 font-semibold uppercase">Fatura Atual</p>
                                <p class="text-xl font-extrabold">R$ 2.150,00</p>
                            </div>
                            <span class="text-[10px] font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30"
                                >Aberta</span
                            >
                        </div>
                    </div>
                </div>

                <div class="mt-8 pt-4 border-t border-gray-50">
                    <button
                        class="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300"
                    >
                        <Plus class="w-4 h-4" /> Novo Cartão
                    </button>
                </div>
            </div>

            <!-- SEÇÃO: METAS FINANCEIRAS -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full min-h-[720px]">
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h2 class="text-lg font-bold text-gray-800">Metas de Outubro</h2>
                        <p class="text-xs text-gray-500">Acompanhe seus gastos por categoria</p>
                    </div>
                    <div class="bg-emerald-50 p-2 rounded-2xl text-right border border-emerald-100">
                        <div class="flex items-baseline gap-1 justify-end">
                            <span class="text-2xl font-black text-emerald-600">65</span>
                            <span class="text-sm font-bold text-emerald-500">%</span>
                        </div>
                        <p class="text-[8px] text-emerald-600/70 uppercase font-black tracking-tighter">Progresso Geral</p>
                    </div>
                </div>

                <!-- Lista de Metas (6 Metas) -->
                <div class="flex-1 flex flex-col justify-between space-y-4 py-2">
                    <!-- Meta 1: Transporte -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                    <Car class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Transporte</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 260</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 400</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-blue-600">65%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-blue-500 rounded-full" style="width: 65%"></div>
                        </div>
                    </div>

                    <!-- Meta 2: Alimentação -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                                    <Utensils class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Alimentação</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 800</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 1.000</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-orange-600">80%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-orange-500 rounded-full" style="width: 80%"></div>
                        </div>
                    </div>

                    <!-- Meta 3: Lazer -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                                    <TreePalm class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Lazer</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 200</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 1.000</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-emerald-600">20%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-emerald-500 rounded-full" style="width: 20%"></div>
                        </div>
                    </div>

                    <!-- Meta 4: Assinaturas -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                                    <TvMinimalPlay class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Assinaturas</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 150</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 300</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-purple-600">50%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-purple-500 rounded-full" style="width: 50%"></div>
                        </div>
                    </div>

                    <!-- Meta 5: Educação -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                                    <GraduationCap class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Educação</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 450</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 600</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-indigo-600">75%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-indigo-500 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>

                    <!-- Meta 6: Saúde -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                                    <HeartPulse class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Saúde</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 120</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 500</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-red-600">24%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-red-500 rounded-full" style="width: 24%"></div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 pt-4 border-t border-gray-50">
                    <button
                        class="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-600 shadow-lg shadow-emerald-100 transition-all duration-300"
                    >
                        <CirclePlus class="w-4 h-4" /> Criar Nova Meta
                    </button>
                </div>
            </div>
        </div>
        <!-- END | FIM -->

        <!-- Mostrar  Depesas -->
        <div class="mt-6 bg-white rounded-md shadow-sm p-6">
            <div class="space-y-4">
                <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-red-50 text-red-400 rounded-full flex items-center justify-center">
                            <Home class="w-4 h-4" />
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-800">
                                Aluguel
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
                            <p class="text-sm font-bold text-gray-800">
                                Aluguel
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
                            <p class="text-sm font-bold text-gray-800">
                                Aluguel
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
                    3 contas listadas • Total:
                    <span class="font-bold text-gray-600">R$ 1.540,00</span>
                </p>
                <button class="text-[10px] font-bold text-emerald-500 uppercase hover:underline flex items-center">
                    Ver todas as contas <ArrowRightLeft class="ml-1 w-3 h-3" />
                </button>
            </div>
        </div>

        <!-- footer -->
        <footer class="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p class="mb-4 sm:mb-0">&copy; {{ new Date().getFullYear() }} Organizze. Todos os direitos reservados.</p>

            <div class="flex space-x-6">
                <Github class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-gray-600" />
                <Linkedin class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-blue-600" />
                <Youtube class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-red-600" />
                <Twitter class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-blue-400" />
            </div>
        </footer>
    </main>

    <!-- MODAL DE CARTÕES -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="isModalOpen = false"></div>

        <!-- MODAL -->
        <div class="relative bg-white w-full max-w-lg mx-4 rounded-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-6 border-b flex justify-between items-start">
                <div>
                    <h3 class="text-lg font-bold text-gray-800">Todos os Cartões</h3>
                    <p class="text-xs text-gray-400 mt-1">{{ cards.length }} de {{ MAX_CARDS }} cartões</p>
                </div>

                <button @click="isModalOpen = false" class="p-2 hover:bg-grpt-br
                ay-100 rounded-full">
                    <X class="w-5 h-5 text-gray-400" />
                </button>
            </div>

            <!-- LISTAGEM -->
            <div class="p-6 flex-1 overflow-y-auto space-y-4">
                <div
                    v-for="(card, index) in cards"
                    :key="index"
                    class="p-4 border border-gray-300 rounded-md flex justify-between items-center hover:bg-gray-200 transition"
                >
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white text-[9px] font-bold">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg/960px-Visa_Inc._logo_%282005%E2%80%932014%29.svg.png"
                                alt="Visa"
                                class="h-3 opacity-90 brightness-0 invert"
                            />
                        </div>

                        <div>
                            <p class="text-sm font-semibold text-gray-700">{{ card.bank }}</p>
                            <p class="text-xs text-gray-400">{{ card.number }}</p>
                        </div>
                    </div>

                    <div class="text-right">
                        <p class="text-sm font-bold text-gray-700">{{ card.value }}</p>
                        <span class="text-[10px] font-bold uppercase" :class="card.status === 'Aberta' ? 'text-emerald-500' : 'text-gray-400'">
                            {{ card.status }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- FOOTER -->
            <div class="p-5 border-t border-gray-100 bg-gray-50">
                <!-- LIMITE ATINGIDO -->
                <div v-if="isLimitReached" class="space-y-3 text-center">
                    <p class="text-xs text-red-400 font-semibold">Limite de cartões atingido</p>

                    <button
                        @click="goToCardsPage"
                        class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-black transition"
                    >
                        Ver todos os cartões
                    </button>
                </div>

                <!-- NORMAL -->
                <button
                    v-else
                    class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition"
                >
                    <Plus class="w-4 h-4" />
                    Adicionar Novo Cartão
                </button>
            </div>
        </div>
    </div>
</template>

<style>
body {
    font-family: 'Inter', sans-serif;
    background-color: #f8fafc;
}

.modal-active {
    overflow: hidden;
}

.modal {
    transition: opacity 0.25s ease;
}

.shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

@keyframes pulse-ring {
    0% {
        transform: scale(0.95);
        opacity: 0.5;
    }
    100% {
        transform: scale(1.05);
        opacity: 0;
    }
}

.group:hover .pulse-ring {
    animation: pulse-ring 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
