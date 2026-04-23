<script setup>
import PanelLayout from '@/Components/panel/PanelLayout.vue';
import { Users, TrendingUp, Activity, AlertTriangle, Crown, Star, Zap, ArrowUpRight } from 'lucide-vue-next';

const props = defineProps({
    stats:       { type: Object, default: () => ({}) },
    userGrowth:  { type: Array,  default: () => [] },
    recentUsers: { type: Array,  default: () => [] },
});

const MONTHS = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const maxGrowth = Math.max(...props.userGrowth.map(u => u.total), 1);

const planConfig = {
    free:  { label: 'Free',  color: 'bg-gray-400',    text: 'text-gray-600',   badge: 'bg-gray-100 text-gray-600' },
    basic: { label: 'Basic', color: 'bg-blue-500',     text: 'text-blue-600',   badge: 'bg-blue-100 text-blue-700' },
    pro:   { label: 'Pro',   color: 'bg-emerald-500',  text: 'text-emerald-600',badge: 'bg-emerald-100 text-emerald-700' },
};

const statusConfig = {
    active:    { label: 'Ativo',     badge: 'bg-emerald-100 text-emerald-700' },
    suspended: { label: 'Suspenso',  badge: 'bg-red-100 text-red-600' },
    inactive:  { label: 'Inativo',   badge: 'bg-gray-100 text-gray-500' },
};

function fmtDate(d) {
    return new Date(d).toLocaleDateString('pt-BR');
}
</script>

<template>
    <PanelLayout title="Dashboard" subtitle="Visão geral da plataforma">

        <!-- KPI Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Users class="w-4 h-4 text-blue-600" />
                    </div>
                    <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        <ArrowUpRight class="w-3 h-3" /> +{{ stats.new_users_month }}
                    </span>
                </div>
                <p class="text-2xl font-black text-gray-800">{{ stats.total_users ?? 0 }}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">Total de usuários</p>
            </div>

            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center">
                        <Activity class="w-4 h-4 text-emerald-600" />
                    </div>
                </div>
                <p class="text-2xl font-black text-gray-800">{{ stats.active_users ?? 0 }}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">Usuários ativos</p>
            </div>

            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center">
                        <AlertTriangle class="w-4 h-4 text-orange-500" />
                    </div>
                </div>
                <p class="text-2xl font-black text-gray-800">{{ stats.suspended_users ?? 0 }}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">Suspensos</p>
            </div>

            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-9 h-9 bg-purple-50 rounded-lg flex items-center justify-center">
                        <TrendingUp class="w-4 h-4 text-purple-600" />
                    </div>
                </div>
                <p class="text-2xl font-black text-gray-800">{{ stats.total_transactions ?? 0 }}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">Transações totais</p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

            <!-- Gráfico de crescimento -->
            <div class="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <h2 class="text-sm font-bold text-gray-700 mb-4">Novos usuários — {{ new Date().getFullYear() }}</h2>
                <div class="flex items-end gap-2 h-36">
                    <div
                        v-for="u in userGrowth" :key="u.month"
                        class="flex-1 flex flex-col items-center gap-1"
                    >
                        <span class="text-[9px] text-gray-400 font-semibold">{{ u.total }}</span>
                        <div
                            class="w-full bg-emerald-500 rounded-t-md transition-all duration-700"
                            :style="`height: ${Math.max(4, (u.total / maxGrowth) * 120)}px`"
                        ></div>
                        <span class="text-[9px] text-gray-400">{{ MONTHS[u.month - 1] }}</span>
                    </div>
                    <div v-if="userGrowth.length === 0" class="w-full text-center text-xs text-gray-300 py-10">
                        Sem dados ainda
                    </div>
                </div>
            </div>

            <!-- Distribuição de planos -->
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <h2 class="text-sm font-bold text-gray-700 mb-4">Distribuição de planos</h2>
                <div class="space-y-3">
                    <div v-for="[plan, cfg] in Object.entries(planConfig)" :key="plan">
                        <div class="flex items-center justify-between mb-1">
                            <div class="flex items-center gap-2">
                                <div :class="cfg.color" class="w-2.5 h-2.5 rounded-full"></div>
                                <span class="text-xs font-semibold text-gray-600">{{ cfg.label }}</span>
                            </div>
                            <span class="text-xs font-bold text-gray-700">{{ stats[`plan_${plan}`] ?? 0 }}</span>
                        </div>
                        <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                :class="cfg.color"
                                class="h-full rounded-full transition-all duration-700"
                                :style="`width: ${stats.total_users > 0 ? ((stats[`plan_${plan}`] ?? 0) / stats.total_users * 100) : 0}%`"
                            ></div>
                        </div>
                    </div>
                </div>

                <!-- Legenda numérica -->
                <div class="mt-5 pt-4 border-t border-gray-50 grid grid-cols-3 gap-2 text-center">
                    <div v-for="[plan, cfg] in Object.entries(planConfig)" :key="plan">
                        <p class="text-lg font-black" :class="cfg.text">{{ stats[`plan_${plan}`] ?? 0 }}</p>
                        <p class="text-[10px] text-gray-400 font-semibold uppercase">{{ cfg.label }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Usuários recentes -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                <h2 class="text-sm font-bold text-gray-700">Usuários recentes</h2>
                <a href="/panel/usuarios" class="text-xs font-semibold text-emerald-600 hover:underline">Ver todos</a>
            </div>
            <div class="divide-y divide-gray-50">
                <div v-for="user in recentUsers" :key="user.id" class="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors">
                    <!-- Avatar -->
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {{ user.name?.charAt(0)?.toUpperCase() ?? '?' }}
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-gray-800 truncate">{{ user.name }}</p>
                        <p class="text-[11px] text-gray-400 truncate">{{ user.email }}</p>
                    </div>
                    <span :class="planConfig[user.plan]?.badge" class="text-[10px] font-bold px-2 py-0.5 rounded-full hidden sm:inline">
                        {{ planConfig[user.plan]?.label ?? user.plan }}
                    </span>
                    <span :class="statusConfig[user.status]?.badge" class="text-[10px] font-bold px-2 py-0.5 rounded-full hidden md:inline">
                        {{ statusConfig[user.status]?.label ?? user.status }}
                    </span>
                    <p class="text-[11px] text-gray-400 shrink-0 hidden lg:block">{{ fmtDate(user.created_at) }}</p>
                    <a :href="`/panel/usuarios/${user.id}`" class="text-[11px] font-semibold text-emerald-600 hover:underline shrink-0">Ver</a>
                </div>

                <div v-if="recentUsers.length === 0" class="px-5 py-8 text-center text-sm text-gray-400">
                    Nenhum usuário cadastrado ainda.
                </div>
            </div>
        </div>

    </PanelLayout>
</template>
