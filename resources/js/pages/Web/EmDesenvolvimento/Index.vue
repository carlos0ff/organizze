<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Wrench, Clock } from 'lucide-vue-next';

const progress = ref(0);

onMounted(() => {
    const timer = setInterval(() => {
        if (progress.value < 68) progress.value++;
    }, 18);
    onUnmounted(() => clearInterval(timer));
});

// Funcionalidades planejadas
const PLANEJADO = [
    { label: 'Autenticação de usuários', description: 'Login, registro e recuperação de senha.', status: 'done' },
    { label: 'Dashboard principal', description: 'Visão geral com métricas e atividades principais.', status: 'done' },
    { label: 'Gestão de projetos', description: 'Criar, editar, excluir e visualizar projetos.', status: 'done' },
    { label: 'Equipe e permissões', description: 'Adicionar membros e definir permissões de acesso.', status: 'wip' },
    { label: 'Relatórios e indicadores', description: 'Gerar relatórios personalizados e exportar dados.', status: 'planned' },
    { label: 'Integrações', description: 'Conectar com outras ferramentas e serviços.', status: 'planned' },
];

// Mapeamento de status
const STATUS_MAP = {
    done: { label: 'Concluída', bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-400' },
    wip: { label: 'Em andamento', bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-400' },
    planned: { label: 'Pendente', bg: 'bg-gray-50', text: 'text-gray-500', dot: 'bg-gray-300' },
};
</script>

<template>
    <div class="min-h-screen bg-white font-sans">

        <main>
            <!-- Hero Section -->
            <section class="border-b border-gray-100 py-16">
                <div class="max-w-4xl mx-auto px-6">

                    <!-- Ícone -->
                    <div class="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-5">
                        <Wrench class="w-8 h-8 text-amber-500" />
                    </div>

                    <div class="text-center">
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">
                            Ainda sendo construído
                        </h1>
                        <p class="text-gray-500 max-w-lg mx-auto text-sm">
                            Esta parte do projeto ainda não foi concluída.
                            Aqui está o que estava sendo planejado e o estado atual de cada funcionalidade.
                        </p>
                    </div>

                    <!-- Progresso geral -->
                    <div class="max-w-sm mx-auto mt-8">
                        <div class="flex items-center justify-between mb-1.5">
                            <span class="text-sm font-medium text-gray-700">Progresso geral do projeto</span>
                            <span class="text-lg font-bold text-gray-900">{{ progress }}%</span>
                        </div>
                        <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full rounded-full bg-emerald-400 transition-all duration-100"
                                 :style="{ width: progress + '%' }"></div>
                        </div>
                        <p class="text-xs text-gray-400 mt-2 text-center">10 de 19 funcionalidades concluídas do projeto</p>
                    </div>
                </div>
            </section>

            <!-- Conteúdo -->
            <div class="max-w-4xl mx-auto px-6 py-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <!-- Coluna esquerda: Funcionalidades planejadas -->
                    <div>
                        <h2 class="text-sm font-semibold text-gray-900 mb-1">Funcionalidade planejada</h2>
                        <div class="space-y-0">
                            <div v-for="item in PLANEJADO" :key="item.label"
                                 class="py-3 border-b border-gray-50 last:border-0">
                                <p class="text-sm font-medium text-gray-900">{{ item.label }}</p>
                                <p class="text-xs text-gray-400 mt-0.5">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Coluna direita: Estado atual -->
                    <div>
                        <h2 class="text-sm font-semibold text-gray-900 mb-1">Estado atual</h2>
                        <div class="space-y-0">
                            <div v-for="item in PLANEJADO" :key="item.label"
                                 class="py-3 border-b border-gray-50 last:border-0">
                                <div class="flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full shrink-0" :class="STATUS_MAP[item.status].dot"></span>
                                    <span class="text-sm font-medium" :class="STATUS_MAP[item.status].text">
                                        {{ STATUS_MAP[item.status].label }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>
</template>
