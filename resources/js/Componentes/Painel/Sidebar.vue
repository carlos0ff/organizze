<script setup>
import { RouterLink, useRoute } from 'vue-router';
import {
    LayoutDashboard, Users, BarChart3, Settings,
    LogOut, ChevronRight, Shield,
} from 'lucide-vue-next';

const route = useRoute();

const nav = [
    { label: 'Dashboard',     to: '/panel',               name: 'panel.dashboard', icon: LayoutDashboard },
    { label: 'Usuários',      to: '/panel/usuarios',       name: 'panel.users',     icon: Users },
    { label: 'Relatórios',    to: '/panel/relatorios',     name: 'panel.reports',   icon: BarChart3 },
    { label: 'Configurações', to: '/panel/configuracoes',  name: null,              icon: Settings },
];

function isActive(name, to) {
    if (name) return route.name === name;
    return route.path === to;
}
</script>

<template>
    <aside class="fixed inset-y-0 left-0 w-60 bg-gray-900 text-white flex flex-col z-40">

        <!-- Logo -->
        <div class="flex items-center gap-3 px-5 py-5 border-b border-white/10">
            <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                <Shield class="w-4 h-4 text-white" />
            </div>
            <div>
                <p class="text-sm font-bold leading-tight">Organizze</p>
                <p class="text-[10px] text-white/40 font-medium uppercase tracking-wider">Admin Panel</p>
            </div>
        </div>

        <!-- Nav -->
        <nav class="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
            <RouterLink
                v-for="item in nav" :key="item.to"
                :to="item.to"
                :class="isActive(item.name, item.to)
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:bg-white/5 hover:text-white'"
                class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group"
            >
                <div class="flex items-center gap-3">
                    <component :is="item.icon" class="w-4 h-4 shrink-0" />
                    {{ item.label }}
                </div>
                <ChevronRight v-if="isActive(item.name, item.to)" class="w-3.5 h-3.5 opacity-60" />
            </RouterLink>
        </nav>

        <!-- Voltar ao app -->
        <div class="px-3 py-4 border-t border-white/10">
            <RouterLink to="/app" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:bg-white/5 hover:text-white transition-colors">
                <LogOut class="w-4 h-4" />
                Voltar ao App
            </RouterLink>
        </div>
    </aside>
</template>
