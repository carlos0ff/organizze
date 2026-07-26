<script setup>
import { ref, computed, watch } from 'vue';
import Navbar from '@/Components/navigation/Navbar.vue';
import {
    Trash2, Check, BellOff, ChevronDown, Search, X,
    AlertTriangle, CreditCard, CalendarDays, Target, Settings2, Star,
} from 'lucide-vue-next';

const activeFilter = ref('todas');
const search       = ref('');
const sort         = ref('recentes');

const PAGE_SIZE    = 3;
const visibleCount = ref(PAGE_SIZE);

// Reset paginação quando filtro/busca muda
watch([activeFilter, search, sort], () => { visibleCount.value = PAGE_SIZE; });

const ALL_NOTIFICATIONS = [
    {
        id: 1, read: false, starred: false, important: true,
        icon: AlertTriangle, iconBg: 'bg-red-100', iconColor: 'text-red-500',
        badge: { label: 'Importante', bg: 'bg-orange-100', text: 'text-orange-600' },
        title: 'Limite de gastos atingido',
        body: 'Você atingiu 95% do seu limite mensal de gastos (R$ 2.850,00 de R$ 3.000,00). Considere revisar seus gastos para o restante do mês e evitar ultrapassar o limite estabelecido.',
        time: 'há 2 horas',
    },
    {
        id: 2, read: false, starred: false, important: false,
        icon: CreditCard, iconBg: 'bg-blue-100', iconColor: 'text-blue-500',
        badge: { label: 'Transação', bg: 'bg-blue-100', text: 'text-blue-600' },
        title: 'Nova transação detectada',
        body: 'Débito de R$ 89,90 no Cartão Nubank – Supermercado Extra. Categorizada automaticamente como "Alimentação". Caso não reconheça essa transação, entre em contato com o seu banco.',
        time: 'há 3 horas',
    },
    {
        id: 3, read: false, starred: false, important: false,
        icon: CalendarDays, iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600',
        badge: { label: 'Vencimento', bg: 'bg-yellow-100', text: 'text-yellow-700' },
        title: 'Conta vencendo em 3 dias',
        body: 'Fatura do Cartão Inter no valor de R$ 1.245,67 vence em 18/01/2024. Não esqueça de efetuar o pagamento para evitar juros e multas.',
        time: 'há 4 horas',
    },
    {
        id: 4, read: true, starred: true, important: false,
        icon: Target, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-500',
        badge: { label: 'Meta', bg: 'bg-emerald-100', text: 'text-emerald-700' },
        title: 'Meta atingida!',
        body: 'Parabéns! Você atingiu 100% da sua meta "Reserva de Emergência" (R$ 5.000,00). Continue assim e defina uma nova meta para continuar crescendo seu patrimônio!',
        time: 'ontem',
    },
    {
        id: 5, read: true, starred: false, important: false,
        icon: Settings2, iconBg: 'bg-purple-100', iconColor: 'text-purple-500',
        badge: { label: 'Sistema', bg: 'bg-purple-100', text: 'text-purple-700' },
        title: 'Sistema atualizado',
        body: 'CafeControl foi atualizado para a versão 2.1.0. Confira as novas funcionalidades no menu de ajuda: importação automática OFX, novo dashboard de metas e melhorias de performance.',
        time: 'ontem',
    },
    {
        id: 6, read: true, starred: false, important: true,
        icon: AlertTriangle, iconBg: 'bg-red-100', iconColor: 'text-red-500',
        badge: { label: 'Importante', bg: 'bg-orange-100', text: 'text-orange-600' },
        title: 'Senha alterada com sucesso',
        body: 'Sua senha de acesso foi alterada com sucesso em 15/01/2024 às 10:32. Se não foi você, entre em contato imediatamente com o suporte.',
        time: '2 dias atrás',
    },
    {
        id: 7, read: true, starred: false, important: false,
        icon: CreditCard, iconBg: 'bg-blue-100', iconColor: 'text-blue-500',
        badge: { label: 'Transação', bg: 'bg-blue-100', text: 'text-blue-600' },
        title: 'Transferência recebida',
        body: 'Você recebeu uma transferência de R$ 350,00 de Carlos Silva via PIX. O valor já está disponível na sua conta Itaú.',
        time: '2 dias atrás',
    },
    {
        id: 8, read: true, starred: false, important: false,
        icon: Target, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-500',
        badge: { label: 'Meta', bg: 'bg-emerald-100', text: 'text-emerald-700' },
        title: 'Meta "Viagem" chegou a 50%',
        body: 'Você atingiu 50% da sua meta "Viagem para Europa" (R$ 7.500,00 de R$ 15.000,00). Continue poupando para realizar o seu sonho!',
        time: '3 dias atrás',
    },
];

