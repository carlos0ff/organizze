<script setup lang="ts">
import { ref } from 'vue';
import {
    BarChart3, Shield, Zap, CreditCard, PieChart, Bell,
    ArrowRight, Check, ChevronDown, Menu, X,
    TrendingUp, Wallet, Target, RefreshCw, Star,
    Building2, Smartphone, FileText, Lock
} from 'lucide-vue-next';

const mobileMenuOpen = ref(false);
const openFaq = ref<number | null>(null);

const toggleFaq = (index: number) => {
    openFaq.value = openFaq.value === index ? null : index;
};

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

const testimonials = [
    {
        name: 'Ana Paula Souza',
        role: 'Professora',
        avatar: 'AP',
        rating: 5,
        text: 'Finalmente consegui entender para onde ia meu dinheiro. Em 3 meses já economizei o suficiente para uma viagem que estava adiando há anos.',
    },
    {
        name: 'Rafael Mendes',
        role: 'Designer Freelancer',
        avatar: 'RM',
        rating: 5,
        text: 'Como autônomo, precisava de algo que me ajudasse a separar pessoal de profissional. O Organizze é exatamente isso — simples e poderoso.',
    },
    {
        name: 'Camila Torres',
        role: 'Analista de TI',
        avatar: 'CT',
        rating: 5,
        text: 'A integração com Open Finance mudou tudo. Minhas transações chegam automáticas e já vêm categorizadas. Poupa horas por semana.',
    },
];

const faqs = [
    {
        question: 'O Organizze é seguro?',
        answer: 'Sim. Usamos criptografia de ponta a ponta, autenticação em dois fatores e nunca armazenamos suas senhas bancárias. A conexão via Open Finance é regulamentada pelo Banco Central.',
    },
    {
        question: 'Posso usar no celular?',
        answer: 'Sim, o Organizze funciona perfeitamente no navegador do celular e temos apps nativos para iOS e Android em desenvolvimento.',
    },
    {
        question: 'Posso cancelar quando quiser?',
        answer: 'Sim. Não há fidelidade nem multa. Você pode cancelar a qualquer momento pelo próprio painel de configurações.',
    },
    {
        question: 'O plano grátis tem limite de tempo?',
        answer: 'Não. O plano Básico é gratuito para sempre. Você só precisa assinar se quiser funcionalidades avançadas.',
    },
    {
        question: 'Como funciona a importação bancária?',
        answer: 'Você pode conectar sua conta via Open Finance (sincronização automática) ou importar extratos no formato OFX, CSV ou Excel.',
    },
];

