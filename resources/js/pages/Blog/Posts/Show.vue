<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Clock, Calendar, Share2, Bookmark, ChevronUp, ArrowLeft, Send, Lightbulb  } from 'lucide-vue-next';
import Footer from "@/pages/Blog/Components/layout/Footer.vue";

const searchOpen  = ref(false);
const searchQuery = ref('');

const readProgress = ref(0);
const scrolledUp   = ref(false);

const post = {
    slug:       'gastos-diarios-como-mapear-reduzir-controlar',
    cat:        'Controle de Gastos',
    title:      'Gastos diários: como mapear, reduzir e controlar sem sofrimento',
    excerpt:    'Manter as finanças pessoais organizadas não precisa ser complicado. Aprenda a identificar seus gastos diários e aplicar estratégias simples para reduzir desperdícios.',
    img:        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1400&q=80',
    author:     'Carlos Júnior',
    authorImg:  'https://i.pravatar.cc/80?img=12',
    authorBio:  'Especialista em finanças pessoais com mais de 8 anos de experiência. Apaixonado por educação financeira e tecnologia.',
    date:       '23 de março de 2026',
    readTime:   7,
    tags:       ['Finanças Pessoais', 'Orçamento', 'Controle', 'Organização'],
};

const related = [
    {
        slug: 'orcamento-que-funciona',
        img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600&q=70',
        cat: 'Orçamento',
        title: 'Como montar um orçamento que realmente funciona',
        excerpt: 'Veja como planejar seus gastos sem deixar de aproveitar o seu dinheiro.',
        readTime: 6,
        date: '10/01/2026',
        author: 'Carlos Júnior',
        authorImg: 'https://i.pravatar.cc/40?img=12',
    },
    {
        slug: 'reserva-emergencia',
        img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=70',
        cat: 'Investimentos',
        title: 'Reserva de emergência: por onde começar',
        excerpt: 'Entenda quanto guardar, onde investir e como construir sua segurança financeira.',
        readTime: 5,
        date: '01/03/2026',
        author: 'Marina Costa',
        authorImg: 'https://i.pravatar.cc/40?img=8',
    },
    {
        slug: 'metodo-50-30-20',
        img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=70',
        cat: 'Orçamento',
        title: 'Método 50-30-20: o orçamento que cabe no bolso',
        excerpt: 'Conheça uma regra prática para dividir sua renda entre necessidades, desejos e metas.',
        readTime: 9,
        date: '08/02/2026',
        author: 'Lucas Almeida',
        authorImg: 'https://i.pravatar.cc/40?img=5',
    },
];

const toc = [
    { id: 'por-que-mapear',    label: 'Por que mapear seus gastos?' },
    { id: 'como-categorizar',  label: 'Como categorizar despesas' },
    { id: 'metodo-envelope',   label: 'O método do envelope digital' },
    { id: 'reducao-pratica',   label: 'Redução prática sem sofrimento' },
    { id: 'ferramentas',       label: 'Ferramentas que ajudam' },
    { id: 'conclusao',         label: 'Conclusão' },
];

const onScroll = () => {
    const el  = document.documentElement;
    const top = el.scrollTop || document.body.scrollTop;
    const h   = el.scrollHeight - el.clientHeight;
    readProgress.value = h > 0 ? Math.round((top / h) * 100) : 0;
    scrolledUp.value   = top > 400;
};

onMounted(()  => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
};
</script>

