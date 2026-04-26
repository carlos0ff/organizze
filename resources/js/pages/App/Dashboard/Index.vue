<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import AppFooter from '@/Components/layout/Footer.vue';
import Navbar from '@/Components/layout/Navbar.vue';

// ==================== IMPORTS LUCIDE ====================
import {
  Ellipsis,
  Menu,
  X,
  // Ações
  Check,
  Download,
  Minus,
  Plus,
  EyeOff,

  // Finanças
  ArrowRightLeft,
  CreditCard,
  TrendingUp,
  Wallet,

  // Clima/Saudação
  CloudSun,
  Sunset,
  Moon,

  // Outros
  Car,
  CirclePlus,
  Gamepad2,
  Gift,
  GraduationCap,
  HeartPulse,
  Home,

  ShoppingCart,
  Star,
  TreePalm,
  TvMinimalPlay,
  Utensils,
  Wifi,
  Tag,
  MessageSquareText,
  Paperclip,
  Repeat,
  ArrowUpCircle,
  ArrowDownCircle,
  ChevronRight,
  BookOpen,
  Clock,
  Eye,
  ArrowRight,
  // Primeiros passos
  Rocket,
  Building2,
  BadgeCheck,
  PiggyBank,
  Link2,
} from 'lucide-vue-next';

// ==================== PRIMEIROS PASSOS ====================
const tutorialOpen = ref(false);
const tooltipVisible = ref(null);

const STEPS = [
    {
        id: 1,
        icon: BadgeCheck,
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
        label: 'Criar sua conta',
        desc: 'Você já criou sua conta no Organizze. Parabéns pelo primeiro passo!',
        detail: 'Sua conta foi criada com sucesso. Você já pode começar a organizar suas finanças.',
        done: true,
    },
    {
        id: 2,
        icon: Building2,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        label: 'Adicionar conta bancária',
        desc: 'Cadastre sua conta corrente, poupança ou carteira.',
        detail: 'Adicione uma conta para registrar seus lançamentos e acompanhar seu saldo em tempo real.',
        done: true,
        action: { label: 'Adicionar conta', to: '/app/contas' },
    },
    {
        id: 3,
        icon: ArrowRight,
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-600',
        label: 'Registrar primeiro lançamento',
        desc: 'Adicione uma despesa ou receita para começar o controle.',
        detail: 'Um lançamento é qualquer movimentação financeira: salário, aluguel, compras, etc.',
        done: false,
        action: { label: 'Novo lançamento', to: '/app/lancamentos' },
    },
    {
        id: 4,
        icon: PiggyBank,
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
        label: 'Definir limite de gastos',
        desc: 'Crie metas por categoria para não estourar o orçamento.',
        detail: 'Limites de gastos te alertam quando você está chegando perto do teto em uma categoria.',
        done: false,
        action: { label: 'Criar limite', to: '/app/limites-gastos' },
    },
    {
        id: 5,
        icon: Link2,
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        label: 'Conectar seu banco',
        desc: 'Sincronize extratos automaticamente pelo Open Finance.',
        detail: 'Com a conexão bancária seus lançamentos são importados automaticamente, sem digitar nada.',
        done: false,
        badge: 'Pro',
        action: { label: 'Conectar banco', to: '/app/conexao-bancaria' },
    },
];

const doneCount = computed(() => STEPS.filter(s => s.done).length);
const progressPct = computed(() => (doneCount.value / STEPS.length) * 100);



// ==================== PROPS ====================
const props = defineProps({
    recentPosts: { type: Array, default: () => [] },
});

// ==================== BLOG HELPERS ====================
const BLOG_MOCK = [
    {
        id: 1, slug: 'como-sair-das-dividas-em-2026',
        title: 'Como sair das dívidas em 2026',
        excerpt: 'Descubra o método passo a passo que milhares de brasileiros usaram para quitar dívidas e reconquistar sua liberdade financeira.',
        reading_time: 5, views: 1240, published_at: '2026-04-20T10:00:00Z',
        tag: 'Dívidas', tagColor: 'bg-red-50 text-red-500',
    },
    {
        id: 2, slug: 'investir-com-pouco-dinheiro',
        title: 'Como investir com pouco dinheiro',
        excerpt: 'Você não precisa de muito capital para começar a investir. Veja as melhores opções para quem está iniciando com R$ 50.',
        reading_time: 7, views: 3870, published_at: '2026-04-18T08:00:00Z',
        tag: 'Investimentos', tagColor: 'bg-emerald-50 text-emerald-600',
    },
    {
        id: 3, slug: 'orcamento-familiar-do-zero',
        title: 'Monte seu orçamento familiar do zero',
        excerpt: 'Um guia prático para organizar as finanças da sua família, cortar gastos desnecessários e ainda sobrar dinheiro no final do mês.',
        reading_time: 6, views: 2105, published_at: '2026-04-15T14:00:00Z',
        tag: 'Orçamento', tagColor: 'bg-blue-50 text-blue-500',
    },
];

const blogPosts = computed(() =>
    props.recentPosts.length > 0 ? props.recentPosts : BLOG_MOCK
);

function fmtDate(d) {
    return new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
}

function excerpt(content, max = 110) {
    const plain = content?.replace(/<[^>]*>/g, '') ?? '';
    return plain.length > max ? plain.slice(0, max) + '…' : plain;
}

// ==================== SAUDAÇÃO DINÂMICA ====================
const hour = new Date().getHours();
const greeting = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';
const greetingIcon = hour < 12 ? CloudSun : hour < 18 ? Sunset : Moon;
const greetingColor = hour < 12 ? 'text-amber-400' : hour < 18 ? 'text-orange-400' : 'text-indigo-400';

const hideSaldo = ref(false);

const receita  = 5500.00;
const despesa  = 2470.80;
const saldo    = receita - despesa;
const spentPct = Math.round((despesa / receita) * 100);

