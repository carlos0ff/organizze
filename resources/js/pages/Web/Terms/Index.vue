<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-6">

      <h1 class="text-3xl font-bold text-gray-900 mb-6">
        Termos de Uso
      </h1>

      <p class="text-gray-600 mb-8">
        Última atualização: 15 de março de 2026
      </p>

      <div class="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 class="text-xl font-semibold mb-2">
            1. Aceitação dos termos
          </h2>
          <p>
            Ao acessar e utilizar este site, você concorda em cumprir estes
            Termos de Uso e todas as leis e regulamentos aplicáveis.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-2">
            2. Uso do site
          </h2>
          <p>
            O usuário compromete-se a utilizar o site de forma legal,
            ética e respeitando os direitos de terceiros.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-2">
            3. Conta do usuário
          </h2>
          <p>
            Caso o site ofereça cadastro, o usuário é responsável por
            manter a confidencialidade de suas credenciais de acesso.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-2">
            4. Propriedade intelectual
          </h2>
          <p>
            Todo o conteúdo presente no site, incluindo textos, imagens,
            logotipos e códigos, é protegido por direitos autorais.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-2">
            5. Limitação de responsabilidade
          </h2>
          <p>
            O site não se responsabiliza por danos causados pelo uso ou
            impossibilidade de uso da plataforma.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-2">
            6. Alterações nos termos
          </h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento, sendo responsabilidade do usuário revisá-los
            periodicamente.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-2">
            7. Contato
          </h2>
          <p>
            Caso tenha dúvidas sobre estes termos, entre em contato
            através do e-mail: contato@seusite.com
          </p>
        </section>

      </div>

    </div>
  </div>
