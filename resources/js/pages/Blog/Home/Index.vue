<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Clock, ChevronLeft, ChevronRight, ArrowRight, Check } from 'lucide-vue-next';

import Footer from "@/pages/Blog/Components/layout/Footer.vue";
import Navbar from "@/pages/Blog/Components/Navigation/Navbar.vue";

const HERO_SLIDES = [
    {
        slug: 'gastos-diarios-como-mapear-reduzir-controlar',
        img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=75',
        cat: 'Controle de Gastos',
        title: 'Gastos diários: como mapear, reduzir e controlar sem sofrimento',
        excerpt: 'Manter as finanças pessoais organizadas não precisa ser complicado. Aprenda a identificar seus gastos diários e aplicar estratégias simples para reduzir desperdícios.',
        author: 'Carlos Júnior',
        authorImg: 'https://i.pravatar.cc/40?img=12',
        date: '23/01/2026',
        readTime: 7,
    },
    {
        slug: 'reserva-de-emergencia-quanto-guardar',
        img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=75',
        cat: 'Investimentos',
        title: 'Reserva de emergência: quanto guardar e onde deixar seu dinheiro',
        excerpt: 'Descubra o valor ideal para sua reserva de emergência, onde investir com segurança e liquidez, e como construir esse colchão financeiro do zero.',
        author: 'Carlos Júnior',
        authorImg: 'https://i.pravatar.cc/40?img=12',
        date: '10/02/2026',
        readTime: 5,
    },
    {
        slug: 'orcamento-mensal-guia-definitivo',
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=75',
        cat: 'Planejamento',
        title: 'Orçamento mensal: o guia definitivo para nunca ficar no vermelho',
        excerpt: 'Um orçamento bem feito é a base de qualquer vida financeira saudável. Veja como montar o seu do zero, com planilha e dicas práticas.',
        author: 'Carlos Júnior',
        authorImg: 'https://i.pravatar.cc/40?img=12',
        date: '15/03/2026',
        readTime: 9,
    },
];

const slide = ref(0);
let timer = null;
const nextSlide = () => { slide.value = (slide.value + 1) % HERO_SLIDES.length; };
const prevSlide = () => { slide.value = (slide.value - 1 + HERO_SLIDES.length) % HERO_SLIDES.length; };
onMounted(() => { timer = setInterval(nextSlide, 6000); });
onUnmounted(() => clearInterval(timer));

// Busca navbar
const searchOpen  = ref(false);
const searchQuery = ref('');

