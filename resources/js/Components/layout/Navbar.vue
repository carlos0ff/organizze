<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { router as Inertia } from '@inertiajs/vue3';
import {
    Bell, ChevronDown, Menu, X, LogOut,
    User, Gem, Settings, LifeBuoy,
    CalendarDays, Layers, BarChart2, Scale,
} from 'lucide-vue-next';

const route = useRoute();
const mobileOpen = ref(false);

const NAV = [
    { label: 'Visão Geral',      to: '/app',                name: 'app.dashboard' },
    { label: 'Lançamentos',      to: '/app/lancamentos',    name: 'app.lancamentos' },
    { label: 'Limites',          to: '/app/limites-gastos', name: 'app.limites' },
    { label: 'Conexão Bancária', to: '/app/conexao-bancaria', name: 'app.conexao' },
];

const REPORTS = [
    { label: 'Mensal',              to: '/app/relatorios/mensal',          icon: CalendarDays },
    { label: 'Por Categoria',       to: '/app/relatorios/categorias',      icon: Layers },
    { label: 'Receitas vs Despesas',to: '/app/relatorios/receitas-despesas', icon: Scale },
];

function isActive(name: string) {
    return route.name === name;
}

function isReportsActive() {
    return route.path?.startsWith('/app/relatorios');
}

function logout() {
    Inertia.post('/auth/logout');
}
</script>

<template>
    <nav class="bg-[#22c75e] shadow-lg fixed top-0 left-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">

                <!-- Logo -->
                <div class="flex items-center">
                    <RouterLink to="/app" class="shrink-0 flex items-center">
                        <img
                            style="filter: brightness(0) invert(1)"
                            src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                            alt="Organizze" class="h-8 w-auto"
                        />
                    </RouterLink>
                </div>

                <!-- NavLinks desktop -->
                <div class="hidden md:flex items-center gap-1">
                    <!-- Links simples -->
                    <RouterLink
                        v-for="item in NAV" :key="item.name"
                        :to="item.to"
                        :class="isActive(item.name)
                            ? 'text-white font-bold after:w-10'
                            : 'text-white/80 hover:text-white'"
                        class="relative px-3 py-2 text-sm font-medium transition-colors after:content-[''] after:absolute after:left-3 after:-bottom-0.5 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-[calc(100%-24px)]"
                    >
                        {{ item.label }}
                    </RouterLink>

                    <!-- Dropdown relatórios -->
                    <div class="relative group px-1">
                        <button
                            :class="isReportsActive() ? 'text-white font-bold' : 'text-white/80 hover:text-white'"
                            class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Relatórios
                            <ChevronDown class="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                        </button>

                        <div class="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white shadow-xl border border-gray-100 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                            <RouterLink
                                v-for="r in REPORTS" :key="r.to"
                                :to="r.to"
                                class="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                            >
                                <span class="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                                    <component :is="r.icon" class="w-3.5 h-3.5" />
                                </span>
                                {{ r.label }}
                            </RouterLink>
                        </div>
                    </div>
                </div>

                <!-- Direita: notificações + perfil -->
                <div class="hidden md:flex items-center gap-3">
                    <!-- Sino -->
                    <div class="relative group">
                        <button class="relative p-2 text-white/80 hover:text-white transition-colors">
                            <Bell class="w-5 h-5" />
                            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-[#22c75e]"></span>
                        </button>
                        <!-- Dropdown notificações -->
                        <div class="absolute right-0 top-full mt-2 w-80 rounded-xl bg-white shadow-xl border border-gray-100 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                            <div class="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                                <p class="text-sm font-bold text-gray-800">Notificações</p>
                                <span class="text-[10px] font-bold bg-red-50 text-red-500 px-2 py-0.5 rounded-full">2 novas</span>
                            </div>
                            <div class="divide-y divide-gray-50">
                                <div class="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                                    <div class="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                        <Bell class="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Conta vence hoje</p>
                                        <p class="text-xs text-gray-400 mt-0.5">Fatura Cartão • R$ 450,00</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                                    <div class="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                        <Bell class="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Novo recurso disponível</p>
                                        <p class="text-xs text-gray-400 mt-0.5">Conecte sua conta bancária agora!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-2.5 border-t border-gray-100">
                                <RouterLink to="/app/notificacoes" class="text-xs font-semibold text-emerald-600 hover:underline">
                                    Ver todas as notificações
                                </RouterLink>
                            </div>
                        </div>
                    </div>

                    <!-- Perfil -->
                    <div class="relative group">
                        <button class="flex items-center gap-2.5">
                            <img src="https://i.pravatar.cc/100?img=12" alt="Perfil"
                                class="h-8 w-8 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/70 transition" />
                            <div class="hidden lg:flex flex-col items-start leading-none">
                                <span class="text-sm text-white font-medium">Thiago Santos</span>
                                <span class="text-[10px] text-white/70">Plano Free</span>
                            </div>
                            <ChevronDown class="w-3.5 h-3.5 text-white/70 transition-transform duration-300 group-hover:rotate-180" />
                        </button>

                        <div class="absolute right-0 top-full mt-2 w-56 rounded-xl bg-white shadow-xl border border-gray-100 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 overflow-hidden">
                            <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3 bg-gray-50">
                                <img src="https://i.pravatar.cc/100?img=12" class="h-9 w-9 rounded-full" />
                                <div class="min-w-0">
                                    <p class="text-sm font-semibold text-gray-800 truncate">Thiago Santos</p>
                                    <p class="text-[11px] text-gray-400 truncate">thiago@email.com</p>
                                </div>
                            </div>
                            <div class="py-1">
                                <RouterLink to="/app/perfil" class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                    <User class="w-4 h-4 text-gray-400" /> Meu perfil
                                </RouterLink>
                                <RouterLink to="/app/assinatura" class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                    <Gem class="w-4 h-4 text-amber-400" /> Meu plano
                                </RouterLink>
                                <RouterLink to="/app/configuracao" class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                    <Settings class="w-4 h-4 text-gray-400" /> Configurações
                                </RouterLink>
                                <RouterLink to="/help" class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                    <LifeBuoy class="w-4 h-4 text-gray-400" /> Ajuda & Suporte
                                </RouterLink>
                            </div>
                            <div class="border-t border-gray-100 py-1">
                                <button @click="logout" class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                                    <LogOut class="w-4 h-4" /> Sair
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile: hamburguer -->
                <div class="md:hidden flex items-center">
                    <button @click="mobileOpen = !mobileOpen" class="p-2 text-white">
                        <X v-if="mobileOpen" class="w-6 h-6" />
                        <Menu v-else class="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <div v-if="mobileOpen" class="md:hidden bg-[#1db554] border-t border-white/10">
            <div class="px-3 py-3 space-y-0.5">
                <RouterLink v-for="item in NAV" :key="item.name" :to="item.to"
                    @click="mobileOpen = false"
                    :class="isActive(item.name) ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'"
                    class="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors">
                    {{ item.label }}
                </RouterLink>
            </div>
        </div>
    </nav>
</template>
