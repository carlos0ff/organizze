<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import {
    BarChart3, Shield, Zap, CreditCard, PieChart, Bell,
    ArrowRight, Check, CheckCircle, ChevronDown, Menu, X,
    TrendingUp, Wallet, Target, RefreshCw, Star,
    Building2, Smartphone, FileText, Lock, ShoppingCart, Film
} from 'lucide-vue-next';
import Navbar from "@/pages/Web/Components/navigation/Navbar.vue";
import Footer from "@/pages/Web/Components/layout/Footer.vue";

const openFaq = ref<number | null>(null);
const toggleFaq = (index: number) => {
    openFaq.value = openFaq.value === index ? null : index;
};

// ── Open Finance demo animation ──────────────────────────────────
const ofDemoEl   = ref<HTMLElement | null>(null);
const ofContaEl  = ref<HTMLElement | null>(null);
const ofCartaoEl = ref<HTMLElement | null>(null);

const curX       = ref(0);
const curY       = ref(0);
const curVisible = ref(false);
const curClick   = ref(false);
const curRipple  = ref(false);

const hoverConta  = ref(false);
const hoverCartao = ref(false);
const pulseConta  = ref(false);
const pulseCartao = ref(false);

const showSuccess  = ref(false);
const showSyncLine = ref(false);

const contaBadgeState  = ref<'novas' | 'buscando' | 'importadas'>('novas');
const cartaoBadgeState = ref<'novas' | 'buscando' | 'importadas'>('novas');

// Hero dashboard
const heroReady = ref(false);

// ── Timer helpers ─────────────────────────────────────────────────
const _timers: ReturnType<typeof setTimeout>[] = [];
function _clearTimers() { _timers.forEach(clearTimeout); _timers.length = 0; }
function _at(delay: number, fn: () => void) { _timers.push(setTimeout(fn, delay)); }
function _pos(el: HTMLElement, parent: HTMLElement, ox = 0, oy = 0) {
    const er = el.getBoundingClientRect();
    const pr = parent.getBoundingClientRect();
    return { x: er.left - pr.left + ox, y: er.top - pr.top + oy };
}

function _resetState() {
    curClick.value         = false;
    curRipple.value        = false;
    curVisible.value       = false;
    hoverConta.value       = false;
    hoverCartao.value      = false;
    pulseConta.value       = false;
    pulseCartao.value      = false;
    showSyncLine.value     = false;
    showSuccess.value      = false;
    contaBadgeState.value  = 'novas';
    cartaoBadgeState.value = 'novas';
}

function runOfAnimation() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const demo   = ofDemoEl.value;
    const conta  = ofContaEl.value;
    const cartao = ofCartaoEl.value;
    if (!demo || !conta || !cartao) return;

    _clearTimers();
    _resetState();

    const MOVE = 520;

    _at(300, () => {
        const p = _pos(conta, demo, 44 - 3, -26 - 2);
        curX.value = p.x; curY.value = p.y; curVisible.value = true;
    });

    _at(750, () => {
        const p = _pos(conta, demo, 82 - 3, conta.offsetHeight / 2 - 2);
        curX.value = p.x; curY.value = p.y;
    });

    const A = 750 + MOVE;

    _at(A + 55,  () => { hoverConta.value = true; });
    _at(A + 340, () => { curClick.value = true; curRipple.value = true; });
    _at(A + 490, () => { curClick.value = false; contaBadgeState.value = 'buscando'; });
    _at(A + 880, () => { curRipple.value = false; });
    _at(A + 1100,() => { contaBadgeState.value = 'importadas'; pulseConta.value = true; });
    _at(A + 1800,() => { pulseConta.value = false; });

    const B = A + 2050;
    _at(B, () => {
        const p = _pos(cartao, demo, 82 - 3, cartao.offsetHeight / 2 - 2);
        curX.value = p.x; curY.value = p.y;
    });

    const C = B + MOVE;

    _at(C + 55,  () => { hoverCartao.value = true; });
    _at(C + 320, () => { curClick.value = true; curRipple.value = true; });
    _at(C + 470, () => { curClick.value = false; cartaoBadgeState.value = 'buscando'; });
    _at(C + 860, () => { curRipple.value = false; });
    _at(C + 1060,() => { cartaoBadgeState.value = 'importadas'; pulseCartao.value = true; });
    _at(C + 1760,() => { pulseCartao.value = false; });
    _at(C + 1950,() => { curVisible.value = false; });
    _at(C + 2100,() => { showSyncLine.value = true; });
    _at(C + 2700,() => { showSyncLine.value = false; });
    _at(C + 2850,() => { showSuccess.value = true; });

    const D = C + 4850;
    _at(D,       () => { showSuccess.value = false; });
    _at(D + 380, () => { hoverConta.value = false; hoverCartao.value = false;
                         contaBadgeState.value = 'novas'; cartaoBadgeState.value = 'novas'; });
    _at(D + 780, () => { runOfAnimation(); });
}

onMounted(() => {
    setTimeout(() => { heroReady.value = true; }, 120);
    setTimeout(runOfAnimation, 900);
});
onUnmounted(() => {
    _clearTimers();
});

const features = [
    {
        icon: BarChart3,
        title: 'Relatórios inteligentes',
        description: 'Visualize receitas, despesas e tendências em gráficos claros. Tome decisões baseadas em dados reais.',
        color: 'bg-green-500/10 text-green-500',
    },
    {
        icon: CreditCard,
        title: 'Cartões de crédito',
        description: 'Controle todas as faturas em um só lugar. Acompanhe limites, vencimentos e gastos por categoria.',
        color: 'bg-blue-500/10 text-blue-500',
    },
    {
        icon: Target,
        title: 'Limites de gastos',
        description: 'Defina metas por categoria e receba alertas antes de estourar o orçamento mensal.',
        color: 'bg-purple-500/10 text-purple-500',
    },
    {
        icon: RefreshCw,
        title: 'Open Finance',
        description: 'Conecte suas contas bancárias e sincronize transações automaticamente com total segurança.',
        color: 'bg-orange-500/10 text-orange-500',
    },
    {
        icon: PieChart,
        title: 'Categorias personalizadas',
        description: 'Organize seus lançamentos com categorias e subcategorias totalmente personalizáveis.',
        color: 'bg-pink-500/10 text-pink-500',
    },
    {
        icon: Bell,
        title: 'Alertas e lembretes',
        description: 'Nunca perca um vencimento. Configure lembretes para contas a pagar e receber.',
        color: 'bg-yellow-500/10 text-yellow-500',
    },
];

const steps = [
    {
        number: '01',
        title: 'Crie sua conta grátis',
        description: 'Cadastre-se em menos de 1 minuto. Sem cartão de crédito, sem burocracia.',
    },
    {
        number: '02',
        title: 'Conecte suas contas',
        description: 'Vincule seus bancos via Open Finance ou importe extratos manualmente.',
    },
    {
        number: '03',
        title: 'Tome o controle',
        description: 'Visualize tudo num dashboard intuitivo e comece a economizar de verdade.',
    },
];

const plans = [
    {
        name: 'Básico',
        price: 'Grátis',
        period: 'para sempre',
        description: 'Para quem está começando a organizar as finanças.',
        highlight: false,
        features: [
            '1 conta bancária',
            'Até 50 lançamentos/mês',
            'Relatórios básicos',
            'Categorias padrão',
            'App mobile',
        ],
        cta: 'Começar grátis',
        ctaRoute: '/auth/cadastro',
    },
    {
        name: 'Pro',
        price: 'R$ 19,90',
        period: 'por mês',
        description: 'Para quem leva as finanças a sério.',
        highlight: true,
        badge: 'Mais popular',
        features: [
            'Contas bancárias ilimitadas',
            'Lançamentos ilimitados',
            'Relatórios avançados',
            'Cartões de crédito ilimitados',
            'Open Finance (sincronização automática)',
            'Limites de gastos',
            'Categorias personalizadas',
            'Suporte prioritário',
        ],
        cta: 'Assinar Pro',
        ctaRoute: '/auth/cadastro',
    },
    {
        name: 'Business',
        price: 'R$ 49,90',
        period: 'por mês',
        description: 'Para empresas e autônomos.',
        highlight: false,
        features: [
            'Tudo do plano Pro',
            'Multi-usuários (até 5)',
            'Relatórios para empresa',
            'Exportação para contabilidade',
            'Suporte dedicado',
            'API de integração',
        ],
        cta: 'Assinar Business',
        ctaRoute: '/auth/cadastro',
    },
];

const testimonialsRow1 = [
    {
        name: 'Ana Paula Souza',
        role: 'Professora',
        avatar: 'AP',
        color: 'bg-emerald-600',
        rating: 5,
        text: 'Finalmente consegui entender para onde ia meu dinheiro. Em 3 meses já economizei o suficiente para uma viagem que estava adiando há anos.',
    },
    {
        name: 'Rafael Mendes',
        role: 'Designer Freelancer',
        avatar: 'RM',
        color: 'bg-violet-600',
        rating: 5,
        text: 'Como autônomo, precisava de algo que me ajudasse a separar pessoal de profissional. O Organizze é exatamente isso — simples e poderoso.',
    },
    {
        name: 'Camila Torres',
        role: 'Analista de TI',
        avatar: 'CT',
        color: 'bg-sky-600',
        rating: 5,
        text: 'A integração com Open Finance mudou tudo. Minhas transações chegam automáticas e já vêm categorizadas. Poupa horas por semana.',
    },
    {
        name: 'Lucas Ferreira',
        role: 'Empreendedor',
        avatar: 'LF',
        color: 'bg-orange-500',
        rating: 5,
        text: 'Uso o Organizze para separar as finanças da minha empresa das pessoais. A clareza que isso trouxe para o meu negócio foi surpreendente.',
    },
    {
        name: 'Mariana Lima',
        role: 'Contadora',
        avatar: 'ML',
        color: 'bg-pink-600',
        rating: 5,
        text: 'Indico para todos os meus clientes. A visualização por categorias é exatamente o que as pessoas precisam para ter consciência financeira.',
    },
];

