<script setup lang="ts">
import { ref } from 'vue';
import {
    BarChart3, Shield, Zap, CreditCard, PieChart, Bell,
    ArrowRight, Check, CheckCircle, ChevronDown, Menu, X,
    TrendingUp, Wallet, Target, RefreshCw, Star,
    Building2, Smartphone, FileText, Lock, ShoppingCart, Film
} from 'lucide-vue-next';
import Navbar from "@/pages/Web/Components/Navigation/Navbar.vue";

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
        <section class="relative pt-20 pb-0 overflow-hidden bg-gray-50">

            <!-- Gradiente sutil no fundo -->
            <div class="absolute inset-0 pointer-events-none"
                style="background: radial-gradient(ellipse 80% 60% at 70% 40%, rgba(22,198,79,0.07) 0%, transparent 70%);">
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-16 lg:py-0">

                    <!-- ── Coluna esquerda: texto ── -->
                    <div class="flex flex-col justify-center">

                        <!-- Badge pill -->
                        <div class="inline-flex items-center gap-2 self-start mb-6 px-3.5 py-1.5 rounded-full border border-[#16C64F]/30 bg-white shadow-sm">
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
                                { icon: Shield,    text: 'SSL 256-bit' },
                                { icon: Building2, text: 'Open Finance BCB' },
                                { icon: Zap,       text: 'Sync automático' },
                            ]" :key="badge.text"
                                class="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                                <component :is="badge.icon" class="w-3.5 h-3.5 text-[#16C64F]" />
                                {{ badge.text }}
                            </div>
                        </div>
                    </div>

                    <!-- ── Coluna direita: mockup fiel ao /app ── -->
                    <div class="relative flex items-center justify-center lg:justify-end lg:h-[calc(100vh-80px)]">

                        <!-- Sombra de profundidade atrás do app -->
                        <div class="absolute inset-8 rounded-3xl pointer-events-none"
                            style="background: radial-gradient(ellipse at 60% 50%, rgba(22,198,79,0.10) 0%, transparent 70%); filter: blur(32px);"></div>

                        <!-- Wrapper 3D -->
                        <div class="relative z-10 w-full max-w-[580px]"
                            style="transform: perspective(1600px) rotateY(-9deg) rotateX(3deg); filter: drop-shadow(0 32px 56px rgba(0,0,0,0.16));">

                            <!-- ── App Shell (replica /app) ── -->
                            <div class="bg-[#f3f4f6] rounded-2xl overflow-hidden border border-gray-200/60">

                                <!-- Navbar verde idêntica ao app -->
                                <div class="bg-[#16C64F] px-4 py-2.5 flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                                            <div class="w-3 h-3 bg-[#16C64F] rounded-sm"></div>
                                        </div>
                                        <span class="text-white text-[11px] font-extrabold tracking-tight">organizze</span>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <span v-for="nav in ['Visão Geral','Lançamentos','Relatórios','Limite de Gastos']" :key="nav"
                                            class="text-white/85 text-[8px] font-semibold hidden sm:block">{{ nav }}</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                            <span class="text-[7px] text-white font-black">CS</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Conteúdo principal -->
                                <div class="p-3 space-y-2.5">

                                    <!-- Card de saudação + Receitas/Despesas/Saldo -->
                                    <div class="bg-white rounded-xl p-3.5 shadow-sm">
                                        <div class="flex items-center justify-between mb-3">
                                            <div>
                                                <p class="text-[7.5px] text-gray-400 font-semibold uppercase tracking-wider">BOA TARDE,</p>
                                                <p class="text-[13px] font-extrabold text-gray-900 leading-tight">Carlos Silva</p>
                                            </div>
                                            <div class="flex gap-1.5">
                                                <span class="text-[7px] font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-lg cursor-default">Lançamentos</span>
                                                <span class="text-[7px] font-semibold text-[#16C64F] bg-[#16C64F]/10 px-2 py-1 rounded-lg cursor-default">↗ Relatórios</span>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-3 gap-2 mb-3">
                                            <div class="bg-[#16C64F]/8 border border-[#16C64F]/15 rounded-xl p-2.5">
                                                <div class="flex items-center gap-1 mb-1">
                                                    <span class="text-[#16C64F] text-[9px] font-black">⊕</span>
                                                    <p class="text-[6.5px] text-gray-400 font-bold uppercase tracking-wide">RECEITAS</p>
                                                </div>
                                                <p class="text-[11px] font-extrabold text-[#16C64F]">R$ 5.500,00</p>
                                            </div>
                                            <div class="bg-red-50 border border-red-100 rounded-xl p-2.5">
                                                <div class="flex items-center gap-1 mb-1">
                                                    <span class="text-red-400 text-[9px] font-black">⊖</span>
                                                    <p class="text-[6.5px] text-gray-400 font-bold uppercase tracking-wide">DESPESAS</p>
                                                </div>
                                                <p class="text-[11px] font-extrabold text-red-500">R$ 2.470,80</p>
                                            </div>
                                            <div class="bg-gray-50 border border-gray-200 rounded-xl p-2.5">
                                                <div class="flex items-center gap-1 mb-1">
                                                    <span class="text-gray-400 text-[9px]">◎</span>
                                                    <p class="text-[6.5px] text-gray-400 font-bold uppercase tracking-wide">SALDO</p>
                                                </div>
                                                <p class="text-[11px] font-extrabold text-gray-900">R$ 3.029,20</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex items-center justify-between mb-1">
                                                <p class="text-[7px] text-gray-400">Despesas representam <b class="text-gray-600">45%</b> das receitas</p>
                                                <span class="text-[7px] font-bold text-[#16C64F]">Saudável</span>
                                            </div>
                                            <div class="h-1.5 bg-gray-100 rounded-full">
                                                <div class="h-1.5 bg-[#16C64F] rounded-full" style="width:45%"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Ações rápidas + Contas -->
                                    <div class="grid grid-cols-2 gap-2.5">

                                        <!-- Ações rápidas (Despesa/Receita/Transferência/Importar) -->
                                        <div class="bg-white rounded-xl p-3 shadow-sm">
                                            <div class="grid grid-cols-2 gap-2">
                                                <div v-for="action in [
                                                    { label:'DESPESA',    bg:'bg-red-50',    icon:'−', iconBg:'bg-red-100',    color:'text-red-500',    text:'text-red-600' },
                                                    { label:'RECEITA',    bg:'bg-green-50',  icon:'+', iconBg:'bg-[#16C64F]/15', color:'text-[#16C64F]', text:'text-[#16C64F]' },
                                                    { label:'TRANSFER.',  bg:'bg-blue-50',   icon:'⇄', iconBg:'bg-blue-100',   color:'text-blue-500',   text:'text-blue-600' },
                                                    { label:'IMPORTAR',   bg:'bg-purple-50', icon:'↓', iconBg:'bg-purple-100', color:'text-purple-500', text:'text-purple-600' },
                                                ]" :key="action.label"
                                                    :class="action.bg"
                                                    class="flex flex-col items-center gap-1.5 p-2 rounded-xl cursor-default">
                                                    <div :class="action.iconBg" class="w-8 h-8 rounded-xl flex items-center justify-center">
                                                        <span :class="action.color" class="font-black text-sm leading-none">{{ action.icon }}</span>
                                                    </div>
                                                    <span :class="action.text" class="text-[6.5px] font-black tracking-wide">{{ action.label }}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Minhas Contas -->
                                        <div class="bg-white rounded-xl p-3 shadow-sm">
                                            <div class="flex items-center justify-between mb-2">
                                                <p class="text-[8px] font-extrabold text-gray-800">Minhas Contas</p>
                                                <span class="text-[7px] text-[#16C64F] font-semibold cursor-default">Ver Todos ›</span>
                                            </div>
                                            <div class="space-y-2">
                                                <div v-for="acc in [
                                                    { abbr:'NU', bg:'bg-[#8B5CF6]', name:'Nubank',   sub:'Conta Corrente', val:'R$ 2.150,00' },
                                                    { abbr:'IT', bg:'bg-orange-500', name:'Itaú',     sub:'Conta Corrente', val:'R$ 1.890,20' },
                                                    { abbr:'C',  bg:'bg-[#16C64F]', name:'Carteira', sub:'Dinheiro',       val:'R$ 989,00' },
                                                ]" :key="acc.name" class="flex items-center gap-2">
                                                    <div :class="acc.bg" class="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <span class="text-white text-[6.5px] font-black">{{ acc.abbr }}</span>
                                                    </div>
                                                    <div class="flex-1 min-w-0">
                                                        <p class="text-[8px] font-semibold text-gray-800 leading-none truncate">{{ acc.name }}</p>
                                                        <p class="text-[6.5px] text-gray-400 mt-0.5">{{ acc.sub }}</p>
                                                    </div>
                                                    <span class="text-[7.5px] font-extrabold text-[#16C64F] flex-shrink-0">{{ acc.val }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Maiores Gastos (resumo do donut) -->
                                    <div class="bg-white rounded-xl p-3 shadow-sm">
                                        <div class="flex items-center justify-between mb-2">
                                            <p class="text-[8px] font-extrabold text-gray-800">Maiores Gastos <span class="text-gray-400 font-normal">— Resumo do mês</span></p>
                                            <span class="text-[7px] font-semibold text-[#16C64F] border border-[#16C64F]/30 px-2 py-0.5 rounded-full cursor-default">Relatório</span>
                                        </div>
                                        <div class="grid grid-cols-3 gap-2">
                                            <div v-for="cat in [
                                                { name:'Presentes', pct:'18,83%', color:'bg-purple-400', textColor:'text-purple-600' },
                                                { name:'Compras',   pct:'9,20%',  color:'bg-red-400',    textColor:'text-red-600' },
                                                { name:'Alimentação', pct:'6,18%', color:'bg-orange-400', textColor:'text-orange-600' },
                                            ]" :key="cat.name" class="space-y-1">
                                                <div class="flex items-center justify-between">
                                                    <span class="text-[7px] text-gray-600 font-semibold">{{ cat.name }}</span>
                                                    <span :class="cat.textColor" class="text-[7px] font-black">{{ cat.pct }}</span>
                                                </div>
                                                <div class="h-1 bg-gray-100 rounded-full">
                                                    <div :class="cat.color" class="h-1 rounded-full"
                                                        :style="`width:${parseFloat(cat.pct) * 4}%`"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <!-- Card flutuante — Transação recente -->
                        <div class="absolute top-1/3 -left-10 bg-white rounded-2xl p-3 w-40 z-20 hidden lg:block"
                            style="box-shadow: 0 16px 40px -8px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.05);">
                            <div class="flex items-center gap-2 mb-2">
                                <div class="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Wallet class="w-3.5 h-3.5 text-green-600" />
                                </div>
                                <span class="text-[8.5px] font-bold text-gray-800">Salário recebido</span>
                            </div>
                            <p class="text-[15px] font-extrabold text-[#16C64F]">+R$ 6.500</p>
                            <p class="text-[7px] text-gray-400 mt-0.5">Hoje, 08:42 · Conta Corrente</p>
                        </div>

                        <!-- Card flutuante — Nubank conectado -->
                        <div class="absolute bottom-16 -right-6 bg-white rounded-2xl p-3 w-48 z-20 hidden lg:block"
                            style="box-shadow: 0 16px 40px -8px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05);">
                            <div class="flex items-center gap-2 mb-2">
                                <div class="relative w-8 h-8 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center">
                                    <span class="text-sm font-black text-[#8B5CF6]">NU</span>
                                    <span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#16C64F] rounded-full border-2 border-white"></span>
                                </div>
                                <div>
                                    <p class="text-[8.5px] font-extrabold text-gray-900 leading-none">Nubank conectado</p>
                                    <p class="text-[7px] text-[#16C64F] font-semibold mt-0.5">● Open Finance ativo</p>
                                </div>
                            </div>
                            <div class="flex justify-between bg-gray-50 rounded-lg px-2 py-1.5">
                                <span class="text-[7px] text-gray-500">Último sync</span>
                                <span class="text-[7px] font-bold text-gray-700">há 2 min</span>
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
                    <div class="relative flex flex-col items-center">

                        <!-- Connector pill: Organizze ——✓—— openfinance -->
                        <div class="flex items-center gap-2 mb-6 self-start ml-8">
                            <div class="flex items-center gap-2 bg-white border-2 border-[#16C64F] rounded-full px-4 py-1.5 shadow-sm">
                                <div class="w-5 h-5 rounded-full bg-[#16C64F] flex items-center justify-center">
                                    <span class="text-white text-[9px] font-black">O</span>
                                </div>
                                <span class="text-gray-800 text-sm font-bold">organizze</span>
                            </div>
                            <div class="flex items-center">
                                <div class="flex items-center gap-1">
                                    <div class="w-4 h-[2px] bg-gray-300"></div>
                                    <div class="w-5 h-5 rounded-full bg-[#16C64F] border-2 border-white shadow flex items-center justify-center">
                                        <Check class="w-3 h-3 text-white" strokeWidth="3" />
                                    </div>
                                    <div class="w-4 h-[2px] bg-gray-300"></div>
                                </div>
                                <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
                                    <span class="text-gray-800 text-sm font-semibold"><span class="font-black">open</span>finance</span>
                                </div>
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
                                <div class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3 mb-2 hover:bg-gray-50 transition-colors cursor-default">
                                    <div class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <Building2 class="w-4 h-4 text-gray-500" />
                                    </div>
                                    <span class="text-sm font-medium text-gray-800 flex-1">Conta Corrente</span>
                                    <span class="text-[10px] font-bold text-[#16C64F] bg-[#E8FAF0] px-2.5 py-1 rounded-full">3 NOVAS</span>
                                </div>

                                <!-- Item: Cartão de Crédito -->
                                <div class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3 hover:bg-gray-50 transition-colors cursor-default">
                                    <div class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <CreditCard class="w-4 h-4 text-gray-500" />
                                    </div>
                                    <span class="text-sm font-medium text-gray-800 flex-1">Cartão de Crédito</span>
                                    <span class="text-[10px] font-bold text-[#16C64F] bg-[#E8FAF0] px-2.5 py-1 rounded-full">17 NOVAS</span>
                                </div>
                            </div>

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
        <footer style="background: #0C1B10;" class="text-gray-400">
            <!-- Main links -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
                    <!-- Brand -->
                    <div class="md:col-span-2">
                        <a href="/" class="flex items-center gap-2.5 mb-5">
                            <div class="w-9 h-9 bg-[#16C64F] rounded-xl flex items-center justify-center">
                                <BarChart3 class="w-5 h-5 text-white" />
                            </div>
                            <span class="text-xl font-bold text-white">Organizze</span>
                        </a>
                        <p class="text-sm leading-relaxed text-gray-500 max-w-xs mb-6">
                            O jeito mais simples e completo de organizar suas finanças pessoais no Brasil. Gratuito para começar.
                        </p>
                        <!-- Badges regulatório -->
                        <div class="flex flex-wrap gap-2 mb-6">
                            <span class="text-[10px] font-semibold text-[#16C64F] bg-[#16C64F]/10 border border-[#16C64F]/20 px-2.5 py-1 rounded-full">Open Finance BCB</span>
                            <span class="text-[10px] font-semibold text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">SSL 256-bit</span>
                            <span class="text-[10px] font-semibold text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">LGPD</span>
                        </div>
                        <!-- Sociais -->
                        <div class="flex gap-2">
                            <a v-for="s in [
                                { label: 'Instagram', letter: 'In' },
                                { label: 'Twitter / X', letter: 'X' },
                                { label: 'LinkedIn', letter: 'Li' },
                                { label: 'YouTube', letter: 'Yt' },
                            ]" :key="s.label" :title="s.label" href="#"
                                class="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#16C64F]/15 border border-white/8 hover:border-[#16C64F]/30 flex items-center justify-center text-gray-500 hover:text-[#16C64F] transition-all duration-200 text-xs font-bold">
                                {{ s.letter }}
                            </a>
                        </div>
                    </div>

                    <!-- Colunas de links -->
                    <div v-for="col in [
                        { title: 'Produto',  links: ['Funcionalidades', 'Planos', 'Open Finance', 'Novidades'] },
                        { title: 'Empresa',  links: ['Sobre nós', 'Blog', 'Carreiras', 'Imprensa'] },
                        { title: 'Suporte',  links: ['Central de ajuda', 'Fale conosco', 'Status', 'Privacidade'] },
                    ]" :key="col.title">
                        <p class="text-xs font-bold text-gray-300 uppercase tracking-widest mb-5">{{ col.title }}</p>
                        <ul class="space-y-3.5">
                            <li v-for="link in col.links" :key="link">
                                <a href="#" class="text-sm text-gray-500 hover:text-[#16C64F] transition-colors duration-150">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Bottom bar -->
            <div class="border-t border-white/[0.06]">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p class="text-xs text-gray-600">
                        © {{ new Date().getFullYear() }} Organizze. Todos os direitos reservados.
                    </p>
                    <div class="flex gap-5">
                        <a v-for="l in ['Termos de uso', 'Privacidade', 'Cookies']" :key="l"
                            href="#" class="text-xs text-gray-600 hover:text-gray-400 transition-colors">{{ l }}</a>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>
