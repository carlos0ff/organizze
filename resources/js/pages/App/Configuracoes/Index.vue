<script setup>
import { ref } from 'vue';
import Navbar from '@/Componentes/Layout/Navbar.vue';
import {
    User, Bell, Shield, Palette, Globe, CreditCard,
    ChevronRight, Save, Check, Moon, Sun, Monitor,
} from 'lucide-vue-next';

const tab = ref('conta');
const saved = ref(false);

function save() {
    saved.value = true;
    setTimeout(() => (saved.value = false), 2500);
}

const TABS = [
    { key: 'conta',   label: 'Conta',          icon: User },
    { key: 'notif',   label: 'Notificações',    icon: Bell },
    { key: 'privacy', label: 'Privacidade',     icon: Shield },
    { key: 'display', label: 'Aparência',       icon: Palette },
    { key: 'regional',label: 'Regional',        icon: Globe },
    { key: 'billing', label: 'Assinatura',      icon: CreditCard },
];

const theme = ref('system');
const currency = ref('BRL');
const language = ref('pt-BR');
const dateFormat = ref('DD/MM/YYYY');

const notif = ref({
    email_vencimento: true,
    email_relatorio: false,
    email_novidades: true,
    push_vencimento: true,
    push_limites: true,
    push_novidades: false,
});

const privacy = ref({
    analytics: true,
    marketing: false,
    third_party: false,
});

const conta = ref({
    name: 'Thiago Santos',
    email: 'thiago@email.com',
    phone: '(11) 9 8765-4321',
});
</script>

