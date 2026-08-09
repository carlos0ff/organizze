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
        <section class="relative pt-24 pb-0 overflow-hidden bg-[#0B1F12]">
            <!-- Grid decoration -->
            <div class="absolute inset-0 opacity-[0.03]"
                style="background-image: linear-gradient(#16C64F 1px, transparent 1px), linear-gradient(90deg, #16C64F 1px, transparent 1px); background-size: 60px 60px;">
            </div>
            <!-- Glow -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#16C64F]/20 rounded-full blur-[120px]"></div>

            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-20">
                <div class="inline-flex items-center gap-2 bg-[#16C64F]/10 border border-[#16C64F]/20 text-[#16C64F] text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
                    <Zap class="w-3.5 h-3.5" />
                    Novo: integração com Open Finance disponível
                </div>

                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                    Suas finanças,<br />
                    <span class="text-[#16C64F]">finalmente</span> sob controle.
                </h1>

                <p class="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
                    Controle receitas, despesas, cartões e investimentos em um só lugar.
                    Simples o suficiente para usar todo dia. Poderoso o suficiente para realmente mudar sua vida financeira.
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a href="/auth/cadastro"
                        class="flex items-center gap-2 bg-[#16C64F] hover:bg-[#12a842] text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-[#16C64F]/30">
                        Começar grátis agora
                        <ArrowRight class="w-4 h-4" />
                    </a>
                    <a href="#como-funciona"
                        class="flex items-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium px-7 py-3.5 rounded-xl text-base transition-all">
                        Ver como funciona
                    </a>
                </div>

                <!-- Dashboard mockup -->
                <div class="relative mx-auto max-w-5xl">
                    <div class="bg-[#0F2918] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                        <!-- Fake browser bar -->
                        <div class="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                            <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
                            <div class="flex-1 mx-4 bg-white/5 rounded-md h-6 flex items-center px-3">
                                <span class="text-xs text-gray-500">app.organizze.com.br/dashboard</span>
                            </div>
                        </div>

                        <!-- Dashboard content -->
                        <div class="p-6 grid grid-cols-12 gap-4">
                            <!-- Sidebar -->
                            <div class="col-span-2 hidden lg:flex flex-col gap-2">
                                <div v-for="i in 6" :key="i"
                                    :class="i === 1 ? 'bg-[#16C64F]/20 border border-[#16C64F]/30' : 'bg-white/5'"
                                    class="h-8 rounded-lg flex items-center px-3 gap-2">
                                    <div :class="i === 1 ? 'bg-[#16C64F]' : 'bg-white/20'"
                                        class="w-3.5 h-3.5 rounded-sm"></div>
                                    <div :class="i === 1 ? 'bg-[#16C64F]/40' : 'bg-white/10'"
                                        class="flex-1 h-2 rounded-full"></div>
                                </div>
                            </div>

                            <!-- Main content -->
                            <div class="col-span-12 lg:col-span-10 space-y-4">
                                <!-- Stats row -->
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <div v-for="(stat, i) in [
                                        { label: 'Saldo total', value: 'R$ 8.420', color: 'text-[#16C64F]' },
                                        { label: 'Receitas', value: 'R$ 12.500', color: 'text-blue-400' },
                                        { label: 'Despesas', value: 'R$ 4.080', color: 'text-red-400' },
                                        { label: 'Economias', value: 'R$ 2.100', color: 'text-purple-400' },
                                    ]" :key="i" class="bg-white/5 border border-white/5 rounded-xl p-3">
                                        <p class="text-xs text-gray-500 mb-1">{{ stat.label }}</p>
                                        <p :class="stat.color" class="text-base font-bold">{{ stat.value }}</p>
                                    </div>
                                </div>

                                <!-- Chart area -->
                                <div class="bg-white/5 border border-white/5 rounded-xl p-4 h-28 flex items-end gap-1.5">
                                    <div v-for="(h, i) in [30, 55, 40, 70, 45, 80, 60, 90, 50, 75, 85, 65]" :key="i"
                                        class="flex-1 rounded-t-sm transition-all"
                                        :style="`height: ${h}%`"
                                        :class="i === 11 ? 'bg-[#16C64F]' : 'bg-[#16C64F]/30'">
                                    </div>
                                </div>

                                <!-- Transactions -->
                                <div class="bg-white/5 border border-white/5 rounded-xl divide-y divide-white/5">
                                    <div v-for="(tx, i) in [
                                        { name: 'Supermercado Extra', cat: 'Alimentação', value: '-R$ 284,50', color: 'text-red-400' },
                                        { name: 'Salário', cat: 'Receita', value: '+R$ 6.500,00', color: 'text-[#16C64F]' },
                                        { name: 'Netflix', cat: 'Assinatura', value: '-R$ 44,90', color: 'text-red-400' },
                                    ]" :key="i" class="flex items-center justify-between px-4 py-2.5">
                                        <div class="flex items-center gap-3">
                                            <div class="w-7 h-7 rounded-lg bg-white/10"></div>
                                            <div>
                                                <p class="text-xs text-white font-medium">{{ tx.name }}</p>
                                                <p class="text-[11px] text-gray-500">{{ tx.cat }}</p>
                                            </div>
                                        </div>
                                        <span :class="tx.color" class="text-xs font-semibold">{{ tx.value }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Glow under mockup -->
                    <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-[#16C64F]/10 blur-3xl rounded-full"></div>
                </div>
            </div>
        </section>

        <!-- ───────────────── STATS ───────────────── -->
        <section class="bg-[#0B1F12] border-t border-white/5">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div v-for="stat in stats" :key="stat.label" class="text-center">
                        <p class="text-3xl font-bold text-white mb-1">{{ stat.value }}</p>
                        <p class="text-sm text-gray-500">{{ stat.label }}</p>
                    </div>
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

                    <!-- Bank logos simulation -->
                    <div class="grid grid-cols-3 gap-4">
                        <div v-for="(bank, i) in [
                            { name: 'Nubank', color: 'bg-purple-500/20 border-purple-500/30 text-purple-400' },
                            { name: 'Itaú', color: 'bg-orange-500/20 border-orange-500/30 text-orange-400' },
                            { name: 'Bradesco', color: 'bg-red-500/20 border-red-500/30 text-red-400' },
                            { name: 'Santander', color: 'bg-red-600/20 border-red-600/30 text-red-500' },
                            { name: 'C6 Bank', color: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' },
                            { name: 'Inter', color: 'bg-orange-600/20 border-orange-600/30 text-orange-500' },
                            { name: 'BTG', color: 'bg-blue-500/20 border-blue-500/30 text-blue-400' },
                            { name: 'XP Inc.', color: 'bg-gray-500/20 border-gray-500/30 text-gray-400' },
                            { name: 'PicPay', color: 'bg-green-500/20 border-green-500/30 text-green-400' },
                        ]" :key="i"
                            :class="bank.color"
                            class="border rounded-xl p-4 flex items-center justify-center text-xs font-semibold text-center aspect-square">
                            {{ bank.name }}
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