<template>
    <!-- Barra de progresso de leitura -->
    <div class="fixed top-0 left-0 z-[60] h-0.5 bg-[#22c75e] transition-all duration-150"
        :style="`width: ${readProgress}%`" />

    <!-- ── Navbar ── -->
    <nav class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center shrink-0">
                    <a href="/blog" class="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                            alt="Organizze" class="h-8 w-auto" />
                        <span class="hidden text-sm font-medium text-gray-600 sm:inline">Blog</span>
                    </a>
                </div>

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
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Artigos
                    </a>
                    <a href="/blog#mais-lido"
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Mais lido
                    </a>
                </div>

                <div class="flex items-center gap-3">
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
                                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22c75e]/30 focus:border-[#22c75e]" />
                                </div>
                                <div class="mt-4 text-sm">
                                    <p class="text-gray-500 font-medium mb-2">Buscas recentes:</p>
                                    <div class="space-y-1">
                                        <a href="#" class="block text-gray-700 hover:text-[#22c75e] transition">Como organizar finanças</a>
                                        <a href="#" class="block text-gray-700 hover:text-[#22c75e] transition">Reserva de emergência</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="/auth/cadastro" class="relative overflow-hidden px-6 py-2 rounded-md font-medium text-white bg-[#117641] group">
                        <span class="absolute inset-0 bg-[#006A33] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        <span class="relative z-10">Conheça o organizze</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <main class="bg-white min-h-screen">


        <!-- ── Hero ── -->
        <div class="relative h-[340px] w-full overflow-hidden md:h-[480px]">
            <img :src="post.img" :alt="post.title" class="absolute inset-0 h-full w-full object-cover"/>

            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10"></div>

            <!-- Voltar -->
            <a href="/blog/artigos" class="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/25">
                <ArrowLeft class="h-4 w-4" /> Voltar
            </a>

            <!-- Breadcrumb + Categoria + título -->
            <div class="absolute bottom-0 left-0 right-0 px-6 md:px-0">
                <div class="mx-auto max-w-3xl pb-8 md:pb-12">

                    <nav aria-label="Breadcrumb" class="mb-5">
                        <ol class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-white/75">
                            <li><a href="/blog" class="transition hover:text-white">Organizze</a></li>
                            <li class="text-white/45">›</li>
                            <li><a href="/blog/artigos" class="transition hover:text-white">Página de artigos</a></li>
                            <li class="text-white/45">›</li>
                            <li><a :href="`/blog/tema/${post.catSlug}`" class="transition hover:text-white">{{ post.cat }}</a></li>
                            <li class="text-white/45">›</li>
                            <li class="max-w-[220px] truncate text-white/60 sm:max-w-md" :title="post.title" aria-current="page">{{ post.title }}</li>
                        </ol>
                    </nav>
                    <span class="mb-3 inline-block rounded-full bg-[#22c75e] px-3 py-1 text-xs font-bold text-white">{{ post.cat }}</span>
                    <h1 class="text-2xl font-bold leading-tight text-white md:text-4xl">{{ post.title }}</h1>
                </div>
            </div>
        </div>

        <!-- ── Meta bar ── -->
        <div class="border-b border-gray-100 bg-gray-50">
            <div class="max-w-3xl mx-auto px-6 md:px-0 py-4 flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                    <img :src="post.authorImg" class="w-10 h-10 rounded-full ring-2 ring-white shadow-sm" />
                    <div>
                        <p class="text-sm font-semibold text-gray-800">{{ post.author }}</p>
                        <div class="flex items-center gap-3 text-xs text-gray-400 mt-0.5">
                            <span class="flex items-center gap-1"><Calendar class="w-3 h-3" /> {{ post.date }}</span>
                            <span class="flex items-center gap-1"><Clock class="w-3 h-3" /> {{ post.readTime }} min de leitura</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button @click="copyLink"
                        class="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#22c75e] border border-gray-200 hover:border-[#22c75e] px-3 py-1.5 rounded-lg transition">
                        <Share2 class="w-3.5 h-3.5" /> Compartilhar
                    </button>
                    <button class="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#22c75e] border border-gray-200 hover:border-[#22c75e] px-3 py-1.5 rounded-lg transition">
                        <Bookmark class="w-3.5 h-3.5" /> Salvar
                    </button>
                </div>
            </div>
        </div>

        <!-- ── Conteúdo + Sidebar ── -->
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div class="flex gap-12 items-start">

                <!-- Artigo -->
                <article
                    class="flex-1 min-w-0 max-w-none prose prose-gray prose-base
    prose-headings:scroll-mt-28
    prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#173d26]
    prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h2:leading-tight
    prose-p:mb-5 prose-p:text-[15px] prose-p:leading-8 prose-p:text-gray-600
    prose-strong:font-semibold prose-strong:text-gray-800
    prose-a:font-medium prose-a:text-[#159447] prose-a:no-underline hover:prose-a:underline
    prose-ul:my-6 prose-ul:space-y-3
    prose-li:pl-1 prose-li:text-gray-600 prose-li:leading-7
    prose-li:marker:text-[#22c75e]
    prose-blockquote:my-9 prose-blockquote:border-l-4 prose-blockquote:border-[#22c75e]
    prose-blockquote:rounded-r-2xl prose-blockquote:bg-emerald-50/70
    prose-blockquote:px-6 prose-blockquote:py-5
    prose-blockquote:text-lg prose-blockquote:font-medium prose-blockquote:leading-relaxed prose-blockquote:text-[#1F4D2E]"
                >
                    <!-- Resumo -->
                    <!-- Sumário -->
                    <div class="not-prose my-10">
                        <p class="border-b border-gray-200 pb-3 text-base font-medium text-gray-800">
                            Conteúdo
                        </p>

                        <ul class="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-5 marker:text-gray-200">
                            <li><a href="#por-que-controlar" class="text-gray-900 transition hover:text-[#159447]">Por que controlar os gastos?</a></li>
                            <li><a href="#mapa-financeiro" class="text-gray-900 transition hover:text-[#159447]">Comece mapeando para onde vai seu dinheiro</a></li>
                            <li><a href="#categorizar-despesas" class="text-gray-900 transition hover:text-[#159447]">Como categorizar suas despesas</a></li>
                            <li><a href="#envelope-digital" class="text-gray-900 transition hover:text-[#159447]">O método do envelope digital</a></li>
                            <li><a href="#reduzir-gastos" class="text-gray-900 transition hover:text-[#159447]">Como reduzir gastos sem sofrimento</a></li>
                            <li><a href="#ferramentas" class="text-gray-900 transition hover:text-[#159447]">Ferramentas que ajudam no dia a dia</a></li>
                            <li><a href="#proximos-passos" class="text-gray-900 transition hover:text-[#159447]">Seus próximos passos</a></li>
                        </ul>
                    </div>

                    <h2 id="por-que-controlar" class="mt-12 mb-4 text-2xl font-normal tracking-tight italic">Por que controlar os gastos?</h2>

                    <p class="mb-5 leading-7">
                        A maioria das pessoas sabe que gasta mais do que deveria, mas não sabe
                        <strong>exatamente para onde o dinheiro vai</strong>. Um café aqui, um delivery ali
                        e uma assinatura esquecida lá: no fim do mês, a conta não fecha e fica difícil entender o motivo.
                    </p>

                    <p class="mb-5 leading-7">
                        Controlar os gastos não é deixar de viver. É ter clareza para decidir o que merece seu dinheiro,
                        proteger suas prioridades e abrir espaço para objetivos maiores, como montar uma reserva ou começar a investir.
                        Se quiser dar esse próximo passo, veja também nosso guia sobre
                        <a href="/artigos/investimentos-para-iniciantes" class="font-medium text-[#159447] underline decoration-emerald-200 underline-offset-4 transition hover:text-[#117641]">investimentos para iniciantes</a>.
                    </p>

                    <h2 id="mapa-financeiro" class="mt-12 mb-4 text-2xl font-normal tracking-tight italic">Comece mapeando para onde vai seu dinheiro</h2>

                    <p class="mb-5 leading-7">
                        Antes de cortar qualquer coisa, registre tudo por pelo menos 30 dias: entradas, contas fixas, compras no cartão e pequenos gastos.
                        Esse mapa financeiro revela padrões que quase sempre passam despercebidos na correria.
                    </p>

                    <figure class="not-prose my-10 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                            alt="Pessoa revisando anotações e organizando o orçamento mensal"
                            class="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
                            loading="lazy"
                        />
                        <figcaption class="px-5 py-3 text-center text-xs leading-relaxed text-gray-500">
                            Registrar os gastos transforma uma sensação de descontrole em informação para tomar decisões melhores.
                        </figcaption>
                    </figure>

                    <p class="mb-5 leading-7">
                        Comece pelas despesas recorrentes. Depois, compare o que você planejava gastar com o que realmente aconteceu.
                        Para deixar essa revisão mais simples, vale conferir como
                        <a href="/artigos/como-montar-um-orcamento-mensal" class="font-medium text-[#159447] underline decoration-emerald-200 underline-offset-4 transition hover:text-[#117641]">montar um orçamento mensal</a>
                        que funcione para a sua realidade.
                    </p>

                    <h2 id="categorizar-despesas" class="mt-12 mb-4 text-2xl font-normal tracking-tight italic">Como categorizar suas despesas</h2>

                    <p class="mb-5 leading-7">Para começar sem complicar, organize seus gastos em três grandes grupos:</p>

                    <ul class="mb-8 list-disc space-y-3 pl-5 marker:text-emerald-600">
                        <li class="leading-6"><strong>Essenciais:</strong> aluguel, contas, alimentação básica e transporte para o trabalho.</li>
                        <li class="leading-6"><strong>Estilo de vida:</strong> restaurantes, streaming, academia e compras pessoais.</li>
                        <li class="leading-6"><strong>Variáveis e imprevistos:</strong> remédios, conserto do carro e presentes inesperados.</li>
                    </ul>

                    <p class="mb-5 leading-7">
                        Não existe uma categorização perfeita. O mais importante é que ela faça sentido para você.
                        <strong>Consistência vale mais do que perfeição.</strong> Se uma categoria não ajuda na sua decisão, ajuste o nome ou una gastos parecidos.
                    </p>

                    <blockquote class="my-10 border-l-4 border-[#117641] pl-5">
                        <p class="text-lg font-medium italic leading-8 text-gray-700">
                            Não é apenas quanto você ganha, mas quanto consegue guardar e direcionar que constrói sua saúde financeira.
                        </p>
                        <footer class="mt-3 text-sm font-medium text-gray-500 before:content-['—_']">
                            Realizze <cite class="italic text-[#159447]">Finanças mais simples</cite>
                        </footer>
                    </blockquote>

                    <h2 id="envelope-digital" class="mt-14 mb-4 text-2xl font-normal tracking-tight italic">O método do envelope digital</h2>

                    <p class="mb-5 leading-7">
                        O método do envelope consiste em separar um limite para cada objetivo antes de gastar. No digital, você pode aplicar essa ideia no
                        <a href="/app" class="font-medium text-[#159447] underline decoration-emerald-200 underline-offset-4 transition hover:text-[#117641]">Realizze</a>
                        usando categorias, limites de orçamento ou contas separadas. Quando o valor de uma categoria acaba, você para de gastar nela — ou decide conscientemente tirar dinheiro de outra prioridade.
                    </p>

                    <figure class="not-prose my-10 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                        <img
                            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80"
                            alt="Pessoa usando o celular para acompanhar categorias do orçamento"
                            class="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
                            loading="lazy"
                        />
                        <figcaption class="px-5 py-3 text-center text-xs leading-relaxed text-gray-500">
                            Separar o orçamento por categorias ajuda a enxergar prioridades e evitar gastos por impulso.
                        </figcaption>
                    </figure>

                    <div class="not-prose my-10 flex items-start gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22c75e] text-white">
                            <Lightbulb class="h-5 w-5" />
                        </div>
                        <div>
                            <p class="mb-1 text-sm font-bold text-[#1F4D2E]">Dica prática</p>
                            <p class="text-sm leading-6 text-gray-700">
                                Reserve 15 minutos toda segunda-feira para revisar os gastos da semana anterior. Esse pequeno ritual cria consciência financeira sem complicar sua rotina.
                            </p>
                        </div>
                    </div>

                    <h2 id="reduzir-gastos" class="mt-12 mb-4 text-2xl italic tracking-tight">Como reduzir gastos sem sofrimento</h2>

                    <p class="mb-5 leading-7">Cortar gastos não precisa significar abrir mão de tudo. Algumas estratégias práticas realmente ajudam:</p>

                    <ul class="mb-8 list-disc space-y-3 pl-5 marker:text-emerald-600">
                        <li class="leading-6"><strong>Regra das 48 horas:</strong> antes de uma compra acima de R$ 100, espere dois dias. Muitos impulsos desaparecem nesse período.</li>
                        <li class="leading-6"><strong>Auditoria de assinaturas:</strong> revise cobranças recorrentes e cancele serviços que você não usa.</li>
                        <li class="leading-6"><strong>Uma refeição feita em casa a mais:</strong> reduzir um delivery por semana pode gerar uma boa economia no mês.</li>
                        <li class="leading-6"><strong>Negocie contratos:</strong> internet, celular e TV costumam ter margem para desconto, principalmente ao solicitar cancelamento.</li>
                    </ul>

                    <p class="mb-5 leading-7">
                        A economia gerada pode ir direto para a sua reserva. Leia nosso conteúdo sobre
                        <a href="/artigos/reserva-de-emergencia" class="font-medium text-[#159447] underline decoration-emerald-200 underline-offset-4 transition hover:text-[#117641]">como criar uma reserva de emergência</a>
                        para definir um destino claro para esse valor.
                    </p>

                    <h2 id="ferramentas" class="mt-14 mb-4 text-2xl italic tracking-tight">Ferramentas que ajudam no dia a dia</h2>

                    <p class="mb-5 leading-7">A melhor ferramenta é a que você realmente consegue manter no dia a dia. Algumas opções:</p>

                    <ul class="mb-4 list-disc space-y-3 pl-4 marker:text-emerald-600">
                        <li class="leading-6"><a href="/app" class="font-semibold text-[#159447] transition hover:text-[#117641]">Realizze:</a> para lançamentos rápidos e uma visão clara do orçamento.</li>
                        <li class="leading-6"><a href="https://sheets.google.com" target="_blank" rel="noopener noreferrer" class="font-semibold text-[#159447] transition hover:text-[#117641]">Google Sheets:</a> gratuito e flexível para quem gosta de personalizar.</li>
                        <li class="leading-6"><a href="/artigos/planejamento-financeiro" class="font-semibold text-[#159447] transition hover:text-[#117641]">Planejamento financeiro:</a> um guia para organizar metas, prazos e prioridades.</li>
                    </ul>

                    <h2 id="proximos-passos" class="mt-14 mb-4 text-2xl italic tracking-tight">Seus próximos passos</h2>

                    <p class="mb-5 leading-7">
                        Comece hoje: registre os gastos desta semana, categorize-os e observe os padrões. Em poucos dias, você já terá informações suficientes para tomar decisões melhores.
                        Depois, defina uma meta simples e acompanhe sua evolução. O importante é construir um sistema que você consiga repetir.
                    </p>

                    <!-- CTA -->
                    <div class="not-prose relative mt-16 overflow-hidden rounded-lg bg-gradient-to-br from-[#1F4D2E] via-[#176b3a] to-[#117641] px-5 py-6 shadow-lg shadow-emerald-950/15 sm:px-6 md:px-8 md:py-7">
                        <div class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10"></div>
                        <div class="pointer-events-none absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl"></div>

                        <div class="relative flex flex-col items-center gap-5 text-center lg:flex-roww lg:items-center lg:justify-between lg:gap-6 lg:text-left">
                            <div>
                                <h3 class="text-lg font-bold leading-tight tracking-tight text-white md:text-xl">
                                    Organize suas finanças <span class="text-emerald-200">sem complicação.</span>
                                </h3>
                                <p class="mx-auto mt-2 max-w-md text-xs leading-5 text-emerald-50/80 lg:mx-0">Comece agora e tenha clareza sobre seus gastos, metas e contas em um só lugar.</p>
                            </div>
                            <a href="/app" class="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-2 text-xs font-bold text-[#117641] shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-lg active:translate-y-0">
                                <Send class="h-3.5 w-3.5" />
                                Teste gratuitamente
                            </a>
                        </div>
                    </div>

                    <!-- Tags -->
                    <div class="not-prose mt-12 border-t border-gray-100 pt-8">
                        <p class="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">Assuntos deste artigo</p>
                        <div class="flex flex-wrap gap-2">
                            <a href="/temas/organizacao-financeira" class="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-[#22c75e]/10 hover:text-[#159447]">#OrganizaçãoFinanceira</a>
                            <a href="/temas/orcamento" class="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-[#22c75e]/10 hover:text-[#159447]">#Orçamento</a>
                            <a href="/temas/controle-de-gastos" class="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-[#22c75e]/10 hover:text-[#159447]">#ControleDeGastos</a>
                        </div>
                    </div>

                    <!-- Compartilhar -->
                    <div class="not-prose mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 p-4">
                        <span class="mr-1 text-sm font-semibold text-gray-700">Compartilhar:</span>
                        <a href="#" class="rounded-lg bg-[#1877F2] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1464d8]">Facebook</a>
                        <a href="#" class="rounded-lg bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800">X / Twitter</a>
                        <a href="#" class="rounded-lg bg-[#25D366] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#20ba59]">WhatsApp</a>
                        <button @click="copyLink" class="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-gray-600 ring-1 ring-gray-200 transition hover:bg-gray-100">
                            <Share2 class="h-3.5 w-3.5" />
                            Copiar link
                        </button>
                    </div>
                </article>

                <!-- ── Sidebar ── -->
                <aside class="hidden lg:flex flex-col gap-6 w-72 shrink-0 sticky top-24">

                    <!-- Índice -->
                    <div class="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Neste artigo</p>
                        <nav class="space-y-1">
                            <a v-for="item in toc" :key="item.id" :href="`#${item.id}`"
                                class="block text-sm text-gray-600 hover:text-[#22c75e] hover:pl-2 transition-all duration-200 py-1 border-l-2 border-transparent hover:border-[#22c75e] pl-3">
                                {{ item.label }}
                            </a>
                        </nav>
                    </div>

                    <!-- Newsletter sidebar -->
                    <div class="border-t-2 border-emerald-600 mt-5 pt-4">
                        <div class="flex items-center justify-between">
                            <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Receba a newsletter</p>
                            <svg class="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M3 8.5 12 3l9 5.5v10A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5v-10Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="m3.5 8.5 8.5 6 8.5-6" />
                            </svg>
                        </div>

                        <div class="bg-gradient-to-br from-[#1F4D2E] to-[#117641] rounded-2xl text-white mt-5 p-5 shadow-sm">
                            <p class="text-sm leading-6 text-[#F9F9F9F9]">
                                Receba dicas práticas para organizar seu dinheiro e alcançar suas metas.
                            </p>

                            <form class="mt-5 flex gap-2 text-white">
                                <input type="email" placeholder="Seu melhor e-mail" class="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"/>
                                <button type="submit" aria-label="Inscrever-se na newsletter" class="flex w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                                    <Send class="h-5 w-5" />
                                </button>
                            </form>

                            <p class="mt-3 text-center text-[11px] text-white/60">
                                ✦ Sem spam. Cancele quando quiser.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

        <!-- ── Bio do autor ── -->
        <div class="border-t border-gray-100 bg-gray-50">
            <div class="mx-auto max-w-3xl px-4 py-10 sm:px-6">
                <div class="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <!-- Avatar -->
                    <a
                        :href="post.authorUrl"
                        class="shrink-0"
                        :aria-label="`Ver perfil de ${post.author}`"
                    >
                        <img
                            :src="post.authorImg"
                            :alt="post.author"
                            class="h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-md transition-transform duration-300 hover:scale-105"
                        />
                    </a>

                    <!-- Conteúdo -->
                    <div class="min-w-0 flex-1">
                        <div class="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p class="mb-1 text-xs font-bold uppercase tracking-widest text-[#22c75e]">
                                    Sobre o autor
                                </p>

                                <a
                                    :href="post.authorUrl"
                                    class="text-lg font-bold text-gray-900 transition-colors hover:text-[#22c75e]"
                                >
                                    {{ post.author }}
                                </a>
                            </div>

                            <a
                                :href="post.authorUrl"
                                class="inline-flex items-center gap-2 text-sm font-semibold text-[#22c75e] transition-colors hover:text-[#168b42]"
                            >
                                Ver mais posts
                                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <p class="text-sm leading-relaxed text-gray-500">
                            {{ post.authorBio }}
                        </p>

                        <div class="mt-4 flex flex-wrap items-center gap-4">
                    <span
                        v-if="post.authorJob"
                        class="text-xs font-medium text-gray-500"
                    >
                        {{ post.authorJob }}
                    </span>

                            <a
                                v-if="post.authorLinkedin"
                                :href="post.authorLinkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn do autor"
                                class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-110"
                            >
                                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29h.01ZM5.31 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.09 20.45H3.53V8.98h3.56v11.47Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ── Posts relacionados ── -->
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Você também pode gostar</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <a v-for="rel in related" :key="rel.slug" :href="`/blog/post/${rel.slug}`" class="group bg-white rounded-md overflow-hidden shadow-md hover:shadow-md transition-all duration-300 flex flex-col border border-gray-100">
                    <div class="relative h-44 overflow-hidden">
                        <img :src="rel.img" :alt="rel.title" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <span class="absolute bottom-3 left-3 bg-white/90 text-gray-700 text-[11px] px-2.5 py-0.5 rounded-full font-semibold backdrop-blur-sm">
                            {{ rel.cat }}
                        </span>
                    </div>

                    <div class="p-4 flex flex-col flex-1">
                        <h4 class="text-sm font-bold text-gray-900 group-hover:text-[#22c75e] transition-colors line-clamp-2 leading-snug">{{ rel.title }}</h4>
                        <p class="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-2">{{ rel.excerpt }}</p>
                        <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                            <div class="flex items-center gap-2">
                                <img :src="rel.authorImg" :alt="rel.author || 'Autor'" class="w-6 h-6 rounded-full object-cover border border-gray-100" loading="lazy"/>
                                <div class="leading-tight">
                                    <span class="block text-[10px] font-semibold text-gray-600">{{ rel.author || 'Equipe Realizze' }}</span>
                                    <span class="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                                        <Clock class="w-2.5 h-2.5" />
                                        {{ rel.readTime }} min
                                    </span>
                                </div>
                            </div>
                            <span class="text-[11px] font-bold text-[#22c75e]">Ler →</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <!-- ── Footer ── -->
        <Footer />
    </main>

    <!-- Botão voltar ao topo -->
    <button v-if="scrolledUp" @click="scrollTop"
        class="fixed bottom-6 right-6 bg-[#22c75e] hover:bg-[#1aad52] text-white rounded-md shadow-md flex items-center justify-center transition-all duration-200 z-50 w-10 h-10">
        <ChevronUp class="w-5 h-5" />
    </button>
</template>
