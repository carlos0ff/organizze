<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import BlogNavbar from '@/pages/Blog/Components/Navigation/Navbar.vue';
import BlogFooter from '@/pages/Blog/Components/Layout/Footer.vue';
import { Search, Clock, Eye, ArrowRight, ChevronLeft, ChevronRight, Mail, TrendingUp } from 'lucide-vue-next';

// ── Dados mock ─────────────────────────────────────────────────────────────
const CATEGORIES = [
    { label: 'Todos',                 slug: '',                     active: true  },
    { label: 'Controle de Gastos',    slug: 'controle-de-gastos',   active: false },
    { label: 'Investimentos',         slug: 'investimentos',        active: false },
    { label: 'Orçamento',             slug: 'orcamento',            active: false },
    { label: 'MEI & Empreendedorismo',slug: 'mei',                  active: false },
    { label: 'Educação Financeira',   slug: 'educacao-financeira',  active: false },
    { label: 'Dívidas',               slug: 'dividas',              active: false },
    { label: 'Vida Doméstica',        slug: 'vida-domestica',       active: false },
];

const HERO_SLIDES = [
    {
        img: 'https://www.organizze.com.br/blog/wp-content/uploads/aplicativo-para-controle-financeiro.jpg',
        cat: 'Controle de Gastos',
        catSlug: 'controle-de-gastos',
        title: '12 melhores aplicativos para controle financeiro e organização de contas',
        excerpt: 'Controlar seus gastos não precisa ser complicado. Confira os 12 melhores apps para controle financeiro e tenha as finanças na palma da sua mão.',
        author: 'Anderson de Andrade',
        authorImg: 'https://i.pravatar.cc/40?img=15',
        date: '20 abr. 2026',
        readTime: 9,
        slug: 'aplicativo-para-controle-financeiro',
    },
    {
        img: 'https://images.unsplash.com/photo-1640249329895-c4d6fa71116c?w=900&q=80',
        cat: 'Investimentos',
        catSlug: 'investimentos',
        title: 'Como montar uma carteira de investimentos do zero em 2026',
        excerpt: 'Aprenda a diversificar seus investimentos, entender perfil de risco e dar os primeiros passos com segurança mesmo com pouco dinheiro.',
        author: 'Carlos Júnior',
        authorImg: 'https://i.pravatar.cc/40?img=12',
        date: '18 abr. 2026',
        readTime: 7,
        slug: 'como-montar-carteira-investimentos',
    },
    {
        img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=900&q=80',
        cat: 'Orçamento',
        catSlug: 'orcamento',
        title: 'Método 50-30-20: como dividir seu salário de forma inteligente',
        excerpt: 'A regra 50-30-20 é uma das estratégias mais simples e eficazes para quem quer equilibrar gastos essenciais, lazer e poupança.',
        author: 'Fernanda Alves',
        authorImg: 'https://i.pravatar.cc/40?img=22',
        date: '15 abr. 2026',
        readTime: 6,
        slug: 'metodo-50-30-20-dividir-salario',
    },
];

const FEATURED_ARTICLES = [
    {
        img: 'https://www.organizze.com.br/blog/wp-content/uploads/imposto-de-renda-mei-280x210.jpg',
        cat: 'MEI',
        title: 'Imposto de Renda MEI 2026: tudo o que você precisa saber',
        excerpt: 'Entenda quem precisa declarar, quais rendimentos entram no cálculo e quais são os prazos.',
        author: 'Anderson de Andrade',
        authorImg: 'https://i.pravatar.cc/40?img=15',
        date: '17 abr. 2026',
        readTime: 8,
        slug: 'imposto-de-renda-mei',
    },
    {
        img: 'https://www.organizze.com.br/blog/wp-content/uploads/como-montar-uma-carteira-de-investimentos-280x210.jpg',
        cat: 'Investimentos',
        title: 'Como montar uma carteira de investimentos pela primeira vez',
        excerpt: 'Aprenda a diversificar ativos e escolher opções alinhadas ao seu perfil e objetivos.',
        author: 'Marcos Lima',
        authorImg: 'https://i.pravatar.cc/40?img=32',
        date: '16 abr. 2026',
        readTime: 7,
        slug: 'como-montar-carteira-investimentos',
    },
];

