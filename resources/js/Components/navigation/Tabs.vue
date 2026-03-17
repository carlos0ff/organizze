 <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white rounded-md shadow-sm p-6 ">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700 text-sm">Maiores Gastos do Mês</h2>
                    <button class="text-[10px] text-gray-400 border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors">
                        Relatório Detalhado
                    </button>
                </div>

                <div class="flex flex-col sm:flex-row items-center gap-8">
                    <div class="relative flex justify-center">
                        <svg class="w-44 h-44 transform -rotate-90 drop-shadow-sm" viewBox="0 0 160 160">
                            <circle cx="80" cy="80" r="70" stroke="#f8fafc" stroke-width="14" fill="transparent" />

                            <circle cx="80" cy="80" r="70" stroke="#8b5cf6" stroke-width="14" fill="transparent"
                                stroke-dasharray="439.8" stroke-dashoffset="357" stroke-linecap="round" />

                            <circle cx="80" cy="80" r="70" stroke="#f472b6" stroke-width="14" fill="transparent"
                                stroke-dasharray="439.8" stroke-dashoffset="412.8"
                                :transform="`rotate(${18.83 * 3.6} 80 80)`" stroke-linecap="round" />

                            <circle cx="80" cy="80" r="70" stroke="#22d3ee" stroke-width="14" fill="transparent"
                                stroke-dasharray="439.8" stroke-dashoffset="432"
                                :transform="`rotate(${(18.83 + 6.18) * 3.6} 80 80)`" stroke-linecap="round" />
                        </svg>

                        <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <span class="text-[9px] text-gray-400 font-black uppercase tracking-tighter">Total Gasto</span>
                            <span class="text-2xl font-black text-slate-800">R$ 2.4k</span>
                        </div>
                    </div>

                    <div class="flex-1 w-full space-y-4">
                        <div v-for="(item, idx) in [
                            { label: 'Presentes', percent: '18,83%', value: 'R$ 465,25', color: 'bg-purple-500' },
                            { label: 'Alimentação', percent: '6,18%', value: 'R$ 152,70', color: 'bg-pink-400' },
                            { label: 'Lazer', percent: '1,81%', value: 'R$ 44,72', color: 'bg-cyan-400' },
                            { label: 'Lazer', percent: '1,81%', value: 'R$ 44,72', color: 'bg-cyan-400' }
                        ]" :key="idx" class="flex justify-between items-center p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                            <div class="flex items-center">
                                <div :class="`w-2.5 h-2.5 rounded-full ${item.color} mr-3 shadow-sm`"></div>
                                <span class="text-xs font-medium text-slate-600">{{ item.label }}</span>
                            </div>
                            <div class="text-right">
                                <p class="text-xs font-bold text-slate-800">{{ item.percent }}</p>
                                <p class="text-[9px] text-slate-400">{{ item.value }}</p>
                            </div>
                        </div>

                        <div class="pt-3 mt-2 border-t border-slate-50">
                            <div class="bg-emerald-50 rounded-lg py-2 px-3 flex items-center justify-center gap-2">
                                <TrendingUp class="w-3 h-3 text-emerald-500" />
                                <p class="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">
                                    -5% em relação ao mês anterior
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Metas de Outubro -->
            <div class="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700">Metas de Outubro</h2>
                    <div class="text-right">
                        <span class="text-2xl font-black text-emerald-500">65%</span>
                        <p class="text-[9px] text-gray-400 uppercase font-bold">Progresso Geral</p>
                    </div>
                </div>

                <div class="space-y-5">
                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-car text-xs"></i>
                                </div>
                                <span class="text-xs font-bold text-gray-700">Transporte</span>
                            </div>
                            <span class="text-xs font-bold text-gray-500">65%</span>
                        </div>

                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-blue-400 h-full w-[65%] transition-all duration-500"></div>
                        </div>

                        <div class="flex justify-between mt-1">
                            <p class="text-[9px] text-gray-400">Gasto: <span class="font-bold text-gray-600">R$ 260,00</span></p>
                            <p class="text-[9px] text-gray-400">Meta: <span class="font-bold text-gray-600">R$ 400,00</span></p>
                        </div>
                    </div>

                    <div class="group">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-utensils text-xs"></i>
                                </div>
                                <span class="text-xs font-bold text-gray-700">Alimentação</span>
                            </div>
                            <span class="text-xs font-bold text-orange-500">80%</span>
                        </div>
                        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-orange-400 h-full w-[80%] transition-all duration-500"></div>
                        </div>
                        <div class="flex justify-between mt-1">
                            <p class="text-[9px] text-gray-400">Gasto: <span class="font-bold text-gray-600">R$ 800,00</span></p>
                            <p class="text-[9px] text-gray-400">Meta: <span class="font-bold text-gray-600">R$ 1.000,00</span></p>
                        </div>
                    </div>
                    <button class="w-full py-2 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-lg hover:bg-emerald-100 flex items-center justify-center">
                        <CirclePlus class="w-4 h-4 mr-1" /> Criar Nova Meta
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-md shadow-sm p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-bold text-gray-700">Minhas Contas</h2>
                    <button class="text-xs text-gray-400 flex items-center hover:text-emerald-600">
                        <EyeOff class="mr-1 w-3 h-3" /> Esconder saldo
                    </button>
                </div>
                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                                <Star class="w-4 h-4" />
                            </div>
                            <div>
                                <p class="text-sm font-bold text-gray-800">Caixa Econômica</p>
                                <p class="text-xs text-gray-400">Conta Corrente</p>
                            </div>
                        </div>
                        <p class="text-sm font-bold text-emerald-600">R$ 4.200,00</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
                                <Square class="w-4 h-4" />
                            </div>
                            <div>
                                <p class="text-sm font-bold text-gray-800">Caixa Xadrez</p>
                                <p class="text-xs text-gray-400">Outros</p>
                            </div>
                        </div>
                        <p class="text-sm font-bold text-emerald-600">R$ 150,00</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-md shadow-sm p-6 ">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="font-bold text-gray-700">Cartão de Crédito</h2>
                    <button class="text-xs text-emerald-500 font-medium hover:underline">Gerenciar</button>
                </div>

                <div class="space-y-4">
                    <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-800 text-white shadow-lg relative overflow-hidden group transition-transform ">
                        <div class="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

                        <div class="flex justify-between items-start mb-8">
                            <div>
                                <p class="text-[10px] uppercase opacity-80 font-bold tracking-widest">Nubank Platinum</p>
                                <p class="text-base font-medium tracking-[0.2em] mt-1">•••• 1234</p>
                            </div>
                            <div class="w-10 h-6 bg-amber-400/20 rounded-md border border-amber-400/30"></div> </div>

                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[9px] opacity-70 mb-1 font-semibold">VALOR DA FATURA</p>
                                <p class="text-2xl font-black">R$ 840,00</p>
                            </div>
                            <div class="text-right">
                                <span class="text-[9px] bg-white/20 backdrop-blur-md px-2 py-1 rounded-full font-bold uppercase border border-white/10">Fatura aberta</span>
                                <p class="text-[9px] opacity-70 mt-2 font-bold">Vence em 15/10</p>
                            </div>
                        </div>
                    </div>

                    <button class="w-full p-4 border-2 border-dashed border-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-emerald-200 hover:text-emerald-500 hover:bg-emerald-50/50 transition-all group">
                        <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                            <Plus class="w-5 h-5" />
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-widest">Novo Cartão</span>
                    </button>
                </div>
            </div>
        </div>