// Artigos
const ALL_POSTS = [
    { slug: 'apps-de-financas',         img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=70', cat: 'Tecnologia',          title: 'Apps de finanças: como escolher o ideal',                         excerpt: 'Aprenda os critérios essenciais para escolher um app financeiro eficiente.',                                                          readTime: 7 },
    { slug: 'orcamento-que-funciona',    img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600&q=70', cat: 'Orçamento',           title: 'Como montar um orçamento que realmente funciona',                  excerpt: 'Esqueça planilhas complexas e aprenda um método realista para controlar seu orçamento.',                                              readTime: 6 },
    { slug: 'financas-30-minutos',       img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=70',   cat: 'Organização',         title: 'Como organizar suas finanças em menos de 30 minutos',             excerpt: 'Um método simples para sair da bagunça financeira e ganhar clareza sobre seu dinheiro.',                                             readTime: 5 },
    { slug: 'sair-das-dividas',          img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=70',   cat: 'Dívidas',             title: 'Estratégias práticas para sair das dívidas',                      excerpt: 'Técnicas simples para renegociar dívidas e retomar o controle da sua vida financeira.',                                              readTime: 8 },
    { slug: 'mei-financas',              img: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=600&q=70', cat: 'Empreendedorismo',   title: 'MEI: como organizar suas finanças',                               excerpt: 'Dicas essenciais para manter o controle financeiro sendo MEI.',                                                                      readTime: 6 },
    { slug: 'educacao-financeira',       img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=70', cat: 'Educação Financeira', title: 'Educação financeira para iniciantes',                             excerpt: 'Conceitos básicos para transformar sua vida financeira.',                                                                            readTime: 7 },
    { slug: 'orcamento-funciona-2',      img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=70',   cat: 'Orçamento',           title: 'Método 50-30-20: o orçamento que cabe no bolso',                 excerpt: 'Aprenda a dividir sua renda em necessidades, desejos e investimentos de forma simples.',                                             readTime: 9 },
    { slug: 'cartao-sem-divida',         img: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&q=70',   cat: 'Cartão de Crédito',  title: 'Como usar cartão sem se endividar',                               excerpt: 'Evite armadilhas e use seu cartão de crédito com inteligência, mantendo o controle dos gastos.',                                    readTime: 5 },
    { slug: 'controle-sem-planilha',     img: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=600&q=70', cat: 'Controle Financeiro', title: 'Como fazer controle financeiro sem planilha complicada',          excerpt: 'Métodos simples e rápidos que realmente funcionam para quem odeia planilhas.',                                                       readTime: 6 },
    { slug: 'reserva-emergencia',        img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=70', cat: 'Investimentos',       title: 'Reserva de emergência: por onde começar',                         excerpt: 'Descubra o valor ideal para sua reserva e onde investir com segurança e liquidez.',                                                  readTime: 5 },
    { slug: 'metas-financeiras',         img: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&q=70', cat: 'Planejamento',        title: 'Como definir e atingir metas financeiras em 2026',               excerpt: 'Um guia prático para transformar seus objetivos financeiros em resultados reais.',                                                   readTime: 8 },
    { slug: 'gastos-fixos-variaveis',    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=70', cat: 'Organização',         title: 'Gastos fixos vs. variáveis: entenda a diferença',                 excerpt: 'Saber classificar seus gastos é o primeiro passo para um orçamento eficiente.',                                                      readTime: 4 },
];

const PAGE_SIZE     = 6;
const visibleCount  = ref(PAGE_SIZE);
const loading       = ref(false);
const visiblePosts  = computed(() => ALL_POSTS.slice(0, visibleCount.value));
const hasMore       = computed(() => visibleCount.value < ALL_POSTS.length);

const loadMore = () => {
    loading.value = true;
    setTimeout(() => {
        visibleCount.value = Math.min(visibleCount.value + 3, ALL_POSTS.length);
        loading.value = false;
    }, 600);
};


</script>

<template>
    <!-- Navbar -->
    <Navbar />

    <main class="flex-1 pt-12 lg:pt-20">
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
            <div class="relative overflow-hidden rounded-2xl shadow-lg bg-gray-900 h-[360px] md:h-[440px]">
                <!-- Slide image -->
                <transition name="fade" mode="out-in">
                    <img :key="slide"
                         :src="HERO_SLIDES[slide].img"
                         :alt="HERO_SLIDES[slide].title"
                         class="absolute inset-0 w-full h-full object-cover"
                         loading="lazy" />
                </transition>

                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <!-- Content -->
                <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <a :href="`/blog/post/${HERO_SLIDES[slide].slug}`"
                       class="inline-block bg-[#22c75e] text-white text-[11px] font-bold px-3 py-1 rounded-full mb-3 hover:bg-emerald-500 transition">
                        {{ HERO_SLIDES[slide].cat }}
                    </a>

                    <h1 class="text-xl md:text-3xl font-bold leading-snug mb-3 max-w-2xl">
                        <a :href="`/blog/post/${HERO_SLIDES[slide].slug}`" class="hover:underline">
                            {{ HERO_SLIDES[slide].title }}
                        </a>
                    </h1>

                    <p class="text-gray-200 text-sm leading-relaxed mb-4 max-w-xl line-clamp-2 hidden md:block">
                        {{ HERO_SLIDES[slide].excerpt }}
                    </p>

                    <div class="flex items-center gap-4 text-sm text-gray-300">
                        <img :src="HERO_SLIDES[slide].authorImg" class="w-7 h-7 rounded-full" loading="lazy" />
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

        <!-- Seção de Artigos -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section class="mt-10 mb-10">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                    <div class="md:max-w-sm">
                        <h2 class="text-3xl font-bold text-gray-900 mb-3">Temas</h2>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Explore os assuntos mais relevantes e encontre conteúdos criados para facilitar suas decisões financeiras no dia a dia.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                        <a href="#" class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <img src="https://www.organizze.com.br/blog/wp-content/uploads/MEI-280x210-1.jpg" alt="MEI" class="w-full h-44 object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                            <span class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-90"></span>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">MEI & Empreendedorismo</h3>
                                <p class="text-white/80 text-xs mt-1">Obrigações, impostos e dicas</p>
                            </div>
                        </a>

                        <a href="#" class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <img src="https://www.organizze.com.br/blog/wp-content/uploads/Investimento-280x210-1.jpg" alt="Investimentos" class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"/>
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Investimentos</h3>
                                <p class="text-white/80 text-xs mt-1">Renda fixa e variável</p>
                            </div>
                        </a>

                        <a href="#" class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <img src="https://www.organizze.com.br/blog/wp-content/uploads/Direitos-do-consumidor-280x210-1.jpg" alt="Orçamento" class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"/>
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Orçamento</h3>
                                <p class="text-white/80 text-xs mt-1">Controle financeiro</p>
                            </div>
                        </a>

                        <a href="#" class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <img src="https://www.organizze.com.br/blog/wp-content/uploads/D%C2%A1vidas-280x210-1.jpg" alt="Impostos" class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"/>
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Impostos</h3>
                                <p class="text-white/80 text-xs mt-1">Declarações e taxas</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Artigps listagem -->
            <section class="max-w-7xl mx-auto px-6 py-8">
                <div class="mb-8 flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">Mais artigos</h2>
                        <p class="mt-1 text-sm text-gray-600">Conteúdos recentes para te ajudar a organizar melhor suas finanças.</p>
                    </div>

                    <a href="blog/artigos" class="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition">
                        Ver todos
                        <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <!-- GRID -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    <article v-for="post in visiblePosts" :key="post.slug" class="group bg-white rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
                        <a :href="`/blog/post/${post.slug}`" class="relative h-48 overflow-hidden block">
                            <img :src="post.img" :alt="post.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"/>
                            <span class="absolute bottom-3 left-3 bg-[#1F4D2E] text-white text-xs px-3 py-1 rounded-full">{{ post.cat }}</span>
                        </a>

                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-base font-semibold text-gray-900 group-hover:text-[#22c75e] transition-colors line-clamp-2">
                                <a :href="`/blog/post/${post.slug}`">{{ post.title }}</a>
                            </h3>
                            <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed mt-2">{{ post.excerpt }}</p>
                            <div class="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
                                <div class="flex items-center gap-2 min-w-0">
                                    <img :src="post.author?.avatar || 'https://i.pravatar.cc/100?img=12'" :alt="post.author?.name || 'Autor'" class="w-9 h-9 rounded-full object-cover border border-gray-100 shrink-0" loading="lazy"/>

                                    <div class="min-w-0 leading-tight">
                                        <span class="block text-xs font-semibold text-gray-700 truncate">
                                            {{ post.author?.name || 'Equipe Realizze' }}
                                        </span>
                                        <span class="flex items-center gap-1 text-[11px] text-gray-400 mt-1">
                                            <Clock class="w-3 h-3 shrink-0" />
                                            {{ post.readTime }} min de leitura
                                        </span>
                                    </div>
                                </div>

                                <a :href="`/blog/post/${post.slug}`" class="flex items-center gap-1 text-xs font-semibold text-[#22c75e] hover:underline shrink-0">
                                    Ler artigo
                                    <ArrowRight class="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- CARREGAR MAIS -->
                <div class="mt-10 flex flex-col items-center gap-3">
                    <p class="text-xs text-gray-400">{{ visiblePosts.length }} de {{ ALL_POSTS.length }} artigos</p>
                    <div class="w-48 h-1 bg-gray-100 rounded-md overflow-hidden">
                        <div class="h-full bg-[#22c75e] rounded-full transition-all duration-500" :style="`width: ${(visiblePosts.length / ALL_POSTS.length) * 100}%`" />
                    </div>
                    <button v-if="hasMore" @click="loadMore" :disabled="loading" class="mt-2 px-8 py-2.5 rounded-sm border border-[#22c75e] text-[#22c75e] font-semibold text-sm hover:bg-[#22c75e] hover:text-white transition-colors disabled:opacity-60 disabled:cursor-wait flex items-center gap-2">
                        <span v-if="loading" class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        {{ loading ? 'Carregando...' : 'Carregar mais' }}
                    </button>
                    <p v-else class="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-400 font-medium">
                        Todos os artigos carregados <Check class="w-4 h-4 shrink-0 text-[#22c75e]" />
                    </p>
                </div>
            </section>
        </div>

        <!-- Footer -->
        <Footer />
    </main>
</template>