const navLinks = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Planos', href: '#planos' },
    { label: 'Blog', href: '/blog' },
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
        <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <!-- Logo -->
                    <a href="/" class="flex items-center gap-2">
                        <div class="w-8 h-8 bg-[#16C64F] rounded-lg flex items-center justify-center">
                            <BarChart3 class="w-5 h-5 text-white" />
                        </div>
                        <span class="text-xl font-bold text-gray-900">Organizze</span>
                    </a>

                    <!-- Desktop nav -->
                    <nav class="hidden md:flex items-center gap-8">
                        <a v-for="link in navLinks" :key="link.label" :href="link.href"
                            class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            {{ link.label }}
                        </a>
                    </nav>

                    <!-- CTA -->
                    <div class="hidden md:flex items-center gap-3">
                        <a href="/auth/entrar" class="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                            Entrar
                        </a>
                        <a href="/auth/cadastro"
                            class="bg-[#16C64F] hover:bg-[#12a842] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                            Começar grátis
                        </a>
                    </div>

                    <!-- Mobile toggle -->
                    <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-gray-600">
                        <X v-if="mobileMenuOpen" class="w-5 h-5" />
                        <Menu v-else class="w-5 h-5" />
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
                <a v-for="link in navLinks" :key="link.label" :href="link.href"
                    class="text-sm font-medium text-gray-700">{{ link.label }}</a>
                <hr class="border-gray-100" />
                <a href="/auth/entrar" class="text-sm font-medium text-gray-700">Entrar</a>
                <a href="/auth/cadastro"
                    class="bg-[#16C64F] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                    Começar grátis
                </a>
            </div>
        </header>

        <!-- ───────────────── HERO ───────────────── -->
        <section class="relative pt-20 pb-0 overflow-hidden bg-white">

            <!-- Textura de fundo sutil -->
            <div class="absolute inset-0 opacity-[0.025]"
                style="background-image: radial-gradient(circle, #16C64F 1px, transparent 1px); background-size: 28px 28px;">
            </div>
            <!-- Gradiente radial saindo do canto superior direito -->
            <div class="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#16C64F]/10 via-emerald-50/30 to-transparent rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-16 lg:py-0">

                    <!-- ── Coluna esquerda: texto ── -->
                    <div class="flex flex-col justify-center">

                        <!-- Badge pill -->
                        <div class="inline-flex items-center gap-2 self-start mb-6 px-3.5 py-1.5 rounded-full border border-[#16C64F]/30 bg-[#16C64F]/5">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#16C64F] animate-pulse"></span>
                            <span class="text-[#16C64F] text-[11px] font-bold tracking-widest uppercase">Controle financeiro inteligente</span>
                        </div>

                        <!-- Headline -->
                        <h1 class="text-[2.6rem] sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight mb-5">
                            <span class="text-gray-900">A melhor forma de</span><br />
                            <span class="text-gray-900">organizar suas</span><br />
                            <span style="background: linear-gradient(135deg, #16C64F 0%, #0ea843 60%, #059669 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                finanças pessoais
                            </span>
                        </h1>

                        <!-- Subtítulo -->
                        <p class="text-gray-500 text-[1.05rem] leading-relaxed mb-8 max-w-[420px]">
                            Controle receitas, despesas e cartões em um painel intuitivo. Conecte seus bancos via Open Finance e veja seu dinheiro trabalhar por você.
                        </p>

                        <!-- CTAs -->
                        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                            <a href="/auth/cadastro"
                                class="group inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
                                style="background: linear-gradient(135deg, #16C64F 0%, #12b845 100%); box-shadow: 0 8px 24px -4px rgba(22,198,79,0.35);">
                                Começar grátis agora
                                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="#como-funciona"
                                class="group flex items-center gap-3 text-gray-600 hover:text-gray-900 font-semibold text-base transition-colors">
                                <span class="w-11 h-11 rounded-full border-2 border-gray-200 group-hover:border-[#16C64F]/40 group-hover:bg-[#16C64F]/5 flex items-center justify-center transition-all flex-shrink-0">
                                    <svg class="w-3.5 h-3.5 ml-0.5 text-gray-500 group-hover:text-[#16C64F]" viewBox="0 0 12 14" fill="currentColor">
                                        <path d="M1 1l10 6L1 13V1z"/>
                                    </svg>
                                </span>
                                Ver demonstração
                            </a>
                        </div>

                        <!-- Social proof -->
                        <div class="flex items-center gap-3 mb-8">
                            <div class="flex -space-x-2">
                                <img v-for="(id, i) in [10, 20, 30, 40]" :key="i"
                                    :src="`https://i.pravatar.cc/40?img=${id}`"
                                    class="w-9 h-9 rounded-full border-2 border-white object-cover" />
                            </div>
                            <div>
                                <div class="flex items-center gap-1 mb-0.5">
                                    <span v-for="s in 5" :key="s" class="text-amber-400 text-xs">★</span>
                                </div>
                                <p class="text-[13px] text-gray-500">
                                    <span class="font-bold text-gray-800">+150k usuários</span> confiam no Organizze
                                </p>
                            </div>
                        </div>

                        <!-- Trust badges -->
                        <div class="flex flex-wrap items-center gap-4">
                            <div v-for="badge in [
                                { icon: '🔒', text: 'SSL 256-bit' },
                                { icon: '🏦', text: 'Open Finance BCB' },
                                { icon: '⚡', text: 'Sync automático' },
                            ]" :key="badge.text"
                                class="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                                <span>{{ badge.icon }}</span>
                                {{ badge.text }}
                            </div>
                        </div>
                    </div>

                    <!-- ── Coluna direita: mockup ── -->
                    <div class="relative flex items-center justify-center lg:justify-end lg:h-[calc(100vh-80px)]">

                        <!-- Blobs de cor em camadas -->
                        <div class="absolute top-1/2 right-[-60px] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
                            style="background: radial-gradient(circle, rgba(22,198,79,0.12) 0%, rgba(22,198,79,0.04) 60%, transparent 100%);">
                        </div>
                        <div class="absolute top-1/3 right-1/4 w-48 h-48 rounded-full pointer-events-none"
                            style="background: radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%);">
                        </div>

                        <!-- Wrapper com perspectiva 3D -->
                        <div class="relative z-10 w-full max-w-[600px]"
                            style="transform: perspective(1400px) rotateY(-10deg) rotateX(4deg) translateZ(0); filter: drop-shadow(0 40px 60px rgba(0,0,0,0.12));">

                            <!-- Card de fundo (relatórios) -->
                            <div class="absolute -bottom-8 -right-6 w-[88%] bg-white rounded-2xl border border-gray-100 overflow-hidden"
                                style="box-shadow: 0 20px 40px -8px rgba(0,0,0,0.08);">
                                <div class="px-4 py-3 border-b border-gray-100 bg-gray-50/60">
                                    <p class="text-[9px] font-bold text-gray-500">RELATÓRIO — AGO 2026</p>
                                </div>
                                <div class="p-4 space-y-2">
                                    <div v-for="(c, i) in [
                                        { name:'Alimentação', pct:72, color:'bg-orange-400' },
                                        { name:'Transporte', pct:45, color:'bg-blue-400' },
                                        { name:'Lazer', pct:28, color:'bg-purple-400' },
                                    ]" :key="i" class="space-y-1">
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
                                style="box-shadow: 0 32px 64px -12px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04);">

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
                                            { label:'Dashboard', icon:'▪' },
                                            { label:'Lançamentos', icon:'▪' },
                                            { label:'Contas', icon:'▪' },
                                            { label:'Cartões', icon:'▪' },
                                            { label:'Relatórios', icon:'▪' },
                                            { label:'Limites', icon:'▪' },
                                        ]" :key="i"
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

                                        <!-- Header do dashboard -->
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

                                        <!-- Cards de resumo -->
                                        <div class="grid grid-cols-3 gap-1.5">
                                            <div v-for="(s) in [
                                                { label:'Receitas', value:'R$ 12.500', color:'text-[#16C64F]', dot:'bg-[#16C64F]', bg:'bg-[#16C64F]/5 border border-[#16C64F]/10' },
                                                { label:'Despesas', value:'R$ 4.080', color:'text-red-500', dot:'bg-red-400', bg:'bg-red-50 border border-red-100' },
                                                { label:'Cartões', value:'R$ 1.340', color:'text-blue-600', dot:'bg-blue-400', bg:'bg-blue-50 border border-blue-100' },
                                            ]" :key="s.label" :class="s.bg" class="rounded-xl p-2.5">
                                                <div class="flex items-center gap-1 mb-1">
                                                    <div :class="s.dot" class="w-1.5 h-1.5 rounded-full"></div>
                                                    <p class="text-[7px] text-gray-500 font-semibold uppercase">{{ s.label }}</p>
                                                </div>
                                                <p :class="s.color" class="text-[11px] font-extrabold">{{ s.value }}</p>
                                            </div>
                                        </div>

                                        <!-- Gráfico de barras + linha -->
                                        <div class="bg-gray-50 border border-gray-100 rounded-xl p-3">
                                            <div class="flex items-center justify-between mb-2">
                                                <p class="text-[8px] font-bold text-gray-600">Evolução 2026</p>
                                                <span class="text-[7px] text-[#16C64F] font-bold bg-[#16C64F]/10 px-2 py-0.5 rounded-full">+18% YTD</span>
                                            </div>
                                            <div class="relative flex items-end gap-1 h-16">
                                                <!-- Linha de tendência SVG -->
                                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 120 64" preserveAspectRatio="none">
                                                    <polyline
                                                        points="5,52 15,40 25,47 35,28 45,35 55,18 65,26 75,8 85,18 95,14 105,10 115,16"
                                                        fill="none" stroke="#16C64F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
                                                </svg>
                                                <div v-for="(h, i) in [35,52,41,68,44,78,58,88,50,72,82,60]" :key="i"
                                                    class="flex-1 rounded-t transition-all"
                                                    :style="`height:${h}%`"
                                                    :class="i === 7 ? 'bg-[#16C64F]' : 'bg-[#16C64F]/20'">
                                                </div>
                                            </div>
                                            <div class="flex justify-between mt-1.5">
                                                <span v-for="m in ['Jan','Mar','Mai','Jul','Set','Nov']" :key="m" class="text-[6.5px] text-gray-300 font-medium">{{ m }}</span>
                                            </div>
                                        </div>

                                        <!-- Últimos lançamentos -->
                                        <div class="space-y-1">
                                            <p class="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Recentes</p>
                                            <div v-for="(tx) in [
                                                { bg:'bg-orange-100', icon:'🛒', name:'Supermercado Extra', cat:'Alimentação', value:'-R$ 284,50', color:'text-red-500' },
                                                { bg:'bg-green-100',  icon:'💰', name:'Salário',             cat:'Receita',     value:'+R$ 6.500,00', color:'text-[#16C64F]' },
                                                { bg:'bg-purple-100', icon:'🎬', name:'Netflix',             cat:'Assinatura',  value:'-R$ 44,90',   color:'text-red-500' },
                                            ]" :key="tx.name"
                                                class="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                                                <div class="flex items-center gap-2">
                                                    <div :class="tx.bg" class="w-6 h-6 rounded-lg flex items-center justify-center text-[10px]">{{ tx.icon }}</div>
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

                            <!-- Card flutuante — Meta mensal (canto inferior esquerdo) -->
                            <div class="absolute -bottom-5 -left-10 bg-white rounded-2xl p-3.5 w-44 z-20"
                                style="box-shadow: 0 16px 40px -8px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.05);">
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

                            <!-- Card flutuante — Open Finance (topo direito) -->
                            <div class="absolute -top-5 -right-8 bg-white rounded-2xl p-3 w-52 z-20"
                                style="box-shadow: 0 16px 40px -8px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05);">
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

                            <!-- Card flutuante — Transação em tempo real (lateral esquerda) -->
                            <div class="absolute top-1/2 -left-12 -translate-y-1/2 bg-white rounded-xl p-2.5 w-36 z-20 hidden lg:block"
                                style="box-shadow: 0 12px 32px -6px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);">
                                <div class="flex items-center gap-1.5 mb-1.5">
                                    <div class="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center text-[10px]">💰</div>
                                    <span class="text-[8px] font-bold text-gray-700">Salário recebido</span>
                                </div>
                                <p class="text-sm font-extrabold text-[#16C64F]">+R$ 6.500</p>
                                <p class="text-[7px] text-gray-400 mt-0.5">Hoje, 08:42</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── TRUSTED BY ───────────────── -->
        <section class="bg-white border-t border-gray-100 py-14">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <p class="text-center text-sm text-gray-400 mb-10 font-medium">
                    Integrado com os principais bancos e fintechs do Brasil
                </p>
                <div class="flex flex-wrap items-center justify-center gap-10 md:gap-16">
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
                        class="h-7 w-auto object-contain opacity-30 hover:opacity-70 transition-opacity duration-300 grayscale"
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
                <div class="text-center mb-16">
                    <span class="text-[#16C64F] text-sm font-semibold tracking-widest uppercase mb-3 block">Como funciona</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Comece em 3 passos simples
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <!-- Connecting line -->
                    <div class="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#16C64F]/40 via-[#16C64F] to-[#16C64F]/40"></div>

                    <div v-for="step in steps" :key="step.number" class="relative text-center">
                        <div class="w-16 h-16 rounded-2xl bg-[#16C64F] text-white text-xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#16C64F]/30">
                            {{ step.number }}
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ step.title }}</h3>
                        <p class="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── OPEN FINANCE HIGHLIGHT ───────────────── -->
        <section class="py-24 bg-[#0B1F12] overflow-hidden relative">
            <div class="absolute inset-0 opacity-[0.03]"
                style="background-image: radial-gradient(circle, #16C64F 1px, transparent 1px); background-size: 40px 40px;">
            </div>
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span class="text-[#16C64F] text-sm font-semibold tracking-widest uppercase mb-4 block">Open Finance</span>
                        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                            Seus bancos em um só painel, atualizados em tempo real.
                        </h2>
                        <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                            Conecte todas as suas contas e cartões via Open Finance, regulamentado pelo Banco Central do Brasil.
                            Seus lançamentos chegam automáticos e já categorizados.
                        </p>
                        <div class="space-y-4">
                            <div v-for="item in [
                                { icon: Lock, text: 'Conexão segura e regulamentada pelo Banco Central' },
                                { icon: RefreshCw, text: 'Sincronização automática de transações' },
                                { icon: Building2, text: 'Compatível com os principais bancos brasileiros' },
                            ]" :key="item.text" class="flex items-start gap-3">
                                <div class="w-8 h-8 rounded-lg bg-[#16C64F]/10 border border-[#16C64F]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <component :is="item.icon" class="w-4 h-4 text-[#16C64F]" />
                                </div>
                                <p class="text-gray-300 text-sm leading-relaxed">{{ item.text }}</p>
                            </div>
                        </div>
                        <a href="/auth/cadastro"
                            class="inline-flex items-center gap-2 mt-8 bg-[#16C64F] hover:bg-[#12a842] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                            Conectar meu banco
                            <ArrowRight class="w-4 h-4" />
                        </a>
                    </div>

                    <!-- Bank logos reais -->
                    <div class="grid grid-cols-3 gap-3">
                        <div v-for="bank in [
                            { img: '/images/fintechs/nubank.png',    name: 'Nubank' },
                            { img: '/images/fintechs/itau.png',      name: 'Itaú' },
                            { img: '/images/fintechs/bradesco.png',  name: 'Bradesco' },
                            { img: '/images/fintechs/santander.png', name: 'Santander' },
                            { img: '/images/fintechs/c6bank.png',    name: 'C6 Bank' },
                            { img: '/images/fintechs/bb.png',        name: 'Banco do Brasil' },
                            { img: '/images/fintechs/btgpactual.png',name: 'BTG Pactual' },
                            { img: '/images/fintechs/xp.png',        name: 'XP Inc.' },
                            { img: '/images/fintechs/picpay.png',    name: 'PicPay' },
                        ]" :key="bank.name"
                            class="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 aspect-square hover:bg-white/10 transition-colors group">
                            <img :src="bank.img" :alt="bank.name"
                                class="w-10 h-10 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity" />
                            <span class="text-[9px] text-gray-500 font-medium group-hover:text-gray-300 transition-colors">{{ bank.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── PRICING ───────────────── -->
        <section id="planos" class="py-24 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-[#16C64F] text-sm font-semibold tracking-widest uppercase mb-3 block">Planos</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Preço justo para cada momento de vida
                    </h2>
                    <p class="text-gray-500 text-lg">Comece grátis e evolua conforme sua necessidade.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div v-for="plan in plans" :key="plan.name"
                        :class="plan.highlight
                            ? 'bg-[#0B1F12] border-[#16C64F]/50 text-white scale-105 shadow-2xl shadow-[#16C64F]/10'
                            : 'bg-white border-gray-200 text-gray-900'"
                        class="relative border rounded-2xl p-8 flex flex-col">
                        <!-- Badge -->
                        <div v-if="plan.badge"
                            class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#16C64F] text-white text-xs font-bold px-3 py-1 rounded-full">
                            {{ plan.badge }}
                        </div>

                        <div class="mb-6">
                            <p :class="plan.highlight ? 'text-gray-400' : 'text-gray-500'" class="text-sm font-medium mb-1">
                                {{ plan.name }}
                            </p>
                            <div class="flex items-end gap-1 mb-2">
                                <span class="text-3xl font-bold">{{ plan.price }}</span>
                                <span :class="plan.highlight ? 'text-gray-400' : 'text-gray-400'" class="text-sm mb-1">
                                    {{ plan.period }}
                                </span>
                            </div>
                            <p :class="plan.highlight ? 'text-gray-400' : 'text-gray-500'" class="text-sm">
                                {{ plan.description }}
                            </p>
                        </div>

                        <ul class="space-y-3 mb-8 flex-1">
                            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2.5 text-sm">
                                <Check class="w-4 h-4 text-[#16C64F] mt-0.5 flex-shrink-0" />
                                <span :class="plan.highlight ? 'text-gray-300' : 'text-gray-600'">{{ feature }}</span>
                            </li>
                        </ul>

                        <a :href="plan.ctaRoute"
                            :class="plan.highlight
                                ? 'bg-[#16C64F] hover:bg-[#12a842] text-white shadow-lg shadow-[#16C64F]/20'
                                : 'bg-gray-900 hover:bg-gray-800 text-white'"
                            class="block text-center font-semibold py-3 rounded-xl transition-all text-sm">
                            {{ plan.cta }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── TESTIMONIALS ───────────────── -->
        <section class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-[#16C64F] text-sm font-semibold tracking-widest uppercase mb-3 block">Depoimentos</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
                        Quem usa, recomenda
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div v-for="testimonial in testimonials" :key="testimonial.name"
                        class="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                        <!-- Stars -->
                        <div class="flex gap-1 mb-4">
                            <Star v-for="i in testimonial.rating" :key="i" class="w-4 h-4 fill-[#16C64F] text-[#16C64F]" />
                        </div>
                        <p class="text-gray-700 text-sm leading-relaxed mb-6">"{{ testimonial.text }}"</p>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-[#16C64F] text-white text-xs font-bold flex items-center justify-center">
                                {{ testimonial.avatar }}
                            </div>
                            <div>
                                <p class="text-sm font-semibold text-gray-900">{{ testimonial.name }}</p>
                                <p class="text-xs text-gray-500">{{ testimonial.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── FAQ ───────────────── -->
        <section class="py-24 bg-gray-50">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-[#16C64F] text-sm font-semibold tracking-widest uppercase mb-3 block">FAQ</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Perguntas frequentes</h2>
                </div>

                <div class="space-y-3">
                    <div v-for="(faq, i) in faqs" :key="i"
                        class="bg-white border border-gray-100 rounded-xl overflow-hidden">
                        <button @click="toggleFaq(i)"
                            class="w-full flex items-center justify-between px-6 py-5 text-left">
                            <span class="font-medium text-gray-900 text-sm">{{ faq.question }}</span>
                            <ChevronDown class="w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ml-4"
                                :class="openFaq === i ? 'rotate-180' : ''" />
                        </button>
                        <div v-if="openFaq === i" class="px-6 pb-5">
                            <p class="text-gray-500 text-sm leading-relaxed">{{ faq.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ───────────────── CTA FINAL ───────────────── -->
        <section class="py-24 bg-[#0B1F12] relative overflow-hidden">
            <div class="absolute inset-0 opacity-[0.04]"
                style="background-image: linear-gradient(#16C64F 1px, transparent 1px), linear-gradient(90deg, #16C64F 1px, transparent 1px); background-size: 50px 50px;">
            </div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#16C64F]/15 rounded-full blur-[100px]"></div>
            <div class="relative max-w-4xl mx-auto px-4 text-center">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Comece hoje a construir<br />sua liberdade financeira.
                </h2>
                <p class="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                    Junte-se a mais de 150 mil brasileiros que já transformaram sua relação com o dinheiro.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="/auth/cadastro"
                        class="flex items-center gap-2 bg-[#16C64F] hover:bg-[#12a842] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl hover:shadow-[#16C64F]/30">
                        Criar conta grátis
                        <ArrowRight class="w-4 h-4" />
                    </a>
                    <p class="text-gray-500 text-sm">Sem cartão de crédito · Cancela quando quiser</p>
                </div>
            </div>
        </section>

        <!-- ───────────────── FOOTER ───────────────── -->
        <footer class="bg-[#060F09] text-gray-400">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
                    <!-- Brand -->
                    <div class="md:col-span-2">
                        <a href="/" class="flex items-center gap-2 mb-4">
                            <div class="w-8 h-8 bg-[#16C64F] rounded-lg flex items-center justify-center">
                                <BarChart3 class="w-5 h-5 text-white" />
                            </div>
                            <span class="text-lg font-bold text-white">Organizze</span>
                        </a>
                        <p class="text-sm leading-relaxed text-gray-500 max-w-xs">
                            O jeito mais simples de organizar suas finanças pessoais e empresariais no Brasil.
                        </p>
                        <!-- Social -->
                        <div class="flex gap-3 mt-6">
                            <a v-for="social in ['Instagram', 'Twitter', 'LinkedIn', 'YouTube']" :key="social"
                                href="#"
                                class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-gray-500 hover:text-gray-300 transition-colors text-xs font-medium">
                                {{ social[0] }}
                            </a>
                        </div>
                    </div>

                    <!-- Links -->
                    <div v-for="col in [
                        { title: 'Produto', links: ['Funcionalidades', 'Planos', 'Open Finance', 'Novidades'] },
                        { title: 'Empresa', links: ['Sobre', 'Blog', 'Carreiras', 'Imprensa'] },
                        { title: 'Suporte', links: ['Central de ajuda', 'Contato', 'Status', 'Privacidade'] },
                    ]" :key="col.title">
                        <p class="text-sm font-semibold text-white mb-4">{{ col.title }}</p>
                        <ul class="space-y-3">
                            <li v-for="link in col.links" :key="link">
                                <a href="#" class="text-sm text-gray-500 hover:text-gray-300 transition-colors footer-link">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p class="text-xs text-gray-600">
                        © {{ new Date().getFullYear() }} Organizze. Todos os direitos reservados.
                    </p>
                    <div class="flex gap-6">
                        <a href="#" class="text-xs text-gray-600 hover:text-gray-400 transition-colors">Termos de uso</a>
                        <a href="#" class="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacidade</a>
                        <a href="#" class="text-xs text-gray-600 hover:text-gray-400 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>
