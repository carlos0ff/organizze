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
    <nav class="bg-[#22c75e] shadow-lg  top-0 left-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">

                <!-- Logo -->
                <div class="flex items-center">
                    <div class="shrink-0 flex items-center">
                        <a href="/app" class="cursor-default">
                            <img
                                src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                                class="logo h-8 w-auto filter brightness-0 invert" alt="Organizze"
                            />
                        </a>
                    </div>
                </div>

                <!-- Nav links -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/app" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Visão Geral
                    </a>
                    <a href="/app/lancamentos"
                       class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Lançamentos
                    </a>

                    <!-- Dropdown Relatórios -->
                    <div class="relative group">
                        <a href="/app/relatorios/mensal"
                           class="flex items-center gap-1 text-white font-medium text-sm relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                            Relatórios
                            <ChevronDown class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                        </a>

                        <div class="absolute left-0 top-full mt-3 w-72 rounded-xl bg-white shadow-xl border border-gray-100 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                            <div class="p-1.5">
                                <a href="/app/relatorios/mensal"
                                   class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-500 shrink-0">
                                        <CalendarRange class="w-4 h-4" />
                                    </span>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Mensal</p>
                                        <p class="text-xs text-gray-400">Resumo do mês atual</p>
                                    </div>
                                </a>
                                <a href="/app/relatorios/anual" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 shrink-0">
                                        <BarChart2 class="w-4 h-4" />
                                    </span>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Anual</p>
                                        <p class="text-xs text-gray-400">Evolução nos últimos 12 meses</p>
                                    </div>
                                </a>
                                <a href="/app/relatorios/categorias" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-50 text-purple-500 shrink-0">
                                        <Layers class="w-4 h-4" />
                                    </span>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Por Categoria</p>
                                        <p class="text-xs text-gray-400">Gastos detalhados por categoria</p>
                                    </div>
                                </a>
                                <a href="/app/relatorios/receitas-despesas" class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-500 shrink-0">
                                        <Scale class="w-4 h-4" />
                                    </span>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Receitas vs Despesas</p>
                                        <p class="text-xs text-gray-400">Comparativo de entradas e saídas</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="/app/limites" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Limite de Gastos
                    </a>
                    <a href="/app/conexao-bancaria" class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Conexão Bancária
                    </a>
                </div>

                <div class="flex items-center space-x-2">
                    <!-- Notificações -->
                    <div class="relative" ref="notifRef">
                        <button @click.stop="notifOpen = !notifOpen" :aria-expanded="notifOpen" aria-haspopup="true" class="relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
                            <Bell class="w-5 h-5" />
                            <Transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 scale-50" enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-50">
                                <span v-if="unreadCount > 0" class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                                    {{ unreadCount }}
                                </span>
                            </Transition>
                        </button>

                        <Transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 scale-95 -translate-y-1" enter-to-class="opacity-100 scale-100 translate-y-0" leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100 scale-100 translate-y-0" leave-to-class="opacity-0 scale-95 -translate-y-1">
                            <div v-if="notifOpen" class="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 origin-top-right z-50">
                                <!-- Cabeçalho -->
                                <div class="px-4 pt-3 pb-2.5 border-b border-gray-100">
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm font-semibold text-gray-900">Notificações</span>
                                        <button v-if="unreadCount > 0" @click="markAllRead" class="text-xs font-medium text-[#22c75e] hover:text-green-700 whitespace-nowrap transition-colors">
                                            Marcar lidas
                                        </button>
                                    </div>
                                    <span v-if="unreadCount > 0" class="mt-1 inline-flex text-[11px] font-semibold bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full">
                                        {{ unreadCount }} novas
                                    </span>
                                </div>

                                <!-- Lista -->
                                <div class="divide-y divide-gray-50 max-h-72 overflow-y-auto">
                                    <button v-for="n in notifications" :key="n.id" @click="n.read = true" class="w-full flex items-start gap-3 px-4 py-3 text-left transition-colors" :class="n.read ? 'hover:bg-gray-50' : 'bg-green-50/40 hover:bg-green-50'">
                                        <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                                              :class="{
                                                'bg-amber-100 text-amber-500': n.type === 'warning',
                                                'bg-red-100 text-red-500':    n.type === 'danger',
                                                'bg-blue-100 text-blue-500':  n.type === 'info',
                                                'bg-green-100 text-green-500':n.type === 'success',
                                            }">
                                            <AlertTriangle  v-if="n.type === 'warning'" class="w-4 h-4" />
                                            <AlertCircle    v-else-if="n.type === 'danger'"  class="w-4 h-4" />
                                            <Info           v-else-if="n.type === 'info'"    class="w-4 h-4" />
                                            <CheckCircle2   v-else                            class="w-4 h-4" />
                                        </span>
                                        <div class="min-w-0 flex-1">
                                            <p class="text-sm font-medium text-gray-900 truncate">{{ n.title }}</p>
                                            <p class="text-xs text-gray-500 mt-0.5 leading-snug">{{ n.body }}</p>
                                            <p class="text-[11px] text-gray-400 mt-1">{{ n.time }}</p>
                                        </div>
                                        <span v-if="!n.read" class="mt-1.5 h-2 w-2 rounded-full bg-[#22c75e] shrink-0"></span>
                                    </button>
                                </div>

                                <!-- Rodapé -->
                                <a href="/notificacoes" class="block text-center text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-3 border-t border-gray-100 hover:bg-gray-50 rounded-b-xl transition-colors">
                                    Ver todas as notificações →
                                </a>
                            </div>
                        </Transition>
                    </div>

                    <div class="relative" ref="profileRef">
                        <button @click.stop="profileOpen = !profileOpen" :aria-expanded="profileOpen" aria-haspopup="true" class="flex items-center gap-2.5 rounded-xl px-2 py-1.5 hover:bg-white/10 transition-colors">
                            <div class="relative">
                                <img src="https://i.pravatar.cc/100?img=12" class="h-9 w-9 rounded-full object-cover ring-2 ring-white/30" />
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

                        <Transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 scale-95 -translate-y-1" enter-to-class="opacity-100 scale-100 translate-y-0" leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100 scale-100 translate-y-0" leave-to-class="opacity-0 scale-95 -translate-y-1">
                            <div v-if="profileOpen" class="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 origin-top-right z-50">
                                <!-- Cabeçalho -->
                                <div class="p-3 border-b border-gray-100">
                                    <div class="flex items-center gap-3">
                                        <img src="https://i.pravatar.cc/100?img=12" class="h-10 w-10 rounded-full object-cover shrink-0" />
                                        <div class="min-w-0">
                                            <p class="text-sm font-semibold text-gray-900 truncate">Thiago Santos</p>
                                            <p class="text-xs text-gray-500 truncate">thiago@exemplo.com</p>
                                        </div>
                                    </div>
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
                                    <a href="#" class="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                        <User class="w-4 h-4 text-gray-400" /> Meu Perfil
                                    </a>
                                    <a href="/configuracoes" class="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                        <Settings class="w-4 h-4 text-gray-400" /> Configurações
                                    </a>
                                    <a href="/help" class="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                        <HelpCircle class="w-4 h-4 text-gray-400" /> Ajuda & Suporte
                                    </a>
                                </div>

                                <!-- Sair -->
                                <div class="p-1.5 border-t border-gray-100">
                                    <a href="/sair" class="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <LogOut class="w-4 h-4" /> Sair da conta
                                    </a>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
