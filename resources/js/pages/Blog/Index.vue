<template>
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center shrink-0">
                    <a href="#" class="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <img
                            src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                            alt="Organizze"
                            class="h-8 w-auto"
                        />
                        <span class="hidden text-sm font-medium text-gray-600 sm:inline">Blog</span>
                    </a>
                </div>

                <!-- Menu / Links Centralizado -->
                <div class="hidden md:flex items-center justify-center space-x-8 flex-1">
                    <a
                        href="#home"
                        class="capitalize relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </a>
                    <a
                        href="#categorias"
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Categorias
                    </a>
                    <a
                        href="#artigos"
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Artigos
                    </a>
                    <a
                        href="#mais-lido"
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Mais lido
                    </a>
                </div>

                <div class="flex items-center gap-3">
                    <!-- Search Bar -->
                    <div class="hidden md:flex items-center relative">
                        <button class="p-2 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        <div class="absolute top-14 right-0 w-80">
                            <div class="bg-white rounded-xl shadow-xl border border-gray-200 p-4 hidden">
                                <div class="relative">
                                    <svg
                                        class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Buscar artigos..."
                                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16C64F]/30 focus:border-[#16C64F]"
                                    />
                                </div>

                                <div class="mt-4 text-sm">
                                    <p class="text-gray-500 font-medium mb-2">Buscas recentes:</p>
                                    <div class="space-y-1">
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition"> Como organizar finanças </a>
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition"> Dicas de produtividade </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Organizze -->
                    <a href="#Organizze" class="relative overflow-hidden px-6 py-2 rounded-md font-medium text-white bg-[#117641] group">
                        <span
                            class="absolute inset-0 bg-[#006A33] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                        ></span>
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
                    <img
                        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                        alt="Controle de gastos"
                        class="w-full h-full object-cover"
                    />
                    <span class="absolute bottom-4 left-4 bg-[#1F3D2B] text-white text-xs px-3 py-1 rounded-full"> Controle de Gastos</span>

                    <button
                        class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div class="md:w-1/3 bg-[#2F4F3F] p-6 md:p-8 flex flex-col justify-center">
                    <h2 class="text-white text-xl md:text-2xl font-semibold leading-snug">
                        Gastos diários: como mapear, reduzir e controlar sem sofrimento
                    </h2>
                    <p class="mt-4 text-sm text-gray-300 leading-relaxed line-clamp-3">
                        Manter as finanças pessoais organizadas não precisa ser complicado. Neste artigo, você vai aprender como identificar seus
                        gastos diários, entender para onde seu dinheiro está indo e aplicar estratégias simples para reduzir desperdícios e tomar
                        decisões financeiras mais conscientes.
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
                            Explore os assuntos mais relevantes e encontre conteúdos criados para facilitar suas decisões financeiras no dia a dia.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                        <a
                            href="#"
                            class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src="https://www.organizze.com.br/blog/wp-content/uploads/MEI-280x210-1.jpg"
                                alt="MEI"
                                class="w-full h-44 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <span class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-90"></span>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">MEI & Empreendedorismo</h3>
                                <p class="text-white/80 text-xs mt-1">Obrigações, impostos e dicas</p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src="https://www.organizze.com.br/blog/wp-content/uploads/Investimento-280x210-1.jpg"
                                alt="Investimentos"
                                class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Investimentos</h3>
                                <p class="text-white/80 text-xs mt-1">Renda fixa e variável</p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src="https://www.organizze.com.br/blog/wp-content/uploads/Direitos-do-consumidor-280x210-1.jpg"
                                alt="Orçamento"
                                class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Orçamento</h3>
                                <p class="text-white/80 text-xs mt-1">Controle financeiro</p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src="https://www.organizze.com.br/blog/wp-content/uploads/D%C2%A1vidas-280x210-1.jpg"
                                alt="Impostos"
                                class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
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

                    <a
                        href="/artigos"
                        class="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition"
                    >
                        Ver todos

                        <svg
                            class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <!-- GRID -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    <!-- Artigo 1 -->
                    <article
                        class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                    >
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                                class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">Tecnologia</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold line-clamp-2">Apps de finanças: como escolher o ideal</h3>
                            <p class="text-sm text-gray-600 line-clamp-3 leading-relaxed mt-2">
                                Aprenda os critérios essenciais para escolher um app financeiro eficiente.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs">7 min</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 2 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1470&auto=format&fit=crop"
                                alt="Pessoa mexendo no tablet com planilha aberta"
                                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                                Orçamento
                            </span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                <a href="#">Como montar um orçamento que realmente funciona</a>
                            </h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                Esqueça planilhas complexas e aprenda um método realista para controlar seu orçamento.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs">6 min</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 3 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full"> Organização </span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900">Como organizar suas finanças em menos de 30 minutos</h3>
                            <p class="text-sm text-gray-600 line-clamp-3 leading-relaxed mt-2">
                                Um método simples para sair da bagunça financeira e ganhar clareza sobre seu dinheiro.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs">5 min</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 4 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop"
                                alt="Mão segurando faturas e papel"
                                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium"> Dívidas </span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                <a href="#">Estratégias práticas para sair das dívidas</a>
                            </h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                Técnicas simples para renegociar dívidas e retomar o controle da sua vida financeira.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs">8 min</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 5 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2"
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">Empreendedorismo</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold line-clamp-2">MEI: como organizar suas finanças</h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2">Dicas essenciais para manter o controle financeiro sendo MEI.</p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs">6 min</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 6 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">Educação Financeira</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold line-clamp-2">Educação financeira para iniciantes</h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2">Conceitos básicos para transformar sua vida financeira.</p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs">7 min</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 7 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop"
                                alt="Planilha financeira em tela"
                                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium">Orçamento</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                <a href="#">Como montar um orçamento que realmente funciona</a>
                            </h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                Esqueça planilhas complexas e aprenda um método realista para controlar seu orçamento.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs">9 min</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 8 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
                                class="absolute inset-0 w-full h-full object-cover"
                            />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">Cartão de crédito</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold line-clamp-1">Como usar cartão sem se endividar</h3>
                            <p class="text-sm text-gray-600 line-clamp-2 leading-relaxed mt-2">
                                Evite armadilhas e use seu cartão de crédito com inteligência, mantendo o controle dos gastos no dia a dia.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs">5 min</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 9 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48">
                            <img
                                src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full"> Controle Financeiro </span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">Como fazer controle financeiro sem planilha complicada</h3>
                            <p class="text-sm text-gray-600 line-clamp-2 leading-relaxed mt-2">
                                Métodos simples e rápidos que realmente funcionam para quem odeia planilhas ou apps cheios de funcionalidades.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs">6 min</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- BOTÃO -->
                <div class="mt-12 flex justify-center">
                    <button
                        class="px-8 py-3 rounded-md border border-green-700 text-green-700 font-semibold hover:bg-green-700 hover:text-white hover:cursor-pointer transition-colors"
                    >
                        Carregar mais
                    </button>
                </div>
            </section>
        </div>

        <!-- Footer -->
        <footer class="bg-[#2F4F3F] text-gray-300 mt-16 border-t border-white/10">
            <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
                <div class="flex flex-col gap-6 md:col-span-1 lg:col-span-1">
                    <div class="transition-opacity hover:opacity-80">
                        <img
                            src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                            alt="Organizze"
                            class="h-7 w-auto"
                            style="filter: brightness(0) invert(1)"
                        />
                    </div>
                    <p class="text-sm leading-relaxed text-gray-400">
                        Simplificando o controle financeiro para você tomar as melhores decisões todos os dias com segurança e clareza.
                    </p>
                </div>

                <div>
                    <h3 class="text-white font-bold text-sm uppercase tracking-wider mb-6">Navegação</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="/" class="hover:text-white hover:translate-x-1 transition-all inline-block">Início</a></li>
                        <li><a href="/artigos" class="hover:text-white hover:translate-x-1 transition-all inline-block">Artigos</a></li>
                        <li><a href="/temas" class="hover:text-white hover:translate-x-1 transition-all inline-block">Temas</a></li>
                        <li>
                            <a href="/app" class="hover:text-white hover:translate-x-1 transition-all inline-block font-medium text-green-400"
                                >Baixar App</a
                            >
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-white font-bold text-sm uppercase tracking-wider mb-6">Mais lidos</h3>
                    <ul class="space-y-3 text-sm font-light">
                        <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">Apps de finanças</a></li>
                        <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">Montar orçamento</a></li>
                        <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">Organizar rápido</a></li>
                        <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">Sair das dívidas</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-white font-bold text-sm uppercase tracking-wider mb-6">Institucional</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="/sobre" class="hover:text-white transition-colors">Sobre nós</a></li>
                        <li><a href="/contato" class="hover:text-white transition-colors">Centro de Ajuda</a></li>
                        <li><a href="/termos" class="hover:text-white transition-colors">Termos de uso</a></li>
                        <li><a href="/privacidade" class="hover:text-white transition-colors">Privacidade</a></li>
                    </ul>
                </div>

                <div class="flex flex-col gap-6">
                    <h3 class="text-white font-bold text-sm uppercase tracking-wider">Experimente grátis</h3>

                    <div class="flex flex-col gap-3">
                        <a href="#" class="transition-transform hover:scale-105 active:scale-95">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" class="h-9 w-auto" />
                        </a>
                        <a href="#" class="transition-transform hover:scale-105 active:scale-95">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" class="h-9 w-auto" />
                        </a>
                    </div>

                    <div class="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/10">
                        <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.organizze.com.br"
                            class="h-14 w-14 rounded-md bg-white p-1 shadow-lg"
                            alt="QR Code"
                        />
                        <p class="text-[10px] text-gray-400 uppercase leading-tight font-medium">Aponte a câmera para baixar</p>
                    </div>
                </div>
            </div>

            <div class="border-t border-white/5">
                <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-[11px] text-gray-500 font-medium">
                        &copy; {{ new Date().getFullYear() }} Organizze Tecnologia LTDA. Todos os direitos reservados.
                    </p>
                    <div class="flex gap-6 text-[11px] text-gray-500 uppercase tracking-widest">
                        <a href="#" class="hover:text-white transition-colors"> Instagram </a>
                        <a href="#" class="hover:text-white transition-colors"> <Youtube /> YouTube </a>
                        <a href="#" class="hover:text-white transition-colors"> <Linkedin /> LinkedIn </a>
                        <a href="#" class="hover:text-white transition-colors"> <Github /> Github </a>
                    </div>
                </div>
            </div>
        </footer>
    </main>
</template>