const POPULAR = [
    {
        cat: 'Investimento',
        title: 'Veja qual é o melhor investimento hoje para iniciantes',
        excerpt: 'Conheça as opções de investimento mais indicadas para quem está começando.',
        date: '14 abr. 2026',
        views: 4820,
        slug: 'melhor-investimento-para-iniciantes',
    },
    {
        cat: 'Vida Doméstica',
        title: 'Lista de compra do mês: o que não esquecer e como economizar',
        excerpt: 'Aprenda a montar uma lista eficiente e evitar gastos desnecessários no supermercado.',
        date: '12 abr. 2026',
        views: 3710,
        slug: 'lista-de-compras-do-mes',
    },
    {
        cat: 'Investimento',
        title: 'Qual banco digital rende mais? Veja as principais opções',
        excerpt: 'Compare os principais bancos digitais e descubra qual oferece mais vantagens.',
        date: '10 abr. 2026',
        views: 3105,
        slug: 'qual-banco-digital-rende-mais',
    },
    {
        cat: 'Poupança',
        title: 'Rendimento da poupança: entenda quanto você realmente ganha',
        excerpt: 'Saiba como funciona o rendimento da poupança e se ainda vale a pena em 2026.',
        date: '8 abr. 2026',
        views: 2890,
        slug: 'rendimento-da-poupanca',
    },
];