<template>
    <Navbar />

    <main class="max-w-5xl mx-auto px-4 pt-24 pb-16">

        <!-- Header -->
        <div class="mb-8">
            <div class="bg-[#FFF] rounded-2xl shadow-sm p-8 border border-gray-10">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">Configurações</h1>
                        <p class="text-gray-600">Gerencie suas preferências e dados pessoais</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-6">

            <!-- Sidebar -->
            <aside class="lg:w-56 shrink-0">
                <nav class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <button
                        v-for="t in TABS" :key="t.key"
                        @click="tab = t.key"
                        :class="tab === t.key ? 'bg-emerald-50 text-emerald-700 border-l-2 border-emerald-500' : 'text-gray-600 hover:bg-gray-50'"
                        class="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors"
                    >
                        <component :is="t.icon" class="w-4 h-4 shrink-0" />
                        {{ t.label }}
                        <ChevronRight class="w-3.5 h-3.5 ml-auto opacity-40" />
                    </button>
                </nav>
            </aside>

            <!-- Content -->
            <div class="flex-1">

                <!-- Conta -->
                <div v-if="tab === 'conta'" class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 class="text-base font-bold text-gray-800 mb-5">Informações da Conta</h2>
                    <div class="space-y-4 max-w-lg">
                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Nome</label>
                            <input v-model="conta.name" type="text"
                                class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 outline-none transition" />
                        </div>
                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">E-mail</label>
                            <input v-model="conta.email" type="email"
                                class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 outline-none transition" />
                        </div>
                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Telefone</label>
                            <input v-model="conta.phone" type="tel"
                                class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 outline-none transition" />
                        </div>
                    </div>
                    <div class="mt-6 pt-5 border-t border-gray-50 flex items-center justify-between">
                        <p v-if="saved" class="flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
                            <Check class="w-4 h-4" /> Salvo com sucesso!
                        </p>
                        <div v-else></div>
                        <button @click="save"
                            class="flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors">
                            <Save class="w-4 h-4" /> Salvar
                        </button>
                    </div>
                </div>

                <!-- Notificações -->
                <div v-if="tab === 'notif'" class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 class="text-base font-bold text-gray-800 mb-5">Notificações</h2>

                    <div class="space-y-6">
                        <div>
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Por E-mail</p>
                            <div class="space-y-3">
                                <div v-for="(val, key) in { 'Contas próximas do vencimento': notif.email_vencimento, 'Relatório semanal': notif.email_relatorio, 'Novidades e recursos': notif.email_novidades }"
                                    :key="key"
                                    class="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                                    <span class="text-sm text-gray-700">{{ key }}</span>
                                    <button
                                        :class="val ? 'bg-emerald-500' : 'bg-gray-200'"
                                        class="relative inline-flex h-5 w-9 rounded-full transition-colors"
                                        @click="key === 'Contas próximas do vencimento' ? notif.email_vencimento = !notif.email_vencimento : key === 'Relatório semanal' ? notif.email_relatorio = !notif.email_relatorio : notif.email_novidades = !notif.email_novidades"
                                    >
                                        <span :class="val ? 'translate-x-4' : 'translate-x-0.5'"
                                            class="inline-block h-4 w-4 mt-0.5 rounded-full bg-white shadow transition"></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Push / App</p>
                            <div class="space-y-3">
                                <div v-for="(val, key) in { 'Vencimentos hoje': notif.push_vencimento, 'Limites atingidos': notif.push_limites, 'Novidades': notif.push_novidades }"
                                    :key="key"
                                    class="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                                    <span class="text-sm text-gray-700">{{ key }}</span>
                                    <button
                                        :class="val ? 'bg-emerald-500' : 'bg-gray-200'"
                                        class="relative inline-flex h-5 w-9 rounded-full transition-colors"
                                        @click="key === 'Vencimentos hoje' ? notif.push_vencimento = !notif.push_vencimento : key === 'Limites atingidos' ? notif.push_limites = !notif.push_limites : notif.push_novidades = !notif.push_novidades"
                                    >
                                        <span :class="val ? 'translate-x-4' : 'translate-x-0.5'"
                                            class="inline-block h-4 w-4 mt-0.5 rounded-full bg-white shadow transition"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 pt-5 border-t border-gray-50">
                        <button @click="save"
                            class="flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors">
                            <Save class="w-4 h-4" /> Salvar preferências
                        </button>
                    </div>
                </div>

                <!-- Privacidade -->
                <div v-if="tab === 'privacy'" class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 class="text-base font-bold text-gray-800 mb-5">Privacidade e Dados</h2>
                    <div class="space-y-4">
                        <div v-for="item in [
                            { key: 'analytics', label: 'Análise de uso', desc: 'Ajuda a melhorar o app com dados anônimos' },
                            { key: 'marketing', label: 'Comunicações de marketing', desc: 'Receba ofertas e promoções personalizadas' },
                            { key: 'third_party', label: 'Compartilhar com parceiros', desc: 'Dados para parceiros financeiros credenciados' },
                        ]" :key="item.key"
                            class="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                            <div>
                                <p class="text-sm font-semibold text-gray-800">{{ item.label }}</p>
                                <p class="text-xs text-gray-400 mt-0.5">{{ item.desc }}</p>
                            </div>
                            <button
                                :class="privacy[item.key] ? 'bg-emerald-500' : 'bg-gray-200'"
                                class="relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors"
                                @click="privacy[item.key] = !privacy[item.key]"
                            >
                                <span :class="privacy[item.key] ? 'translate-x-4' : 'translate-x-0.5'"
                                    class="inline-block h-4 w-4 mt-0.5 rounded-full bg-white shadow transition"></span>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6 pt-5 border-t border-gray-50">
                        <button @click="save"
                            class="flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors">
                            <Save class="w-4 h-4" /> Salvar
                        </button>
                    </div>
                </div>

                <!-- Aparência -->
                <div v-if="tab === 'display'" class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 class="text-base font-bold text-gray-800 mb-5">Aparência</h2>
                    <div>
                        <p class="text-xs font-semibold text-gray-500 mb-3">Tema</p>
                        <div class="grid grid-cols-3 gap-3">
                            <button v-for="opt in [
                                { key: 'light', label: 'Claro', icon: Sun },
                                { key: 'dark', label: 'Escuro', icon: Moon },
                                { key: 'system', label: 'Sistema', icon: Monitor },
                            ]" :key="opt.key"
                                @click="theme = opt.key"
                                :class="theme === opt.key ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'"
                                class="flex flex-col items-center gap-2 p-4 border-2 rounded-xl text-sm font-medium transition-colors">
                                <component :is="opt.icon" class="w-5 h-5" />
                                {{ opt.label }}
                                <div v-if="theme === opt.key" class="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                                    <Check class="w-2.5 h-2.5 text-white" />
                                </div>
                                <div v-else class="w-4 h-4 rounded-full border border-gray-200"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Regional -->
                <div v-if="tab === 'regional'" class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 class="text-base font-bold text-gray-800 mb-5">Regional</h2>
                    <div class="space-y-4 max-w-sm">
                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Moeda padrão</label>
                            <select v-model="currency" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 outline-none">
                                <option value="BRL">BRL — Real Brasileiro</option>
                                <option value="USD">USD — Dólar Americano</option>
                                <option value="EUR">EUR — Euro</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Idioma</label>
                            <select v-model="language" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 outline-none">
                                <option value="pt-BR">Português (Brasil)</option>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Formato de data</label>
                            <select v-model="dateFormat" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 outline-none">
                                <option value="DD/MM/YYYY">DD/MM/AAAA</option>
                                <option value="MM/DD/YYYY">MM/DD/AAAA</option>
                                <option value="YYYY-MM-DD">AAAA-MM-DD</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-6 pt-5 border-t border-gray-50">
                        <button @click="save"
                            class="flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors">
                            <Save class="w-4 h-4" /> Salvar
                        </button>
                    </div>
                </div>

                <!-- Assinatura -->
                <div v-if="tab === 'billing'" class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 class="text-base font-bold text-gray-800 mb-5">Assinatura</h2>
                    <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-4">
                        <div>
                            <p class="text-sm font-bold text-gray-800">Plano Free</p>
                            <p class="text-xs text-gray-400 mt-0.5">Sem cobrança • Recursos limitados</p>
                        </div>
                        <RouterLink to="/app/plano"
                            class="text-xs font-bold text-emerald-600 border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition flex items-center gap-1">
                            Fazer upgrade <ChevronRight class="w-3 h-3" />
                        </RouterLink>
                    </div>
                    <p class="text-xs text-gray-400">Gerencie todos os detalhes do plano na página <RouterLink to="/app/plano" class="text-emerald-600 font-semibold hover:underline">Meu Plano</RouterLink>.</p>
                </div>

            </div>
        </div>
    </main>
</template>
