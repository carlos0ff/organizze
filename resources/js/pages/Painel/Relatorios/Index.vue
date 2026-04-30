<script setup>
import PanelLayout from '@/Componentes/Painel/PanelLayout.vue';

const props = defineProps({
    usersByPlan:  { type: Object, default: () => ({}) },
    usersByMonth: { type: Object, default: () => ({}) },
    txByMonth:    { type: Object, default: () => ({}) },
});

const MONTHS = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

const planLabels = { free: 'Free', basic: 'Basic', pro: 'Pro' };
const planColors = { free: 'bg-gray-400', basic: 'bg-blue-500', pro: 'bg-emerald-500' };

const totalUsers = Object.values(props.usersByPlan).reduce((s, v) => s + Number(v), 0);

const maxUsers = Math.max(...Object.values(props.usersByMonth).map(Number), 1);
const maxTx    = Math.max(...Object.values(props.txByMonth).map(Number), 1);

function monthData(map) {
    return MONTHS.map((_, i) => ({ month: MONTHS[i], value: Number(map[i + 1] ?? 0) }));
}

function fmtMoney(v) {
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
</script>

<template>
    <PanelLayout title="Relatórios" subtitle="Análise da plataforma">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            <!-- Usuários por plano -->
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <h2 class="text-sm font-bold text-gray-700 mb-5">Usuários por plano</h2>
                <div class="space-y-4">
                    <div v-for="(color, plan) in planColors" :key="plan">
                        <div class="flex items-center justify-between mb-1.5">
                            <div class="flex items-center gap-2">
                                <div :class="color" class="w-2.5 h-2.5 rounded-full"></div>
                                <span class="text-xs font-semibold text-gray-600">{{ planLabels[plan] }}</span>
                            </div>
                            <span class="text-xs font-bold text-gray-700">
                                {{ usersByPlan[plan] ?? 0 }}
                                <span class="text-gray-400 font-normal">
                                    ({{ totalUsers > 0 ? ((Number(usersByPlan[plan] ?? 0) / totalUsers) * 100).toFixed(1) : 0 }}%)
                                </span>
                            </span>
                        </div>
                        <div class="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                :class="color"
                                class="h-full rounded-full transition-all duration-700"
                                :style="`width: ${totalUsers > 0 ? (Number(usersByPlan[plan] ?? 0) / totalUsers) * 100 : 0}%`"
                            ></div>
                        </div>
                    </div>
                    <div class="pt-3 border-t border-gray-50 flex justify-between text-xs text-gray-500">
                        <span>Total de usuários</span>
                        <span class="font-bold text-gray-700">{{ totalUsers }}</span>
                    </div>
                </div>
            </div>

            <!-- MRR estimado -->
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <h2 class="text-sm font-bold text-gray-700 mb-2">MRR estimado</h2>
                <p class="text-xs text-gray-400 mb-5">Receita mensal recorrente (valores simulados)</p>

                <div class="text-center py-6">
                    <p class="text-4xl font-black text-emerald-600">
                        {{ fmtMoney(
                            (Number(usersByPlan.basic ?? 0) * 19.9) +
                            (Number(usersByPlan.pro   ?? 0) * 39.9)
                        ) }}
                    </p>
                    <p class="text-xs text-gray-400 mt-1">por mês</p>
                </div>

                <div class="space-y-2">
                    <div class="flex justify-between text-xs">
                        <span class="text-gray-500">Basic × {{ usersByPlan.basic ?? 0 }}</span>
                        <span class="font-semibold text-gray-700">{{ fmtMoney((usersByPlan.basic ?? 0) * 19.9) }}</span>
                    </div>
                    <div class="flex justify-between text-xs">
                        <span class="text-gray-500">Pro × {{ usersByPlan.pro ?? 0 }}</span>
                        <span class="font-semibold text-gray-700">{{ fmtMoney((usersByPlan.pro ?? 0) * 39.9) }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Gráfico de novos usuários por mês -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-6">
            <h2 class="text-sm font-bold text-gray-700 mb-4">Novos usuários por mês — {{ new Date().getFullYear() }}</h2>
            <div class="flex items-end gap-3 h-40">
                <div v-for="item in monthData(usersByMonth)" :key="item.month" class="flex-1 flex flex-col items-center gap-1">
                    <span class="text-[9px] text-gray-400 font-semibold">{{ item.value || '' }}</span>
                    <div
                        class="w-full bg-emerald-500 rounded-t-md hover:bg-emerald-400 transition-colors cursor-default"
                        :style="`height: ${Math.max(3, (item.value / maxUsers) * 140)}px`"
                        :title="`${item.month}: ${item.value} usuários`"
                    ></div>
                    <span class="text-[9px] text-gray-400">{{ item.month }}</span>
                </div>
            </div>
        </div>

        <!-- Gráfico de volume de despesas por mês -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h2 class="text-sm font-bold text-gray-700 mb-4">Volume de despesas dos usuários — {{ new Date().getFullYear() }}</h2>
            <div class="flex items-end gap-3 h-40">
                <div v-for="item in monthData(txByMonth)" :key="item.month" class="flex-1 flex flex-col items-center gap-1">
                    <span class="text-[9px] text-gray-400 font-semibold">{{ item.value > 0 ? fmtMoney(item.value) : '' }}</span>
                    <div
                        class="w-full bg-red-400 rounded-t-md hover:bg-red-300 transition-colors cursor-default"
                        :style="`height: ${Math.max(3, (item.value / maxTx) * 140)}px`"
                        :title="`${item.month}: ${fmtMoney(item.value)}`"
                    ></div>
                    <span class="text-[9px] text-gray-400">{{ item.month }}</span>
                </div>
            </div>
        </div>

    </PanelLayout>
</template>

