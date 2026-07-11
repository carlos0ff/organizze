<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Clock, Calendar, Share2, Bookmark, ChevronUp, ArrowLeft } from 'lucide-vue-next';

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
    { slug: 'orcamento-que-funciona',   img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600&q=70', cat: 'Orçamento',  title: 'Como montar um orçamento que realmente funciona',        readTime: 6, date: '10/01/2026', authorImg: 'https://i.pravatar.cc/40?img=12' },
    { slug: 'reserva-emergencia',        img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=70', cat: 'Investimentos', title: 'Reserva de emergência: por onde começar',              readTime: 5, date: '01/03/2026', authorImg: 'https://i.pravatar.cc/40?img=8'  },
    { slug: 'metodo-50-30-20',           img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=70', cat: 'Orçamento',  title: 'Método 50-30-20: o orçamento que cabe no bolso',         readTime: 9, date: '08/02/2026', authorImg: 'https://i.pravatar.cc/40?img=5'  },
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
        <div class="relative w-full h-[340px] md:h-[480px] overflow-hidden">
            <img :src="post.img" :alt="post.title"
                class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <!-- Voltar -->
            <a href="/blog/artigos"
                class="absolute top-6 left-6 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20 hover:bg-white/25 transition">
                <ArrowLeft class="w-4 h-4" /> Voltar
            </a>

            <!-- Categoria + título -->
            <div class="absolute bottom-0 left-0 right-0 px-6 md:px-0">
                <div class="max-w-3xl mx-auto pb-8 md:pb-12">
                    <span class="inline-block bg-[#22c75e] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {{ post.cat }}
                    </span>
                    <h1 class="text-2xl md:text-4xl font-bold text-white leading-tight">
                        {{ post.title }}
                    </h1>
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
                <article class="flex-1 min-w-0 prose prose-gray prose-base max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900
                    prose-p:text-gray-600 prose-p:leading-relaxed
                    prose-a:text-[#22c75e] prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-800
                    prose-li:text-gray-600
                    prose-blockquote:border-[#22c75e] prose-blockquote:bg-emerald-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-1">

                    <p class="text-lg text-gray-600 leading-relaxed font-normal not-prose mb-8 border-l-4 border-[#22c75e] pl-5 bg-emerald-50/40 py-4 rounded-r-xl">
                        {{ post.excerpt }}
                    </p>

                    <h2 id="por-que-mapear">Por que mapear seus gastos?</h2>
                    <p>
                        A maioria das pessoas sabe que gasta mais do que deveria, mas não sabe <strong>exatamente onde o dinheiro vai</strong>. Um café aqui, um delivery ali, uma assinatura esquecida lá — no fim do mês, a conta não fecha e ninguém consegue explicar por quê.
                    </p>
                    <p>
                        Mapear os gastos diários é o primeiro passo para quebrar esse ciclo. Quando você enxerga claramente para onde vai cada real, consegue tomar decisões conscientes em vez de agir no piloto automático.
                    </p>

                    <h2 id="como-categorizar">Como categorizar despesas</h2>
                    <p>Divida seus gastos em três grandes grupos:</p>
                    <ul>
                        <li><strong>Essenciais:</strong> aluguel, contas, alimentação básica, transporte para o trabalho.</li>
                        <li><strong>Estilo de vida:</strong> restaurantes, streaming, academia, compras de roupa.</li>
                        <li><strong>Variáveis imprevistos:</strong> remédio, conserto de carro, presente inesperado.</li>
                    </ul>
                    <p>
                        Não existe categorização certa ou errada — o que importa é que faça sentido para você. A consistência é mais importante que a perfeição.
                    </p>

                    <blockquote>
                        <p>"Não é quanto você ganha, mas quanto você guarda que define sua saúde financeira."</p>
                    </blockquote>

                    <h2 id="metodo-envelope">O método do envelope digital</h2>
                    <p>
                        O método do envelope é uma das técnicas mais antigas e eficazes de controle financeiro. A ideia é simples: você separa o dinheiro em "envelopes" destinados a cada categoria de gasto antes do mês começar.
                    </p>
                    <p>
                        No mundo digital, você pode fazer isso com o <strong>Organizze</strong>: crie contas separadas ou use as categorias do app para simular os envelopes. Quando uma categoria esgota, você para de gastar nela — ou faz uma escolha consciente de transferir de outro envelope.
                    </p>

                    <div class="not-prose bg-[#22c75e]/8 border border-[#22c75e]/20 rounded-2xl p-6 my-8">
                        <p class="text-sm font-bold text-[#1F4D2E] mb-2">Dica prática</p>
                        <p class="text-sm text-gray-700 leading-relaxed">
                            Reserve 15 minutos toda segunda-feira para revisar os gastos da semana anterior. Esse ritual simples aumenta a consciência financeira mais do que qualquer planilha complexa.
                        </p>
                    </div>

                    <h2 id="reducao-pratica">Redução prática sem sofrimento</h2>
                    <p>
                        Cortar gastos não precisa ser sinônimo de privação. Algumas estratégias que realmente funcionam:
                    </p>
                    <ul>
                        <li><strong>Regra das 48 horas:</strong> antes de comprar qualquer coisa acima de R$ 100, espere dois dias. Muitos impulsos passam.</li>
                        <li><strong>Auditoria de assinaturas:</strong> liste todas as assinaturas mensais e cancele as que não usa há mais de 30 dias.</li>
                        <li><strong>Cozinhe uma refeição a mais:</strong> reduzir um delivery por semana pode economizar R$ 150–250 por mês.</li>
                        <li><strong>Negocie sempre:</strong> planos de internet, TV e celular quase sempre têm margem para redução quando você liga para cancelar.</li>
                    </ul>

                    <h2 id="ferramentas">Ferramentas que ajudam</h2>
                    <p>
                        A melhor ferramenta é aquela que você realmente usa. Algumas opções:
                    </p>
                    <ul>
                        <li><strong>Organizze:</strong> ideal para lançamentos rápidos e visão geral do orçamento.</li>
                        <li><strong>Planilha no Google Sheets:</strong> gratuita e flexível, boa para quem gosta de personalizar.</li>
                        <li><strong>Guardinha:</strong> foco em despesas de supermercado e gastos diários.</li>
                    </ul>
                    <p>
                        Independente da ferramenta, o hábito de registrar é o que faz diferença. Comece simples: um caderno já funciona.
                    </p>

                    <h2 id="conclusao">Conclusão</h2>
                    <p>
                        Controlar gastos diários não exige sacrifício extremo nem planilhas de PhD. Começa com consciência — saber para onde vai o dinheiro — e evolui para decisões melhores ao longo do tempo.
                    </p>
                    <p>
                        Comece hoje: anote os gastos desta semana, categorize-os e observe o resultado. Uma semana de dados já é suficiente para revelar padrões que você nunca percebeu.
                    </p>

                    <!-- Tags -->
                    <div class="not-prose flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
                        <span v-for="tag in post.tags" :key="tag"
                            class="text-xs font-medium text-gray-500 bg-gray-100 hover:bg-[#22c75e]/10 hover:text-[#22c75e] px-3 py-1.5 rounded-full cursor-pointer transition-colors">
                            #{{ tag }}
                        </span>
                    </div>

                    <!-- Compartilhar -->
                    <div class="not-prose mt-8 flex flex-wrap items-center gap-3">
                        <span class="text-sm font-semibold text-gray-700">Compartilhar:</span>
                        <a href="#" class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1877F2] hover:bg-[#1464d8] px-4 py-2 rounded-lg transition">
                            Facebook
                        </a>
                        <a href="#" class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1DA1F2] hover:bg-[#1a8fd8] px-4 py-2 rounded-lg transition">
                            Twitter / X
                        </a>
                        <a href="#" class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] px-4 py-2 rounded-lg transition">
                            WhatsApp
                        </a>
                        <button @click="copyLink"
                            class="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
                            <Share2 class="w-3.5 h-3.5" /> Copiar link
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

                    <!-- Progress -->
                    <div class="bg-white rounded-2xl p-5 border border-gray-100">
                        <div class="flex justify-between text-xs text-gray-400 mb-2">
                            <span>Progresso da leitura</span>
                            <span class="font-semibold text-[#22c75e]">{{ readProgress }}%</span>
                        </div>
                        <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-[#22c75e] rounded-full transition-all duration-300"
                                :style="`width: ${readProgress}%`" />
                        </div>
                    </div>

                    <!-- Newsletter sidebar -->
                    <div class="bg-gradient-to-br from-[#1F4D2E] to-[#117641] rounded-2xl p-5 text-white">
                        <p class="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2">Newsletter</p>
                        <p class="text-sm font-bold leading-snug mb-3">Dicas de finanças toda semana no seu e-mail</p>
                        <input type="email" placeholder="seu@email.com"
                            class="w-full px-3 py-2 rounded-xl text-sm bg-white/10 border border-white/20 text-white placeholder-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-white/20 mb-3" />
                        <button class="w-full py-2 rounded-xl text-sm font-bold text-[#117641] bg-white hover:bg-emerald-50 transition-colors">
                            Inscrever-se
                        </button>
                    </div>
                </aside>
            </div>
        </div>

        <!-- ── Bio do autor ── -->
        <div class="bg-gray-50 border-t border-gray-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 py-10">
                <div class="flex items-start gap-5">
                    <img :src="post.authorImg" class="w-16 h-16 rounded-full ring-4 ring-white shadow-md shrink-0" />
                    <div>
                        <p class="text-xs font-bold uppercase tracking-widest text-[#22c75e] mb-1">Sobre o autor</p>
                        <p class="text-base font-bold text-gray-900 mb-1">{{ post.author }}</p>
                        <p class="text-sm text-gray-500 leading-relaxed">{{ post.authorBio }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ── Posts relacionados ── -->
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Você também pode gostar</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <a v-for="rel in related" :key="rel.slug" :href="`/blog/post/${rel.slug}`"
                    class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-gray-100">
                    <div class="relative h-44 overflow-hidden">
                        <img :src="rel.img" :alt="rel.title"
                            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <span class="absolute bottom-3 left-3 bg-white/90 text-gray-700 text-[11px] px-2.5 py-0.5 rounded-full font-semibold backdrop-blur-sm">
                            {{ rel.cat }}
                        </span>
                    </div>
                    <div class="p-4 flex flex-col flex-1">
                        <h4 class="text-sm font-bold text-gray-900 group-hover:text-[#22c75e] transition-colors line-clamp-2 mb-auto leading-snug">
                            {{ rel.title }}
                        </h4>
                        <div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                            <div class="flex items-center gap-2">
                                <img :src="rel.authorImg" class="w-5 h-5 rounded-full" loading="lazy" />
                                <span class="text-[10px] text-gray-400 flex items-center gap-1">
                                    <Clock class="w-2.5 h-2.5" />{{ rel.readTime }} min
                                </span>
                            </div>
                            <span class="text-[11px] font-bold text-[#22c75e]">Ler →</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <!-- ── Footer ── -->
        <footer class="bg-[#2F4F3F] mt-4">
            <div class="max-w-6xl mx-auto px-4 py-10">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    <div class="flex flex-col gap-4">
                        <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                            alt="Organizze" class="h-8 w-auto" style="filter: brightness(0) invert(1)" />
                        <p class="text-sm text-gray-300 max-w-xs leading-relaxed">
                            Simplificando o controle financeiro para você tomar decisões melhores todos os dias.
                        </p>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 class="text-sm font-semibold text-white mb-3">Institucional</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Quem somos</a></li>
                                <li><a href="/blog" class="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Trabalhe conosco</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-white mb-3">Ajuda</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Central de ajuda</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Contato</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-white mb-3">Legal</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Termos de uso</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Privacidade</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <h4 class="text-sm font-semibold text-white">Baixe o app</h4>
                        <div class="flex gap-3">
                            <a href="#" class="hover:opacity-90 transition">
                                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store" class="h-10" />
                            </a>
                            <a href="#" class="hover:opacity-90 transition">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play" class="h-10" />
                            </a>
                        </div>
                        <div class="flex items-center gap-3 mt-2">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.organizze.com.br"
                                alt="QR Code" class="h-20 w-20 rounded-md bg-white p-1" />
                            <p class="text-xs text-gray-300 leading-snug max-w-[120px]">Escaneie e baixe o app no seu celular</p>
                        </div>
                    </div>
                </div>
                <div class="border-t border-[#3A5849] mt-10 pt-4">
                    <p class="text-center text-xs text-gray-300">
                        © {{ new Date().getFullYear() }} Organizze Tecnologia Ltda. CNPJ 35.381.093/0001-26
                    </p>
                </div>
            </div>
        </footer>
    </main>

    <!-- Botão voltar ao topo -->
    <button v-if="scrolledUp" @click="scrollTop"
        class="fixed bottom-6 right-6 z-50 w-10 h-10 bg-[#22c75e] hover:bg-[#1aad52] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200">
        <ChevronUp class="w-5 h-5" />
    </button>
</template>
