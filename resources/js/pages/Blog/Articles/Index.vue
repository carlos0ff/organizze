<script setup>
import { ref, computed } from 'vue';
import { Search, Clock, X, ChevronLeft, ChevronRight, BookOpen, TrendingUp } from 'lucide-vue-next';

const ALL_POSTS = [
    { slug: 'apps-de-financas',         img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=75', cat: 'Tecnologia',           title: 'Apps de finanças: como escolher o ideal',                         excerpt: 'Aprenda os critérios essenciais para escolher um app financeiro eficiente para o seu dia a dia.',                readTime: 7,  date: '05/01/2026', author: 'Carlos Júnior', authorImg: 'https://i.pravatar.cc/40?img=12' },
    { slug: 'orcamento-que-funciona',    img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=800&q=75', cat: 'Orçamento',            title: 'Como montar um orçamento que realmente funciona',                  excerpt: 'Esqueça planilhas complexas e aprenda um método realista para controlar seu orçamento.',                         readTime: 6,  date: '10/01/2026', author: 'Carlos Júnior', authorImg: 'https://i.pravatar.cc/40?img=12' },
    { slug: 'financas-30-minutos',       img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=75',   cat: 'Organização',          title: 'Como organizar suas finanças em menos de 30 minutos',             excerpt: 'Um método simples para sair da bagunça financeira e ganhar clareza sobre seu dinheiro.',                        readTime: 5,  date: '15/01/2026', author: 'Ana Souza',     authorImg: 'https://i.pravatar.cc/40?img=5'  },
    { slug: 'sair-das-dividas',          img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=75',   cat: 'Dívidas',              title: 'Estratégias práticas para sair das dívidas',                      excerpt: 'Técnicas simples para renegociar dívidas e retomar o controle da sua vida financeira.',                         readTime: 8,  date: '20/01/2026', author: 'Pedro Lima',    authorImg: 'https://i.pravatar.cc/40?img=8'  },
    { slug: 'mei-financas',              img: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=800&q=75', cat: 'Empreendedorismo',    title: 'MEI: como organizar suas finanças',                               excerpt: 'Dicas essenciais para manter o controle financeiro sendo MEI.',                                                  readTime: 6,  date: '25/01/2026', author: 'Carlos Júnior', authorImg: 'https://i.pravatar.cc/40?img=12' },
    { slug: 'educacao-financeira',       img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=75', cat: 'Educação Financeira', title: 'Educação financeira para iniciantes',                             excerpt: 'Conceitos básicos para transformar sua vida financeira de uma vez por todas.',                                  readTime: 7,  date: '01/02/2026', author: 'Ana Souza',     authorImg: 'https://i.pravatar.cc/40?img=5'  },
    { slug: 'metodo-50-30-20',           img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=75',   cat: 'Orçamento',            title: 'Método 50-30-20: o orçamento que cabe no bolso',                 excerpt: 'Aprenda a dividir sua renda em necessidades, desejos e investimentos de forma simples.',                        readTime: 9,  date: '08/02/2026', author: 'Pedro Lima',    authorImg: 'https://i.pravatar.cc/40?img=8'  },
    { slug: 'cartao-sem-divida',         img: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=75',   cat: 'Cartão de Crédito',   title: 'Como usar cartão sem se endividar',                               excerpt: 'Evite armadilhas e use seu cartão de crédito com inteligência, mantendo o controle dos gastos.',                readTime: 5,  date: '14/02/2026', author: 'Carlos Júnior', authorImg: 'https://i.pravatar.cc/40?img=12' },
    { slug: 'controle-sem-planilha',     img: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=800&q=75', cat: 'Controle Financeiro', title: 'Como fazer controle financeiro sem planilha complicada',          excerpt: 'Métodos simples e rápidos que realmente funcionam para quem odeia planilhas.',                                  readTime: 6,  date: '20/02/2026', author: 'Ana Souza',     authorImg: 'https://i.pravatar.cc/40?img=5'  },
    { slug: 'reserva-emergencia',        img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=75', cat: 'Investimentos',        title: 'Reserva de emergência: por onde começar',                         excerpt: 'Descubra o valor ideal para sua reserva e onde investir com segurança e liquidez.',                             readTime: 5,  date: '01/03/2026', author: 'Pedro Lima',    authorImg: 'https://i.pravatar.cc/40?img=8'  },
    { slug: 'metas-financeiras',         img: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=75', cat: 'Planejamento',         title: 'Como definir e atingir metas financeiras em 2026',               excerpt: 'Um guia prático para transformar seus objetivos financeiros em resultados reais.',                               readTime: 8,  date: '10/03/2026', author: 'Carlos Júnior', authorImg: 'https://i.pravatar.cc/40?img=12' },
    { slug: 'gastos-fixos-variaveis',    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=75', cat: 'Organização',          title: 'Gastos fixos vs. variáveis: entenda a diferença',                 excerpt: 'Saber classificar seus gastos é o primeiro passo para um orçamento eficiente.',                                 readTime: 4,  date: '18/03/2026', author: 'Ana Souza',     authorImg: 'https://i.pravatar.cc/40?img=5'  },
    { slug: 'gastos-diarios',            img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=75', cat: 'Controle Financeiro', title: 'Gastos diários: como mapear, reduzir e controlar sem sofrimento', excerpt: 'Manter as finanças pessoais organizadas não precisa ser complicado. Aprenda estratégias simples.',              readTime: 7,  date: '23/03/2026', author: 'Pedro Lima',    authorImg: 'https://i.pravatar.cc/40?img=8'  },
    { slug: 'independencia-financeira',  img: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=75', cat: 'Investimentos',        title: 'Independência financeira: como planejar sua aposentadoria',       excerpt: 'Estratégias para construir patrimônio e garantir tranquilidade financeira no futuro.',                          readTime: 10, date: '01/04/2026', author: 'Carlos Júnior', authorImg: 'https://i.pravatar.cc/40?img=12' },
    { slug: 'renda-extra',               img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=75', cat: 'Empreendedorismo',    title: 'Como gerar renda extra sem abrir mão do emprego',                 excerpt: 'Ideias práticas para aumentar sua renda mensal e acelerar seus objetivos financeiros.',                         readTime: 6,  date: '10/04/2026', author: 'Ana Souza',     authorImg: 'https://i.pravatar.cc/40?img=5'  },
];

const CATEGORIES = ['Todas', ...new Set(ALL_POSTS.map(p => p.cat))];

const catCount = (cat) => cat === 'Todas' ? ALL_POSTS.length : ALL_POSTS.filter(p => p.cat === cat).length;

const search      = ref('');
const activecat   = ref('Todas');
const currentPage = ref(1);
const PER_PAGE    = 9;

const searchOpen  = ref(false);
const searchQuery = ref('');

const filtered = computed(() => {
    let posts = ALL_POSTS;
    if (activecat.value !== 'Todas')
        posts = posts.filter(p => p.cat === activecat.value);
    if (search.value.trim())
        posts = posts.filter(p =>
            p.title.toLowerCase().includes(search.value.toLowerCase()) ||
            p.excerpt.toLowerCase().includes(search.value.toLowerCase())
        );
    return posts;
});

const totalPages  = computed(() => Math.ceil(filtered.value.length / PER_PAGE));
const paginated   = computed(() => filtered.value.slice((currentPage.value - 1) * PER_PAGE, currentPage.value * PER_PAGE));
const visiblePages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1));

const setPage = (p) => {
    if (p < 1 || p > totalPages.value) return;
    currentPage.value = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const selectCat = (cat) => {
    activecat.value   = cat;
    currentPage.value = 1;
};

const clearFilters = () => {
    search.value      = '';
    activecat.value   = 'Todas';
    currentPage.value = 1;
};
</script>

<template>
    <!-- ── Navbar (idêntica ao Blog/Index.vue) ── -->
    <nav class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center shrink-0">
                    <a href="/blog" class="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                            alt="Organizze" class="h-8 w-auto" />
                        <span class="hidden text-sm font-medium text-gray-600 sm:inline">Blog</span>
                    </a>
                </div>

                <!-- Links -->
                <div class="hidden md:flex items-center justify-center space-x-8 flex-1">
                    <a href="/blog"
                        class="capitalize relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </a>
                    <a href="/blog#categorias"
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Categorias
                    </a>
                    <a href="/blog/artigos"
                        class="capitalize relative text-sm font-semibold text-[#22c75e] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#22c75e]">
                        Artigos
                    </a>
                    <a href="/blog#mais-lido"
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Mais lido
                    </a>
                </div>

                <div class="flex items-center gap-3">
                    <!-- Busca -->
                    <div class="hidden md:flex items-center relative">
                        <button @click="searchOpen = !searchOpen"
                            class="p-2 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        <div v-if="searchOpen" class="absolute top-14 right-0 w-80 z-50">
                            <div class="bg-white rounded-xl shadow-xl border border-gray-200 p-4">
                                <div class="relative">
                                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input v-model="searchQuery" autofocus type="text" placeholder="Buscar artigos..."
                                        @keyup.escape="searchOpen = false"
                                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16C64F]/30 focus:border-[#16C64F]" />
                                </div>
                                <div class="mt-4 text-sm">
                                    <p class="text-gray-500 font-medium mb-2">Buscas recentes:</p>
                                    <div class="space-y-1">
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition">Como organizar finanças</a>
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition">Reserva de emergência</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA -->
                    <a href="/auth/cadastro" class="relative overflow-hidden px-6 py-2 rounded-md font-medium text-white bg-[#117641] group">
                        <span class="absolute inset-0 bg-[#006A33] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        <span class="relative z-10">Conheça o organizze</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <main class="bg-gray-50 min-h-screen">

        <!-- ── Hero ── -->
        <section class="bg-white border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <div class="flex items-center gap-2 mb-3">
                            <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22c75e] bg-[#22c75e]/10 px-3 py-1 rounded-full">
                                <BookOpen class="w-3.5 h-3.5" /> Biblioteca de artigos
                            </span>
                        </div>
                        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
                            Todos os artigos
                        </h1>
                        <p class="text-gray-500 text-base leading-relaxed max-w-xl">
                            Conteúdos práticos sobre finanças pessoais, investimentos, orçamento e muito mais para transformar sua relação com o dinheiro.
                        </p>
                    </div>

                    <!-- Stats -->
                    <div class="flex items-center gap-6 shrink-0">
                        <div class="text-center">
                            <p class="text-2xl font-bold text-gray-900">{{ ALL_POSTS.length }}</p>
                            <p class="text-xs text-gray-400 mt-0.5">Artigos</p>
                        </div>
                        <div class="w-px h-10 bg-gray-200"></div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-gray-900">{{ CATEGORIES.length - 1 }}</p>
                            <p class="text-xs text-gray-400 mt-0.5">Categorias</p>
                        </div>
                        <div class="w-px h-10 bg-gray-200"></div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-gray-900">~{{ Math.round(ALL_POSTS.reduce((s, p) => s + p.readTime, 0) / ALL_POSTS.length) }}</p>
                            <p class="text-xs text-gray-400 mt-0.5">min médio</p>
                        </div>
                    </div>
                </div>

                <!-- Busca inline -->
                <div class="mt-8 relative max-w-lg">
                    <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input v-model="search" type="text" placeholder="Pesquisar artigos por título ou conteúdo..."
                        class="w-full pl-11 pr-10 py-3 text-sm border border-gray-200 rounded-2xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#22c75e]/30 focus:border-[#22c75e] focus:bg-white transition shadow-sm" />
                    <button v-if="search" @click="search = ''" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <X class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <!-- ── Destaque magazine (fixo, sempre visível) ── -->
            <div class="mb-10">
                <a :href="`/blog/post/${ALL_POSTS[0].slug}`"
                    class="group relative block w-full h-[420px] md:h-[500px] overflow-hidden rounded-3xl shadow-xl">

                    <img :src="ALL_POSTS[0].img" :alt="ALL_POSTS[0].title"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

                    <div class="absolute top-5 left-5 flex items-center gap-2">
                        <span class="inline-flex items-center gap-1.5 bg-[#22c75e] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-900/30">
                            <TrendingUp class="w-3.5 h-3.5" /> Destaque
                        </span>
                        <span class="inline-flex items-center bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                            {{ ALL_POSTS[0].cat }}
                        </span>
                    </div>

                    <div class="absolute top-5 right-5">
                        <span class="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                            <Clock class="w-3.5 h-3.5" /> {{ ALL_POSTS[0].readTime }} min de leitura
                        </span>
                    </div>

                    <div class="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                        <h2 class="text-2xl md:text-4xl font-bold text-white leading-tight mb-3 max-w-3xl drop-shadow-sm">
                            {{ ALL_POSTS[0].title }}
                        </h2>
                        <p class="text-sm md:text-base text-white/75 leading-relaxed line-clamp-2 max-w-2xl mb-6">
                            {{ ALL_POSTS[0].excerpt }}
                        </p>
                        <div class="flex items-center justify-between flex-wrap gap-4">
                            <div class="flex items-center gap-3">
                                <img :src="ALL_POSTS[0].authorImg"
                                    class="w-9 h-9 rounded-full ring-2 ring-white/40 shadow-md" loading="lazy" />
                                <div>
                                    <p class="text-sm font-semibold text-white leading-none">{{ ALL_POSTS[0].author }}</p>
                                    <p class="text-xs text-white/55 mt-0.5">{{ ALL_POSTS[0].date }}</p>
                                </div>
                            </div>
                            <span class="inline-flex items-center gap-2 bg-[#22c75e] group-hover:bg-[#1aad52] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors shadow-lg shadow-emerald-900/30">
                                Ler artigo
                                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- ── Filtros por categoria ── -->
            <div class="flex items-center gap-2 flex-wrap mb-8">
                <button v-for="cat in CATEGORIES" :key="cat" @click="selectCat(cat)"
                    :class="activecat === cat
                        ? 'bg-[#22c75e] text-white border-[#22c75e] shadow-sm shadow-emerald-200'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#22c75e] hover:text-[#22c75e]'"
                    class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200">
                    {{ cat }}
                    <span :class="activecat === cat ? 'bg-white/30 text-white' : 'bg-gray-100 text-gray-400'"
                        class="text-[11px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                        {{ catCount(cat) }}
                    </span>
                </button>
            </div>

            <!-- ── Resultados ── -->
            <div v-if="paginated.length > 0">
                <!-- Contagem + limpar filtros -->
                <div class="flex items-center justify-between mb-6">
                    <p class="text-sm text-gray-500">
                        <span class="font-semibold text-gray-800">{{ filtered.length }}</span>
                        artigo{{ filtered.length !== 1 ? 's' : '' }} encontrado{{ filtered.length !== 1 ? 's' : '' }}
                        <span v-if="activecat !== 'Todas'" class="text-[#22c75e]"> em {{ activecat }}</span>
                    </p>
                    <button v-if="search || activecat !== 'Todas'"
                        @click="clearFilters"
                        class="flex items-center gap-1 text-xs text-gray-400 hover:text-[#22c75e] transition">
                        <X class="w-3.5 h-3.5" /> Limpar filtros
                    </button>
                </div>

                <!-- Grid de artigos -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <article v-for="post in paginated" :key="post.slug"
                        class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-gray-100/80">
                        <a :href="`/blog/post/${post.slug}`" class="relative h-44 overflow-hidden block">
                            <img :src="post.img" :alt="post.title"
                                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-white/90 text-gray-700 text-[11px] px-2.5 py-0.5 rounded-full font-semibold backdrop-blur-sm">
                                {{ post.cat }}
                            </span>
                        </a>
                        <div class="p-5 flex flex-col flex-1">
                            <h2 class="text-sm font-bold text-gray-900 group-hover:text-[#22c75e] transition-colors line-clamp-2 mb-2 leading-snug">
                                <a :href="`/blog/post/${post.slug}`">{{ post.title }}</a>
                            </h2>
                            <p class="text-xs text-gray-500 line-clamp-2 leading-relaxed flex-1">{{ post.excerpt }}</p>
                            <div class="mt-4 pt-4 flex items-center justify-between border-t border-gray-50">
                                <div class="flex items-center gap-2">
                                    <img :src="post.authorImg" class="w-6 h-6 rounded-full ring-1 ring-gray-200" loading="lazy" />
                                    <div>
                                        <p class="text-[11px] font-medium text-gray-600 leading-none">{{ post.author }}</p>
                                        <p class="text-[10px] text-gray-400 leading-none mt-0.5 flex items-center gap-1">
                                            <Clock class="w-2.5 h-2.5" />{{ post.readTime }} min · {{ post.date }}
                                        </p>
                                    </div>
                                </div>
                                <a :href="`/blog/post/${post.slug}`"
                                    class="text-[11px] font-bold text-[#22c75e] hover:text-[#1aad52] transition-colors">
                                    Ler →
                                </a>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- ── Paginação ── -->
                <div v-if="totalPages > 1" class="mt-12 flex flex-col items-center gap-4">
                    <div class="w-full max-w-xs">
                        <div class="flex justify-between text-xs text-gray-400 mb-1.5">
                            <span>Página {{ currentPage }} de {{ totalPages }}</span>
                            <span>{{ paginated.length }} de {{ filtered.length }} artigos</span>
                        </div>
                        <div class="h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-[#22c75e] rounded-full transition-all duration-500"
                                :style="`width: ${(currentPage / totalPages) * 100}%`" />
                        </div>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <button @click="setPage(currentPage - 1)" :disabled="currentPage === 1"
                            class="p-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition">
                            <ChevronLeft class="w-4 h-4" />
                        </button>
                        <button v-for="p in visiblePages" :key="p" @click="setPage(p)"
                            :class="p === currentPage
                                ? 'bg-[#22c75e] text-white border-[#22c75e] shadow-sm shadow-emerald-200'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-[#22c75e] hover:text-[#22c75e]'"
                            class="w-9 h-9 rounded-xl border text-sm font-semibold transition-all duration-200">
                            {{ p }}
                        </button>
                        <button @click="setPage(currentPage + 1)" :disabled="currentPage === totalPages"
                            class="p-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition">
                            <ChevronRight class="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- ── Empty state ── -->
            <div v-else class="flex flex-col items-center justify-center py-24 text-center">
                <div class="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                    <Search class="w-7 h-7 text-gray-300" />
                </div>
                <h3 class="text-base font-bold text-gray-700 mb-1">Nenhum artigo encontrado</h3>
                <p class="text-sm text-gray-400 mb-5">Tente outro termo ou remova o filtro de categoria.</p>
                <button @click="clearFilters"
                    class="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-[#22c75e] hover:bg-[#1aad52] px-5 py-2.5 rounded-xl transition-colors">
                    <X class="w-3.5 h-3.5" /> Limpar filtros
                </button>
            </div>

            <!-- ── CTA Newsletter ── -->
            <div class="mt-16 rounded-2xl bg-gradient-to-br from-[#1F4D2E] to-[#117641] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-emerald-900/10">
                <div class="text-white text-center md:text-left">
                    <p class="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-2">Newsletter</p>
                    <h3 class="text-xl md:text-2xl font-bold leading-snug mb-1">Receba dicas de finanças toda semana</h3>
                    <p class="text-sm text-emerald-100/80">Sem spam. Só conteúdo que realmente transforma sua vida financeira.</p>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                    <input type="email" placeholder="seu@email.com"
                        class="w-full sm:w-64 px-4 py-2.5 rounded-xl text-sm border-0 focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/10 text-white placeholder-emerald-200/60" />
                    <button class="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold text-[#117641] bg-white hover:bg-emerald-50 transition-colors shadow-sm whitespace-nowrap">
                        Inscrever-se
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