const testimonialsRow2 = [
    {
        name: 'Juliana Costa',
        role: 'Médica',
        avatar: 'JC',
        color: 'bg-teal-600',
        rating: 5,
        text: 'Com a minha rotina corrida, precisava de algo que funcionasse sem complicação. O Organizze se encaixa perfeitamente — rápido, claro e confiável.',
    },
    {
        name: 'Pedro Alves',
        role: 'Servidor Público',
        avatar: 'PA',
        color: 'bg-blue-600',
        rating: 5,
        text: 'Comecei a usar depois que entrei em dívidas. Em 6 meses consegui me organizar e hoje consigo poupar todo mês. Mudou minha vida financeira.',
    },
    {
        name: 'Fernanda Rocha',
        role: 'Psicóloga',
        avatar: 'FR',
        color: 'bg-rose-500',
        rating: 5,
        text: 'Nunca achei que fosse me adaptar a um app de finanças, mas o Organizze é tão intuitivo que uso todo dia sem nem perceber o esforço.',
    },
    {
        name: 'Bruno Neves',
        role: 'Engenheiro Civil',
        avatar: 'BN',
        color: 'bg-amber-600',
        rating: 5,
        text: 'O controle de metas me ajudou a juntar para o financiamento do meu apartamento. Sem o Organizze eu teria desistido no segundo mês.',
    },
    {
        name: 'Tatiane Barros',
        role: 'Estudante de Pós',
        avatar: 'TB',
        color: 'bg-indigo-600',
        rating: 5,
        text: 'Mesmo com bolsa, consigo viver bem e ainda guardar dinheiro. O Organizze me mostrou onde eu estava desperdiçando sem perceber.',
    },
];

const stats = [
    { value: '150k+', label: 'Usuários ativos' },
    { value: 'R$ 2bi+', label: 'Controlados mensalmente' },
    { value: '4.9★', label: 'Avaliação média' },
    { value: '99.9%', label: 'Uptime garantido' },
];
</script>