const MORE_ARTICLES = [
    { img: 'https://images.unsplash.com/photo-1640249329895-c4d6fa71116c?w=600&q=80',  cat: 'Controle de Gastos',  title: 'Como controlar seus gastos sem abrir mão do que importa',        readTime: 7,  date: '22 abr. 2026', author: 'Carlos Júnior',  authorImg: 'https://i.pravatar.cc/40?img=12', slug: 'controlar-gastos-sem-abrir-mao' },
    { img: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=600&q=80',  cat: 'Organização',        title: 'Como organizar suas finanças em menos de 30 minutos',             readTime: 5,  date: '21 abr. 2026', author: 'Marcos Lima',    authorImg: 'https://i.pravatar.cc/40?img=32', slug: 'organizar-financas-30-minutos' },
    { img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',  cat: 'Investimentos',      title: 'Investir com pouco dinheiro: mito ou realidade?',                 readTime: 7,  date: '19 abr. 2026', author: 'Fernanda Alves', authorImg: 'https://i.pravatar.cc/40?img=22', slug: 'investir-com-pouco-dinheiro' },
    { img: 'https://plus.unsplash.com/premium_photo-1678374803603-be234f694675?w=600&q=80', cat: 'Educação Financeira', title: 'Educação financeira: o que ninguém te ensinou na escola',     readTime: 7,  date: '17 abr. 2026', author: 'Juliana Costa',  authorImg: 'https://i.pravatar.cc/40?img=18', slug: 'educacao-financeira-o-que-ninguem-ensinou' },
    { img: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=600&q=80',  cat: 'Controle Financeiro', title: 'Como fazer controle financeiro sem planilha complicada',          readTime: 6,  date: '16 abr. 2026', author: 'Juliana Costa',  authorImg: 'https://i.pravatar.cc/40?img=19', slug: 'controle-financeiro-sem-planilha' },
    { img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80',     cat: 'Metas',              title: 'Como definir metas financeiras alcançáveis em 2026',              readTime: 7,  date: '14 abr. 2026', author: 'Rafael Nunes',   authorImg: 'https://i.pravatar.cc/40?img=28', slug: 'metas-financeiras-alcancaveis' },
    { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',  cat: 'Tecnologia',         title: 'Apps de finanças: como escolher o ideal para você',               readTime: 7,  date: '13 abr. 2026', author: 'Daniel Freitas', authorImg: 'https://i.pravatar.cc/40?img=41', slug: 'apps-de-financas-como-escolher' },
    { img: 'https://plus.unsplash.com/premium_photo-1678139621007-ee1a1e9affa9?w=600&q=80', cat: 'Dívidas',          title: 'Estratégias práticas para sair das dívidas em 2026',            readTime: 7,  date: '11 abr. 2026', author: 'Daniel Freitas', authorImg: 'https://i.pravatar.cc/40?img=41', slug: 'estrategias-para-sair-das-dividas' },
    { img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600&q=80',  cat: 'Orçamento',          title: 'Como montar um orçamento que realmente funciona',                 readTime: 7,  date: '10 abr. 2026', author: 'Daniel Freitas', authorImg: 'https://i.pravatar.cc/40?img=41', slug: 'como-montar-orcamento-que-funciona' },
];

const CATEGORY_CARDS = [
    { img: 'https://www.organizze.com.br/blog/wp-content/uploads/MEI-280x210-1.jpg',                        label: 'MEI & Empreendedorismo', sub: 'Obrigações, impostos e dicas' },
    { img: 'https://www.organizze.com.br/blog/wp-content/uploads/Investimento-280x210-1.jpg',               label: 'Investimentos',           sub: 'Renda fixa e variável' },
    { img: 'https://www.organizze.com.br/blog/wp-content/uploads/Direitos-do-consumidor-280x210-1.jpg',     label: 'Orçamento',               sub: 'Controle financeiro' },
    { img: 'https://www.organizze.com.br/blog/wp-content/uploads/D%C2%A1vidas-280x210-1.jpg',              label: 'Dívidas',                 sub: 'Sair do vermelho' },
];

// ── State ──────────────────────────────────────────────────────────────────
const slide = ref(0);
const activeCategory = ref('');
const email = ref('');
const emailSent = ref(false);
const page = ref(1);
const PER_PAGE = 6;

const totalPages = computed(() => Math.ceil(MORE_ARTICLES.length / PER_PAGE));
const visibleArticles = computed(() => MORE_ARTICLES.slice(0, page.value * PER_PAGE));

function prevSlide() { slide.value = (slide.value - 1 + HERO_SLIDES.length) % HERO_SLIDES.length; }
function nextSlide() { slide.value = (slide.value + 1) % HERO_SLIDES.length; }

function submitNewsletter() {
    if (!email.value) return;
    emailSent.value = true;
    email.value = '';
}
</script>

<template>
    <BlogNavbar />

    <main class="flex-1 pt-14 lg:pt-16">

        <!-- ── HERO SLIDER ─────────────────────────────────────────────────────── -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
            <div class="relative overflow-hidden rounded-2xl shadow-lg bg-gray-900 h-[360px] md:h-[440px]">
                <!-- Slide image -->
                <transition name="fade" mode="out-in">
                    <img :key="slide"
                        :src="HERO_SLIDES[slide].img"
                        :alt="HERO_SLIDES[slide].title"
                        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" />
                </transition>

                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <!-- Content -->
                <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <RouterLink :to="`/blog/post/${HERO_SLIDES[slide].slug}`"
                        class="inline-block bg-[#22c75e] text-white text-[11px] font-bold px-3 py-1 rounded-full mb-3 hover:bg-emerald-500 transition">
                        {{ HERO_SLIDES[slide].cat }}
                    </RouterLink>

                    <h1 class="text-xl md:text-3xl font-bold leading-snug mb-3 max-w-2xl">
                        <RouterLink :to="`/blog/post/${HERO_SLIDES[slide].slug}`" class="hover:underline">
                            {{ HERO_SLIDES[slide].title }}
                        </RouterLink>
                    </h1>

                    <p class="text-gray-200 text-sm leading-relaxed mb-4 max-w-xl line-clamp-2 hidden md:block">
                        {{ HERO_SLIDES[slide].excerpt }}
                    </p>

                    <div class="flex items-center gap-4 text-sm text-gray-300">
                        <img :src="HERO_SLIDES[slide].authorImg" class="w-7 h-7 rounded-full" />
                        <span>{{ HERO_SLIDES[slide].author }}</span>
                        <span>• {{ HERO_SLIDES[slide].date }}</span>
                        <span class="flex items-center gap-1"><Clock class="w-3.5 h-3.5" /> {{ HERO_SLIDES[slide].readTime }} min</span>
                    </div>
                </div>

                <!-- Arrows -->
                <button @click="prevSlide"
                    class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition">
                    <ChevronLeft class="w-5 h-5" />
                </button>
                <button @click="nextSlide"
                    class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition">
                    <ChevronRight class="w-5 h-5" />
                </button>

                <!-- Dots -->
                <div class="absolute bottom-4 right-6 flex gap-1.5">
                    <button v-for="(_, i) in HERO_SLIDES" :key="i" @click="slide = i"
                        :class="i === slide ? 'bg-[#22c75e] w-5' : 'bg-white/40 w-2'"
                        class="h-2 rounded-full transition-all duration-300" />
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- ── CATEGORIAS PILLS ──────────────────────────────────────────────── -->
            <section class="pb-8">
                <div class="flex items-center gap-2 flex-wrap">
                    <button v-for="cat in CATEGORIES" :key="cat.slug"
                        @click="activeCategory = cat.slug"
                        :class="activeCategory === cat.slug
                            ? 'bg-[#22c75e] text-white border-[#22c75e]'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-[#22c75e] hover:text-[#22c75e]'"
                        class="px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors whitespace-nowrap">
                        {{ cat.label }}
                    </button>
                </div>
            </section>

            <!-- ── TEMAS / CATEGORIAS ────────────────────────────────────────────── -->
            <section class="pb-12">
                <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">Temas</h2>
                        <p class="text-sm text-gray-500 mt-1">Explore os assuntos mais relevantes para suas finanças.</p>
                    </div>
                    <a href="#mais-artigos" class="text-sm font-semibold text-[#22c75e] hover:underline flex items-center gap-1">
                        Ver todos os temas <ArrowRight class="w-4 h-4" />
                    </a>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <a v-for="cat in CATEGORY_CARDS" :key="cat.label" href="#"
                        class="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <img :src="cat.img" :alt="cat.label" class="w-full h-44 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <span class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></span>
                        <div class="absolute bottom-0 p-4">
                            <h3 class="text-white font-bold text-sm leading-tight">{{ cat.label }}</h3>
                            <p class="text-white/70 text-[11px] mt-0.5">{{ cat.sub }}</p>
                        </div>
                    </a>
                </div>
            </section>

            <!-- ── DESTAQUE + SIDEBAR ────────────────────────────────────────────── -->
            <section class="pb-12">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    <!-- Main destaque -->
                    <div class="lg:col-span-8 space-y-6">
                        <!-- Post grande -->
                        <article class="relative group overflow-hidden rounded-2xl shadow-md bg-gray-900">
                            <RouterLink :to="`/blog/post/${HERO_SLIDES[0].slug}`">
                                <img :src="HERO_SLIDES[0].img" :alt="HERO_SLIDES[0].title"
                                    class="w-full h-80 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                            </RouterLink>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                                <RouterLink :to="`/blog/post/${HERO_SLIDES[0].slug}`"
                                    class="inline-block bg-[#22c75e] text-white text-[11px] font-bold px-3 py-1 rounded-full mb-3 w-fit hover:bg-emerald-500 transition">
                                    {{ HERO_SLIDES[0].cat }}
                                </RouterLink>
                                <h2 class="text-2xl lg:text-3xl font-bold leading-tight mb-3">
                                    <RouterLink :to="`/blog/post/${HERO_SLIDES[0].slug}`" class="hover:underline">
                                        {{ HERO_SLIDES[0].title }}
                                    </RouterLink>
                                </h2>
                                <p class="text-gray-200 text-sm mb-4 line-clamp-2 hidden md:block">{{ HERO_SLIDES[0].excerpt }}</p>
                                <div class="flex items-center justify-between text-sm text-gray-300">
                                    <div class="flex items-center gap-3">
                                        <img :src="HERO_SLIDES[0].authorImg" class="w-6 h-6 rounded-full" />
                                        <span>{{ HERO_SLIDES[0].author }}</span>
                                        <span>• {{ HERO_SLIDES[0].readTime }} min de leitura</span>
                                    </div>
                                    <RouterLink :to="`/blog/post/${HERO_SLIDES[0].slug}`"
                                        class="flex items-center gap-1 font-semibold hover:text-[#22c75e] transition">
                                        Leia mais <ArrowRight class="w-4 h-4" />
                                    </RouterLink>
                                </div>
                            </div>
                        </article>

                        <!-- 2 posts secundários -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <article v-for="art in FEATURED_ARTICLES" :key="art.slug" class="flex gap-4 group">
                                <RouterLink :to="`/blog/post/${art.slug}`" class="shrink-0">
                                    <img :src="art.img" :alt="art.title"
                                        class="w-28 h-20 object-cover rounded-xl group-hover:opacity-90 transition" loading="lazy" />
                                </RouterLink>
                                <div class="flex-1 min-w-0">
                                    <RouterLink :to="`/blog/post/${art.slug}`"
                                        class="inline-block bg-[#22c75e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5 hover:bg-emerald-600 transition">
                                        {{ art.cat }}
                                    </RouterLink>
                                    <h4 class="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                                        <RouterLink :to="`/blog/post/${art.slug}`" class="hover:text-[#22c75e] transition">
                                            {{ art.title }}
                                        </RouterLink>
                                    </h4>
                                    <div class="flex items-center gap-2 text-[11px] text-gray-400 mt-1.5">
                                        <img :src="art.authorImg" class="w-4 h-4 rounded-full" />
                                        <span>{{ art.author }}</span>
                                        <span>•</span>
                                        <span class="flex items-center gap-0.5"><Clock class="w-3 h-3" /> {{ art.readTime }} min</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <!-- Sidebar -->
                    <aside class="lg:col-span-4">
                        <div class="bg-gray-50 rounded-2xl p-5 sticky top-20 space-y-5">
                            <!-- Search -->
                            <div class="relative">
                                <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input type="text" placeholder="Buscar artigos..."
                                    class="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#22c75e]/30 focus:border-[#22c75e] transition" />
                            </div>

                            <!-- Mais lidos -->
                            <div>
                                <div class="flex items-center gap-2 mb-4 border-b border-gray-200 pb-2">
                                    <TrendingUp class="w-4 h-4 text-[#22c75e]" />
                                    <h3 class="text-base font-bold text-gray-900">Mais lidos</h3>
                                </div>

                                <div class="space-y-5">
                                    <article v-for="(art, i) in POPULAR" :key="art.slug"
                                        class="flex gap-3 group border-b border-gray-200/70 pb-4 last:border-0 last:pb-0">
                                        <span class="text-2xl font-black text-gray-100 leading-none w-7 shrink-0 select-none">
                                            {{ String(i + 1).padStart(2, '0') }}
                                        </span>
                                        <div class="min-w-0">
                                            <RouterLink :to="`/blog/post/${art.slug}`"
                                                class="inline-block bg-[#22c75e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 hover:bg-emerald-600 transition">
                                                {{ art.cat }}
                                            </RouterLink>
                                            <h4 class="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                                                <RouterLink :to="`/blog/post/${art.slug}`" class="hover:text-[#22c75e] transition">
                                                    {{ art.title }}
                                                </RouterLink>
                                            </h4>
                                            <div class="flex items-center gap-2 text-[10px] text-gray-400 mt-1">
                                                <Eye class="w-3 h-3" />
                                                <span>{{ art.views.toLocaleString('pt-BR') }} leituras</span>
                                                <span>• {{ art.date }}</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </section>

            <!-- ── MAIS ARTIGOS ──────────────────────────────────────────────────── -->
            <section id="mais-artigos" class="pb-12">
                <div class="flex items-end justify-between mb-6">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">Mais artigos</h2>
                        <p class="text-sm text-gray-500 mt-1">Conteúdos recentes para ajudar nas suas finanças.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article v-for="art in visibleArticles" :key="art.slug"
                        class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div class="relative h-48 overflow-hidden">
                            <img :src="art.img" :alt="art.title"
                                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                            <span class="absolute bottom-3 left-3 bg-[#1a7a42] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                                {{ art.cat }}
                            </span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-base font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#22c75e] transition-colors line-clamp-2">
                                <RouterLink :to="`/blog/post/${art.slug}`">{{ art.title }}</RouterLink>
                            </h3>
                            <div class="flex items-center gap-3 mt-auto pt-3 border-t border-gray-50 text-[11px] text-gray-400">
                                <img :src="art.authorImg" class="w-5 h-5 rounded-full" />
                                <span class="font-medium text-gray-600">{{ art.author }}</span>
                                <span class="flex items-center gap-1 ml-auto">
                                    <Clock class="w-3 h-3" /> {{ art.readTime }} min
                                </span>
                                <span>• {{ art.date }}</span>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- Load more -->
                <div class="mt-10 flex justify-center">
                    <button v-if="page < totalPages" @click="page++"
                        class="px-8 py-3 rounded-xl border-2 border-[#22c75e] text-[#22c75e] font-bold text-sm hover:bg-[#22c75e] hover:text-white transition-colors duration-200">
                        Carregar mais artigos
                    </button>
                    <p v-else class="text-sm text-gray-400">Você chegou ao fim — todos os artigos foram carregados.</p>
                </div>
            </section>

            <!-- ── NEWSLETTER ────────────────────────────────────────────────────── -->
            <section class="mb-12">
                <div class="bg-gradient-to-br from-[#22c75e] to-[#117641] rounded-2xl p-8 md:p-12 text-white text-center">
                    <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Mail class="w-6 h-6" />
                    </div>
                    <h2 class="text-2xl font-bold mb-2">Receba dicas financeiras toda semana</h2>
                    <p class="text-white/80 text-sm mb-6 max-w-md mx-auto">
                        Assine nossa newsletter e receba conteúdos exclusivos sobre finanças pessoais diretamente no seu e-mail.
                    </p>

                    <div v-if="!emailSent" class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
                        <input v-model="email" type="email" placeholder="Seu melhor e-mail"
                            class="w-full sm:flex-1 px-4 py-3 rounded-xl text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-gray-400" />
                        <button @click="submitNewsletter"
                            class="w-full sm:w-auto px-6 py-3 bg-white text-[#117641] font-bold text-sm rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap">
                            Assinar grátis
                        </button>
                    </div>
                    <div v-else class="flex items-center justify-center gap-2 text-white font-semibold">
                        <span class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</span>
                        Inscrição realizada com sucesso!
                    </div>

                    <p class="text-white/50 text-[11px] mt-4">Sem spam. Cancele quando quiser.</p>
                </div>
            </section>

        </div><!-- /max-w -->

        <BlogFooter />
    </main>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