</template>


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

    <!-- Header Verde com Navbar Centralizada -->
     <nav class="bg-[#22c75e] shadow-lg fixed top-0 left-0 w-full z-50" >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">

            <!-- Logotype -->
            <div class="flex items-center">
                <div class="shrink-0 flex items-center">
                    <img
                        style="filter: brightness(0) invert(1);"
                        src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                        alt="Organizze" class="logo h-8 w-auto"
                    />
                </div>
            </div>

            <!-- NavLinks -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="/app" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10" >Visão Geral</a>
                <a href="#lancamentos" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">Lançamentos</a>

                <div class="relative group">
                    <a href="#relatorios" class="flex items-center gap-1 text-white font-medium text-sm relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all **:after:duration-300 hover:after:w-10">
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

                <a
                    href="#limites-gastos"
                    class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1
                     after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">Limite de Gastos</a>
                <a href="#conexao-bancaria" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10">Conexão Bancária</a>
            </div>

            <!-- Notificações -->
            <div class="hidden md:flex items-center space-x-4 ">
                <div class="hidden md:flex items-center space-x-4">
                    <div class="relative group">

                        <button class="relative text-white hover:text-gray-200 transition-colors focus:outline-none">
                            <Bell class="w-6 h-6" />
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
                                    <Info class="text-sm"/>
                                </span>
                                <div>
                                    <p class="font-medium">Novo recurso disponível</p>
                                    <p class="text-xs text-slate-500">
                                        Agora você pode conectar sua conta bancária!
                                    </p>
                                </div>
                            </div>

                            <!-- Footer -->
                            <a
                                href="/notificacoes"
                                class="block text-center text-sm font-medium text-indigo-600
                                       border-t border-slate-200 hover:bg-slate-50 rounded-b-xl px-4 py-3" >
                                Ver todas
                            </a>
                        </div>
                    </div>
                </div>

                    <!-- Perfil Usuário -->
                    <div class="relative" >
                        <button class="flex items-center gap-3 group">
                            <img
                                src="https://i.pravatar.cc/100?img=12"
                                alt="Seu perfil"
                                class="h-9 w-9 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/60 transition"
                             />
                                <div class="hidden lg:flex flex-col items-start">
                                    <span class="text-sm text-white leading-4">Thiago Santos</span>
                                    <span class="text-[11px] text-white/80 leading-3">Plano Gratuito</span>
                                </div>
                                <ChevronDown class="w-4 h-4 text-white" />
                        </button>

                        <!-- Menu do usuário -->
                        <div class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg ring-1 ring-black/5 z-50 hidden">
                            <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=12"
                                    class="h-10 w-10 rounded-full object-cover"
                                    alt="Seu perfil"
                                 />
                                <div>
                                    <p class="text-sm font-medium text-gray-900">Thiago Santos</p>
                                    <p class="text-xs text-gray-500">thiagosantos@email.com</p>
                                </div>
                            </div>

                            <!-- Links do menu -->
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

                <!-- Mobile -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" aria-label="Abrir menu">
                        <Menu />
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

    <!-- Conteúdo Principal -->
    <main class="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-12">

        <!-- Boas vindas e Acesso Rápido -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div class="lg:col-span-2 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 p-6">
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h1 class="text-2xl font-semibold text-gray-800">Bom dia, <br />
                            Rogério Dória <CloudSun class="text-amber-400" />
                        </h1>
                    </div>
                    <button class="text-xs text-emerald-600 font-medium border border-emerald-100 px-3 py-1 rounded hover:bg-emerald-50">
                        <TrendingUp class="w-3 h-3 mr-1" />
                        ver relatórios
                    </button>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <p class="text-xs text-gray-500 uppercase mb-1">receita mensal</p>
                        <p class="text-xl font-bold text-emerald-600">R$ 5.500,00</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 uppercase mb-1">despesa mensal</p>
                        <p class="text-xl font-bold text-red-500">R$ 2.470,80</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 uppercase mb-1">
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

        <!-- Grid de Widgets -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <!-- Minhas Contas -->
            <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-bold text-gray-700">Minhas Contas</h2>
                    <button class="text-xs text-gray-400 hover:text-gray-600">
                        <EyeOff class=" ml-1 cursor-pointer"/> Esconder saldo
                    </button>
                </div>

                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs">
                                <i class="fas fa-star"></i>
                            </div>
                            <div>
                                <p class="text-sm font-bold text-gray-800">Caixa Econômica</p>
                                <p class="text-xs text-gray-400">Conta Corrente</p>
                            </div>
                        </div>
                        <p class="text-sm font-bold text-emerald-600">R$ -----</p>
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
                        <p class="text-sm font-bold text-emerald-600">R$ -----</p>
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
                        <p class="text-sm font-bold text-emerald-600">R$ -----</p>
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
                        <p class="text-sm font-bold text-emerald-600">R$ -----</p>
                    </div>
                </div>
            </div>

            <!-- Maiores Gastos do Mês Atual -->
            <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700">Maiores Gastos do Mês Atual</h2>
                    <button class="text-xs text-gray-400 border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">
                        Ver Relatório
                    </button>
                </div>

                <div class="flex flex-col sm:flex-row items-center">
                    <div class="w-full sm:w-1/2 relative flex justify-center mb-6 sm:mb-0">
                        <svg class="w-40 h-40 transform -rotate-90">
                            <circle cx="80" cy="80" r="65" stroke="#e5e7eb" stroke-width="15" fill="transparent" />
                            <circle cx="80" cy="80" r="65" stroke="#a855f7" stroke-width="15" fill="transparent" stroke-dasharray="408.4" stroke-dashoffset="331.5" />
                            <circle cx="80" cy="80" r="65" stroke="#f472b6" stroke-width="15" fill="transparent" stroke-dasharray="408.4" stroke-dashoffset="383.2" transform="rotate(67.8 80 80)" />
                            <circle cx="80" cy="80" r="65" stroke="#22d3ee" stroke-width="15" fill="transparent" stroke-dasharray="408.4" stroke-dashoffset="401.0" transform="rotate(90 80 80)" />
                        </svg>
                        <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <span class="text-xs text-gray-400 font-bold uppercase">Total</span>
                            <span class="text-xl font-black text-gray-700">R$ 2.4k</span>
                        </div>
                    </div>

                    <div class="w-full sm:w-1/2 space-y-3 pl-0 sm:pl-6">
                        <div class="flex justify-between items-center group cursor-pointer">
                            <span class="flex items-center text-xs text-gray-600"><i class="fas fa-circle text-purple-500 mr-2 text-[8px]"></i> Presentes</span>
                            <div class="text-right">
                                <p class="text-xs font-bold text-gray-800">18,83%</p>
                                <p class="text-[9px] text-gray-400">R$ 465,25</p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center group cursor-pointer">
                            <span class="flex items-center text-xs text-gray-600"><i class="fas fa-circle text-pink-400 mr-2 text-[8px]"></i> Alimentação</span>
                            <div class="text-right">
                                <p class="text-xs font-bold text-gray-800">6,18%</p>
                                <p class="text-[9px] text-gray-400">R$ 152,70</p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center group cursor-pointer">
                            <span class="flex items-center text-xs text-gray-600"><i class="fas fa-circle text-cyan-400 mr-2 text-[8px]"></i> Lazer</span>
                            <div class="text-right">
                                <p class="text-xs font-bold text-gray-800">1,81%</p>
                                <p class="text-[9px] text-gray-400">R$ 44,72</p>
                            </div>
                        </div>

                        <div class="pt-2 border-t border-gray-100">
                            <p class="text-[10px] text-center text-emerald-600 font-bold uppercase">Economia de 5% vs mês anterior</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cartão de Crédito  -->
            <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700">Cartão de Crédito</h2>
                    <button class="text-xs text-emerald-500 font-medium hover:underline">Gerenciar</button>
                </div>

                <div class="space-y-4">
                    <!-- Nubank -->
                    <div class="p-4 rounded-xl bg-gradient-to-r from-purple-700 to-purple-600 text-white shadow-md relative overflow-hidden">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <p class="text-[10px] uppercase opacity-80 font-bold">Nubank Platinum</p>
                                <p class="text-sm font-bold tracking-widest">•••• 1234</p>
                            </div>
                            <i class="fab fa-masterbg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 text-2xl opacity-90"></i>
                        </div>

                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[9px] opacity-70">Vencimento: 15/10</p>
                                <p class="text-lg font-black">R$ 840,00</p>
                            </div>
                            <span class="text-[9px] bg-white/20 px-2 py-1 rounded font-bold uppercase">Fatura aberta</span>
                        </div>
                    </div>

                    <!-- Botão Adicionar Cartão -->
                    <button class="w-full p-4 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-emerald-300 hover:text-emerald-500 hover:bg-emerald-50 transition-all group">
                        <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                            <Plus />
                        </div>
                        <span class="text-xs font-bold uppercase tracking-wider">Adicionar Cartão de Crédito</span>
                    </button>
                </div>
            </div>

            <!-- Metas de Outubro -->
            <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700">Metas de Outubro</h2>
                    <div class="text-right">
                        <span class="text-2xl font-black text-emerald-500">65%</span>
                        <p class="text-[9px] text-gray-400 uppercase font-bold">Progresso Geral</p>
                    </div>
                </div>

                <div class="space-y-5">
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
                            <p class="text-[9px] text-gray-400">Gasto: <span class="font-bold text-gray-600">R$ 260,00</span></p>
                            <p class="text-[9px] text-gray-400">Meta: <span class="font-bold text-gray-600">R$ 400,00</span></p>
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
                    <button class="w-full py-2 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-lg hover:bg-emerald-100 transition-colors">
                        <CirclePlus class="mr-1"/> Criar Nova Meta
                    </button>
                </div>
            </div>

            <!-- Contas a Pagar -->
            <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 p-6 lg:col-span-2">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-bold text-gray-700">Contas a Pagar</h2>
                    <div class="flex items-center text-xs text-gray-500 cursor-pointer">
                        <ChevronDown class="text-white/90 text-xs"/>
                        <select>
                            <option value="">Próximos 7 dias</option>
                        </select>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                        <div class="flex items-center space-x-4">
                            <div class="w-8 h-8 bg-red-50 text-red-400 rounded-full flex items-center justify-center text-xs">
                                <i class="fas fa-home"></i>
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
                            <Ellipsis />
                        </div>
                    </div>

                    <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                        <div class="flex items-center space-x-4">
                            <div class="w-8 h-8 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center text-xs">
                                <i class="fas fa-wifi"></i>
                            </div>
                            <div>
                                <p class="text-sm font-bold text-gray-800">
                                    Internet
                                    <span class="text-[10px] text-emerald-500 font-normal ml-2">em 5 dias</span>
                                </p>
                                <p class="text-[10px] text-gray-400">Categoria: Serviços • Vencimento: 13/11</p>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <p class="text-sm font-bold text-gray-800">R$ 120,00</p>
                            <Ellipsis />
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
                            <Ellipsis />
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex justify-between items-center">
                    <p class="text-[10px] text-gray-400">
                        3 contas listadas • Total: <span class="font-bold text-gray-600">R$ 1.540,00</span>
                    </p>
                    <button class="text-[10px] font-bold text-emerald-500 uppercase hover:underline">Ver todas as contas <ArrowRight /></button>
                </div>
            </div>
        </div>

        <!-- Footer -->
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


<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div class="bg-white rounded-md shadow-sm p-6 order-1">
            <div class="flex justify-between items-center mb-6">
                <h2 class="font-bold text-gray-700">Cartão de Crédito</h2>
                <button class="text-xs text-emerald-500 font-medium hover:underline">Gerenciar</button>
            </div>

            <div class="space-y-4">
                <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-800 text-white shadow-lg relative overflow-hidden group transition-transform hover:scale-[1.02]">
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

                <button class="w-full p-4 border-2 border-dashed border-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-emerald-200 hover:text-emerald-500 hover:bg-emerald-50/50 transition-all group">
                    <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                        <Plus class="w-5 h-5" />
                    </div>
                    <span class="text-[10px] font-bold uppercase tracking-widest">Novo Cartão</span>
                </button>
            </div>
        </div>

        <div class="bg-white rounded-md shadow-sm p-6 order-2">
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

    </div>

</template>
