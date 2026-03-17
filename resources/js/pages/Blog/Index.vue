<template>
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">

                <!-- Logo -->
                <div class="flex items-center shrink-0">
                    <a href="#" class="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d" alt="Organizze" class="h-8 w-auto" />
                        <span class="hidden text-sm font-medium text-gray-600 sm:inline">Blog</span>
                    </a>
                </div>

                <!-- Menu / Links Centralizado -->
                <div class="hidden md:flex items-center justify-center space-x-8 flex-1">
                    <a href="#home" class="capitalize relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </a>
                    <a href="#categorias" class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Categorias
                    </a>
                    <a href="#artigos" class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Artigos
                    </a>
                    <a href="#mais-lido" class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
                        Mais lido
                    </a>
                </div>

                <div class="flex items-center gap-3">
                    <!-- Search Bar -->
                    <div class="hidden md:flex items-center relative">
                        <button class="p-2 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        <div class="absolute top-14 right-0 w-80">
                            <div class="bg-white rounded-xl shadow-xl border border-gray-200 p-4 hidden">
                                <div class="relative">
                                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input type="text" placeholder="Buscar artigos..." class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16C64F]/30 focus:border-[#16C64F]" />
                                </div>

                                <div class="mt-4 text-sm">
                                    <p class="text-gray-500 font-medium mb-2">Buscas recentes:</p>
                                    <div class="space-y-1">
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition">
                                            Como organizar finanças
                                        </a>
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition">
                                            Dicas de produtividade
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Organizze -->
                    <a href="#Organizze" class="relative overflow-hidden px-6 py-2 rounded-md font-medium text-white bg-[#117641] group">
                        <span class="absolute inset-0 bg-[#006A33] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        <span class="relative z-10">Conheça o organizze</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <main class="flex-1 pt-12 lg:pt-20">

        <section class="max-w-7xl mx-auto px-4 py-10">
                    <div class="relative flex flex-col md:flex-row overflow-hidden rounded-md shadow-lg">
                        <div class="relative md:w-2/3 h-65 md:h-90">
                            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" alt="Controle de gastos" class="w-full h-full object-cover" />
                            <span class="absolute bottom-4 left-4 bg-[#1F3D2B] text-white text-xs px-3 py-1 rounded-full"> Controle de Gastos</span>

                            <button class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>

                        <div class="md:w-1/3 bg-[#2F4F3F] p-6 md:p-8 flex flex-col justify-center">
                            <h2 class="text-white text-xl md:text-2xl font-semibold leading-snug">
                                Gastos diários: como mapear, reduzir e controlar sem sofrimento
                            </h2>
                            <p class="mt-4 text-sm text-gray-300 leading-relaxed line-clamp-3">
                                Manter as finanças pessoais organizadas não precisa ser complicado.
                                Neste artigo, você vai aprender como identificar seus gastos diários,
                                entender para onde seu dinheiro está indo e aplicar estratégias simples
                                para reduzir desperdícios e tomar decisões financeiras mais conscientes.
                            </p>

                            <div class="mt-5 flex items-center gap-4 text-xs text-gray-300">
                                <span class="flex items-center gap-2 capitalize">
                                    <img src="https://i.pravatar.cc/40?img=12" alt="Autor" class="w-5 h-5 rounded-full object-cover" />
                                    Carlos Júnior
                                </span>
                                <span>23/01/2026</span>
                                <span>7 min de leitura</span>
                            </div>
                        </div>

                        <div class="absolute bottom-4 right-4 flex gap-2">
                            <span class="w-2 h-2 rounded-full bg-green-400"></span>
                            <span class="w-2 h-2 rounded-full bg-white/40"></span>
                            <span class="w-2 h-2 rounded-full bg-white/40"></span>
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
                            Explore os assuntos mais relevantes e encontre conteúdos criados para facilitar
                            suas decisões financeiras no dia a dia.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                        <a href="#" class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <img src="https://www.organizze.com.br/blog/wp-content/uploads/MEI-280x210-1.jpg" alt="MEI" class="w-full h-44 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <span class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-90"></span>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">MEI & Empreendedorismo</h3>
                                <p class="text-white/80 text-xs mt-1">Obrigações, impostos e dicas</p>
                            </div>
                        </a>

                        <a href="#" class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <img src="https://www.organizze.com.br/blog/wp-content/uploads/Investimento-280x210-1.jpg"
                                alt="Investimentos"
                                class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Investimentos</h3>
                                <p class="text-white/80 text-xs mt-1">Renda fixa e variável</p>
                            </div>
                        </a>

                        <a href="#" class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <img src="https://www.organizze.com.br/blog/wp-content/uploads/Direitos-do-consumidor-280x210-1.jpg"
                                alt="Orçamento"
                                class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Orçamento</h3>
                                <p class="text-white/80 text-xs mt-1">Controle financeiro</p>
                            </div>
                        </a>

                        <a href="#" class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <img src="https://www.organizze.com.br/blog/wp-content/uploads/D%C2%A1vidas-280x210-1.jpg"
                                alt="Impostos"
                                class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Impostos</h3>
                                <p class="text-white/80 text-xs mt-1">Declarações e taxas</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- Artigo 1 -->
                <article class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="relative h-52 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1470&auto=format&fit=crop"
                            class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        <span class="absolute bottom-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">Investimentos</span>
                    </div>
                    <div class="p-5 flex flex-col gap-3">
                        <h3 class="text-lg font-semibold leading-snug text-gray-900 group-hover:text-green-700 transition-colors">
                            <a href="#">
                                Investimentos para iniciantes: por onde começar com pouco dinheiro
                            </a>
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            Descubra as melhores opções de investimento para quem está começando e quer fazer o dinheiro trabalhar por você.
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    9 min leitura
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-2 transition-all">
                                Ler artigo
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artigo 2 -->
                <article class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="relative h-52 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1470&auto=format&fit=crop"
                            class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        <span class="absolute bottom-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">Reserva de Emergência</span>
                    </div>
                    <div class="p-5 flex flex-col gap-3">
                        <h3 class="text-lg font-semibold leading-snug text-gray-900 group-hover:text-green-700 transition-colors">
                            <a href="#">
                                Por que você precisa de uma reserva de emergência agora
                            </a>
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            Entenda a importância de ter um colchão financeiro e veja um passo a passo prático para montar o seu.
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    6 min leitura
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-2 transition-all">
                                Ler artigo
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artigo 3 -->
                <article class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="relative h-52 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop"
                            class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        <span class="absolute bottom-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">Planejamento</span>
                    </div>
                    <div class="p-5 flex flex-col gap-3">
                        <h3 class="text-lg font-semibold leading-snug text-gray-900 group-hover:text-green-700 transition-colors">
                            <a href="#">
                                Como montar um orçamento mensal que você realmente vai seguir
                            </a>
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            Modelos prontos e dicas práticas para criar um planejamento financeiro mensal realista e sustentável.
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    8 min leitura
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-2 transition-all">
                                Ler artigo
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artigo 4 -->
                <article class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="relative h-52 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop"
                            class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        <span class="absolute bottom-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">Dívidas</span>
                    </div>
                    <div class="p-5 flex flex-col gap-3">
                        <h3 class="text-lg font-semibold leading-snug text-gray-900 group-hover:text-green-700 transition-colors">
                            <a href="#">
                                Saindo das dívidas: estratégias que funcionam de verdade
                            </a>
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            Conheça os métodos avalanche e bola de neve para quitar suas dívidas mais rápido e retomar o controle das suas finanças.
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    11 min leitura
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-2 transition-all">
                                Ler artigo
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artigo 5 -->
                <article class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="relative h-52 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        <span class="absolute bottom-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">Renda Extra</span>
                    </div>
                    <div class="p-5 flex flex-col gap-3">
                        <h3 class="text-lg font-semibold leading-snug text-gray-900 group-hover:text-green-700 transition-colors">
                            <a href="#">10 formas de ganhar renda extra sem sair de casa em 2025</a>
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            Ideias práticas e validadas para aumentar sua renda no tempo livre, usando habilidades que você já tem.
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    10 min leitura
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-2 transition-all">
                                Ler artigo
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artigo 6 -->
                <article class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="relative h-52 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1470&auto=format&fit=crop"
                            class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        <span class="absolute bottom-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">Aposentadoria</span>
                    </div>
                    <div class="p-5 flex flex-col gap-3">
                        <h3 class="text-lg font-semibold leading-snug text-gray-900 group-hover:text-green-700 transition-colors">
                            <a href="#">
                                Previdência privada ou Tesouro Direto: qual é melhor para se aposentar?
                            </a>
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            Uma comparação honesta entre as duas opções mais populares para quem quer garantir uma aposentadoria tranquila.
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    13 min leitura
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-2 transition-all">
                                Ler artigo
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artigo 7 -->
                <article class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="relative h-52 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        <span class="absolute bottom-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">Cartão de Crédito</span>
                    </div>
                    <div class="p-5 flex flex-col gap-3">
                        <h3 class="text-lg font-semibold leading-snug text-gray-900 group-hover:text-green-700 transition-colors">
                            <a href="#">
                                Cartão de crédito: vilão ou aliado? Como usar sem se endividar
                            </a>
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            Dicas para usar o cartão com inteligência, acumular pontos e milhas e jamais pagar juros rotativo.
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    7 min leitura
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-2 transition-all">
                                Ler artigo
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artigo 8 -->
                <article class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="relative h-52 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1470&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        <span class="absolute bottom-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">Imóveis</span>
                    </div>
                    <div class="p-5 flex flex-col gap-3">
                        <h3 class="text-lg font-semibold leading-snug text-gray-900 group-hover:text-green-700 transition-colors">
                            <a href="#">Comprar ou alugar? A conta que você precisa fazer antes de decidir</a>
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            Analisamos os cenários financeiros de cada opção para te ajudar a tomar a melhor decisão de acordo com o seu momento de vida.
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    12 min leitura
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-2 transition-all">
                                Ler artigo
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Artigo 9 -->
                <article class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="relative h-52 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1470&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                        <span class="absolute bottom-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">Mentalidade Financeira</span>
                    </div>
                    <div class="p-5 flex flex-col gap-3">
                        <h3 class="text-lg font-semibold leading-snug text-gray-900 group-hover:text-green-700 transition-colors">
                            <a href="#">
                                Os hábitos financeiros das pessoas que enriquecem devagar (e de forma sólida)
                            </a>
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            Descubra quais comportamentos e mentalidades separam quem constrói riqueza de verdade de quem apenas sonha com ela.
                        </p>
                        <div class="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    9 min leitura
                                </span>
                            </div>
                            <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-2 transition-all">
                                Ler artigo
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
            </div>

            <div class="mt-12 flex justify-center">
                <button class="px-8 py-3 rounded-md border border-green-700 hover:cursor-pointer text-green-700 font-semibold hover:bg-green-700 hover:text-white ransition-colors duration-200">
                    Carregar mais
                </button>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-[#2F4F3F] mt-10">
            <div class="max-w-6xl mx-auto px-4 py-10">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    <div class="flex flex-col gap-4">
                        <div>
                            <img
                                src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                                alt="Organizze" class="h-8 w-auto"
                                style="filter: brightness(0) invert(1);"
                            />

                        </div>
                        <p class="text-sm text-gray-300 max-w-xs leading-relaxed">
                            Simplificando o controle financeiro para você tomar decisões melhores todos os dias.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 class="text-sm font-semibold text-white mb-3">Institucional</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Quem somos</a></li>
                                <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Blog</a></li>
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
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store" class="h-10"
                                />
                            </a>
                            <a href="#" class="hover:opacity-90 transition">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play" class="h-10"
                                />
                            </a>
                        </div>

                        <!-- QR Code -->
                        <div class="flex items-center gap-3 mt-2">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.organizze.com.br"
                                alt="QR Code para download do app"
                                class="h-20 w-20 rounded-md bg-white p-1"
                            />
                            <p class="text-xs text-gray-300 leading-snug max-w-30">
                                Escaneie o QR Code e baixe o app no seu celular
                            </p>
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
</template>