const notifications = ref(ALL_NOTIFICATIONS.map(n => ({ ...n })));

const totalCount     = computed(() => notifications.value.length);
const unreadCount    = computed(() => notifications.value.filter(n => !n.read).length);
const readCount      = computed(() => notifications.value.filter(n => n.read).length);
const importantCount = computed(() => notifications.value.filter(n => n.important).length);

const FILTERS = computed(() => [
    { key: 'todas',       label: 'Todas',       count: totalCount.value     },
    { key: 'nao_lidas',   label: 'Não lidas',   count: unreadCount.value    },
    { key: 'lidas',       label: 'Lidas',       count: readCount.value      },
    { key: 'importantes', label: 'Importantes', count: importantCount.value },
]);

const filteredAll = computed(() => {
    let list = notifications.value;
    if (activeFilter.value === 'nao_lidas')   list = list.filter(n => !n.read);
    if (activeFilter.value === 'lidas')       list = list.filter(n => n.read);
    if (activeFilter.value === 'importantes') list = list.filter(n => n.important);
    if (search.value.trim()) {
        const q = search.value.toLowerCase();
        list = list.filter(n => n.title.toLowerCase().includes(q) || n.body.toLowerCase().includes(q));
    }
    return sort.value === 'antigas' ? [...list].reverse() : list;
});

const displayed = computed(() => filteredAll.value.slice(0, visibleCount.value));
const hasMore   = computed(() => visibleCount.value < filteredAll.value.length);
const remaining = computed(() => filteredAll.value.length - visibleCount.value);

function loadMore() { visibleCount.value += PAGE_SIZE; }

// Modal de detalhe
const selected = ref(null);

function openNotification(n) {
    selected.value = n;
    n.read = true;
}
function closeNotification() { selected.value = null; }

