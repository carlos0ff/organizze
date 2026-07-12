<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown, User, Gem, Settings, HelpCircle, LogOut, Bell } from 'lucide-vue-next'

const profileOpen = ref(false)
const profileRef = ref(null)

function handleClickOutside(e) {
    if (profileRef.value && !profileRef.value.contains(e.target)) {
        profileOpen.value = false
    }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
    <nav class="bg-[#22c75e] shadow-lg fixed top-0 left-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <!-- Logotype -->
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

                <!-- NavLinks -->
                <div class="hidden md:flex items-center space-x-8">
                    <a
                        href="/app"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10"
                        >Visão Geral</a
                    >
                    <a
                        href="/app/lancamentos"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10"
                        >Lançamentos</a
                    >

                    <div class="relative group">
                        <a
                            href="/app/relatorios/mensal"
                            class="flex items-center gap-1 text-white font-medium text-sm relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all **:after:duration-300 hover:after:w-10"
                        >
                            Relatórios
                            <i class="far fa-angle-down transition-transform duration-300 group-hover:rotate-180"></i>
                        </a>

                        <div
                            class="absolute left-0 mt-3 w-64 rounded-lg bg-white shadow-lg opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 border border-slate-200"
                        >
                            <a
                                href="/app/relatorios/mensal"
                                class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-t-xl"
                            >
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-indigo-500">
                                    <i class="fas fa-calendar-alt text-sm"></i>
                                </span>
                                Mensal
                            </a>

                            <a href="/app/relatorios/anual" class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-blue-500">
                                    <i class="fas fa-chart-line text-sm"></i>
                                </span>
                                Anual
                            </a>

                            <a href="/app/relatorios/categorias" class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-purple-500">
                                    <i class="fas fa-layer-group text-sm"></i>
                                </span>
                                Por Categoria
                            </a>

                            <a
                                href="/app/relatorios/receitas-despesas"
                                class="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100"
                            >
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-green-500">
                                    <i class="fas fa-balance-scale text-sm"></i>
                                </span>
                                Receitas vs Despesas
                            </a>
                        </div>
                    </div>

                    <a
                        href="/app/limites"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10"
                        >Limite de Gastos</a
                    >
                    <a
                        href="/app/conexao-bancaria"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F9F9F9F9] after:transition-all after:duration-500 hover:after:w-10"
                        >Conexão Bancária</a
                    >
                </div>

                <!-- Notificações + Perfil -->
                <div class="hidden md:flex items-center space-x-2">
                    <!-- Notificações -->
                    <div class="relative group">
                        <button class="relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none">
                            <Bell class="w-5 h-5" />
                            <div class="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                                <span class="absolute inline-flex w-full h-full rounded-full bg-red-400 opacity-75 animate-pulse"></span>
                                <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
                            </div>
                        </button>

                        <div
                            class="absolute right-0 mt-3 w-80 rounded-xl bg-white shadow-lg border border-slate-200 ring-1 ring-black/5 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50"
                        >
                            <div class="px-4 py-3 border-b border-slate-200">
                                <p class="text-sm font-semibold text-slate-800">Notificações</p>
                            </div>

                            <div class="flex items-start gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 transition">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-red-500 shrink-0">
                                    <i class="fas fa-exclamation-circle text-sm"></i>
                                </span>
                                <div>
                                    <p class="font-medium">Conta vence hoje</p>
                                    <p class="text-xs text-slate-500">Fatura Cartão • R$ 450,00</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 transition">
                                <span class="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-blue-500 shrink-0">
                                    <i class="fas fa-info-circle text-sm"></i>
                                </span>
                                <div>
                                    <p class="font-medium">Novo recurso disponível</p>
                                    <p class="text-xs text-slate-500">Agora você pode conectar sua conta bancária!</p>
                                </div>
                            </div>

                            <a
                                href="/notificacoes"
                                class="block text-center text-sm font-medium text-indigo-600 px-4 py-3 border-t border-slate-200 hover:bg-slate-50 rounded-b-xl"
                            >
                                Ver todas
                            </a>
                        </div>
                    </div>

                    <!-- Perfil Usuário -->
                    <div class="relative" ref="profileRef">
                        <button
                            @click.stop="profileOpen = !profileOpen"
                            :aria-expanded="profileOpen"
                            aria-haspopup="true"
                            class="flex items-center gap-2.5 rounded-xl px-2 py-1.5 hover:bg-white/10 transition-colors"
                        >
                            <div class="relative">
                                <img
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt="Seu perfil"
                                    class="h-9 w-9 rounded-full object-cover ring-2 ring-white/30"
                                />
                                <span class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#22c75e]"></span>
                            </div>
                            <div class="hidden lg:flex flex-col items-start leading-tight">
                                <span class="text-sm text-white font-medium">Thiago Santos</span>
                                <span class="text-[10px] text-white/70">Plano Gratuito</span>
                            </div>
                            <ChevronDown
                                class="w-4 h-4 text-white/70 transition-transform duration-200"
                                :class="{ 'rotate-180': profileOpen }"
                            />
                        </button>

                        <Transition
                            enter-active-class="transition duration-150 ease-out"
                            enter-from-class="opacity-0 scale-95 -translate-y-1"
                            enter-to-class="opacity-100 scale-100 translate-y-0"
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="opacity-100 scale-100 translate-y-0"
                            leave-to-class="opacity-0 scale-95 -translate-y-1"
                        >
                            <div
                                v-if="profileOpen"
                                class="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 origin-top-right z-50"
                            >
                                <!-- Cabeçalho com info do usuário -->
                                <div class="p-3 border-b border-gray-100">
                                    <div class="flex items-center gap-3">
                                        <img src="https://i.pravatar.cc/100?img=12" class="h-10 w-10 rounded-full object-cover shrink-0" />
                                        <div class="min-w-0">
                                            <p class="text-sm font-semibold text-gray-900 truncate">Thiago Santos</p>
                                            <p class="text-xs text-gray-500 truncate">thiago@exemplo.com</p>
                                        </div>
                                    </div>
                                    <!-- Badge do plano -->
                                    <div class="mt-2.5 flex items-center gap-1.5 bg-amber-50 border border-amber-100 rounded-lg px-2.5 py-1.5">
                                        <Gem class="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                        <span class="text-xs font-medium text-amber-700">Plano Gratuito</span>
                                        <a href="/app/assinatura" class="ml-auto text-xs font-semibold text-amber-600 hover:text-amber-800 whitespace-nowrap">
                                            Fazer upgrade →
                                        </a>
                                    </div>
                                </div>

                                <!-- Links -->
                                <div class="p-1.5">
                                    <a href="/app/perfil" class="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                        <User class="w-4 h-4 text-gray-400" />
                                        Meu Perfil
                                    </a>
                                    <a href="/configuracoes" class="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                        <Settings class="w-4 h-4 text-gray-400" />
                                        Configurações
                                    </a>
                                    <a href="/help" class="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                        <HelpCircle class="w-4 h-4 text-gray-400" />
                                        Ajuda & Suporte
                                    </a>
                                </div>

                                <!-- Sair -->
                                <div class="p-1.5 border-t border-gray-100">
                                    <button class="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <LogOut class="w-4 h-4" />
                                        Sair da conta
                                    </button>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>

                <!-- Mobile -->
                <div class="md:hidden flex items-center">
                    <button
                        id="mobile-menu-button"
                        class="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
                        aria-label="Abrir menu"
                    >
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
