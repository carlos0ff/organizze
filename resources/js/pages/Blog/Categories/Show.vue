<template>
  <div v-if="activeModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">

      <!-- HEADER -->
      <div class="px-6 pt-6 pb-4 border-b flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div :class="iconBgClass" class="w-10 h-10 rounded-2xl flex items-center justify-center">
            <component :is="iconComponent" :class="iconClass" class="w-5 h-5" />
          </div>
          <div>
            <h2 class="text-lg font-semibold text-gray-800">{{ modalTitle }}</h2>
            <p class="text-xs text-gray-500">{{ modalSubtitle }}</p>
          </div>
        </div>

        <button
          @click="closeModal"
          class="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- FORM -->
      <form @submit.prevent="handleSubmit" class="p-6 space-y-6">

        <!-- Descrição -->
        <div>
          <label class="text-xs font-medium text-gray-500 block mb-1">Descrição</label>
          <input
            v-model="form.description"
            type="text"
            placeholder="Ex: Aluguel, Salário, Supermercado..."
            class="w-full border border-gray-300 rounded-2xl px-4 py-3 text-sm focus:border-emerald-500 focus:ring-emerald-500 outline-none transition"
          />
        </div>

        <!-- Valor + Data -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-xs font-medium text-gray-500 block mb-1">Valor</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">R$</span>
              <input
                v-model="form.amount"
                type="number"
                step="0.01"
                placeholder="0,00"
                class="w-full border border-gray-300 rounded-2xl px-9 py-3 text-lg font-semibold focus:border-emerald-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label class="text-xs font-medium text-gray-500 block mb-1">Data</label>
            <input
              v-model="form.date"
              type="date"
              class="w-full border border-gray-300 rounded-2xl px-4 py-3 text-sm focus:border-emerald-500 outline-none"
            />
          </div>
        </div>

        <!-- Conta + Categoria -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-xs font-medium text-gray-500 block mb-1">Conta / Cartão</label>
            <select v-model="form.accountId"
              class="w-full border border-gray-300 rounded-2xl px-4 py-3 text-sm focus:border-emerald-500 outline-none appearance-none">
              <option value="">Selecione a conta...</option>
              <!-- Preencha com suas contas -->
            </select>
          </div>

          <div>
            <label class="text-xs font-medium text-gray-500 block mb-1">Categoria</label>
            <select v-model="form.categoryId"
              class="w-full border border-gray-300 rounded-2xl px-4 py-3 text-sm focus:border-emerald-500 outline-none appearance-none">
              <option value="">Selecione a categoria...</option>
              <!-- Preencha com suas categorias -->
            </select>
          </div>
        </div>

        <!-- Observação -->
        <div>
          <label class="text-xs font-medium text-gray-500 block mb-1">Observação (opcional)</label>
          <textarea
            v-model="form.note"
            rows="3"
            placeholder="Adicione uma observação..."
            class="w-full border border-gray-300 rounded-2xl px-4 py-3 text-sm resize-y min-h-[80px] focus:border-emerald-500 outline-none"
          ></textarea>
        </div>

        <!-- Ações rápidas (ícones) -->
        <div class="flex justify-center gap-8 pt-2">
          <ActionIcon
            icon="Repeat"
            label="Repetir"
            @click="toggleRepeat"
          />
          <ActionIcon
            icon="MessageSquare"
            label="Obs"
            :active="!!form.note"
            @click="focusNote"
          />
          <ActionIcon
            icon="Paperclip"
            label="Anexo"
            @click="handleAttach"
          />
          <ActionIcon
            icon="Tag"
            label="Tags"
            @click="handleTags"
          />
        </div>

        <!-- Botão de salvar grande -->
        <div class="pt-6">
          <button
            type="submit"
            class="w-full h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]"
          >
            <Check class="w-6 h-6" />
            Salvar {{ isExpense ? 'Despesa' : 'Receita' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { X, Check, Repeat, MessageSquare, Paperclip, Tag } from 'lucide-vue-next'
import { ref, computed } from 'vue'

const props = defineProps({
  activeModal: Boolean,
  type: { type: String, default: 'despesa' }, // 'despesa' ou 'receita'
  modalTitle: String,
  modalSubtitle: { type: String, default: '' }
})

const emit = defineEmits(['close', 'submit'])

const form = ref({
  description: '',
  amount: '',
  date: new Date().toISOString().split('T')[0],
  accountId: '',
  categoryId: '',
  note: ''
})

// Configuração dinâmica conforme o tipo
const isExpense = computed(() => props.type === 'despesa')

const iconComponent = computed(() => isExpense.value ? Minus : Plus)
const iconBgClass = computed(() =>
  isExpense.value ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'
)
const iconClass = computed(() =>
  isExpense.value ? 'text-red-600' : 'text-emerald-600'
)

const closeModal = () => {
  emit('close')
}

const handleSubmit = () => {
  emit('submit', { ...form.value, type: props.type })
  // Opcional: limpar formulário após salvar
  // form.value = { ...initialForm }
}

const toggleRepeat = () => alert('Funcionalidade de repetir em desenvolvimento')
const focusNote = () => { /* foco no textarea */ }
const handleAttach = () => alert('Anexar arquivo')
const handleTags = () => alert('Adicionar tags')
</script>