<template>
    <div class="min-h-screen bg-white" style="font-family: 'Plus Jakarta Sans', sans-serif;">

        <!-- ───────────────── NAVBAR ───────────────── -->
        <Navbar />

        <!-- ───────────────── HERO ───────────────── -->
        <section class="relative overflow-hidden hero-section mt-30" style="background:#eaf7ef;">

            <div class="hero-inner flex flex-col lg:flex-row lg:items-center max-w-[1680px] mx-auto w-full ">

                <div class="flex flex-col justify-center hero-left">

                    <div class="inline-flex items-center gap-1.5 self-start mb-6 rounded-full overflow-hidden border border-[#16C64F]/40 bg-white/70">
                        <span class="bg-[#16C64F] text-white text-[10px] font-black px-2.5 py-1 tracking-wide">Novo</span>
                        <span class="text-gray-700 text-[11px] font-semibold pr-3">Conexão com agentes de IA</span>
                    </div>

                    <!-- Headline -->
                    <h1 class="hero-h1" style="font-weight:900; line-height:1.05; letter-spacing:-0.02em; margin-bottom:18px; color:#111827;">
                        Seu dinheiro sob<br />
                        controle, <span style="color:#16C64F;">sem esforço</span>
                    </h1>

                    <!-- Subtítulo -->
                    <p style="color:#6b7280; font-size:17px; line-height:1.6; margin-bottom:32px; max-width:420px;">
                        Tudo o que você precisa para organizar suas finanças sem perder tempo.
                    </p>

                    <!-- CTA -->
                    <div class="mb-10">
                        <a href="/auth/cadastro"
                            class="group inline-flex items-center gap-3 text-white font-bold rounded-xl transition-all hover:opacity-90"
                            style="background:#16C64F; box-shadow:0 6px 20px -4px rgba(22,198,79,0.40); padding: 16px 32px; font-size:15px; width:212px; height:57px;">
                            Começar agora
                            <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    <!-- Trust badges -->
                    <div class="flex items-center gap-8">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <svg width="24" height="24" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 40.6 40.6 A 84 84 0 1 1 58.0 172.7 L 80.0 134.6 A 40 40 0 1 0 71.7 71.7 Z" fill="#404040"/>
                                    <path d="M 55.5 171.2 A 84 84 0 0 1 23.3 134.2 L 63.5 116.3 A 40 40 0 0 0 78.8 133.9 Z" fill="#5183a0"/>
                                    <path d="M 21.0 128.7 A 84 84 0 0 1 17.0 86.9 L 60.5 93.7 A 40 40 0 0 0 62.4 113.7 Z" fill="#5183a0"/>
                                    <path d="M 18.2 81.1 A 84 84 0 0 1 38.6 42.7 L 70.7 72.7 A 40 40 0 0 0 61.0 91.0 Z" fill="#5183a0"/>
                                </svg>
                            </div>
                            <p class="text-[12px] text-gray-600 leading-tight">
                                Conecte seus bancos<br />com <strong class="text-gray-900">Open Finance</strong>
                            </p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-[13px]"
                                 style="background:#f5a623; color:white;">RA</div>
                            <p class="text-[12px] text-gray-600 leading-tight">
                                Certificado RA 1000<br /><strong class="text-gray-900">Reclame Aqui</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- ── Coluna direita: mockups (desktop only) ── -->
                <div class="hidden lg:block hero-right relative overflow-hidden " style="align-self:stretch; min-width:0;">

                    <!-- Composition wrapper: altura fixa, centralizada verticalmente -->
                    <div class="absolute inset-x-0 w-full hero-composition" style="bottom:-45px;">

                        <!-- Brilho ambiente -->
                        <div class="absolute pointer-events-none" style="left:28%; top:10%; width:55%; height:70%; background:radial-gradient(ellipse, rgba(22,198,79,0.10) 0%, transparent 70%); filter:blur(48px); z-index:1;"></div>

                        <!-- Dashboard desktop -->
                        <div class="absolute rounded-2xl overflow-hidden"
                             style="left:22%; top: 20px; right:0; height:520px; background:white; z-index:10;
                                    box-shadow: 0 32px 72px -8px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06);">

                            <div style="transform: scale(1.05); transform-origin: top left; width: calc(100% / 1.05);">

                        <!-- Navbar -->
                        <div class="bg-[#16C64F] px-5 py-2.5 flex items-center gap-6">
                            <!-- Logo -->
                            <div class="flex items-center gap-1.5 flex-shrink-0">
                                <div class="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
                                    <div class="w-1.5 h-1.5 bg-[#16C64F] rounded-full"></div>
                                </div>
                                <span class="text-white text-[9.5px] font-black tracking-wide">organizze</span>
                            </div>
                            <!-- Nav links -->
                            <div class="flex items-center gap-5 flex-1">
                                <span v-for="(nav, ni) in ['visão geral','lançamentos','relatórios','limite de gastos']" :key="nav"
                                      class="text-[8px] font-semibold whitespace-nowrap pb-0.5"
                                      :class="ni===0 ? 'text-white font-black border-b-2 border-white' : 'text-white/70 hover:text-white'">{{ nav }}</span>
                            </div>
                            <!-- Avatar -->
                            <div class="w-7 h-7 rounded-full bg-[#8B5CF6] flex items-center justify-center flex-shrink-0 ring-2 ring-white/30">
                                <span class="text-white text-[7px] font-black">NU</span>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="bg-[#f4f5f7] p-4 space-y-2.5">

                            <!-- Greeting + stats card -->
                            <div class="bg-white rounded-xl p-4 pb-5" style="box-shadow:0 1px 3px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.04);">
                                <div class="flex items-start justify-between mb-4">
                                    <div>
                                        <p class="text-[8px] text-gray-400 font-medium tracking-wide">Boa tarde,</p>
                                        <p class="text-[18px] font-black text-gray-900 leading-none mt-1">Felipe! <span class="text-[15px]">☁️</span></p>
                                    </div>
                                    <!-- Conexões ativas -->
                                    <div class="text-right">
                                        <p class="text-[6.5px] text-gray-400 mb-1.5 uppercase tracking-wider">Conexões ativas</p>
                                        <div class="flex items-center gap-0 justify-end">
                                            <div class="w-7 h-7 rounded-full bg-[#8B5CF6] flex items-center justify-center ring-2 ring-white shadow-sm z-30 relative">
                                                <span class="text-white text-[6px] font-black">NU</span>
                                            </div>
                                            <div class="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center ring-2 ring-white shadow-sm -ml-2 z-20 relative">
                                                <span class="text-white text-[6px] font-black">S</span>
                                            </div>
                                            <div class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center ring-2 ring-white shadow-sm -ml-2 z-10 relative">
                                                <span class="text-gray-500 text-[9px] font-bold">+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Stats row -->
                                <div class="flex items-end gap-0">
                                    <div class="flex-1 pr-6 border-r border-gray-100">
                                        <p class="text-[6.5px] text-gray-400 font-medium mb-1 uppercase tracking-wider">receita mensal</p>
                                        <p class="text-[14px] font-black text-[#16C64F]">R$ 13.883,00</p>
                                    </div>
                                    <div class="flex-1 px-6 border-r border-gray-100">
                                        <p class="text-[6.5px] text-gray-400 font-medium mb-1 uppercase tracking-wider">despesa mensal</p>
                                        <p class="text-[14px] font-black text-red-500">R$ 12.802,36</p>
                                    </div>
                                    <!-- Mini sparkline -->
                                    <div class="pl-5 flex items-end pb-0.5">
                                        <svg width="52" height="28" viewBox="0 0 52 28" fill="none">
                                            <polyline points="0,24 8,18 16,20 24,10 32,14 40,6 52,2"
                                                stroke="#16C64F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                            <polyline points="0,24 8,18 16,20 24,10 32,14 40,6 52,2 52,28 0,28"
                                                fill="url(#g1)" opacity="0.15"/>
                                            <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#16C64F"/><stop offset="100%" stop-color="#16C64F" stop-opacity="0"/></linearGradient></defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom panels -->
                            <div class="grid grid-cols-2 gap-2.5">

                                <!-- Saldo + Minhas contas -->
                                <div class="bg-white rounded-xl overflow-hidden" style="box-shadow:0 1px 3px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.04);">
                                    <!-- Saldo header com barra verde -->
                                    <div class="px-4 pt-4 pb-3 border-b border-gray-50">
                                        <div class="flex items-center justify-between mb-0.5">
                                            <p class="text-[6.5px] text-gray-400 uppercase tracking-wider font-medium">Saldo geral</p>
                                            <span class="text-gray-300 text-[10px]">👁</span>
                                        </div>
                                        <p class="text-[16px] font-black text-gray-900 mb-2">R$ 14.945,61</p>
                                        <!-- Progress bar receitas vs despesas -->
                                        <div class="h-1 bg-gray-100 rounded-full overflow-hidden">
                                            <div class="h-full bg-[#16C64F] rounded-full"
                                                 :style="{ width: heroReady ? '92%' : '0%', transition: 'width 1.2s ease 0.8s' }"></div>
                                        </div>
                                        <p class="text-[6px] text-gray-400 mt-1">92% das receitas disponível</p>
                                    </div>

                                    <!-- Accounts -->
                                    <div class="px-4 pt-3 pb-2">
                                        <p class="text-[8px] font-bold text-gray-800 mb-2">Minhas contas</p>
                                        <div v-for="(acc, ai) in [
                                            { abbr:'S',  bg:'#ef4444', name:'Conta Santander', sub:'Conta conectada', val:'R$ 1.486,45', connected:true  },
                                            { abbr:'CX', bg:'#2563eb', name:'Conta Caixa',     sub:'Conta manual',    val:'R$ 5.468,99', connected:false },
                                            { abbr:'i',  bg:'#f97316', name:'Conta Inter',      sub:'Conta manual',    val:'R$ 3.645,00', connected:false },
                                            { abbr:'NU', bg:'#8B5CF6', name:'Conta Nubank',    sub:'Conta conectada', val:'R$ 4.345,17', connected:true  },
                                        ]" :key="acc.name"
                                            class="flex items-center gap-2.5 py-2 border-b border-gray-50 last:border-0 of-hero-account"
                                            :style="`animation-delay: ${600 + ai * 140}ms`">
                                            <div class="relative flex-shrink-0">
                                                <div class="w-7 h-7 rounded-full flex items-center justify-center"
                                                     :style="`background:${acc.bg}`">
                                                    <span class="text-white text-[6px] font-black">{{ acc.abbr }}</span>
                                                </div>
                                                <span v-if="acc.connected"
                                                      class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#16C64F] rounded-full border-2 border-white"></span>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-[7.5px] font-semibold text-gray-800 leading-none truncate">{{ acc.name }}</p>
                                                <p class="text-[6px] mt-0.5" :class="acc.connected ? 'text-[#16C64F]' : 'text-gray-400'">{{ acc.sub }}</p>
                                            </div>
                                            <span class="text-[7.5px] font-bold text-gray-800 flex-shrink-0">{{ acc.val }}</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Faturas + Meus cartões -->
                                <div class="bg-white rounded-xl overflow-hidden" style="box-shadow:0 1px 3px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.04);">
                                    <!-- Faturas header -->
                                    <div class="px-4 pt-4 pb-3 border-b border-gray-50">
                                        <p class="text-[6.5px] text-gray-400 uppercase tracking-wider font-medium mb-0.5">Faturas de Maio</p>
                                        <p class="text-[16px] font-black text-red-500">R$ -2.607,15</p>
                                    </div>
                                    <!-- Cards -->
                                    <div class="px-4 pt-3 pb-2">
                                        <p class="text-[8px] font-bold text-gray-800 mb-2">Meus cartões</p>
                                        <div v-for="card in [
                                            { abbr:'IT', bg:'#f97316', name:'Inter',  sub:'Cartão de crédito', lim:'Lim. R$ 5.000', fatura:'R$ 0,00',      red:false },
                                            { abbr:'NU', bg:'#8B5CF6', name:'Nubank', sub:'Cartão conectado',  lim:'Lim. R$ 8.000', fatura:'R$ -2.607,15', red:true  },
                                        ]" :key="card.name" class="py-2.5 border-b border-gray-50 last:border-0">
                                            <div class="flex items-center gap-2 mb-2">
                                                <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                                     :style="`background:${card.bg}`">
                                                    <span class="text-white text-[6px] font-black">{{ card.abbr }}</span>
                                                </div>
                                                <div>
                                                    <p class="text-[7.5px] font-semibold text-gray-800 leading-none">{{ card.name }}</p>
                                                    <p class="text-[6px] text-gray-400 mt-0.5">{{ card.sub }}</p>
                                                </div>
                                            </div>
                                            <div class="flex justify-between bg-gray-50 rounded-lg px-2.5 py-1.5">
                                                <div>
                                                    <p class="text-[5.5px] text-gray-400 uppercase tracking-wide">Limite disponível</p>
                                                    <p class="text-[7px] font-bold text-gray-700 mt-0.5">{{ card.lim }}</p>
                                                </div>
                                                <div class="text-right">
                                                    <p class="text-[5.5px] text-gray-400 uppercase tracking-wide">Fatura atual</p>
                                                    <p class="text-[7px] font-bold mt-0.5" :class="card.red ? 'text-red-500' : 'text-gray-600'">{{ card.fatura }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div><!-- /escala 1.05× -->
                        </div><!-- /dashboard -->

                        <!-- ── Phone mockup: flex flex-col preenche tela sem área preta ── -->
                        <div class="absolute flex flex-col"
                             style="left:0; top:50px; width:29%; aspect-ratio:9/19.5; z-index:20;
                                    border-radius:32px; overflow:hidden; background:#0f0f0f;
                                    border:6px solid #1c1c1e; box-sizing:border-box;
                                    box-shadow: 0 12px 40px -6px rgba(0,0,0,0.35), 0 0 0 1px #2c2c2e;">

                            <!-- Dynamic island -->
                            <div class="flex justify-center pt-2 pb-1 bg-[#0f0f0f] flex-shrink-0">
                                <div class="w-14 h-3.5 bg-black rounded-full"></div>
                            </div>

                            <!-- Status bar -->
                            <div class="bg-[#16C64F] px-3 pt-1 pb-0 flex-shrink-0">
                            <div class="flex justify-between items-center">
                                <span class="text-white text-[7.5px] font-bold">9:41</span>
                                <div class="flex items-center gap-1">
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="white" opacity="0.9"><rect x="0" y="4" width="2" height="4" rx="0.5"/><rect x="3" y="2.5" width="2" height="5.5" rx="0.5"/><rect x="6" y="1" width="2" height="7" rx="0.5"/><rect x="9" y="0" width="2" height="8" rx="0.5"/></svg>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="white" opacity="0.9"><path d="M6 1.5C4.1 1.5 2.4 2.3 1.2 3.6L0 2.4C1.5 0.9 3.6 0 6 0s4.5 0.9 6 2.4L10.8 3.6C9.6 2.3 7.9 1.5 6 1.5z"/><path d="M6 4.5C4.9 4.5 3.9 5 3.2 5.7L2 4.5C3 3.6 4.4 3 6 3s3 0.6 4 1.5L8.8 5.7C8.1 5 7.1 4.5 6 4.5z"/><circle cx="6" cy="7" r="1"/></svg>
                                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none"><rect x="0.5" y="0.5" width="16" height="9" rx="2" stroke="white" stroke-opacity="0.5"/><rect x="1.5" y="1.5" width="13" height="7" rx="1.5" fill="white"/><rect x="17" y="3" width="2.5" height="4" rx="1" fill="white" fill-opacity="0.5"/></svg>
                                </div>
                            </div>

                            <!-- App header -->
                            <div class="flex items-center justify-between py-2 mt-0.5">
                                <span class="text-white text-[13px] font-light">‹</span>
                                <span class="text-white text-[10px] font-bold tracking-tight">Fluxo de caixa</span>
                                <div class="flex gap-2.5">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="white" opacity="0.9"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="white" opacity="0.9"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
                                </div>
                            </div>

                            <!-- Month tabs -->
                            <div class="flex items-center justify-center gap-0.5 pb-2.5">
                                <span class="text-white/50 text-[8px] pr-1">‹</span>
                                <span class="text-white/60 text-[8px]">Dezembro</span>
                                <span class="bg-white/20 backdrop-blur text-white text-[8px] font-bold px-2.5 py-1 rounded-full mx-1">Janeiro</span>
                                <span class="text-white/60 text-[8px]">Fevereiro</span>
                                <span class="text-white/50 text-[8px] pl-1">›</span>
                            </div>
                        </div>

                            <!-- Transações: flex-1 preenche toda a área sem faixa preta -->
                            <div class="bg-white flex-1 overflow-hidden">
                                <p class="text-[6.5px] font-black text-gray-400 uppercase tracking-[0.12em] px-3.5 pt-2.5 pb-1">Dia atual</p>

                            <div v-for="tx in [
                                { abbr:'C',  bg:'#6b7280', name:'Conta de luz',  sub:'Conta Nubank', val:'-R$ 258,00',  red:true  },
                                { abbr:'F',  bg:'#7c3aed', name:'Faculdade',     sub:'Conta Nubank', val:'-R$ 647,12',  red:true  },
                                { abbr:'P',  bg:'#ea580c', name:'Padaria Carmi', sub:'Conta Nubank', val:'-R$ 12,56',   red:true  },
                                { abbr:'C',  bg:'#16C64F', name:'Creche filho',  sub:'Conta Nubank', val:'-R$ 764,00',  red:true  },
                            ]" :key="tx.name" class="flex items-center gap-2.5 px-3.5 py-2 border-b border-gray-50/80">
                                <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                     :style="`background:${tx.bg}`">
                                    <span class="text-white text-[7px] font-black">{{ tx.abbr }}</span>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-[8px] font-semibold text-gray-900 truncate leading-none">{{ tx.name }}</p>
                                    <p class="text-[6px] text-gray-400 mt-0.5">{{ tx.sub }}</p>
                                </div>
                                <div class="text-right flex-shrink-0">
                                    <p class="text-[8px] font-bold" :class="tx.red ? 'text-red-500' : 'text-[#16C64F]'">{{ tx.val }}</p>
                                    <p class="text-[5.5px] text-gray-400 mt-0.5">pago</p>
                                </div>
                            </div>

                            <p class="text-[6.5px] font-black text-gray-400 uppercase tracking-[0.12em] px-3.5 pt-2.5 pb-1 bg-gray-50/50">15 de Setembro</p>

                            <div v-for="tx2 in [
                                { abbr:'$', bg:'#16C64F', name:'Salário',  sub:'Conta Nubank', val:'R$ 5.000,00', red:false },
                                { abbr:'M', bg:'#ea580c', name:'Mercado',  sub:'Conta Nubank', val:'-R$ 845,78',  red:true  },
                            ]" :key="tx2.name" class="flex items-center gap-2.5 px-3.5 py-2 border-b border-gray-50/80">
                                <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                     :style="`background:${tx2.bg}`">
                                    <span class="text-white text-[7px] font-black">{{ tx2.abbr }}</span>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-[8px] font-semibold text-gray-900 truncate leading-none">{{ tx2.name }}</p>
                                    <p class="text-[6px] text-gray-400 mt-0.5">{{ tx2.sub }}</p>
                                </div>
                                <div class="text-right flex-shrink-0">
                                    <p class="text-[8px] font-bold" :class="tx2.red ? 'text-red-500' : 'text-[#16C64F]'">{{ tx2.val }}</p>
                                    <p class="text-[5.5px] text-gray-400 mt-0.5">{{ tx2.red ? 'pago' : 'recebido' }}</p>
                                </div>
                            </div>

                            <p class="text-[6.5px] font-black text-gray-400 uppercase tracking-[0.12em] px-3.5 pt-2.5 pb-1 bg-gray-50/50">14 de Setembro</p>

                            <div class="flex items-center gap-2.5 px-3.5 py-2">
                                <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                                    <span class="text-white text-[7px] font-black">A</span>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-[8px] font-semibold text-gray-900 leading-none">Aluguel</p>
                                    <p class="text-[6px] text-gray-400 mt-0.5">Conta Nubank</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-[8px] font-bold text-red-500">-R$ 1.645,47</p>
                                    <p class="text-[5.5px] text-gray-400 mt-0.5">pago</p>
                                </div>
                            </div>
                            </div><!-- /transações -->
                        </div><!-- /phone -->

                        <!-- Ícones flutuantes nos quatro cantos da composição -->

                        <!-- RefreshCw: canto superior esquerdo da composição -->
                        <div class="absolute pointer-events-none hero-float-icon-1"
                             style="left:calc(22% - 27px); top:10px; width:54px; height:54px; border-radius:16px; z-index:30;
                                    background:linear-gradient(145deg,#f5a623,#e07b1a);
                                    box-shadow:0 8px 24px rgba(240,140,30,0.40), 0 0 0 1px rgba(255,255,255,0.15);
                                    display:flex; align-items:center; justify-content:center; will-change:transform;">
                            <RefreshCw class="w-6 h-6 text-white" />
                        </div>

                        <!-- CreditCard: canto superior direito -->
                        <div class="absolute pointer-events-none hero-float-icon-3"
                             style="right:8px; top:10px; width:54px; height:54px; border-radius:16px; z-index:30;
                                    background:linear-gradient(145deg,#fbbf24,#f59e0b);
                                    box-shadow:0 8px 24px rgba(245,158,11,0.40), 0 0 0 1px rgba(255,255,255,0.15);
                                    display:flex; align-items:center; justify-content:center; will-change:transform;">
                            <CreditCard class="w-6 h-6 text-white" />
                        </div>

                        <!-- Lock: canto inferior esquerdo -->
                        <div class="absolute pointer-events-none hero-float-icon-2"
                             style="left:calc(22% - 27px); bottom:75px; width:54px; height:54px; border-radius:16px; z-index:30;
                                    background:linear-gradient(145deg,#f5a623,#e07b1a);
                                    box-shadow:0 8px 24px rgba(240,140,30,0.40), 0 0 0 1px rgba(255,255,255,0.15);
                                    display:flex; align-items:center; justify-content:center; will-change:transform;">
                            <Lock class="w-6 h-6 text-white" />
                        </div>

                        <!-- TrendingUp: canto inferior direito -->
                        <div class="absolute pointer-events-none hero-float-icon-4"
                             style="right:8px; bottom:75px; width:54px; height:54px; border-radius:16px; z-index:30;
                                    background:linear-gradient(145deg,#fb923c,#ea580c);
                                    box-shadow:0 8px 24px rgba(234,88,12,0.40), 0 0 0 1px rgba(255,255,255,0.15);
                                    display:flex; align-items:center; justify-content:center; will-change:transform;">
                            <TrendingUp class="w-6 h-6 text-white" />
                        </div>
                    </div><!-- /composition wrapper -->
                </div><!-- /coluna direita -->
            </div><!-- /hero-inner -->
        </section>

        <!-- ───────────────── TRUSTED BY ───────────────── -->
        <section class="bg-white border-t border-gray-100 py-14">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <p class="text-center text-sm text-gray-400 mb-10 font-medium">
                    Integrado com os principais bancos e fintechs do Brasil
                </p>
                <div class="flex flex-wrap items-center justify-center gap-10 md:gap-14">
                    <img v-for="bank in [
                        { img: '/images/fintechs/nubank.png',    name: 'Nubank' },
                        { img: '/images/fintechs/itau.png',      name: 'Itaú' },
                        { img: '/images/fintechs/bradesco.png',  name: 'Bradesco' },
                        { img: '/images/fintechs/santander.png', name: 'Santander' },
                        { img: '/images/fintechs/c6bank.png',    name: 'C6 Bank' },
                        { img: '/images/fintechs/bb.png',        name: 'Banco do Brasil' },
                        { img: '/images/fintechs/caixa.png',     name: 'Caixa' },
                    ]" :key="bank.name"
                        :src="bank.img"
                        :alt="bank.name"
                        class="h-8 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                </div>
            </div>
        </section>

        <!-- ───────────────── FEATURES ───────────────── -->
        <section id="funcionalidades" class="py-24 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-[#16C64F] text-sm font-semibold tracking-widest uppercase mb-3 block">Funcionalidades</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Tudo que você precisa para<br class="hidden sm:block" /> organizar suas finanças
                    </h2>
                    <p class="text-gray-500 text-lg max-w-xl mx-auto">
                        Ferramentas pensadas para o dia a dia brasileiro, com a simplicidade que você merece.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="feature in features" :key="feature.title"
                        class="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                        <div :class="feature.color" class="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                            <component :is="feature.icon" class="w-6 h-6" />
                        </div>
                        <h3 class="text-base font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                        <p class="text-sm text-gray-500 leading-relaxed">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── HOW IT WORKS ───────────────── -->
        <section id="como-funciona" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <span class="text-[#16C64F] text-sm font-semibold tracking-widest uppercase mb-3 block">Como funciona</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Comece em 3 passos simples</h2>
                    <p class="text-gray-500 text-base max-w-md mx-auto">Sem planilha, sem complicação. Em minutos você já tem controle total das suas finanças.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <!-- Passo 1 -->
                    <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#16C64F]/30 hover:shadow-lg hover:shadow-[#16C64F]/5 transition-all">
                        <div class="bg-[#f3f4f6] p-4 border-b border-gray-200">
                            <div class="bg-white rounded-xl overflow-hidden shadow-sm">
                                <div class="bg-[#16C64F] px-3 py-2 flex items-center gap-1.5">
                                    <div class="w-4 h-4 bg-white rounded-md flex items-center justify-center"><div class="w-2 h-2 bg-[#16C64F] rounded-sm"></div></div>
                                    <span class="text-white text-[9px] font-extrabold">organizze</span>
                                </div>
                                <div class="px-4 py-3">
                                    <p class="text-[9px] font-extrabold text-gray-800 mb-3">Crie sua conta grátis</p>
                                    <div class="space-y-2">
                                        <div class="h-6 bg-gray-100 rounded-lg flex items-center px-2.5"><span class="text-[7.5px] text-gray-400">nome@email.com</span></div>
                                        <div class="h-6 bg-gray-100 rounded-lg flex items-center px-2.5"><span class="text-[7.5px] text-gray-400">••••••••</span></div>
                                        <div class="h-6 bg-[#16C64F] rounded-lg flex items-center justify-center"><span class="text-[7.5px] font-bold text-white">Criar conta →</span></div>
                                    </div>
                                    <p class="text-[6.5px] text-gray-400 text-center mt-2">Grátis · Sem cartão de crédito</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-5">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-8 h-8 rounded-full bg-[#16C64F] text-white text-sm font-extrabold flex items-center justify-center shadow-md shadow-[#16C64F]/30">1</div>
                                <h3 class="text-base font-bold text-gray-900">Crie sua conta</h3>
                            </div>
                            <p class="text-gray-500 text-sm leading-relaxed">Cadastro gratuito em menos de 2 minutos. Sem cartão de crédito, sem complicação.</p>
                        </div>
                    </div>

                    <!-- Passo 2 -->
                    <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#16C64F]/30 hover:shadow-lg hover:shadow-[#16C64F]/5 transition-all">
                        <div class="bg-[#f3f4f6] p-4 border-b border-gray-200">
                            <div class="bg-white rounded-xl overflow-hidden shadow-sm">
                                <div class="bg-[#16C64F] px-3 py-2 flex items-center justify-between">
                                    <span class="text-white text-[9px] font-extrabold">organizze</span>
                                    <span class="text-white/80 text-[7.5px]">Lançamentos</span>
                                </div>
                                <div class="p-3 space-y-2">
                                    <div class="grid grid-cols-3 gap-1.5">
                                        <div class="bg-[#16C64F]/10 border border-[#16C64F]/20 rounded-lg p-2">
                                            <p class="text-[6px] text-gray-400 font-bold uppercase mb-0.5">RECEITAS</p>
                                            <p class="text-[9px] font-extrabold text-[#16C64F]">R$5.500</p>
                                        </div>
                                        <div class="bg-red-50 border border-red-100 rounded-lg p-2">
                                            <p class="text-[6px] text-gray-400 font-bold uppercase mb-0.5">DESPESAS</p>
                                            <p class="text-[9px] font-extrabold text-red-500">R$2.470</p>
                                        </div>
                                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-2">
                                            <p class="text-[6px] text-gray-400 font-bold uppercase mb-0.5">SALDO</p>
                                            <p class="text-[9px] font-extrabold text-gray-800">R$3.029</p>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-4 gap-1">
                                        <div v-for="a in [
                                            { icon:'−', bg:'bg-red-100',    c:'text-red-500',    label:'Despesa' },
                                            { icon:'+', bg:'bg-green-100',  c:'text-[#16C64F]',  label:'Receita' },
                                            { icon:'⇄', bg:'bg-blue-100',   c:'text-blue-500',   label:'Transfer' },
                                            { icon:'↓', bg:'bg-purple-100', c:'text-purple-500', label:'Import' },
                                        ]" :key="a.label" class="flex flex-col items-center gap-1">
                                            <div :class="a.bg" class="w-7 h-7 rounded-lg flex items-center justify-center">
                                                <span :class="a.c" class="font-black text-xs">{{ a.icon }}</span>
                                            </div>
                                            <span class="text-[5.5px] text-gray-500 font-semibold">{{ a.label }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-5">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-8 h-8 rounded-full bg-[#16C64F] text-white text-sm font-extrabold flex items-center justify-center shadow-md shadow-[#16C64F]/30">2</div>
                                <h3 class="text-base font-bold text-gray-900">Lance suas transações</h3>
                            </div>
                            <p class="text-gray-500 text-sm leading-relaxed">Adicione receitas e despesas ou conecte seus bancos via Open Finance para sync automático.</p>
                        </div>
                    </div>

                    <!-- Passo 3 -->
                    <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#16C64F]/30 hover:shadow-lg hover:shadow-[#16C64F]/5 transition-all">
                        <div class="bg-[#f3f4f6] p-4 border-b border-gray-200">
                            <div class="bg-white rounded-xl overflow-hidden shadow-sm">
                                <div class="bg-[#16C64F] px-3 py-2 flex items-center justify-between">
                                    <span class="text-white text-[9px] font-extrabold">organizze</span>
                                    <span class="text-white/80 text-[7.5px]">Relatórios</span>
                                </div>
                                <div class="p-3">
                                    <div class="flex items-center justify-between mb-2">
                                        <p class="text-[8px] font-extrabold text-gray-800">Maiores Gastos</p>
                                        <span class="text-[6.5px] font-semibold text-[#16C64F] border border-[#16C64F]/30 px-1.5 py-0.5 rounded-full">Agosto</span>
                                    </div>
                                    <div class="space-y-1.5">
                                        <div v-for="cat in [
                                            { name:'Presentes', pct:75, val:'R$ 465', color:'bg-purple-400', text:'text-purple-600' },
                                            { name:'Compras',   pct:37, val:'R$ 230', color:'bg-red-400',    text:'text-red-600' },
                                            { name:'Alimentação', pct:25, val:'R$ 152', color:'bg-orange-400', text:'text-orange-600' },
                                            { name:'Lazer',     pct:15, val:'R$ 44',  color:'bg-blue-400',   text:'text-blue-600' },
                                        ]" :key="cat.name" class="flex items-center gap-2">
                                            <span class="text-[7px] text-gray-500 w-14 flex-shrink-0">{{ cat.name }}</span>
                                            <div class="flex-1 h-1.5 bg-gray-100 rounded-full">
                                                <div :class="cat.color" class="h-1.5 rounded-full" :style="`width:${cat.pct}%`"></div>
                                            </div>
                                            <span :class="cat.text" class="text-[7px] font-bold w-10 text-right flex-shrink-0">{{ cat.val }}</span>
                                        </div>
                                    </div>
                                    <div class="mt-2 flex items-center justify-between bg-[#16C64F]/8 rounded-lg px-2.5 py-1.5">
                                        <span class="text-[7px] text-gray-500">vs mês anterior</span>
                                        <span class="text-[7.5px] font-extrabold text-[#16C64F]">↘ −5% nos gastos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-5">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-8 h-8 rounded-full bg-[#16C64F] text-white text-sm font-extrabold flex items-center justify-center shadow-md shadow-[#16C64F]/30">3</div>
                                <h3 class="text-base font-bold text-gray-900">Acompanhe tudo</h3>
                            </div>
                            <p class="text-gray-500 text-sm leading-relaxed">Relatórios visuais, maiores gastos por categoria e comparativos mensais para decisões certeiras.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ───────────────── OPEN FINANCE HIGHLIGHT ───────────────── -->
        <section id="open-finance" class="py-24 overflow-hidden bg-[#F2F8F5]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <!-- LEFT: texto + passos + CTAs -->
                    <div>
                        <!-- Label badge -->
                        <div class="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <Building2 class="w-4 h-4 text-[#16C64F]" />
                            <span class="text-xs font-semibold tracking-widest text-gray-600 uppercase">Conexão Bancária</span>
                        </div>

                        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                            Chega de digitar extratos
                        </h2>
                        <p class="text-gray-500 text-lg mb-10 leading-relaxed max-w-md">
                            Ganhe tempo enquanto o Organizze organiza suas entradas e saídas, tudo atualizado em tempo real via Open Finance.
                        </p>

                        <!-- Passos horizontais -->
                        <div class="grid grid-cols-3 gap-5 mb-10">
                            <div v-for="(step, idx) in [
                                {
                                    icon: Building2,
                                    title: 'Conecte seus bancos',
                                    desc: 'Autorize a conexão via Open Finance em segundos.',
                                },
                                {
                                    icon: RefreshCw,
                                    title: 'Receba automático',
                                    desc: 'Transações chegam organizadas e categorizadas.',
                                },
                                {
                                    icon: CheckCircle,
                                    title: 'Revise e confirme',
                                    desc: 'Mantenha controle total do que entra e sai.',
                                },
                            ]" :key="step.title" class="flex flex-col">
                                <div class="w-10 h-10 rounded-xl bg-[#1C3A28] border border-[#16C64F]/20 flex items-center justify-center mb-3">
                                    <component :is="step.icon" class="w-4.5 h-4.5 text-[#16C64F]" />
                                </div>
                                <div class="flex items-center gap-1.5 mb-1">
                                    <span class="text-[10px] font-bold text-[#16C64F]/60 tracking-widest">0{{ idx + 1 }}</span>
                                </div>
                                <p class="font-bold text-gray-900 text-sm mb-1 leading-snug">{{ step.title }}</p>
                                <p class="text-gray-500 text-xs leading-relaxed">{{ step.desc }}</p>
                            </div>
                        </div>

                        <!-- CTA único -->
                        <a href="/auth/cadastro"
                            class="inline-flex items-center gap-2 bg-[#16C64F] hover:bg-[#12a842] text-white font-bold px-7 py-3.5 rounded-lg shadow-sm transition-all text-sm" >
                            Testar grátis agora
                            <ArrowRight class="w-4 h-4 animate-arrow" />
                        </a>
                    </div>

                    <!-- RIGHT: mockup interativo -->
                    <div ref="ofDemoEl" class="relative flex flex-col items-center">

                        <!-- Cursor animado da demo -->
                        <Transition name="of-fade">
                            <div v-if="curVisible"
                                 class="absolute top-0 left-0 pointer-events-none z-30 select-none"
                                 :style="{
                                     transform: `translate3d(${curX}px,${curY}px,0)`,
                                     transition: 'transform 0.52s cubic-bezier(0.16,1,0.3,1)'
                                 }">
                                <div v-if="curRipple" class="of-ripple"></div>
                                <svg :class="{ 'of-cur-click': curClick }"
                                     width="22" height="26" viewBox="0 0 22 26" fill="none"
                                     style="filter:drop-shadow(0 1px 3px rgba(0,0,0,0.28)) drop-shadow(0 3px 6px rgba(0,0,0,0.18))">
                                    <path d="M3 2 L3 20 L7 16 L10.5 23 L13.5 21.5 L10 14.5 L16 14.5 Z"
                                          fill="white" stroke="#1a1a1a" stroke-width="1.4"
                                          stroke-linejoin="round" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </Transition>

                        <!-- Connector pill: Organizze ——✓—— openfinance -->
                        <div class="flex items-center gap-2 mb-6 self-center">
                            <div class="flex items-center gap-2 bg-white border-2 border-[#16C64F] rounded-full px-4 py-1.5 shadow-sm">
                                <div class="w-5 h-5 rounded-full bg-[#16C64F] flex items-center justify-center">
                                    <span class="text-white text-[9px] font-black">O</span>
                                </div>
                                <span class="text-gray-800 text-sm font-bold">organizze</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <div class="w-4 h-[2px] bg-gray-300 rounded-full"></div>
                                <div class="w-5 h-5 rounded-full bg-[#16C64F] border-2 border-white shadow flex items-center justify-center">
                                    <Check class="w-3 h-3 text-white" :stroke-width="3" />
                                </div>
                                <div class="w-4 h-[2px] bg-gray-300 rounded-full"></div>
                            </div>
                            <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5">
                                <!-- toggle estático (ligado) -->
                                <div class="relative w-7 h-[17px] rounded-full bg-[#16C64F] flex-shrink-0">
                                    <div class="absolute top-[2px] right-[2px] w-[13px] h-[13px] bg-white rounded-full shadow-sm"></div>
                                </div>
                                <span class="flex items-center gap-1.5 whitespace-nowrap">
                                    <svg width="16" height="16" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Open Finance">
                                        <path d="M 40.6 40.6 A 84 84 0 1 1 58.0 172.7 L 80.0 134.6 A 40 40 0 1 0 71.7 71.7 Z" fill="#404040"/>
                                        <path d="M 55.5 171.2 A 84 84 0 0 1 23.3 134.2 L 63.5 116.3 A 40 40 0 0 0 78.8 133.9 Z" fill="#5183a0"/>
                                        <path d="M 21.0 128.7 A 84 84 0 0 1 17.0 86.9 L 60.5 93.7 A 40 40 0 0 0 62.4 113.7 Z" fill="#5183a0"/>
                                        <path d="M 18.2 81.1 A 84 84 0 0 1 38.6 42.7 L 70.7 72.7 A 40 40 0 0 0 61.0 91.0 Z" fill="#5183a0"/>
                                    </svg>
                                    <span class="text-gray-800 text-sm font-semibold"><span class="font-black">open</span>finance</span>
                                </span>
                            </div>
                        </div>

                        <!-- Fundo com skeleton rows -->
                        <div class="relative w-full rounded-2xl bg-[#C8E6D4] p-6 pt-4">
                            <!-- Skeleton rows (atrás) -->
                            <div class="space-y-3 mb-4 opacity-60">
                                <div v-for="i in 3" :key="i" class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-lg bg-white/70"></div>
                                    <div class="flex-1 space-y-1.5">
                                        <div class="h-2.5 bg-white/70 rounded-full w-3/5"></div>
                                        <div class="h-2 bg-white/50 rounded-full w-2/5"></div>
                                    </div>
                                    <div class="h-2.5 bg-white/70 rounded-full w-12"></div>
                                </div>
                            </div>

                            <!-- Card principal: Nubank conectado -->
                            <div class="bg-white rounded-2xl shadow-xl p-5">
                                <!-- Header -->
                                <div class="flex items-center gap-3 mb-3">
                                    <img src="/images/fintechs/nubank.png" alt="Nubank" class="w-10 h-10 rounded-full object-contain" />
                                    <span class="font-bold text-gray-900 text-base flex-1">Nubank</span>
                                    <span class="text-[10px] font-bold text-[#16C64F] bg-[#E8FAF0] border border-[#16C64F]/20 px-2.5 py-1 rounded-full tracking-wide">CONECTADO</span>
                                </div>
                                <p class="text-xs text-gray-400 mb-4 leading-relaxed">
                                    Recebendo suas transações da conta e cartões com segurança via Open Finance
                                </p>

                                <p class="text-xs font-semibold text-gray-700 mb-3">Transações encontradas</p>

                                <!-- Item: Conta Corrente -->
                                <div ref="ofContaEl"
                                     class="flex items-center gap-3 border rounded-xl px-4 py-3 mb-2 cursor-default select-none transition-all duration-300"
                                     :class="hoverConta
                                        ? 'border-[#16C64F]/35 bg-[#F0FFF6] shadow-md -translate-y-px'
                                        : 'border-gray-100 bg-transparent'">
                                    <div class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <Building2 class="w-4 h-4 text-gray-500" />
                                    </div>
                                    <span class="text-sm font-medium flex-1 transition-colors duration-200"
                                          :class="hoverConta ? 'text-[#16C64F] font-semibold' : 'text-gray-800'">Conta Corrente</span>
                                    <span class="text-[10px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1 whitespace-nowrap transition-colors duration-300"
                                          :class="[
                                              contaBadgeState === 'buscando' ? 'text-amber-600 bg-amber-50' : 'text-[#16C64F] bg-[#E8FAF0]',
                                              contaBadgeState === 'importadas' ? 'of-badge-pulse' : ''
                                          ]">
                                        <RefreshCw v-if="contaBadgeState === 'buscando'" class="w-2.5 h-2.5 of-spin" />
                                        <Check v-if="contaBadgeState === 'importadas'" class="w-2.5 h-2.5" :stroke-width="3" />
                                        {{ contaBadgeState === 'novas' ? '3 NOVAS' : contaBadgeState === 'buscando' ? 'BUSCANDO' : '3 IMPORTADAS' }}
                                    </span>
                                </div>

                                <!-- Item: Cartão de Crédito -->
                                <div ref="ofCartaoEl"
                                     class="flex items-center gap-3 border rounded-xl px-4 py-3 cursor-default select-none transition-all duration-300"
                                     :class="hoverCartao
                                        ? 'border-[#16C64F]/35 bg-[#F0FFF6] shadow-md -translate-y-px'
                                        : 'border-gray-100 bg-transparent'">
                                    <div class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <CreditCard class="w-4 h-4 text-gray-500" />
                                    </div>
                                    <span class="text-sm font-medium flex-1 transition-colors duration-200"
                                          :class="hoverCartao ? 'text-[#16C64F] font-semibold' : 'text-gray-800'">Cartão de Crédito</span>
                                    <span class="text-[10px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1 whitespace-nowrap transition-colors duration-300"
                                          :class="[
                                              cartaoBadgeState === 'buscando' ? 'text-amber-600 bg-amber-50' : 'text-[#16C64F] bg-[#E8FAF0]',
                                              cartaoBadgeState === 'importadas' ? 'of-badge-pulse' : ''
                                          ]">
                                        <RefreshCw v-if="cartaoBadgeState === 'buscando'" class="w-2.5 h-2.5 of-spin" />
                                        <Check v-if="cartaoBadgeState === 'importadas'" class="w-2.5 h-2.5" :stroke-width="3" />
                                        {{ cartaoBadgeState === 'novas' ? '17 NOVAS' : cartaoBadgeState === 'buscando' ? 'BUSCANDO' : '17 IMPORTADAS' }}
                                    </span>
                                </div>
                            </div>

                            <!-- Toast: Open Finance ativo -->
                            <Transition name="of-toast">
                                <div v-if="showSuccess"
                                     class="absolute bottom-5 left-0 right-0 flex justify-center pointer-events-none z-10">
                                    <div class="flex items-center gap-2 bg-white border border-[#16C64F]/25 rounded-2xl px-4 py-2.5 shadow-xl">
                                        <div class="w-5 h-5 rounded-full bg-[#16C64F] flex items-center justify-center flex-shrink-0">
                                            <Check class="w-3 h-3 text-white" :stroke-width="3" />
                                        </div>
                                        <span class="text-xs font-semibold text-gray-800 whitespace-nowrap">20 transações sincronizadas com sucesso</span>
                                    </div>
                                </div>
                            </Transition>

                            <!-- Skeleton rows (baixo) -->
                            <div class="space-y-3 mt-4 opacity-60">
                                <div v-for="i in 2" :key="i" class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-lg bg-white/70"></div>
                                    <div class="flex-1 space-y-1.5">
                                        <div class="h-2.5 bg-white/70 rounded-full w-4/5"></div>
                                        <div class="h-2 bg-white/50 rounded-full w-1/3"></div>
                                    </div>
                                    <div class="h-2.5 bg-white/70 rounded-full w-16"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── COMO FUNCIONA ───────────────── -->
        <section id="como-funciona-steps" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <!-- LEFT: mockup igual ao hero -->
                    <div class="relative flex items-center justify-center lg:justify-start py-10 lg:py-0">

                        <!-- Wrapper com perspectiva 3D (espelhado: rotateY positivo pois está à esquerda) -->
                        <div class="relative z-10 w-full max-w-[520px]"
                            style="transform: perspective(1400px) rotateY(8deg) rotateX(4deg) translateZ(0); filter: drop-shadow(0 40px 60px rgba(0,0,0,0.35));">

                            <!-- Card de fundo (relatórios) -->
                            <div class="absolute -bottom-8 -right-6 w-[88%] bg-white rounded-2xl border border-gray-100 overflow-hidden"
                                style="box-shadow: 0 20px 40px -8px rgba(0,0,0,0.15);">
                                <div class="px-4 py-3 border-b border-gray-100 bg-gray-50/60">
                                    <p class="text-[9px] font-bold text-gray-500">RELATÓRIO — AGO 2026</p>
                                </div>
                                <div class="p-4 space-y-2">
                                    <div v-for="(c, ci) in [
                                        { name:'Alimentação', pct:72, color:'bg-orange-400' },
                                        { name:'Transporte',  pct:45, color:'bg-blue-400' },
                                        { name:'Lazer',       pct:28, color:'bg-purple-400' },
                                    ]" :key="'cf-c-'+ci" class="space-y-1">
                                        <div class="flex justify-between">
                                            <span class="text-[8px] text-gray-500">{{ c.name }}</span>
                                            <span class="text-[8px] font-bold text-gray-700">{{ c.pct }}%</span>
                                        </div>
                                        <div class="h-1.5 bg-gray-100 rounded-full">
                                            <div :class="c.color" class="h-1.5 rounded-full" :style="`width:${c.pct}%`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card principal — Dashboard -->
                            <div class="relative bg-white rounded-2xl border border-gray-100/80 overflow-hidden"
                                style="box-shadow: 0 32px 64px -12px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.04);">

                                <!-- Topbar -->
                                <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/70">
                                    <div class="flex items-center gap-1.5">
                                        <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    </div>
                                    <div class="bg-white border border-gray-200 rounded-lg h-5 w-52 flex items-center px-2 gap-1">
                                        <div class="w-2 h-2 rounded-full bg-[#16C64F]"></div>
                                        <span class="text-[9px] text-gray-400">app.organizze.com.br/dashboard</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                        <div class="w-4 h-4 rounded bg-gray-200"></div>
                                        <div class="w-4 h-4 rounded bg-gray-200"></div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-12 gap-0">
                                    <!-- Sidebar -->
                                    <div class="col-span-3 border-r border-gray-100 p-3 space-y-1 bg-gray-50/30">
                                        <div class="flex items-center gap-1.5 px-1 mb-4">
                                            <div class="w-5 h-5 bg-[#16C64F] rounded-md flex items-center justify-center">
                                                <div class="w-2 h-2 bg-white rounded-sm"></div>
                                            </div>
                                            <span class="text-[10px] font-extrabold text-gray-800">Organizze</span>
                                        </div>
                                        <div v-for="(item, i) in [
                                            { label:'Dashboard' },
                                            { label:'Lançamentos' },
                                            { label:'Contas' },
                                            { label:'Cartões' },
                                            { label:'Relatórios' },
                                            { label:'Limites' },
                                        ]" :key="'cf-nav-'+i"
                                            :class="i === 0
                                                ? 'bg-[#16C64F] text-white shadow-sm shadow-[#16C64F]/30'
                                                : 'text-gray-400 hover:bg-gray-100'"
                                            class="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[9px] font-semibold cursor-pointer transition-colors">
                                            <div :class="i === 0 ? 'bg-white/40' : 'bg-gray-300'" class="w-1.5 h-1.5 rounded-sm flex-shrink-0"></div>
                                            {{ item.label }}
                                        </div>
                                    </div>

                                    <!-- Main content -->
                                    <div class="col-span-9 p-4 space-y-3">
                                        <div class="flex items-start justify-between">
                                            <div>
                                                <p class="text-[8px] text-gray-400 font-medium uppercase tracking-wider">Saldo em agosto</p>
                                                <p class="text-[22px] font-extrabold text-gray-900 leading-tight">R$ 8.420<span class="text-sm text-gray-400 font-normal">,00</span></p>
                                                <div class="flex items-center gap-1 mt-0.5">
                                                    <span class="text-[#16C64F] text-[9px] font-bold">↑ +12,4%</span>
                                                    <span class="text-[8px] text-gray-400">vs mês anterior</span>
                                                </div>
                                            </div>
                                            <div class="text-right bg-gradient-to-br from-[#16C64F]/10 to-emerald-50 rounded-xl p-2.5">
                                                <p class="text-[7px] text-gray-400 uppercase font-bold">Economias</p>
                                                <p class="text-base font-extrabold text-[#16C64F]">R$ 2.100</p>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-3 gap-1.5">
                                            <div v-for="s in [
                                                { label:'Receitas', value:'R$ 12.500', color:'text-[#16C64F]', dot:'bg-[#16C64F]', bg:'bg-[#16C64F]/5 border border-[#16C64F]/10' },
                                                { label:'Despesas', value:'R$ 4.080',  color:'text-red-500',   dot:'bg-red-400',   bg:'bg-red-50 border border-red-100' },
                                                { label:'Cartões',  value:'R$ 1.340',  color:'text-blue-600',  dot:'bg-blue-400',  bg:'bg-blue-50 border border-blue-100' },
                                            ]" :key="'cf-s-'+s.label" :class="s.bg" class="rounded-xl p-2.5">
                                                <div class="flex items-center gap-1 mb-1">
                                                    <div :class="s.dot" class="w-1.5 h-1.5 rounded-full"></div>
                                                    <p class="text-[7px] text-gray-500 font-semibold uppercase">{{ s.label }}</p>
                                                </div>
                                                <p :class="s.color" class="text-[11px] font-extrabold">{{ s.value }}</p>
                                            </div>
                                        </div>

                                        <div class="bg-gray-50 border border-gray-100 rounded-xl p-3">
                                            <div class="flex items-center justify-between mb-2">
                                                <p class="text-[8px] font-bold text-gray-600">Evolução 2026</p>
                                                <span class="text-[7px] text-[#16C64F] font-bold bg-[#16C64F]/10 px-2 py-0.5 rounded-full">+18% YTD</span>
                                            </div>
                                            <div class="relative flex items-end gap-1 h-16">
                                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 120 64" preserveAspectRatio="none">
                                                    <polyline points="5,52 15,40 25,47 35,28 45,35 55,18 65,26 75,8 85,18 95,14 105,10 115,16"
                                                        fill="none" stroke="#16C64F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
                                                </svg>
                                                <div v-for="(h, i) in [35,52,41,68,44,78,58,88,50,72,82,60]" :key="'cf-bar-'+i"
                                                    class="flex-1 rounded-t" :style="`height:${h}%`"
                                                    :class="i === 7 ? 'bg-[#16C64F]' : 'bg-[#16C64F]/20'">
                                                </div>
                                            </div>
                                            <div class="flex justify-between mt-1.5">
                                                <span v-for="m in ['Jan','Mar','Mai','Jul','Set','Nov']" :key="'cf-m-'+m" class="text-[6.5px] text-gray-300 font-medium">{{ m }}</span>
                                            </div>
                                        </div>

                                        <div class="space-y-1">
                                            <p class="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Recentes</p>
                                            <div v-for="tx in [
                                                { bg:'bg-orange-100', icon: ShoppingCart, iconColor:'text-orange-500', name:'Supermercado Extra', cat:'Alimentação', value:'-R$ 284,50',  color:'text-red-500' },
                                                { bg:'bg-green-100',  icon: Wallet,       iconColor:'text-green-600',  name:'Salário',            cat:'Receita',     value:'+R$ 6.500,00', color:'text-[#16C64F]' },
                                                { bg:'bg-purple-100', icon: Film,         iconColor:'text-purple-500', name:'Netflix',            cat:'Assinatura',  value:'-R$ 44,90',   color:'text-red-500' },
                                            ]" :key="'cf-tx-'+tx.name"
                                                class="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                                                <div class="flex items-center gap-2">
                                                    <div :class="tx.bg" class="w-6 h-6 rounded-lg flex items-center justify-center">
                                                        <component :is="tx.icon" :class="tx.iconColor" class="w-3.5 h-3.5" />
                                                    </div>
                                                    <div>
                                                        <p class="text-[8.5px] text-gray-700 font-semibold leading-none">{{ tx.name }}</p>
                                                        <p class="text-[7px] text-gray-400 mt-0.5">{{ tx.cat }}</p>
                                                    </div>
                                                </div>
                                                <span :class="tx.color" class="text-[9px] font-extrabold">{{ tx.value }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card flutuante — Meta mensal -->
                            <div class="absolute -bottom-5 -left-10 bg-white rounded-2xl p-3.5 w-44 z-20"
                                style="box-shadow: 0 16px 40px -8px rgba(0,0,0,0.20), 0 0 0 1px rgba(0,0,0,0.05);">
                                <div class="flex items-center justify-between mb-2">
                                    <p class="text-[9px] font-bold text-gray-700">Meta de economia</p>
                                    <span class="text-[8px] font-bold text-[#16C64F] bg-[#16C64F]/10 px-1.5 py-0.5 rounded-full">AGO</span>
                                </div>
                                <p class="text-base font-extrabold text-gray-900 mb-2">R$ 2.100 <span class="text-[9px] text-gray-400 font-normal">/ 3.000</span></p>
                                <div class="w-full bg-gray-100 rounded-full h-2 mb-1">
                                    <div class="bg-gradient-to-r from-[#16C64F] to-emerald-400 h-2 rounded-full" style="width: 70%"></div>
                                </div>
                                <p class="text-[7.5px] text-gray-400">70% da meta atingida 🎯</p>
                            </div>

                            <!-- Card flutuante — Open Finance -->
                            <div class="absolute -top-5 -right-8 bg-white rounded-2xl p-3 w-52 z-20"
                                style="box-shadow: 0 16px 40px -8px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);">
                                <div class="flex items-center gap-2.5 mb-2">
                                    <div class="relative w-8 h-8 bg-[#16C64F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span class="text-sm">🏦</span>
                                        <span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#16C64F] rounded-full border-2 border-white"></span>
                                    </div>
                                    <div>
                                        <p class="text-[9px] font-extrabold text-gray-800 leading-none">Nubank conectado</p>
                                        <p class="text-[7.5px] text-[#16C64F] font-semibold mt-0.5">● sincronizado agora</p>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between bg-gray-50 rounded-lg px-2 py-1.5">
                                    <span class="text-[8px] text-gray-500">Último acesso</span>
                                    <span class="text-[8px] font-bold text-gray-700">há 2 min</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT: título + 4 passos em grid 2x2 -->
                    <div>
                        <span class="text-[#16C64F] text-sm font-semibold tracking-widest uppercase mb-3 block">Como funciona</span>
                        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Como o Organizze<br />funciona?
                        </h2>
                        <p class="text-gray-500 text-base mb-10 leading-relaxed max-w-md">
                            Em poucos minutos você já tem controle total das suas finanças. Sem planilha, sem complicação.
                        </p>

                        <!-- Grid 2x2 de passos -->
                        <div class="grid grid-cols-2 gap-x-8 gap-y-8">
                            <div v-for="step in [
                                { n: 1, title: 'Crie sua conta',          desc: 'Cadastro gratuito em menos de 2 minutos, sem cartão de crédito.' },
                                { n: 2, title: 'Configure suas contas',   desc: 'Adicione contas bancárias, cartões e limites por categoria.' },
                                { n: 3, title: 'Conecte seus bancos',     desc: 'Sincronize via Open Finance e receba transações automáticas.' },
                                { n: 4, title: 'Organize suas finanças',  desc: 'Acompanhe relatórios, metas e tenha controle total do seu dinheiro.' },
                            ]" :key="step.n">
                                <div class="w-9 h-9 rounded-full bg-[#16C64F] flex items-center justify-center text-white text-sm font-extrabold mb-3 shadow-lg shadow-[#16C64F]/25">
                                    {{ step.n }}
                                </div>
                                <p class="font-bold text-gray-900 text-base mb-1.5">{{ step.title }}</p>
                                <p class="text-gray-500 text-sm leading-relaxed">{{ step.desc }}</p>
                            </div>
                        </div>

                        <!-- CTA -->
                        <a href="/auth/cadastro"
                            class="inline-flex items-center gap-2 mt-10 bg-[#16C64F] hover:bg-[#12a842] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all"
                            style="box-shadow: 0 8px 20px -4px rgba(22,198,79,0.35);">
                            Começar agora grátis
                            <ArrowRight class="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── TESTIMONIALS ───────────────── -->
        <section class="relative py-24 bg-[#EDFDF2] overflow-hidden">
            <!-- Blobs decorativos -->
            <div class="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-md "></div>
            <div class="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-md "></div>

            <!-- Header -->
            <div class="relative text-center mb-16 px-4">
                <span class="inline-block text-[#3062d4] text-xs font-bold tracking-[0.2em] uppercase mb-5">Depoimentos</span>
                <h2 class="text-4xl sm:text-5xl font-bold text-gray-800/50 leading-tight">
                    Quem usa,
                    <span class="text-gray-800"> recomenda</span>
                </h2>
                <p class="mt-4 text-gray-600/80 text-base max-w-md mx-auto">
                    Veja o que nossos usuários dizem sobre como o Organizze transformou suas finanças.
                </p>
            </div>

            <!-- Row 1 — desliza para a esquerda -->
            <div class="relative mb-5 overflow-hidden ">
                <div class="flex gap-5 w-max animate-marquee-left hover:[animation-play-state:paused]">
                    <template v-for="pass in 2" :key="pass">
                        <div v-for="t in testimonialsRow1" :key="`r1-${pass}-${t.name}`"
                            class="w-[340px] flex-shrink-0 bg-white border border-white/10 rounded-2xl p-6"
                        >
                            <!-- Avatar + nome -->
                            <div class="flex items-center gap-3 mb-5">
                                <div :class="[t.color, 'w-11 h-11 rounded-full text-white text-sm font-bold flex items-center justify-center flex-shrink-0 ring-2 ring-white/10']">
                                    {{ t.avatar }}
                                </div>
                                <div>
                                    <p class="font-bold text-gray-900 text-sm">{{ t.name }}</p>
                                    <p class="text-xs text-gray-400 mt-0.5">{{ t.role }}</p>
                                </div>
                            </div>
                            <!-- Texto -->
                            <p class="text-gray-500/70 text-sm leading-relaxed mb-5">"{{ t.text }}"</p>
                            <!-- Estrelas -->
                            <div class="flex gap-0.5">
                                <Star v-for="i in t.rating" :key="i" class="w-4 h-4 fill-amber-400 text-amber-400" />
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>


        <!-- ───────────────── CTA FINAL ───────────────── -->
        <section class="bg-[#F8FAF8] px-4 py-28 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-6xl">
                <div
                    class="relative overflow-hidden rounded-3xl border border-emerald-400/10
                   bg-gradient-to-br from-[#071D12] via-[#0B2A19] to-[#071B10]
                   px-8 py-8 shadow-[0_24px_70px_-35px_rgba(6,78,35,0.55)]
                   sm:px-12 lg:px-16"
                >
                    <!-- Iluminação decorativa -->
                    <div
                        class="pointer-events-none absolute -left-20 -top-32 h-80 w-80
                       rounded-full bg-[#22C55E]/10 blur-[100px]"
                    ></div>

                    <div
                        class="pointer-events-none absolute -bottom-36 right-16 h-80 w-80
                       rounded-full bg-[#34D399]/10 blur-[110px]"
                    ></div>

                    <div class="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                        <!-- Conteúdo -->
                        <div>
                            <div
                                class="mb-4 inline-flex items-center gap-2.5 rounded-full
                               border border-[#34D399]/20 bg-[#34D399]/[0.07]
                               px-3.5 py-1.5"
                            >
                                <div class="flex -space-x-1.5">
                                    <img
                                        src="https://i.pravatar.cc/28?img=11"
                                        alt=""
                                        class="h-5 w-5 rounded-full border-2 border-[#0B2A19] object-cover"
                                    />

                                    <img
                                        src="https://i.pravatar.cc/28?img=12"
                                        alt=""
                                        class="h-5 w-5 rounded-full border-2 border-[#0B2A19] object-cover"
                                    />

                                    <img
                                        src="https://i.pravatar.cc/28?img=13"
                                        alt=""
                                        class="h-5 w-5 rounded-full border-2 border-[#0B2A19] object-cover"
                                    />
                                </div>

                                <span class="text-xs font-semibold text-[#6EE7A0]">
                            +150 mil usuários já estão organizados
                        </span>
                            </div>

                            <h2 class="max-w-3xl text-3xl font-bold leading-tight text-[#F7FFF9] sm:text-4xl lg:text-[40px]">
                                Comece hoje a construir

                                <span
                                    class="block bg-gradient-to-r from-[#22C55E] via-[#34D399] to-[#86EFAC]
                                   bg-clip-text text-transparent"
                                >
                            sua liberdade financeira.
                        </span>
                            </h2>

                            <p class="mt-3 max-w-xl text-sm leading-relaxed text-[#A7BDB0]">
                                Junte-se a quem já parou de perder dinheiro por falta de
                                controle. É grátis para começar.
                            </p>
                        </div>

                        <!-- Botão -->
                        <div class="flex-shrink-0">
                            <a href="/auth/cadastro" class="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#16C64F] to-[#22D365] px-8 py-4 text-base font-bold text-[#052E16] transition-all duration-200">
                                Criar minha conta grátis

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── FOOTER ───────────────── -->
        <Footer />

    </div>
</template>

<style scoped>
/* ── Cursor: clique ────────────────────────────────── */
@keyframes of-click {
    0%   { transform: scale(1)    rotate(0deg); }
    25%  { transform: scale(0.78) rotate(-4deg); }
    60%  { transform: scale(1.04) rotate(1deg); }
    100% { transform: scale(1)    rotate(0deg); }
}
.of-cur-click {
    animation: of-click 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ── Badge: pulsação ───────────────────────────────── */
@keyframes of-pulse {
    0%   { transform: scale(1);    box-shadow: 0 0 0 0   rgba(22,198,79,0); }
    35%  { transform: scale(1.28); box-shadow: 0 0 0 6px rgba(22,198,79,0.24); }
    70%  { transform: scale(0.97); box-shadow: 0 0 0 0   rgba(22,198,79,0); }
    100% { transform: scale(1); }
}
.of-badge-pulse {
    animation: of-pulse 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) 1;
}

/* ── Spin: ícone BUSCANDO ──────────────────────────── */
@keyframes of-spin {
    to { transform: rotate(360deg); }
}
.of-spin {
    animation: of-spin 0.75s linear infinite;
}

/* ── Ripple: onda verde no clique ──────────────────── */
@keyframes of-ripple-anim {
    0%   { transform: scale(0.5); opacity: 0.6; }
    100% { transform: scale(5);   opacity: 0; }
}
.of-ripple {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(22, 198, 79, 0.48);
    animation: of-ripple-anim 0.5s cubic-bezier(0.2, 0, 0.6, 1) forwards;
    pointer-events: none;
    top: -9px;
    left: -8px;
}

/* ── Toast: entrada ────────────────────────────────── */
@keyframes of-toast-in {
    from { opacity: 0; transform: translateY(10px) scale(0.94); }
    to   { opacity: 1; transform: translateY(0)    scale(1); }
}
@keyframes of-toast-out {
    from { opacity: 1; transform: translateY(0)   scale(1); }
    to   { opacity: 0; transform: translateY(-6px) scale(0.97); }
}
.of-toast-enter-active { animation: of-toast-in  0.38s cubic-bezier(0.34, 1.56, 0.64, 1); }
.of-toast-leave-active { animation: of-toast-out 0.26s ease-in; }

/* ── Cursor: fade in/out ───────────────────────────── */
.of-fade-enter-active { transition: opacity 0.3s ease; }
.of-fade-leave-active { transition: opacity 0.2s ease; }
.of-fade-enter-from,
.of-fade-leave-to     { opacity: 0; }

/* ── Hero section: responsividade ──────────────────── */
.hero-section {
    padding: 52px 0 40px;
}
.hero-inner {
    padding: 0 24px;
    gap: 0;
}
.hero-left {
    width: 100%;
    padding-bottom: 40px;
}
.hero-h1 {
    font-size: 40px;
}
.hero-right { display: none; }
.hero-composition { height: 620px; }

@media (min-width: 768px) {
    .hero-h1 { font-size: 48px; }
}

@media (min-width: 1024px) {
    .hero-section {
        height: auto;
        padding: 0;
    }
    .hero-inner {
        height: auto;
        padding: 0 72px;
        gap: 48px;
    }
    .hero-left {
        width: 42%;
        max-width: 620px;
        flex-shrink: 0;
        padding-bottom: 0;
    }
    .hero-h1 { font-size: 58px; }
    .hero-right {
        display: block;
        flex: 1;
        min-height: 575px;
    }
    .hero-composition {
        height: 620px;
    }
}

/* ── Hero floating icons ────────────────────────────── */
@keyframes hero-float-icon-a {
    0%, 100% { transform: translateY(0px)   rotate(-8deg)  scale(1); }
    50%       { transform: translateY(-8px)  rotate(-11deg) scale(1.03); }
}
@keyframes hero-float-icon-b {
    0%, 100% { transform: translateY(0px)  rotate(8deg)  scale(1); }
    50%       { transform: translateY(-6px) rotate(11deg) scale(1.02); }
}
@keyframes hero-float-icon-c {
    0%, 100% { transform: translateY(0px)   rotate(6deg)  scale(1); }
    50%       { transform: translateY(-10px) rotate(9deg)  scale(1.04); }
}
@keyframes hero-float-icon-d {
    0%, 100% { transform: translateY(0px)   rotate(-6deg) scale(1); }
    50%       { transform: translateY(-7px)  rotate(-9deg) scale(1.03); }
}
.hero-float-icon-1 { animation: hero-float-icon-a 5s ease-in-out 0.3s infinite; }
.hero-float-icon-2 { animation: hero-float-icon-b 6s ease-in-out 1.1s infinite; }
.hero-float-icon-3 { animation: hero-float-icon-c 4.5s ease-in-out 0.7s infinite; }
.hero-float-icon-4 { animation: hero-float-icon-d 7s ease-in-out 1.8s infinite; }

/* ── prefers-reduced-motion ────────────────────────── */
@media (prefers-reduced-motion: reduce) {
    .of-cur-click,
    .of-badge-pulse,
    .of-toast-enter-active,
    .of-toast-leave-active,
    .of-fade-enter-active,
    .of-fade-leave-active,
    .of-spin,
    .of-ripple { animation: none; transition: none; }
    .hero-float-icon-1,
    .hero-float-icon-2,
    .hero-float-icon-3,
    .hero-float-icon-4,
    .of-hero-account { animation: none; opacity: 1; }
}
</style>
