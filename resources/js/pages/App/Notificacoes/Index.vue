<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    Bell, BellOff, Check, CheckCheck, Trash2, X,
    AlertTriangle, Info, TrendingDown, CreditCard,
    Target, ArrowUpCircle, Zap, Gift, Shield,
    ChevronRight, Filter,
} from 'lucide-vue-next';

const activeFilter = ref('todas');

const FILTERS = [
    { key: 'todas',    label: 'Todas' },
    { key: 'nao_lida', label: 'Não lidas' },
    { key: 'alerta',   label: 'Alertas' },
    { key: 'info',     label: 'Informações' },
    { key: 'dica',     label: 'Dicas' },
];

const notifications = ref([
    {
        id: 1, type: 'alerta', read: false,
        icon: AlertTriangle, iconBg: 'bg-red-50', iconColor: 'text-red-500',
        title: 'Limite de gastos atingido',
        body: 'Você atingiu 100% do seu limite de "Alimentação" (R$ 800,00). Cuidado com novos gastos nessa categoria.',
        time: 'Há 5 minutos', tag: 'Limites',
    },
    {
        id: 2, type: 'alerta', read: false,
        icon: CreditCard, iconBg: 'bg-amber-50', iconColor: 'text-amber-500',
        title: 'Conta a vencer amanhã',
        body: 'A fatura do cartão Nubank vence amanhã (07/06). Valor: R$ 1.247,90.',
        time: 'Há 1 hora', tag: 'Cartões',
    },
    {
        id: 3, type: 'alerta', read: false,
        icon: TrendingDown, iconBg: 'bg-orange-50', iconColor: 'text-orange-500',
        title: 'Limite de "Lazer" em 80%',
        body: 'Você já usou R$ 192,00 dos R$ 240,00 disponíveis para lazer este mês.',
        time: 'Há 3 horas', tag: 'Limites',
    },
    {
        id: 4, type: 'info', read: false,
        icon: ArrowUpCircle, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500',
        title: 'Receita registrada',
        body: 'Seu salário de R$ 5.800,00 foi registrado e sua conta foi atualizada.',
        time: 'Hoje, 09:00', tag: 'Lançamentos',
    },
    {
        id: 5, type: 'info', read: true,
        icon: Target, iconBg: 'bg-blue-50', iconColor: 'text-blue-500',
        title: 'Meta mensal: você está no caminho certo!',
        body: 'Já economizou R$ 1.200,00 este mês. Faltam apenas R$ 800,00 para atingir sua meta de R$ 2.000,00.',
        time: 'Ontem, 18:30', tag: 'Metas',
    },
    {
        id: 6, type: 'dica', read: true,
        icon: Zap, iconBg: 'bg-violet-50', iconColor: 'text-violet-500',
        title: 'Dica financeira: regra 50-30-20',
        body: 'Distribua sua renda assim: 50% para necessidades, 30% para desejos e 20% para poupança e investimentos.',
        time: 'Ontem, 08:00', tag: 'Dicas',
    },
    {
        id: 7, type: 'info', read: true,
        icon: Shield, iconBg: 'bg-gray-50', iconColor: 'text-gray-500',
        title: 'Login em novo dispositivo',
        body: 'Detectamos um acesso da conta a partir de Firefox — Ubuntu 22.04 em Rio de Janeiro, RJ.',
        time: '3 dias atrás', tag: 'Segurança',
    },
    {
        id: 8, type: 'dica', read: true,
        icon: Gift, iconBg: 'bg-pink-50', iconColor: 'text-pink-500',
        title: 'Novidade: Conexão Open Finance',
        body: 'Agora você pode conectar suas contas bancárias automaticamente via Open Finance. Ative em Conexão Bancária.',
        time: '5 dias atrás', tag: 'Novidades',
    },
]);

const filtered = computed(() => {
    if (activeFilter.value === 'todas')    return notifications.value;
    if (activeFilter.value === 'nao_lida') return notifications.value.filter(n => !n.read);
    return notifications.value.filter(n => n.type === activeFilter.value);
});

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length);

function markRead(n)   { n.read = true; }
function markUnread(n) { n.read = false; }
function remove(id)    { notifications.value = notifications.value.filter(n => n.id !== id); }
function markAllRead() { notifications.value.forEach(n => n.read = true); }

