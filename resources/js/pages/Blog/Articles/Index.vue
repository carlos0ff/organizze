<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import BlogNavbar from '@/pages/Blog/Components/Navigation/Navbar.vue';
import BlogFooter from '@/pages/Blog/Components/Layout/Footer.vue';
import {
    Search, SlidersHorizontal, Clock, Eye, Grid3x3,
    List, ChevronLeft, ChevronRight, X,
} from 'lucide-vue-next';

const CATEGORIES = ['Todos', 'Controle de Gastos', 'Investimentos', 'Orçamento', 'MEI', 'Educação Financeira', 'Dívidas', 'Vida Doméstica'];

const ALL_ARTICLES = [
    { img: 'https://www.organizze.com.br/blog/wp-content/uploads/aplicativo-para-controle-financeiro.jpg',               cat: 'Controle de Gastos',  title: '12 melhores aplicativos para controle financeiro',           excerpt: 'Controle seus gastos na palma da mão com os melhores apps do mercado.',                       author: 'Anderson de Andrade', authorImg: 'https://i.pravatar.cc/40?img=15', date: '20 abr. 2026', readTime: 9,  views: 4820, slug: 'aplicativo-para-controle-financeiro' },
    { img: 'https://images.unsplash.com/photo-1640249329895-c4d6fa71116c?w=600&q=80',                                     cat: 'Controle de Gastos',  title: 'Como controlar seus gastos sem abrir mão do que importa',    excerpt: 'Estratégias simples para finanças equilibradas no dia a dia.',                                author: 'Carlos Júnior',       authorImg: 'https://i.pravatar.cc/40?img=12', date: '22 abr. 2026', readTime: 7,  views: 3120, slug: 'controlar-gastos-sem-abrir-mao' },
    { img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',                                     cat: 'Investimentos',       title: 'Como montar uma carteira de investimentos pela primeira vez', excerpt: 'Aprenda a diversificar ativos alinhados ao seu perfil e objetivos.',                        author: 'Marcos Lima',         authorImg: 'https://i.pravatar.cc/40?img=32', date: '16 abr. 2026', readTime: 7,  views: 2890, slug: 'como-montar-carteira-investimentos' },
    { img: 'https://plus.unsplash.com/premium_photo-1678374803603-be234f694675?w=600&q=80',                               cat: 'Educação Financeira', title: 'Educação financeira: o que ninguém te ensinou na escola',     excerpt: 'Conceitos básicos que fazem diferença ao longo de toda a vida.',                              author: 'Juliana Costa',       authorImg: 'https://i.pravatar.cc/40?img=18', date: '17 abr. 2026', readTime: 7,  views: 2560, slug: 'educacao-financeira-o-que-ninguem-ensinou' },
    { img: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=600&q=80',                                     cat: 'Controle de Gastos',  title: 'Como fazer controle financeiro sem planilha complicada',      excerpt: 'Métodos rápidos que realmente funcionam para quem odeia planilhas.',                          author: 'Juliana Costa',       authorImg: 'https://i.pravatar.cc/40?img=19', date: '16 abr. 2026', readTime: 6,  views: 2541, slug: 'controle-financeiro-sem-planilha' },
    { img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80',                                        cat: 'Orçamento',           title: 'Como definir metas financeiras alcançáveis em 2026',         excerpt: 'Crie metas claras, mensuráveis e alinhadas à sua realidade.',                                author: 'Rafael Nunes',        authorImg: 'https://i.pravatar.cc/40?img=28', date: '14 abr. 2026', readTime: 7,  views: 2340, slug: 'metas-financeiras-alcancaveis' },
    { img: 'https://www.organizze.com.br/blog/wp-content/uploads/imposto-de-renda-mei-280x210.jpg',                       cat: 'MEI',                 title: 'Imposto de Renda MEI 2026: tudo o que você precisa saber',   excerpt: 'Prazos, obrigações e como declarar corretamente sendo MEI.',                                 author: 'Anderson de Andrade', authorImg: 'https://i.pravatar.cc/40?img=15', date: '17 abr. 2026', readTime: 8,  views: 2210, slug: 'imposto-de-renda-mei' },
    { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',                                     cat: 'Controle de Gastos',  title: 'Apps de finanças: como escolher o ideal para você',           excerpt: 'Critérios certos para escolher um app financeiro que realmente ajude.',                      author: 'Daniel Freitas',      authorImg: 'https://i.pravatar.cc/40?img=41', date: '13 abr. 2026', readTime: 7,  views: 2100, slug: 'apps-de-financas-como-escolher' },
    { img: 'https://plus.unsplash.com/premium_photo-1678139621007-ee1a1e9affa9?w=600&q=80',                               cat: 'Dívidas',             title: 'Estratégias práticas para sair das dívidas em 2026',         excerpt: 'Técnicas comprovadas para renegociar e retomar o controle.',                                 author: 'Daniel Freitas',      authorImg: 'https://i.pravatar.cc/40?img=41', date: '11 abr. 2026', readTime: 7,  views: 1980, slug: 'estrategias-para-sair-das-dividas' },
    { img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600&q=80',                                     cat: 'Orçamento',           title: 'Como montar um orçamento que realmente funciona',             excerpt: 'Um método realista para controlar seu orçamento mensal.',                                    author: 'Daniel Freitas',      authorImg: 'https://i.pravatar.cc/40?img=41', date: '10 abr. 2026', readTime: 7,  views: 1650, slug: 'como-montar-orcamento-que-funciona' },
    { img: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=600&q=80',                                     cat: 'Orçamento',           title: 'Como organizar suas finanças em menos de 30 minutos',        excerpt: 'Saia da bagunça financeira com este método simples e rápido.',                               author: 'Marcos Lima',         authorImg: 'https://i.pravatar.cc/40?img=32', date: '21 abr. 2026', readTime: 5,  views: 2190, slug: 'organizar-financas-30-minutos' },
    { img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',                                     cat: 'Investimentos',       title: 'Método 50-30-20: como dividir seu salário corretamente',      excerpt: 'A regra mais simples para equilibrar gastos essenciais e poupança.',                         author: 'Fernanda Alves',      authorImg: 'https://i.pravatar.cc/40?img=22', date: '15 abr. 2026', readTime: 6,  views: 1870, slug: 'metodo-50-30-20-dividir-salario' },
];

const search = ref('');
const activeCategory = ref('Todos');
const sortBy = ref('recente');
const view = ref('grid'); // 'grid' | 'list'
const page = ref(1);
const PER_PAGE = 9;

function selectCategory(cat) {
    activeCategory.value = cat;
    page.value = 1;
}
function clearFilters() {
    search.value = '';
    activeCategory.value = 'Todos';
    sortBy.value = 'recente';
    page.value = 1;
}

const filtered = computed(() => {
    let list = ALL_ARTICLES.filter(a => {
        const matchCat = activeCategory.value === 'Todos' || a.cat === activeCategory.value;
        const matchSearch = !search.value || a.title.toLowerCase().includes(search.value.toLowerCase()) || a.excerpt.toLowerCase().includes(search.value.toLowerCase());
        return matchCat && matchSearch;
    });
    if (sortBy.value === 'lidos') return [...list].sort((a, b) => b.views - a.views);
    if (sortBy.value === 'rapido') return [...list].sort((a, b) => a.readTime - b.readTime);
    return list;
});

const totalPages = computed(() => Math.ceil(filtered.value.length / PER_PAGE));
const paginated = computed(() => {
    const start = (page.value - 1) * PER_PAGE;
    return filtered.value.slice(start, start + PER_PAGE);
});

const hasFilters = computed(() => search.value || activeCategory.value !== 'Todos' || sortBy.value !== 'recente');
</script>

<template>
    <BlogNavbar />

    <main class="flex-1 pt-14 lg:pt-16 bg-gray-50 min-h-screen">

        <!-- ── HERO ───────────────────────────────────────────────────────────── -->
        <section class="bg-white border-b border-gray-200 py-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-5">
                    <div>
                        <h1 class="text-3xl font-bold text-gray-900">Todos os artigos</h1>
                        <p class="text-sm text-gray-500 mt-1">
                            <span class="font-bold text-gray-700">{{ ALL_ARTICLES.length }}</span> artigos sobre finanças pessoais
                        </p>
                    </div>

                    <!-- Busca -->
                    <div class="relative md:w-80">
                        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input v-model="search" @input="page = 1" type="text" placeholder="Buscar artigos..."
                            class="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#22c75e]/20 focus:border-[#22c75e] transition bg-gray-50" />
                        <button v-if="search" @click="search = ''; page = 1"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <X class="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                <!-- Filtros por categoria -->
                <div class="flex flex-wrap gap-2 mt-6">
                    <button v-for="cat in CATEGORIES" :key="cat"
                        @click="selectCategory(cat)"
                        :class="activeCategory === cat
                            ? 'bg-[#22c75e] text-white border-[#22c75e]'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-[#22c75e] hover:text-[#22c75e]'"
                        class="px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors">
                        {{ cat }}
                    </button>
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <!-- Toolbar -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div class="flex items-center gap-3">
                    <p class="text-sm text-gray-500">
                        <span class="font-bold text-gray-800">{{ filtered.length }}</span> artigos
                        <span v-if="activeCategory !== 'Todos'">em <span class="text-[#22c75e] font-semibold">{{ activeCategory }}</span></span>
                    </p>
                    <button v-if="hasFilters" @click="clearFilters"
                        class="flex items-center gap-1 text-xs text-red-500 border border-red-100 bg-red-50 px-2.5 py-1 rounded-lg hover:bg-red-100 transition">
                        <X class="w-3 h-3" /> Limpar filtros
                    </button>
                </div>

                <div class="flex items-center gap-3">
                    <!-- Ordenação -->
                    <div class="flex items-center gap-1.5">
                        <SlidersHorizontal class="w-3.5 h-3.5 text-gray-400" />
                        <select v-model="sortBy" @change="page = 1"
                            class="text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:border-[#22c75e] bg-white">
                            <option value="recente">Mais recentes</option>
                            <option value="lidos">Mais lidos</option>
                            <option value="rapido">Leitura mais rápida</option>
                        </select>
                    </div>

                    <!-- Modo de visualização -->
                    <div class="flex gap-1 bg-gray-100 p-0.5 rounded-lg">
                        <button @click="view = 'grid'"
                            :class="view === 'grid' ? 'bg-white shadow text-gray-800' : 'text-gray-400'"
                            class="p-1.5 rounded-md transition">
                            <Grid3x3 class="w-4 h-4" />
                        </button>
                        <button @click="view = 'list'"
                            :class="view === 'list' ? 'bg-white shadow text-gray-800' : 'text-gray-400'"
                            class="p-1.5 rounded-md transition">
                            <List class="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Empty state -->
            <div v-if="paginated.length === 0" class="text-center py-20 text-gray-400">
                <Search class="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p class="font-semibold text-gray-600">Nenhum artigo encontrado</p>
                <p class="text-sm mt-1">Tente outros termos ou remova os filtros.</p>
                <button @click="clearFilters" class="mt-4 text-sm text-[#22c75e] font-semibold hover:underline">
                    Limpar filtros
                </button>
            </div>

            <!-- Grid view -->
            <div v-else-if="view === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <article v-for="art in paginated" :key="art.slug"
                    class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#22c75e]/20 transition-all flex flex-col">
                    <div class="relative h-48 overflow-hidden">
                        <img :src="art.img" :alt="art.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <span class="absolute bottom-3 left-3 bg-[#1a7a42] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                            {{ art.cat }}
                        </span>
                    </div>
                    <div class="p-5 flex flex-col flex-1">
                        <h3 class="text-sm font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#22c75e] transition-colors">
                            <RouterLink :to="`/blog/post/${art.slug}`">{{ art.title }}</RouterLink>
                        </h3>
                        <p class="text-[11px] text-gray-500 line-clamp-2 flex-1 mb-3">{{ art.excerpt }}</p>
                        <div class="flex items-center gap-2 pt-3 border-t border-gray-50 text-[10px] text-gray-400">
                            <img :src="art.authorImg" class="w-4 h-4 rounded-full" />
                            <span class="font-medium text-gray-600 truncate">{{ art.author }}</span>
                            <span class="flex items-center gap-0.5 ml-auto shrink-0">
                                <Clock class="w-3 h-3" /> {{ art.readTime }} min
                            </span>
                            <span class="flex items-center gap-0.5 shrink-0">
                                <Eye class="w-3 h-3" /> {{ art.views.toLocaleString('pt-BR') }}
                            </span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- List view -->
            <div v-else class="space-y-4">
                <article v-for="art in paginated" :key="art.slug"
                    class="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#22c75e]/20 transition-all overflow-hidden flex">
                    <div class="relative w-40 sm:w-52 shrink-0 overflow-hidden">
                        <img :src="art.img" :alt="art.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <span class="absolute bottom-2 left-2 bg-[#22c75e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {{ art.cat }}
                        </span>
                    </div>
                    <div class="p-4 sm:p-5 flex flex-col justify-center flex-1 min-w-0">
                        <h3 class="text-sm sm:text-base font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-[#22c75e] transition-colors line-clamp-2">
                            <RouterLink :to="`/blog/post/${art.slug}`">{{ art.title }}</RouterLink>
                        </h3>
                        <p class="text-xs text-gray-500 line-clamp-2 mb-3 hidden sm:block">{{ art.excerpt }}</p>
                        <div class="flex flex-wrap items-center gap-2 text-[10px] text-gray-400">
                            <img :src="art.authorImg" class="w-4 h-4 rounded-full" />
                            <span class="font-medium text-gray-600">{{ art.author }}</span>
                            <span>• {{ art.date }}</span>
                            <span class="flex items-center gap-0.5"><Clock class="w-3 h-3" /> {{ art.readTime }} min</span>
                            <span class="flex items-center gap-0.5"><Eye class="w-3 h-3" /> {{ art.views.toLocaleString('pt-BR') }}</span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Paginação -->
            <div v-if="totalPages > 1" class="mt-10 flex items-center justify-center gap-2">
                <button @click="page = Math.max(1, page - 1)" :disabled="page === 1"
                    :class="page === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100'"
                    class="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 transition bg-white">
                    <ChevronLeft class="w-4 h-4" />
                </button>

                <button v-for="p in totalPages" :key="p" @click="page = p"
                    :class="page === p ? 'bg-[#22c75e] text-white border-[#22c75e]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#22c75e] hover:text-[#22c75e]'"
                    class="w-9 h-9 rounded-xl border text-sm font-bold transition-colors">
                    {{ p }}
                </button>

                <button @click="page = Math.min(totalPages, page + 1)" :disabled="page === totalPages"
                    :class="page === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100'"
                    class="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 transition bg-white">
                    <ChevronRight class="w-4 h-4" />
                </button>
            </div>

        </div>

        <BlogFooter />
    </main>
</template>
