<script setup>
import { ref, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import BlogNavbar from '@/pages/Blog/Components/Navigation/Navbar.vue';
import BlogFooter from '@/pages/Blog/Components/Layout/Footer.vue';
import { Clock, Eye, Search, SlidersHorizontal, ChevronRight, TrendingUp } from 'lucide-vue-next';

const route = useRoute();
const slug = computed(() => route.params.category ?? 'controle-de-gastos');

const CATEGORY_META = {
    'controle-de-gastos':  { label: 'Controle de Gastos',     color: 'from-emerald-600 to-teal-700',   count: 24 },
    'investimentos':       { label: 'Investimentos',           color: 'from-blue-600 to-indigo-700',    count: 31 },
    'orcamento':           { label: 'Orçamento',               color: 'from-amber-500 to-orange-600',   count: 18 },
    'mei':                 { label: 'MEI & Empreendedorismo',  color: 'from-violet-600 to-purple-700',  count: 15 },
    'educacao-financeira': { label: 'Educação Financeira',     color: 'from-rose-500 to-pink-600',      count: 20 },
    'dividas':             { label: 'Dívidas',                 color: 'from-red-500 to-rose-600',       count: 12 },
    'vida-domestica':      { label: 'Vida Doméstica',          color: 'from-teal-500 to-cyan-600',      count: 9  },
};

const meta = computed(() => CATEGORY_META[slug.value] ?? { label: 'Categoria', color: 'from-gray-600 to-gray-700', count: 0 });

const ALL_CATEGORIES = Object.entries(CATEGORY_META).map(([s, m]) => ({ slug: s, ...m }));

const ARTICLES = [
    { img: 'https://www.organizze.com.br/blog/wp-content/uploads/aplicativo-para-controle-financeiro.jpg', cat: 'Controle de Gastos', title: '12 melhores aplicativos para controle financeiro', excerpt: 'Controlar seus gastos não precisa ser complicado. Confira os 12 melhores apps e tenha as finanças na palma da mão.', author: 'Anderson de Andrade', authorImg: 'https://i.pravatar.cc/40?img=15', date: '20 abr. 2026', readTime: 9, views: 4820, slug: 'aplicativo-para-controle-financeiro' },
    { img: 'https://images.unsplash.com/photo-1640249329895-c4d6fa71116c?w=600&q=80', cat: 'Controle de Gastos', title: 'Como controlar seus gastos sem abrir mão do que importa', excerpt: 'Aprenda estratégias simples para manter suas finanças equilibradas e evitar desperdícios no dia a dia.', author: 'Carlos Júnior', authorImg: 'https://i.pravatar.cc/40?img=12', date: '22 abr. 2026', readTime: 7, views: 3120, slug: 'controlar-gastos-sem-abrir-mao' },
    { img: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=600&q=80', cat: 'Controle de Gastos', title: 'Como fazer controle financeiro sem planilha complicada', excerpt: 'Métodos simples que realmente funcionam para quem odeia planilhas ou apps cheios de funcionalidades.', author: 'Juliana Costa', authorImg: 'https://i.pravatar.cc/40?img=19', date: '16 abr. 2026', readTime: 6, views: 2541, slug: 'controle-financeiro-sem-planilha' },
    { img: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=600&q=80', cat: 'Controle de Gastos', title: 'Como organizar suas finanças em menos de 30 minutos', excerpt: 'Um método simples para sair da bagunça financeira e ganhar clareza sobre seu dinheiro.', author: 'Marcos Lima', authorImg: 'https://i.pravatar.cc/40?img=32', date: '21 abr. 2026', readTime: 5, views: 2190, slug: 'organizar-financas-30-minutos' },
    { img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80', cat: 'Controle de Gastos', title: 'Método 50-30-20: como dividir seu salário corretamente', excerpt: 'A regra 50-30-20 é uma das estratégias mais simples para equilibrar gastos essenciais e poupança.', author: 'Fernanda Alves', authorImg: 'https://i.pravatar.cc/40?img=22', date: '15 abr. 2026', readTime: 6, views: 1870, slug: 'metodo-50-30-20-dividir-salario' },
    { img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600&q=80', cat: 'Controle de Gastos', title: 'Como montar um orçamento que realmente funciona', excerpt: 'Esqueça planilhas complexas e aprenda um método realista para controlar seu orçamento mensal.', author: 'Daniel Freitas', authorImg: 'https://i.pravatar.cc/40?img=41', date: '10 abr. 2026', readTime: 7, views: 1650, slug: 'como-montar-orcamento-que-funciona' },
];

const sortBy = ref('recente'); // 'recente' | 'lidos' | 'rapido'
const search = ref('');
const page = ref(1);
const PER_PAGE = 6;

const sorted = computed(() => {
    let list = ARTICLES.filter(a =>
        !search.value || a.title.toLowerCase().includes(search.value.toLowerCase()),
    );
    if (sortBy.value === 'lidos') return [...list].sort((a, b) => b.views - a.views);
    if (sortBy.value === 'rapido') return [...list].sort((a, b) => a.readTime - b.readTime);
    return list;
});

const visible = computed(() => sorted.value.slice(0, page.value * PER_PAGE));
const hasMore = computed(() => visible.value.length < sorted.value.length);
</script>

<template>
    <BlogNavbar />

    <main class="flex-1 pt-14 lg:pt-16 bg-gray-50 min-h-screen">

        <!-- ── HERO CATEGORIA ──────────────────────────────────────────────────── -->
        <section :class="`bg-gradient-to-br ${meta.color}`" class="text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumb -->
                <nav class="flex items-center gap-2 text-xs text-white/60 mb-4">
                    <RouterLink to="/blog" class="hover:text-white transition">Blog</RouterLink>
                    <ChevronRight class="w-3 h-3" />
                    <span class="text-white">{{ meta.label }}</span>
                </nav>

                <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <h1 class="text-3xl sm:text-4xl font-bold leading-tight mb-2">{{ meta.label }}</h1>
                        <p class="text-white/75 text-sm">{{ meta.count }} artigos publicados</p>
                    </div>

                    <!-- Busca inline -->
                    <div class="relative sm:w-72">
                        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                        <input v-model="search" type="text" placeholder="Buscar nesta categoria..."
                            class="w-full pl-9 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition" />
                    </div>
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

                <!-- ── ARTIGOS ────────────────────────────────────────────────────── -->
                <div class="lg:col-span-8">

                    <!-- Ordenação -->
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-sm text-gray-500">
                            <span class="font-bold text-gray-800">{{ sorted.length }}</span> artigos encontrados
                        </p>
                        <div class="flex items-center gap-2">
                            <SlidersHorizontal class="w-4 h-4 text-gray-400" />
                            <div class="flex gap-1">
                                <button v-for="opt in [{ key: 'recente', label: 'Recentes' }, { key: 'lidos', label: 'Mais lidos' }, { key: 'rapido', label: 'Mais rápidos' }]"
                                    :key="opt.key"
                                    @click="sortBy = opt.key; page = 1"
                                    :class="sortBy === opt.key ? 'bg-[#22c75e] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#22c75e] hover:text-[#22c75e]'"
                                    class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors">
                                    {{ opt.label }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Grid -->
                    <div v-if="visible.length > 0" class="space-y-5">
                        <!-- 1º artigo em destaque -->
                        <article class="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
                            <div class="flex flex-col sm:flex-row">
                                <div class="relative sm:w-64 h-48 sm:h-auto shrink-0 overflow-hidden">
                                    <img :src="visible[0].img" :alt="visible[0].title"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span class="absolute bottom-3 left-3 bg-[#22c75e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                        {{ visible[0].cat }}
                                    </span>
                                </div>
                                <div class="p-5 flex flex-col justify-center flex-1">
                                    <h2 class="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#22c75e] transition-colors">
                                        <RouterLink :to="`/blog/post/${visible[0].slug}`">{{ visible[0].title }}</RouterLink>
                                    </h2>
                                    <p class="text-sm text-gray-500 line-clamp-2 mb-4">{{ visible[0].excerpt }}</p>
                                    <div class="flex items-center gap-3 text-[11px] text-gray-400">
                                        <img :src="visible[0].authorImg" class="w-5 h-5 rounded-full" />
                                        <span class="font-medium text-gray-600">{{ visible[0].author }}</span>
                                        <span>• {{ visible[0].date }}</span>
                                        <span class="flex items-center gap-0.5"><Clock class="w-3 h-3" /> {{ visible[0].readTime }} min</span>
                                        <span class="flex items-center gap-0.5 ml-auto"><Eye class="w-3 h-3" /> {{ visible[0].views.toLocaleString('pt-BR') }}</span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <!-- Restantes em grid -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <article v-for="art in visible.slice(1)" :key="art.slug"
                                class="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-[#22c75e]/20 transition-all flex flex-col">
                                <div class="relative h-44 overflow-hidden">
                                    <img :src="art.img" :alt="art.title"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span class="absolute bottom-2 left-2 bg-[#22c75e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                        {{ art.cat }}
                                    </span>
                                </div>
                                <div class="p-4 flex flex-col flex-1">
                                    <h3 class="text-sm font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#22c75e] transition-colors">
                                        <RouterLink :to="`/blog/post/${art.slug}`">{{ art.title }}</RouterLink>
                                    </h3>
                                    <p class="text-xs text-gray-500 line-clamp-2 mb-3 flex-1">{{ art.excerpt }}</p>
                                    <div class="flex items-center gap-2 text-[10px] text-gray-400 pt-3 border-t border-gray-50">
                                        <img :src="art.authorImg" class="w-4 h-4 rounded-full" />
                                        <span class="font-medium text-gray-600">{{ art.author }}</span>
                                        <span class="flex items-center gap-0.5 ml-auto"><Clock class="w-3 h-3" /> {{ art.readTime }} min</span>
                                        <span class="flex items-center gap-0.5"><Eye class="w-3 h-3" /> {{ art.views.toLocaleString('pt-BR') }}</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <!-- Empty state -->
                    <div v-else class="text-center py-16 text-gray-400">
                        <Search class="w-10 h-10 mx-auto mb-3 opacity-30" />
                        <p class="font-semibold">Nenhum artigo encontrado para "{{ search }}"</p>
                        <button @click="search = ''" class="mt-3 text-sm text-[#22c75e] hover:underline">Limpar busca</button>
                    </div>

                    <!-- Load more -->
                    <div v-if="hasMore" class="mt-8 flex justify-center">
                        <button @click="page++"
                            class="px-8 py-3 rounded-xl border-2 border-[#22c75e] text-[#22c75e] font-bold text-sm hover:bg-[#22c75e] hover:text-white transition-colors">
                            Carregar mais artigos
                        </button>
                    </div>
                </div>

                <!-- ── SIDEBAR ─────────────────────────────────────────────────────── -->
                <aside class="lg:col-span-4 space-y-5">
                    <div class="sticky top-20 space-y-5">

                        <!-- Outras categorias -->
                        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div class="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                                <TrendingUp class="w-4 h-4 text-[#22c75e]" />
                                <h3 class="text-sm font-bold text-gray-900">Outras Categorias</h3>
                            </div>
                            <div class="space-y-1">
                                <RouterLink
                                    v-for="cat in ALL_CATEGORIES" :key="cat.slug"
                                    :to="`/blog/categoria/${cat.slug}`"
                                    :class="cat.slug === slug ? 'bg-emerald-50 text-[#22c75e] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#22c75e]'"
                                    class="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors"
                                >
                                    <span>{{ cat.label }}</span>
                                    <span class="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{{ cat.count }}</span>
                                </RouterLink>
                            </div>
                        </div>

                        <!-- Banner app -->
                        <div class="bg-gradient-to-br from-[#22c75e] to-[#117641] rounded-2xl p-5 text-white text-center">
                            <p class="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">Grátis para testar</p>
                            <h3 class="text-base font-bold leading-snug mb-3">Organize suas finanças com o Organizze</h3>
                            <RouterLink to="/app"
                                class="block w-full py-2.5 bg-white text-[#117641] font-bold text-sm rounded-xl hover:bg-gray-50 transition-colors">
                                Começar agora
                            </RouterLink>
                        </div>

                    </div>
                </aside>

            </div>
        </div>

        <BlogFooter />
    </main>
</template>