const TAG_COLORS = {
    'Limites':    'bg-red-50 text-red-500 border-red-100',
    'Cartões':    'bg-amber-50 text-amber-600 border-amber-100',
    'Lançamentos':'bg-emerald-50 text-emerald-600 border-emerald-100',
    'Metas':      'bg-blue-50 text-blue-600 border-blue-100',
    'Dicas':      'bg-violet-50 text-violet-600 border-violet-100',
    'Segurança':  'bg-gray-50 text-gray-600 border-gray-200',
    'Novidades':  'bg-pink-50 text-pink-600 border-pink-100',
};
</script>

<template>
    <Navbar />

    <main class="max-w-3xl mx-auto px-4 pt-24 pb-12">

        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <Bell class="w-5 h-5 text-emerald-500" />
                    <h1 class="text-xl font-bold text-gray-800">Notificações</h1>
                    <span v-if="unreadCount > 0"
                        class="text-[11px] font-bold px-2 py-0.5 bg-red-500 text-white rounded-full">
                        {{ unreadCount }}
                    </span>
                </div>
                <p class="text-sm text-gray-400">Fique por dentro de tudo que acontece na sua conta</p>
            </div>

            <button v-if="unreadCount > 0" @click="markAllRead"
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-emerald-600 border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-colors">
                <CheckCheck class="w-4 h-4" /> Marcar todas como lidas
            </button>
        </div>

        <!-- Filtros -->
        <div class="flex gap-2 mb-5 overflow-x-auto pb-1">
            <button v-for="f in FILTERS" :key="f.key"
                @click="activeFilter = f.key"
                :class="activeFilter === f.key ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-300'"
                class="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-colors whitespace-nowrap">
                {{ f.label }}
                <span v-if="f.key === 'nao_lida' && unreadCount > 0"
                    class="w-4 h-4 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center font-bold">
                    {{ unreadCount }}
                </span>
            </button>
        </div>

        <!-- Lista vazia -->
        <div v-if="filtered.length === 0" class="bg-white rounded-xl shadow-sm p-16 text-center">
            <BellOff class="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p class="text-sm font-semibold text-gray-400">Nenhuma notificação</p>
            <p class="text-xs text-gray-300 mt-1">Tudo limpo por aqui!</p>
        </div>

        <!-- Lista de notificações -->
        <div v-else class="space-y-2">
            <div v-for="n in filtered" :key="n.id"
                class="group relative bg-white rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md"
                :class="n.read ? 'border-gray-100' : 'border-emerald-100 ring-1 ring-emerald-50'">

                <!-- Indicador não lida -->
                <div v-if="!n.read" class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-emerald-500 rounded-r-full"></div>

                <div class="flex items-start gap-4 px-5 py-4">
                    <!-- Ícone -->
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        :class="n.iconBg">
                        <component :is="n.icon" class="w-5 h-5" :class="n.iconColor" />
                    </div>

                    <!-- Conteúdo -->
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap mb-1">
                            <p class="text-sm font-bold text-gray-800" :class="!n.read ? 'text-gray-900' : ''">
                                {{ n.title }}
                            </p>
                            <span class="text-[9px] font-bold px-2 py-0.5 rounded-full border"
                                :class="TAG_COLORS[n.tag] ?? 'bg-gray-50 text-gray-500 border-gray-200'">
                                {{ n.tag }}
                            </span>
                        </div>
                        <p class="text-xs text-gray-500 leading-relaxed">{{ n.body }}</p>
                        <p class="text-[10px] text-gray-300 mt-2">{{ n.time }}</p>
                    </div>

                    <!-- Ações -->
                    <div class="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                        <button v-if="!n.read" @click="markRead(n)"
                            class="p-1.5 rounded-lg hover:bg-emerald-50 text-gray-400 hover:text-emerald-500 transition-colors"
                            title="Marcar como lida">
                            <Check class="w-3.5 h-3.5" />
                        </button>
                        <button v-else @click="markUnread(n)"
                            class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-300 hover:text-gray-500 transition-colors"
                            title="Marcar como não lida">
                            <BellOff class="w-3.5 h-3.5" />
                        </button>
                        <button @click="remove(n.id)"
                            class="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                            title="Remover">
                            <Trash2 class="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer info -->
        <div v-if="filtered.length > 0" class="mt-6 text-center">
            <p class="text-xs text-gray-300">{{ filtered.length }} notificação(ões) exibida(s)</p>
        </div>
    </main>
</template>