function fmtMoney(v) {
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ==================== STATE ====================
const activeModal = ref(false)
const modalType = ref('despesa') // 'despesa' | 'receita' | 'transferencia'
const modalTitle = ref('')

// Dados dos cartões
const cards = ref([
  { bank: 'Banco do Brasil', number: '•••• 5544', value: 'R$ 3.400,00', status: 'Aberta' },
  { bank: 'Santander', number: '•••• 9876', value: 'R$ 860,00', status: 'Fechada' },
  { bank: 'Inter', number: '•••• 4321', value: 'R$ 1.240,00', status: 'Aberta' },
])

const MAX_CARDS = 4
const isModalOpen = ref(false) // Modal de "Ver Todos os Cartões"

// ==================== COMPUTED ====================
const isLimitReached = computed(() => cards.value.length >= MAX_CARDS)
const isExpense = computed(() => modalType.value === 'despesa')

const iconComponent = computed(() => isExpense.value ? Minus : Plus)
const iconBgClass = computed(() => isExpense.value ? 'bg-red-100' : 'bg-emerald-100')
const iconColorClass = computed(() => isExpense.value ? 'text-red-600' : 'text-emerald-600')

// ==================== FORM ====================
const form = ref({
  description: '',
  amount: null,
  date: new Date().toISOString().split('T')[0],
  accountId: '',
  categoryId: '',
  note: ''
})

// ==================== MÉTODOS ====================

const openModal = (type) => {
  modalType.value = type

  if (type === 'despesa') {
    modalTitle.value = 'Nova Despesa'
  } else if (type === 'receita') {
    modalTitle.value = 'Nova Receita'
  } else if (type === 'transfer') {
    modalTitle.value = 'Nova Transferência'
  } else if (type === 'import') {
    modalTitle.value = 'Importar Lançamentos'
  }

  activeModal.value = true
  // Limpa formulário ao abrir
  resetForm()
}

const closeModal = () => {
  activeModal.value = false
}

const handleSubmit = () => {
  console.log('Salvando:', { ...form.value, type: modalType.value })
  // Aqui você pode chamar sua API ou store
  closeModal()
}

// Ações dos ícones
const toggleRepeat = () => console.log('Repetir clicado')
const focusNote = () => console.log('Focar observação')
const handleAttach = () => console.log('Anexar arquivo')
const handleTags = () => console.log('Abrir tags')

const resetForm = () => {
  form.value = {
    description: '',
    amount: null,
    date: new Date().toISOString().split('T')[0],
    accountId: '',
    categoryId: '',
    note: ''
  }
}

// Modal de cartões
const goToCardsPage = () => {
  console.log('Ir para página de cartões')
  isModalOpen.value = false
}
</script>

<template>

    <!-- Navbar -->
    <Navbar />

    <!-- Content -->
    <main class="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
            <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between gap-5">
                <!-- Linha 1: saudação + ações -->
                <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                            <component :is="greetingIcon" :class="greetingColor" class="w-6 h-6" />
                        </div>
                        <div>
                            <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{{ greeting }},</p>
                            <h1 class="text-lg font-bold text-gray-800 leading-tight">Thiago Santos</h1>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <a href="/app/lancamentos" class="flex items-center gap-1 text-xs text-gray-500 font-medium border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                            Lançamentos <ChevronRight class="w-3 h-3" />
                        </a>
                        <button class="flex items-center gap-1 text-xs text-emerald-600 font-medium border border-emerald-100 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors">
                            <TrendingUp class="w-3 h-3" /> Relatórios
                        </button>
                    </div>
                </div>

                <!-- Linha 2: métricas -->
                <div class="grid grid-cols-3 gap-3">
                    <div class="bg-emerald-50 rounded-xl p-4">
                        <div class="flex items-center gap-1.5 mb-1">
                            <ArrowUpCircle class="w-3.5 h-3.5 text-emerald-500" />
                            <p class="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">Receitas</p>
                        </div>
                        <p class="text-lg font-black text-emerald-700">{{ fmtMoney(receita) }}</p>
                    </div>
                    <div class="bg-red-50 rounded-xl p-4">
                        <div class="flex items-center gap-1.5 mb-1">
                            <ArrowDownCircle class="w-3.5 h-3.5 text-red-400" />
                            <p class="text-[10px] font-bold text-red-500 uppercase tracking-wide">Despesas</p>
                        </div>
                        <p class="text-lg font-black text-red-600">{{ fmtMoney(despesa) }}</p>
                    </div>
                    <div class="bg-gray-50 rounded-xl p-4 cursor-pointer group" @click="hideSaldo = !hideSaldo">
                        <div class="flex items-center gap-1.5 mb-1">
                            <EyeOff class="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Saldo</p>
                        </div>
                        <p class="text-lg font-black text-gray-700">
                            {{ hideSaldo ? '••••••' : fmtMoney(saldo) }}
                        </p>
                    </div>
                </div>

                <!-- Linha 3: barra receita vs despesa -->
                <div>
                    <div class="flex justify-between text-[10px] font-semibold text-gray-400 mb-1.5">
                        <span>Despesas representam <b class="text-gray-600">{{ spentPct }}%</b> das receitas</span>
                        <span :class="spentPct >= 90 ? 'text-red-400' : spentPct >= 70 ? 'text-orange-400' : 'text-emerald-500'">
                            {{ spentPct >= 90 ? 'Atenção!' : spentPct >= 70 ? 'Moderado' : 'Saudável' }}
                        </span>
                    </div>
                    <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            class="h-full rounded-full transition-all duration-700"
                            :class="spentPct >= 90 ? 'bg-red-400' : spentPct >= 70 ? 'bg-orange-400' : 'bg-emerald-500'"
                            :style="`width: ${spentPct}%`"
                        ></div>
                    </div>
                </div>
            </div>

            <!-- Botões de Acesso Rápido -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 grid grid-cols-2 gap-3">
                <!-- Despesa -->
                <button @click="openModal('despesa')"
                    class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-red-100 bg-red-50 hover:bg-red-100 hover:border-red-200 transition-all">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-400 shadow-sm group-hover:scale-110 transition-transform">
                        <Minus class="w-5 h-5" />
                    </div>
                    <span class="text-[11px] uppercase font-bold text-red-500 tracking-wide">Despesa</span>
                </button>

                <!-- Receita -->
                <button @click="openModal('receita')"
                    class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-emerald-100 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-200 transition-all">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-500 shadow-sm group-hover:scale-110 transition-transform">
                        <Plus class="w-5 h-5" />
                    </div>
                    <span class="text-[11px] uppercase font-bold text-emerald-600 tracking-wide">Receita</span>
                </button>

                <!-- Transferência -->
                <button @click="openModal('transfer')"
                    class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-blue-100 bg-blue-50 hover:bg-blue-100 hover:border-blue-200 transition-all">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-400 shadow-sm group-hover:scale-110 transition-transform">
                        <ArrowRightLeft class="w-5 h-5" />
                    </div>
                    <span class="text-[11px] uppercase font-bold text-blue-500 tracking-wide">Transferência</span>
                </button>

                <!-- Importar -->
                <button @click="openModal('import')"
                    class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-violet-100 bg-violet-50 hover:bg-violet-100 hover:border-violet-200 transition-all">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-violet-500 shadow-sm group-hover:scale-110 transition-transform">
                        <Download class="w-5 h-5" />
                    </div>
                    <span class="text-[11px] uppercase font-bold text-violet-500 tracking-wide">Importar</span>
                </button>
            </div>
        </div>

        <!-- ══ PRIMEIROS PASSOS ══════════════════════════════════════════════ -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4">

            <!-- Cabeçalho -->
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                        <Rocket class="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-gray-800">Primeiros passos</h3>
                        <p class="text-xs text-gray-400">{{ doneCount }} de {{ STEPS.length }} tarefas completas</p>
                    </div>
                </div>
                <button
                    @click="tutorialOpen = !tutorialOpen"
                    class="text-xs font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg transition-colors"
                >
                    {{ tutorialOpen ? 'Fechar' : 'Continuar' }}
                </button>
            </div>

            <!-- Barra de progresso -->
            <div class="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                <div
                    class="h-full bg-emerald-500 rounded-full transition-all duration-700"
                    :style="`width: ${progressPct}%`"
                />
            </div>
            <div class="flex justify-between text-[10px] text-gray-400 font-medium mb-4">
                <span>{{ Math.round(progressPct) }}% concluído</span>
                <span>{{ STEPS.length - doneCount }} tarefas restantes</span>
            </div>

            <!-- Passos (expandido) -->
            <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
            >
                <div v-if="tutorialOpen" class="space-y-2 pt-2">
                    <div
                        v-for="step in STEPS" :key="step.id"
                        class="relative group"
                        @mouseenter="tooltipVisible = step.id"
                        @mouseleave="tooltipVisible = null"
                    >
                        <div
                            :class="[
                                'flex items-start gap-4 p-4 rounded-xl border transition-all',
                                step.done
                                    ? 'bg-emerald-50/60 border-emerald-100'
                                    : 'bg-gray-50 border-gray-100 hover:border-gray-200 hover:bg-white',
                            ]"
                        >
                            <!-- Ícone / Checkbox -->
                            <div class="relative shrink-0">
                                <div :class="[step.iconBg, 'w-9 h-9 rounded-lg flex items-center justify-center']">
                                    <component :is="step.icon" :class="[step.iconColor, 'w-4 h-4']" />
                                </div>
                                <!-- Checkmark overlay quando done -->
                                <div v-if="step.done"
                                    class="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center ring-2 ring-white">
                                    <svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <!-- Texto -->
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2 flex-wrap">
                                    <p :class="['text-sm font-semibold', step.done ? 'text-gray-500 line-through' : 'text-gray-800']">
                                        {{ step.label }}
                                    </p>
                                    <span v-if="step.badge"
                                        class="text-[9px] font-black px-1.5 py-0.5 bg-amber-100 text-amber-600 rounded-full uppercase tracking-wide">
                                        {{ step.badge }}
                                    </span>
                                    <span v-if="step.done"
                                        class="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-600 rounded-full uppercase">
                                        Feito
                                    </span>
                                </div>
                                <p class="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{{ step.desc }}</p>
                            </div>

                            <!-- Botão de ação -->
                            <RouterLink v-if="!step.done && step.action" :to="step.action.to"
                                class="shrink-0 text-[11px] font-bold text-emerald-600 border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors whitespace-nowrap">
                                {{ step.action.label }}
                            </RouterLink>
                        </div>

                        <!-- Tooltip -->
                        <transition
                            enter-active-class="transition-all duration-150"
                            enter-from-class="opacity-0 translate-y-1"
                            enter-to-class="opacity-100 translate-y-0"
                            leave-active-class="transition-all duration-100"
                            leave-from-class="opacity-100 translate-y-0"
                            leave-to-class="opacity-0 translate-y-1"
                        >
                            <div v-if="tooltipVisible === step.id"
                                class="absolute left-14 -top-10 z-20 bg-gray-900 text-white text-[11px] font-medium px-3 py-2 rounded-lg shadow-xl whitespace-nowrap max-w-xs pointer-events-none">
                                {{ step.detail }}
                                <!-- Seta do tooltip -->
                                <div class="absolute left-4 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
                            </div>
                        </transition>
                    </div>
                </div>
            </transition>

            <!-- Prévia dos steps (quando fechado) — dots coloridos -->
            <div v-if="!tutorialOpen" class="flex items-center gap-1.5">
                <div
                    v-for="step in STEPS" :key="step.id"
                    :class="[
                        'h-1.5 flex-1 rounded-full transition-all',
                        step.done ? 'bg-emerald-500' : 'bg-gray-100',
                    ]"
                />
            </div>
        </div>
        <!-- ══ /PRIMEIROS PASSOS ══════════════════════════════════════════════ -->

        <!-- START | INÍCIO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <!-- Minhas Contas -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 h-[460px] p-5 flex flex-col">
                <div class="flex justify-between items-center mb-5 flex-shrink-0">
                    <div>
                        <h2 class="font-bold text-gray-700 text-sm uppercase tracking-tight">Minhas Contas</h2>
                        <p class="text-xs text-gray-500">Gerencie suas contas</p>
                    </div>
                    <button class="text-[10px] font-semibold text-gray-400 flex items-center hover:text-emerald-600 transition-colors uppercase">
                        <EyeOff class="mr-1 w-3 h-3" /> Ocultar
                    </button>
                </div>

                <!-- Empty State -->
                <div class="flex-1 flex flex-col items-center justify-center text-center space-y-3 hidden">
                    <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                        <Plus class="w-6 h-6" />
                    </div>
                    <div>
                        <p class="text-sm font-bold text-gray-400">Nenhuma conta encontrada</p>
                        <p class="text-[11px] text-gray-300">Conecte seu banco para gerenciar seu saldo.</p>
                    </div>
                    <button class="mt-2 px-4 py-1.5 text-[11px] font-bold text-emerald-600 border border-emerald-100 rounded-md hover:bg-emerald-50 transition-all uppercase">
                        Conectar Agora
                    </button>
                </div>

                <div class="flex-1 overflow-hidden pr-1">
                    <div class="space-y-2">
                        <!-- 1 -->
                        <div class="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-200 shadow-xs ">
                                    <img src="https://cdn-sites-assets.mziq.com/wp-content/uploads/sites/1221/2023/05/Logomarca_Banco_Inter-1.png" class="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-800 leading-tight"> Banco Inter </p>
                                    <p class="text-xs text-gray-400 mt-0.5"> Conta Corrente</p>
                                </div>
                            </div>

                            <p class="text-sm font-semibold text-emerald-600"> R$ 12.202,30</p>
                        </div>

                        <!-- 3 -->
                        <div class="flex justify-between items-center p-3 rounded-md hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 flex items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-xs ">
                                    <img src="https://assets.organizze.com.br/institutions/logos/nubank.png" class="w-full h-full object-contain" />
                                </div>

                                <div>
                                    <p class="text-sm font-semibold text-gray-800 leading-tight capitalize">nubank </p>
                                    <p class="text-xs text-gray-400 mt-0.5"> Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-semibold text-emerald-600"> R$ 12.202,30</p>
                        </div>

                        <!-- 4 -->
                        <div class="flex justify-between items-center p-3 rounded-md hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 flex items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-xs ">
                                    <img src="https://assets.organizze.com.br/institutions/logos/picpay.png" class="w-full h-full object-contain" />
                                </div>

                                <div>
                                    <p class="text-sm font-semibold text-gray-800 leading-tight capitalize">picpay </p>
                                    <p class="text-xs text-gray-400 mt-0.5"> Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-semibold text-emerald-600"> R$ 12.202,30</p>
                        </div>

                        <!-- 5 -->
                        <div class="flex justify-between items-center p-3 rounded-md hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 flex items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-xs ">
                                    <img src="https://assets.organizze.com.br/institutions/logos/santander.png" class="w-full h-full object-contain" />
                                </div>

                                <div>
                                    <p class="text-sm font-semibold text-gray-800 leading-tight">Santander </p>
                                    <p class="text-xs text-gray-400 mt-0.5"> Conta Corrente</p>
                                </div>
                            </div>
                            <p class="text-sm font-semibold text-emerald-600"> R$ 12.202,30</p>
                        </div>
                    </div>
                </div>

                <div class="mt-4 pt-4 border-t border-gray-50 flex-shrink-0">
                    <button class="w-full py-2.5 text-[11px] font-bold text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all uppercase tracking-widest flex items-center justify-center">
                        <Plus class="w-3 h-3 mr-2" /> Ver minhas contas
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col h-[460px]">
                <!-- HEADER -->
                <div class="flex justify-between items-center mb-4 flex-shrink-0">
                    <div>
                        <h2 class="font-bold text-gray-700 text-sm uppercase tracking-tight">Maiores Gastos</h2>
                        <p class="text-xs text-gray-500">Resumo do mês</p>
                    </div>

                    <button class="text-[10px] font-semibold text-emerald-600 border border-emerald-100 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition uppercase">
                        Relatório
                    </button>
                </div>

                <div class="flex-1 flex items-center overflow-hidden gap-5">
                    <!-- GRÁFICO -->
                    <div class="relative flex items-center justify-center p-6 rounded-2xl">
                        <div class="relative group transition-all duration-700 cursor-pointer">
                            <svg class="w-64 h-64 transform -rotate-90" viewBox="0 0 200 200">
                                <!-- Círculo de fundo com gradiente -->
                                <defs>
                                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color: #f1f5f9; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #e2e8f0; stop-opacity: 1" />
                                    </linearGradient>

                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #8b5cf6; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #a78bfa; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #f43f5e; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #fb7185; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #ec4899; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #f472b6; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #06b6d4; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #22d3ee; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #10b981; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #34d399; stop-opacity: 1" />
                                    </linearGradient>
                                </defs>

                                <!-- Círculo base -->
                                <circle cx="100" cy="100" r="85" fill="url(#bgGradient)" stroke="#e2e8f0" stroke-width="1.5" />

                                <!-- Círculo de track -->
                                <circle cx="100" cy="100" r="82" stroke="#e2e8f0" stroke-width="14" fill="transparent" stroke-linecap="round" />

                                <!-- Segmentos com gradientes e animação -->
                                <circle cx="100" cy="100" r="82" stroke="url(#gradient1)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="360" stroke-linecap="round" >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="360" dur="1.5s" fill="freeze" />
                                </circle>

                                <circle cx="100" cy="100" r="82" stroke="url(#gradient2)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="430" stroke-linecap="round" transform="rotate(95 100 100)" >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="430" dur="1.5s" fill="freeze" begin="0.2s" />
                                </circle>

                                <circle cx="100" cy="100" r="82" stroke="url(#gradient3)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="445" stroke-linecap="round" transform="rotate(135 100 100)" >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="445" dur="1.5s" fill="freeze" begin="0.4s" />
                                </circle>

                                <circle cx="100" cy="100" r="82" stroke="url(#gradient4)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="475" stroke-linecap="round" transform="rotate(170 100 100)" >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="475" dur="1.5s" fill="freeze" begin="0.6s" />
                                </circle>

                                <circle cx="100" cy="100" r="82" stroke="url(#gradient5)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="490" stroke-linecap="round" transform="rotate(205 100 100)" >
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="490" dur="1.5s" fill="freeze" begin="0.8s" />
                                </circle>
                            </svg>

                            <!-- Card central sem sombras -->
                            <div class="absolute inset-0 flex flex-col items-center justify-center m-10 bg-white rounded-full border border-gray-100 transition-all duration-500" >
                                <div class="flex flex-col items-center gap-1">
                                    <span class="text-xs text-indigo-500 font-bold uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-full">
                                        Total
                                    </span>

                                    <div class="flex items-baseline gap-0.5 mt-1">
                                        <span class="text-sm font-bold text-slate-500">R$</span>
                                        <span class="text-4xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                                            2.450
                                        </span>
                                    </div>

                                    <div class="flex flex-col items-center mt-1">
                                        <div class="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full"></div>
                                        <span class="text-[10px] text-slate-400 font-medium mt-1">vs mês anterior</span>
                                        <span class="text-xs font-semibold text-emerald-500">+12.5%</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Tooltip flutuante no hover -->
                            <div class="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                <div class="bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap flex items-center gap-1.5 shadow-xs" >
                                    <TrendingUp class="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Ver detalhes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- LISTA -->
                    <div class="flex-1 space-y-1 overflow-hidden">
                        <div class="flex justify-between items-center p-2 rounded-lg bg-purple-50 border border-purple-100">
                            <div class="flex items-center gap-2.5">
                                <div class="w-8 h-8 flex items-center justify-center rounded-md bg-purple-500 text-white">
                                    <Gift class="w-4 h-4" />
                                </div>
                                <div>
                                    <p class="text-[11px] font-semibold text-gray-800">Presentes</p>
                                    <p class="text-[9px] text-gray-400">Maior gasto</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-[11px] font-bold text-purple-600">18,83%</p>
                                <p class="text-[9px] text-gray-400">R$ 465,25</p>
                            </div>
                        </div>

                        <!-- OUTROS -->
                        <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition group">
                            <div class="flex items-center gap-2.5">
                                <div class="w-7 h-7 flex items-center justify-center rounded-md bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition" >
                                    <ShoppingCart class="w-3.5 h-3.5" />
                                </div>
                                <span class="text-[11px] text-gray-700">Compras</span>
                            </div>

                            <div class="text-right">
                                <p class="text-[11px] font-bold">9,20%</p>
                                <p class="text-[9px] text-gray-400">R$ 230,00</p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition group">
                            <div class="flex items-center gap-2.5">
                                <div class="w-7 h-7 flex items-center justify-center rounded-md bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition" >
                                    <Utensils class="w-3.5 h-3.5" />
                                </div>
                                <span class="text-[11px] text-gray-700">Alimentação</span>
                            </div>

                            <div class="text-right">
                                <p class="text-[11px] font-bold">6,18%</p>
                                <p class="text-[9px] text-gray-400">R$ 152,70</p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition group">
                            <div class="flex items-center gap-2.5">
                                <div class="w-7 h-7 flex items-center justify-center rounded-md bg-cyan-50 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition" >
                                    <Gamepad2 class="w-3.5 h-3.5" />
                                </div>
                                <span class="text-[11px] text-gray-700">Lazer</span>
                            </div>

                            <div class="text-right">
                                <p class="text-[11px] font-bold">1,81%</p>
                                <p class="text-[9px] text-gray-400">R$ 44,72</p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition group">
                            <div class="flex items-center gap-2.5">
                                <div class="w-7 h-7 flex items-center justify-center rounded-md bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition">
                                    <Car class="w-3.5 h-3.5" />
                                </div>
                                <span class="text-[11px] text-gray-700">Transporte</span>
                            </div>
                            <div class="text-right">
                                <p class="text-[11px] font-bold">12%</p>
                                <p class="text-[9px] text-gray-400">R$ 300,00</p>
                            </div>
                        </div>

                        <div class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition group">
                            <div class="flex items-center gap-2.5">
                                <div class="w-7 h-7 flex items-center justify-center rounded-md bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition"  >
                                    <Car class="w-3.5 h-3.5" />
                                </div>
                                <span class="text-[11px] text-gray-700">Saúde</span>
                            </div>
                            <div class="text-right">
                                <p class="text-[11px] font-bold">12%</p>
                                <p class="text-[9px] text-gray-400">R$ 400,00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- FOOTER -->
                <div class="pt-3 mt-2 border-t border-gray-50 flex-shrink-0">
                    <div class="bg-emerald-50 rounded-lg py-2 px-3 flex items-center justify-center gap-2">
                        <TrendingUp class="w-3 h-3 text-emerald-500" />
                        <p class="text-[10px] text-emerald-600 font-bold uppercase">-5% vs mês anterior</p>
                    </div>
                </div>
            </div>

            <!-- SEÇÃO: CARTÃO DE CRÉDITO -->
            <div class="bg-[#F9F9F9] rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full min-h-[720px]">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-lg font-bold text-gray-800">Meus Cartões</h2>
                        <p class="text-xs text-gray-500">Exibindo os últimos 3 cartões</p>
                    </div>
                    <button @click="isModalOpen = true" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg transition-all" >
                        Ver Todos
                    </button>
                </div>

                <!-- Lista de Cartões  -->
                <div class="flex-1 flex flex-col justify-start space-y-6">
                    <!-- Cartão 1 -->
                    <div class="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-100 group " >
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-[10px] uppercase tracking-widest opacity-80 font-bold">Banco Inter</p>
                                <p class="text-sm font-medium tracking-[0.2em]">•••• 4321</p>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" class="h-6 opacity-90" />
                        </div>
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] opacity-70 mb-1 font-semibold uppercase">Fatura Atual</p>
                                <p class="text-xl font-extrabold">R$ 1.240,00</p>
                            </div>
                            <span class="text-[10px] font-bold bg-[#FFFFFF]/20 backdrop-blur-md px-3 py-1 rounded-md border border-[#FFFFFF]/30">Aberta</span>
                        </div>
                    </div>

                    <!-- Cartão 2 -->
                    <div class="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-[#FFFFFF] shadow-lg shadow-red-100 group ">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-[10px] uppercase tracking-widest opacity-80 font-bold">Santander</p>
                                <p class="text-sm font-medium tracking-[0.2em]">•••• 9876</p>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg/960px-Visa_Inc._logo_%282005%E2%80%932014%29.svg.png"
                                alt="Visa" class="h-4 opacity-90 brightness-0 invert" />
                        </div>

                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] opacity-70 mb-1 font-semibold uppercase">Fatura Atual</p>
                                <p class="text-xl font-extrabold">R$ 860,00</p>
                            </div>
                            <span class="text-[10px] font-bold bg-black/20 backdrop-blur-md px-3 py-1 rounded-md border border-[#FFFFFF]/10">Fechada</span>
                        </div>
                    </div>

                    <!-- Cartão 3 -->
                    <div class="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-800 text-white shadow-lg shadow-purple-100 group">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-[10px] uppercase tracking-widest opacity-80 font-bold">Nubank</p>
                                <p class="text-sm font-medium tracking-[0.2em]">•••• 1122</p>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                                alt="Mastercard" class="h-6 opacity-90" />
                        </div>
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] opacity-70 mb-1 font-semibold uppercase">Fatura Atual</p>
                                <p class="text-xl font-extrabold">R$ 2.150,00</p>
                            </div>
                            <span class="text-[10px] font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-md border border-white/30">Aberta</span>
                        </div>
                    </div>
                </div>

                <div class="mt-8 pt-4 border-t border-gray-50">
                    <button class="flex items-center justify-center text-xs uppercase text-gray-600 font-bold tracking-wider bg-gray-50 hover:bg-emerald-600 hover:text-white hover:cursor-pointer rounded-md gap-2 py-3 px-4 w-full">
                        <Plus class="w-4 h-4" /> Novo Cartão
                    </button>
                </div>
            </div>

            <!-- SEÇÃO: METAS FINANCEIRAS -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full min-h-[720px]">
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h2 class="text-lg font-bold text-gray-800">Metas de Outubro</h2>
                        <p class="text-xs text-gray-500">Acompanhe seus gastos por categoria</p>
                    </div>
                    <div class="bg-emerald-50 p-2 rounded-md text-right border border-emerald-100">
                        <div class="flex items-baseline gap-1 justify-end">
                            <span class="text-2xl font-black text-emerald-600">65</span>
                            <span class="text-sm font-bold text-emerald-500">%</span>
                        </div>
                        <p class="text-[8px] text-emerald-600/70 uppercase font-black tracking-tighter">Progresso Geral</p>
                    </div>
                </div>

                <!-- Lista de Metas (6 Metas) -->
                <div class="flex-1 flex flex-col justify-between space-y-4 py-2">
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-blue-50 text-blue-600 rounded-md flex items-center justify-center">
                                    <Car class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Transporte</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 260</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 400</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-blue-600">65%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-blue-500 rounded-full" style="width: 25%"></div>
                        </div>
                    </div>

                    <!-- Meta 2: Alimentação -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                                    <Utensils class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Alimentação</h3>
                                    <di2v class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 800</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 1.000</b></span>
                                    </di2v>
                                </div>
                            </div>
                            <span class="text-xs font-black text-orange-600">80%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-orange-500 rounded-full" style="width: 80%"></div>
                        </div>
                    </div>

                    <!-- Meta 3: Lazer -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                                    <TreePalm class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Lazer</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 200</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 1.000</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-emerald-600">20%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-emerald-500 rounded-full" style="width: 20%"></div>
                        </div>
                    </div>

                    <!-- Meta 4: Assinaturas -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                                    <TvMinimalPlay class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Assinaturas</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 150</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 300</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-purple-600">50%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-purple-500 rounded-full" style="width: 50%"></div>
                        </div>
                    </div>

                    <!-- Meta 5: Educação -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                                    <GraduationCap class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Educação</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 450</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 600</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-indigo-600">75%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-indigo-500 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>

                    <!-- Meta 6: Saúde -->
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center gap-2">
                                <div class="w-9 h-9 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                                    <HeartPulse class="w-4.5 h-4.5" />
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-gray-700">Saúde</h3>
                                    <div class="flex gap-2 text-[10px] text-gray-400">
                                        <span>Gasto: <b class="text-gray-600">R$ 120</b></span>
                                        <span>Meta: <b class="text-gray-600">R$ 500</b></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-xs font-black text-red-600">24%</span>
                        </div>
                        <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-red-500 rounded-full" style="width: 24%"></div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 pt-4 border-t border-gray-50">
                    <button class="flex items-center justify-center text-xs uppercase text-gray-600 font-bold tracking-wider bg-gray-50 hover:bg-emerald-600 hover:text-white hover:cursor-pointer rounded-md gap-2 py-3 px-4 w-full">
                        <CirclePlus class="w-4 h-4" /> Criar Nova Meta
                    </button>
                </div>
            </div>
        </div>
        <!-- END | FIM -->

        <!-- Mostrar  Depesas -->
        <div class="mt-6 bg-white rounded-md shadow-sm p-6">
            <div class="space-y-4">
                <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-red-50 text-red-400 rounded-full flex items-center justify-center">
                            <Home class="w-4 h-4" />
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-800">
                                Aluguel
                                <span class="text-[10px] text-orange-500 font-normal ml-2">vence em 2 dias</span>
                            </p>
                            <p class="text-[10px] text-gray-400">Categoria: Casa • Vencimento: 10/11</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm font-bold text-gray-800">R$ 1.200,00</p>
                        <Ellipsis class="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                </div>

                <div class="flex justify-between items-center pb-3 border-b border-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-red-50 text-red-400 rounded-full flex items-center justify-center">
                            <Home class="w-4 h-4" />
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-800">
                                Aluguel
                                <span class="text-[10px] text-orange-500 font-normal ml-2">vence em 2 dias</span>
                            </p>
                            <p class="text-[10px] text-gray-400">Categoria: Casa • Vencimento: 10/11</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm font-bold text-gray-800">R$ 1.200,00</p>
                        <Ellipsis class="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                </div>

                <div class="flex justify-between items-center pb-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
                    <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 bg-red-50 text-red-400 rounded-full flex items-center justify-center">
                            <Home class="w-4 h-4" />
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-800">
                                Aluguel
                                <span class="text-[10px] text-orange-500 font-normal ml-2">vence em 2 dias</span>
                            </p>
                            <p class="text-[10px] text-gray-400">Categoria: Casa • Vencimento: 10/11</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm font-bold text-gray-800">R$ 1.200,00</p>
                        <Ellipsis class="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                </div>
            </div>

            <div class="mt-4 flex justify-between items-center">
                <p class="text-[10px] text-gray-400">
                    3 contas listadas • Total:
                    <span class="font-bold text-gray-600">R$ 1.540,00</span>
                </p>
                <button class="text-[10px] font-bold text-emerald-500 uppercase hover:underline flex items-center">
                    Ver todas as contas <ArrowRightLeft class="ml-1 w-3 h-3" />
                </button>
            </div>
        </div>

        <!-- ══ SEÇÃO BLOG ══════════════════════════════════════════════ -->
        <div class="mt-6">
            <!-- Header da seção -->
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                        <BookOpen class="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                        <h2 class="text-sm font-bold text-gray-800">Blog Organizze</h2>
                        <p class="text-[10px] text-gray-400">Dicas financeiras para você</p>
                    </div>
                </div>
                <RouterLink
                    to="/blog"
                    class="flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                    Ver todos os artigos <ArrowRight class="w-3.5 h-3.5" />
                </RouterLink>
            </div>

            <!-- Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RouterLink
                    v-for="post in blogPosts"
                    :key="post.id"
                    :to="`/blog/post/${post.slug}`"
                    class="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all overflow-hidden flex flex-col"
                >
                    <!-- Thumb placeholder com gradiente -->
                    <div class="h-2 w-full bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:from-emerald-500 group-hover:to-teal-500 transition-colors" />

                    <div class="p-5 flex flex-col flex-1">
                        <!-- Tag -->
                        <span :class="post.tagColor ?? 'bg-gray-100 text-gray-500'"
                            class="self-start text-[10px] font-bold px-2 py-0.5 rounded-full mb-3">
                            {{ post.tag ?? 'Finanças' }}
                        </span>

                        <!-- Título -->
                        <h3 class="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                            {{ post.title }}
                        </h3>

                        <!-- Excerpt -->
                        <p class="text-[11px] text-gray-400 leading-relaxed flex-1 line-clamp-3">
                            {{ post.excerpt ?? excerpt(post.content) }}
                        </p>

                        <!-- Meta -->
                        <div class="flex items-center gap-3 mt-4 pt-3 border-t border-gray-50 text-[10px] text-gray-400">
                            <span class="flex items-center gap-1">
                                <Clock class="w-3 h-3" /> {{ post.reading_time ?? 5 }} min
                            </span>
                            <span class="flex items-center gap-1">
                                <Eye class="w-3 h-3" /> {{ (post.views ?? 0).toLocaleString('pt-BR') }}
                            </span>
                            <span class="ml-auto font-medium">{{ fmtDate(post.published_at) }}</span>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
        <!-- ══ /BLOG ══════════════════════════════════════════════════ -->

        <AppFooter  />
    </main>

    <!-- MODAL DE CARTÕES -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="isModalOpen = false"></div>

        <!-- MODAL -->
        <div class="relative bg-white w-full max-w-lg mx-4 rounded-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-6 border-b flex justify-between items-start">
                <div>
                    <h3 class="text-lg font-bold text-gray-800">Todos os Cartões</h3>
                    <p class="text-xs text-gray-400 mt-1">{{ cards.length }} de {{ MAX_CARDS }} cartões</p>
                </div>

                <button @click="isModalOpen = false" class="p-2 hover:bg-grpt-br ay-100 rounded-full">
                    <X class="w-5 h-5 text-gray-400" />
                </button>
            </div>

            <!-- LISTAGEM -->
            <div class="p-6 flex-1 overflow-y-auto space-y-4">
                <div v-for="(card, index) in cards" :key="index" class="p-4 border border-gray-300 rounded-md flex justify-between items-center hover:bg-gray-200 transition" >
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white text-[9px] font-bold">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg/960px-Visa_Inc._logo_%282005%E2%80%932014%29.svg.png"
                                alt="Visa" class="h-3 opacity-90 brightness-0 invert" />
                        </div>

                        <div>
                            <p class="text-sm font-semibold text-gray-700">{{ card.bank }}</p>
                            <p class="text-xs text-gray-400">{{ card.number }}</p>
                        </div>
                    </div>

                    <div class="text-right">
                        <p class="text-sm font-bold text-gray-700">{{ card.value }}</p>
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600" >
                            {{ card.status }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- FOOTER -->
            <div class="p-5 border-t border-gray-100 bg-gray-50">
                <!-- LIMITE ATINGIDO -->
                <div v-if="isLimitReached" class="space-y-3 text-center">
                    <p class="text-xs text-red-400 font-semibold">Limite de cartões atingido</p>

                    <button @click="goToCardsPage" class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-black transition" >
                        Ver todos os cartões
                    </button>
                </div>

                <!-- NORMAL -->
                <button v-else class="flex items-center justify-center text-white text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 rounded-md w-full gap-2 py-2.5">
                    <Plus class="w-4 h-4" />
                    Adicionar Novo Cartão
                </button>
            </div>
        </div>
    </div>

    <!-- ==================== MODAL PRINCIPAL ==================== -->
    <div v-if="activeModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeModal" >
        <div class="bg-white w-full max-w-lg rounded-md shadow-2xl overflow-hidden">

            <!-- HEADER -->
            <div class="px-6 pt-6 pb-2 border-b border-gray-200/50 flex items-center justify-between">
                <div class="flex items-center gap-3">

                    <div>
                        <h2 class="text-lg font-semibold text-gray-800">{{ modalTitle }}</h2>
                    </div>
                </div>
                <button @click="closeModal" class="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-gray-600 hover:bg-gray-100 rounded-md hover:cursor-pointer transition-colors" >
                    <X class="w-5 h-5" />
                </button>
            </div>

            <!-- FORM -->
            <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
                <div>
                    <label class="text-xs font-medium text-gray-500 block mb-1.5">Descrição</label>
                    <input v-model="form.description" type="text" placeholder="Ex: Aluguel, Salário, Supermercado..." class="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-emerald-500 outline-none" />
                </div>


                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-xs font-medium text-gray-500 block mb-1.5">Valor</label>
                        <div class="relative">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">R$</span>
                            <input v-model="form.amount" type="number" step="0.01" placeholder="0,00" class="w-full border border-gray-300 rounded-md px-9 py-2 text-lg font-semibold focus:border-emerald-500 outline-none" />
                        </div>
                    </div>
                    <div>
                        <label class="text-xs font-medium text-gray-500 block mb-1.5">Data</label>
                        <input v-model="form.date"  type="date" class="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-emerald-500 outline-none" />
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="text-xs font-medium text-gray-500 block mb-1.5">Conta / Cartão</label>
                            <select v-model="form.accountId" class="w-full border border-gray-300 rounded-md text-sm focus:border-emerald-500 outline-none mr-4 px-4 py-3">
                                <option value="">Selecione a conta...</option>
                            </select>
                        </div>
                    <div>
                        <label class="text-xs font-medium text-gray-500 block mb-1.5">Categoria</label>
                        <select v-model="form.categoryId" class="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-emerald-500 outline-none">
                            <option value="">Selecione a categoria...</option>
                        </select>
                    </div>
                </div>

                <!-- Observação -->
                <div>
                    <label class="text-xs font-medium text-gray-500 block mb-1.5">Observação (opcional)</label>
                    <textarea v-model="form.note"  rows="3" placeholder="Adicione uma observação..." class="w-full border border-gray-300 rounded-md px-4 py-3 text-sm resize-y min-h-[80px] focus:border-emerald-500 outline-none"></textarea>
                </div>

                <!-- 4 BOTÕES DE AÇÃO NO RODAPÉ -->
                <div class="flex justify-center gap-6">

                    <!-- Repetir -->
                    <div @click="toggleRepeat" class="text-center group cursor-pointer">
                        <div class="w-12 h-12 bg-gray-100/70 rounded-md flex items-center justify-center text-gray-600 mb-2 group-hover:bg-gray-100 transition-colors">
                            <Repeat class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Repetir</span>
                    </div>

                    <!-- Observação -->
                    <div @click="focusNote" class="text-center group cursor-pointer" :class="{ 'text-emerald-600': form.note }">
                        <div class="w-12 h-12 bg-gray-100/70 rounded-md flex items-center justify-center text-gray-600 mb-2 group-hover:bg-gray-100 transition-colors">
                            <MessageSquareText  class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Obs</span>
                    </div>

                    <!-- Anexo -->
                    <div @click="handleAttach" class="text-center group cursor-pointer">
                        <div class="w-12 h-12 bg-gray-100/70 rounded-md flex items-center justify-center text-gray-600 mb-2 group-hover:bg-gray-100 transition-colors">
                            <Paperclip class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Anexo</span>
                    </div>

                    <!-- Tags -->
                    <div @click="handleTags" class="text-center group cursor-pointer">
                        <div class="w-12 h-12 bg-gray-100/70 rounded-md flex items-center justify-center text-gray-600 mb-2 group-hover:bg-gray-100 transition-colors">
                            <Tag class="w-6 h-6" />
                        </div>
                        <span class="text-[10px] uppercase font-bold text-gray-500">Tags</span>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>