function markRead(n, e)    { e.stopPropagation(); n.read = true; }
function toggleStar(n, e)  { e.stopPropagation(); n.starred = !n.starred; }
function remove(id, e)     { e.stopPropagation(); notifications.value = notifications.value.filter(n => n.id !== id); if (selected.value?.id === id) selected.value = null; }
function markAllRead()     { notifications.value.forEach(n => (n.read = true)); }
function clearAll()        { notifications.value = []; selected.value = null; }
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-gray-50 pt-20 pb-16">
        <div class="max-w-5xl mx-auto px-4 py-10">

            <!-- Header -->
            <div class="flex items-start justify-between mb-8">
                <div>
                    <h1 class="text-3xl font-bold text-gray-900">Notificações</h1>
                    <p class="text-sm text-gray-400 mt-1">Central de notificações e alertas do sistema</p>
                </div>
                <div class="flex items-center gap-3">
                    <button @click="markAllRead"
                        class="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors shadow-sm">
                        <Check class="w-4 h-4" /> Marcar todas como lidas
                    </button>
                    <button @click="clearAll"
                        class="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                        <Trash2 class="w-4 h-4" /> Limpar todas
                    </button>
                </div>
            </div>

            <!-- Filtros + busca -->
            <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div class="flex gap-2">
                    <button v-for="f in FILTERS" :key="f.key"
                        @click="activeFilter = f.key"
                        class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
                        :class="activeFilter === f.key ? 'bg-emerald-500 text-white' : 'text-gray-600 hover:text-gray-800'">
                        {{ f.label }}
                        <span class="text-[12px] font-bold">{{ f.count }}</span>
                    </button>
                </div>
                <div class="flex items-center gap-3">
                    <div class="relative">
                        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input v-model="search" type="text" placeholder="Buscar notificações..."
                            class="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-emerald-400 w-60 transition" />
                    </div>
                    <div class="relative">
                        <select v-model="sort"
                            class="appearance-none pl-3 pr-8 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg bg-white focus:outline-none transition cursor-pointer">
                            <option value="recentes">Mais recentes</option>
                            <option value="antigas">Mais antigas</option>
                        </select>
                        <ChevronDown class="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            <!-- Lista -->
            <div class="bg-white rounded-2xl shadow-sm overflow-hidden">

                <!-- Vazia -->
                <div v-if="filteredAll.length === 0" class="flex flex-col items-center py-20 text-center">
                    <BellOff class="w-10 h-10 text-gray-200 mb-3" />
                    <p class="text-sm font-semibold text-gray-400">Nenhuma notificação encontrada</p>
                    <p class="text-xs text-gray-300 mt-1">Tudo limpo por aqui!</p>
                </div>

                <!-- Itens -->
                <template v-else>
                    <div v-for="(n, i) in displayed" :key="n.id"
                        @click="openNotification(n)"
                        class="flex items-start gap-4 px-6 py-5 hover:bg-gray-50/70 transition-colors cursor-pointer"
                        :class="i < displayed.length - 1 ? 'border-b border-gray-100' : ''">

                        <!-- Ícone -->
                        <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5" :class="n.iconBg">
                            <component :is="n.icon" class="w-5 h-5" :class="n.iconColor" />
                        </div>

                        <!-- Conteúdo -->
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 flex-wrap mb-1">
                                <span class="text-sm font-semibold" :class="n.read ? 'text-gray-500' : 'text-gray-800'">
                                    {{ n.title }}
                                </span>
                                <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full" :class="[n.badge.bg, n.badge.text]">
                                    {{ n.badge.label }}
                                </span>
                                <span v-if="!n.read" class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                            </div>
                            <p class="text-sm text-gray-400 leading-relaxed line-clamp-1">{{ n.body }}</p>
                        </div>

                        <!-- Tempo + ações -->
                        <div class="flex flex-col items-end gap-2 shrink-0 ml-2">
                            <span class="text-xs text-gray-400 whitespace-nowrap">{{ n.time }}</span>
                            <div class="flex items-center gap-1">
                                <button v-if="!n.read" @click="markRead(n, $event)"
                                    class="p-1 rounded hover:bg-emerald-50 text-gray-300 hover:text-emerald-500 transition-colors" title="Marcar como lida">
                                    <Check class="w-4 h-4" />
                                </button>
                                <Check v-else class="w-4 h-4 text-gray-200 mx-1" />
                                <button @click="toggleStar(n, $event)"
                                    class="p-1 rounded hover:bg-yellow-50 transition-colors" title="Destacar">
                                    <Star class="w-4 h-4 transition-colors"
                                        :class="n.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-400'" />
                                </button>
                                <button @click="remove(n.id, $event)"
                                    class="p-1 rounded hover:bg-red-50 text-gray-300 hover:text-red-400 transition-colors" title="Remover">
                                    <Trash2 class="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Carregar mais -->
                    <div v-if="hasMore" class="flex justify-center py-5 border-t border-gray-100">
                        <button @click="loadMore"
                            class="flex items-center gap-1.5 text-sm font-semibold text-emerald-500 hover:text-emerald-600 transition-colors">
                            <ChevronDown class="w-4 h-4" />
                            Carregar mais notificações
                            <span class="text-xs font-normal text-gray-400">({{ remaining }} restantes)</span>
                        </button>
                    </div>
                    <div v-else-if="filteredAll.length > PAGE_SIZE" class="flex justify-center py-4 border-t border-gray-100">
                        <span class="text-xs text-gray-300">Todas as notificações foram carregadas</span>
                    </div>
                </template>
            </div>

        </div>
    </div>

    <!-- Modal de detalhe -->
    <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="selected" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            @click.self="closeNotification">

            <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95">
                <div v-if="selected" class="bg-white rounded-2xl shadow-xl w-full max-w-md">

                    <!-- Cabeçalho modal -->
                    <div class="flex items-center justify-between px-6 pt-5 pb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-11 h-11 rounded-full flex items-center justify-center" :class="selected.iconBg">
                                <component :is="selected.icon" class="w-5 h-5" :class="selected.iconColor" />
                            </div>
                            <div>
                                <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full" :class="[selected.badge.bg, selected.badge.text]">
                                    {{ selected.badge.label }}
                                </span>
                                <p class="text-xs text-gray-400 mt-0.5">{{ selected.time }}</p>
                            </div>
                        </div>
                        <button @click="closeNotification"
                            class="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                            <X class="w-4 h-4" />
                        </button>
                    </div>

                    <!-- Conteúdo -->
                    <div class="px-6 pb-6">
                        <h2 class="text-base font-bold text-gray-800 mb-3">{{ selected.title }}</h2>
                        <p class="text-sm text-gray-500 leading-relaxed">{{ selected.body }}</p>
                    </div>

                    <!-- Rodapé -->
                    <div class="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                        <div class="flex items-center gap-2">
                            <button @click="toggleStar(selected, $event)"
                                class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors"
                                :class="selected.starred
                                    ? 'border-yellow-300 bg-yellow-50 text-yellow-600'
                                    : 'border-gray-200 text-gray-500 hover:bg-gray-50'">
                                <Star class="w-3.5 h-3.5" :class="selected.starred ? 'fill-yellow-400 text-yellow-400' : ''" />
                                {{ selected.starred ? 'Destacada' : 'Destacar' }}
                            </button>
                        </div>
                        <button @click="remove(selected.id, $event)"
                            class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors">
                            <Trash2 class="w-3.5 h-3.5" /> Remover
                        </button>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>
