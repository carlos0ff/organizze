<script setup>
import {
    LayoutDashboard, Users, BarChart3, Settings,
    LogOut, ChevronRight, Shield,
} from 'lucide-vue-next';

const nav = [
    { label: 'Dashboard',  href: '/panel',          icon: LayoutDashboard },
    { label: 'Usuários',   href: '/panel/usuarios',  icon: Users },
    { label: 'Relatórios', href: '/panel/relatorios',icon: BarChart3 },
    { label: 'Configurações', href: '/panel/configuracoes', icon: Settings },
];

function isActive(href) {
    const path = window.location.pathname;
    return href === '/panel' ? path === '/panel' : path.startsWith(href);
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
            <a
                v-for="item in nav" :key="item.href"
                :href="item.href"
                :class="isActive(item.href)
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:bg-white/5 hover:text-white'"
                class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group"
            >
                <div class="flex items-center gap-3">
                    <component :is="item.icon" class="w-4 h-4 shrink-0" />
                    {{ item.label }}
                </div>
                <ChevronRight v-if="isActive(item.href)" class="w-3.5 h-3.5 opacity-60" />
            </a>
        </nav>

        <!-- Separador + Voltar ao app -->
        <div class="px-3 py-4 border-t border-white/10 space-y-1">
            <a href="/app" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:bg-white/5 hover:text-white transition-colors">
                <LogOut class="w-4 h-4" />
                Voltar ao App
            </a>
        </div>
    </aside>
</template>
