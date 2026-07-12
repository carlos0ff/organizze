<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import Navbar from '@/Components/layout/Navbar.vue'

const search = ref('')
const activeFilter = ref('todos')

const filters = [
  { key: 'todos', label: 'Todos' },
  { key: 'tradicional', label: 'Tradicional' },
  { key: 'fintech', label: 'Fintech' },
  { key: 'digital', label: 'Digital' },
  { key: 'investimentos', label: 'Investimentos' },
  { key: 'cooperativa', label: 'Cooperativa' },
]

const connectedAccounts = ref([
  { id: 1, bank: 'Nubank',      type: 'Conta Corrente', balance: 3842.50,  color: '#820AD1', abbr: 'NU', slug: 'nubank',       status: 'synced' },
  { id: 2, bank: 'Banco Inter', type: 'Conta Corrente', balance: 12202.30, color: '#FF6B35', abbr: 'IN', slug: 'bancointer',   status: 'synced' },
  { id: 3, bank: 'Bradesco',    type: 'Poupança',       balance: 0,        color: '#CC0000', abbr: 'BR', slug: 'bradesco',     status: 'error'  },
  { id: 4, bank: 'Itaú',        type: 'Conta Corrente', balance: 5200.00,  color: '#F57F20', abbr: 'IT', slug: 'itauunibanco', status: 'synced' },
])

const institutions = [
  { id: 1,  name: 'Itaú',             type: 'tradicional',  label: 'Tradicional',  color: '#F57F20', abbr: 'IT', slug: 'itauunibanco' },
  { id: 2,  name: 'Banco do Brasil',  type: 'tradicional',  label: 'Tradicional',  color: '#F9A800', abbr: 'BB', slug: 'bancodobrasil' },
  { id: 3,  name: 'Santander',        type: 'tradicional',  label: 'Tradicional',  color: '#EC0000', abbr: 'SA', slug: 'santander'     },
  { id: 4,  name: 'Caixa',            type: 'tradicional',  label: 'Tradicional',  color: '#005CA9', abbr: 'CX', slug: null            },
  { id: 5,  name: 'C6 Bank',          type: 'fintech',      label: 'Fintech',      color: '#242424', abbr: 'C6', slug: 'c6bank'        },
  { id: 6,  name: 'XP Investimentos', type: 'investimentos',label: 'Investimentos',color: '#FF6600', abbr: 'XP', slug: null            },
  { id: 7,  name: 'PicPay',           type: 'fintech',      label: 'Fintech',      color: '#21C25E', abbr: 'PP', slug: 'picpay'        },
  { id: 8,  name: 'Sicoob',           type: 'cooperativa',  label: 'Cooperativa',  color: '#0B7B3E', abbr: 'SC', slug: null            },
  { id: 9,  name: 'Banco Original',   type: 'digital',      label: 'Digital',      color: '#1DBF73', abbr: 'OG', slug: null            },
  { id: 10, name: 'Nubank',           type: 'digital',      label: 'Digital',      color: '#820AD1', abbr: 'NU', slug: 'nubank'        },
  { id: 11, name: 'BTG Pactual',      type: 'investimentos',label: 'Investimentos',color: '#1A1A2E', abbr: 'BT', slug: 'btgpactual'   },
  { id: 12, name: 'Mercado Pago',     type: 'fintech',      label: 'Fintech',      color: '#009EE3', abbr: 'MP', slug: 'mercadopago'  },
]

const logoErrors = reactive<Record<string, boolean>>({})
function onLogoError(key: string) { logoErrors[key] = true }

function logoUrl(slug: string, hex: string) {
  return `https://cdn.simpleicons.org/${slug}/${hex.replace('#', '')}`
}

const filteredInstitutions = computed(() =>
  institutions.filter(i => {
    const matchFilter = activeFilter.value === 'todos' || i.type === activeFilter.value
    const matchSearch = i.name.toLowerCase().includes(search.value.toLowerCase())
    return matchFilter && matchSearch
  })
)

const totalBalance = computed(() =>
  connectedAccounts.value
    .filter(a => a.status === 'synced')
    .reduce((sum, a) => sum + a.balance, 0)
)

const fmt = (val: number) =>
  val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

type Institution = typeof institutions[number]
const selectedInstitution = ref<Institution | null>(null)
const connecting = ref(false)

function openConnect(inst: Institution) {
  selectedInstitution.value = inst
  connecting.value = false
}

function closeConnect() {
  selectedInstitution.value = null
  connecting.value = false
}

function confirmConnect() {
  connecting.value = true
  setTimeout(() => {
    closeConnect()
    connecting.value = false
  }, 1800)
}
</script>

<template>
  <Navbar />
  <main class="max-w-6xl mx-auto px-4 pt-24 pb-12">
    <div class="min-h-screen bg-gray-50 space-y-6">

      <!-- ── Hero ─────────────────────────────────────────────────────────── -->
      <div
        class="rounded-2xl p-7 text-white"
        style="background: linear-gradient(135deg, #1b2845 0%, #0d1624 100%)"
      >
        <div class="flex flex-col gap-5">
          <!-- top row -->
          <div class="flex items-start justify-between gap-6 flex-wrap">
            <div class="flex-1 min-w-64">
              <span class="inline-block text-xs font-bold tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-3 py-1 mb-3 uppercase">
                Open Finance · BACEN
              </span>
              <h1 class="text-3xl font-bold mb-2">Conexão Bancária</h1>
              <p class="text-slate-400 text-sm leading-relaxed max-w-lg">
                Conecte suas contas e carteiras para sincronizar transações automaticamente, em tempo real.
              </p>
            </div>

            <div class="flex items-center gap-6 shrink-0">
              <div class="text-center">
                <div class="text-3xl font-bold">{{ connectedAccounts.length }}</div>
                <div class="text-xs text-slate-400 uppercase tracking-widest mt-1">Contas</div>
              </div>
              <div class="w-px h-10 bg-white/10"></div>
              <div class="text-center">
                <div class="text-2xl font-bold">{{ fmt(totalBalance) }}</div>
                <div class="text-xs text-slate-400 uppercase tracking-widest mt-1">Saldo Total</div>
              </div>
              <button
                class="ml-2 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
                </svg>
                Conectar conta
              </button>
            </div>
          </div>

          <!-- feature badges -->
          <div class="flex items-center gap-6 flex-wrap pt-2 border-t border-white/10">
            <div
              v-for="f in ['Criptografia AES-256','Regulamentado pelo BACEN','Sincronização a cada hora','Dados em tempo real']"
              :key="f"
              class="flex items-center gap-2 text-xs text-slate-400"
            >
              <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              {{ f }}
            </div>
          </div>
        </div>
      </div>

      <!-- ── Two columns ──────────────────────────────────────────────────── -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

        <!-- Minhas contas -->
        <div class="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div class="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div>
              <h2 class="font-semibold text-gray-800 text-base">Minhas contas</h2>
              <p class="text-xs text-gray-400 mt-1">{{ connectedAccounts.length }} contas conectadas</p>
            </div>
            <button class="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
              </svg>
            </button>
          </div>

          <div class="divide-y divide-gray-100">
            <div
              v-for="acc in connectedAccounts"
              :key="acc.id"
              class="flex items-center gap-4 px-6 py-6 hover:bg-gray-50/60 transition-colors"
            >
              <!-- bank logo -->
              <div
                class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                :style="{ backgroundColor: acc.color + '15' }"
              >
                <img
                  v-if="acc.slug && !logoErrors[`acc-${acc.id}`]"
                  :src="logoUrl(acc.slug, acc.color)"
                  :alt="acc.bank"
                  class="w-7 h-7 object-contain"
                  @error="onLogoError(`acc-${acc.id}`)"
                />
                <span v-else class="text-sm font-bold" :style="{ color: acc.color }">{{ acc.abbr }}</span>
              </div>

              <div class="flex-1 min-w-0">
                <div class="text-sm font-bold text-gray-800">{{ acc.bank }}</div>
                <div class="text-xs text-gray-400 mt-0.5">{{ acc.type }}</div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-sm font-bold text-gray-800">
                  {{ acc.status === 'error' ? '—' : fmt(acc.balance) }}
                </div>
                <div
                  class="text-xs mt-1 flex items-center gap-1 justify-end"
                  :class="acc.status === 'synced' ? 'text-emerald-500' : 'text-red-400'"
                >
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="acc.status === 'synced'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  {{ acc.status === 'synced' ? 'Sincronizado' : 'Erro' }}
                </div>
              </div>
            </div>
          </div>

          <div class="px-6 py-5 bg-gray-50/80 border-t border-gray-200 flex items-center justify-between">
            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Saldo Consolidado</span>
            <span class="text-base font-bold text-emerald-600">{{ fmt(totalBalance) }}</span>
          </div>
        </div>

        <!-- Adicionar instituição -->
        <div class="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800 mb-3">Adicionar instituição</h2>

            <div class="relative mb-3">
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input
                v-model="search"
                type="text"
                placeholder="Buscar banco ou instituição..."
                class="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 bg-gray-50 placeholder-gray-400"
              />
            </div>

            <div class="flex gap-2 flex-wrap">
              <button
                v-for="f in filters"
                :key="f.key"
                @click="activeFilter = f.key"
                class="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                :class="activeFilter === f.key
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
              >
                {{ f.label }}
              </button>
            </div>
          </div>

          <div class="p-4 flex-1">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-1">
              <button
                v-for="inst in filteredInstitutions"
                :key="inst.id"
                class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all text-left group"
                @click="openConnect(inst)"
              >
                <!-- bank logo -->
                <div
                  class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  :style="{ backgroundColor: inst.color + '18' }"
                >
                  <img
                    v-if="inst.slug && !logoErrors[`inst-${inst.id}`]"
                    :src="logoUrl(inst.slug, inst.color)"
                    :alt="inst.name"
                    class="w-6 h-6 object-contain"
                    @error="onLogoError(`inst-${inst.id}`)"
                  />
                  <span v-else class="text-xs font-bold" :style="{ color: inst.color }">{{ inst.abbr }}</span>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="text-sm font-semibold text-gray-800 truncate">{{ inst.name }}</div>
                  <div class="text-xs text-gray-400">{{ inst.label }}</div>
                </div>
                <svg class="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              <div v-if="filteredInstitutions.length === 0" class="col-span-3 py-10 text-center">
                <svg class="w-10 h-10 text-gray-200 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <p class="text-sm text-gray-400">Nenhuma instituição encontrada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Feature cards ─────────────────────────────────────────────────── -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          v-for="feat in [
            { icon: 'shield',   title: 'Criptografia AES-256',  desc: 'Sua senha bancária nunca é armazenada.',   color: 'emerald' },
            { icon: 'refresh',  title: 'Sync automático',        desc: 'Transações importadas a cada hora.',       color: 'blue'    },
            { icon: 'bank',     title: 'Open Finance BACEN',     desc: 'Regulamentado pelo Banco Central.',        color: 'purple'  },
          ]"
          :key="feat.title"
          class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            :class="{
              'bg-emerald-50 text-emerald-600': feat.color === 'emerald',
              'bg-blue-50 text-blue-600':       feat.color === 'blue',
              'bg-purple-50 text-purple-600':   feat.color === 'purple',
            }"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="feat.icon === 'shield'"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              <path v-else-if="feat.icon === 'refresh'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
            </svg>
          </div>
          <div>
            <div class="text-sm font-semibold text-gray-800">{{ feat.title }}</div>
            <div class="text-xs text-gray-400 mt-1 leading-relaxed">{{ feat.desc }}</div>
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- ── Modal de conexão ──────────────────────────────────────────────── -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="selectedInstitution"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      @click.self="closeConnect"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6" @click.stop>

        <!-- header -->
        <div class="flex items-start justify-between mb-5">
          <div class="flex items-center gap-4">
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              :style="{ backgroundColor: selectedInstitution.color + '18' }"
            >
              <img
                v-if="selectedInstitution.slug && !logoErrors[`inst-${selectedInstitution.id}`]"
                :src="logoUrl(selectedInstitution.slug, selectedInstitution.color)"
                :alt="selectedInstitution.name"
                class="w-8 h-8 object-contain"
                @error="onLogoError(`inst-${selectedInstitution.id}`)"
              />
              <span v-else class="text-sm font-bold" :style="{ color: selectedInstitution.color }">
                {{ selectedInstitution.abbr }}
              </span>
            </div>
            <div>
              <h3 class="font-bold text-gray-800 text-lg">{{ selectedInstitution.name }}</h3>
              <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                {{ selectedInstitution.label }}
              </span>
            </div>
          </div>
          <button @click="closeConnect" class="text-gray-400 hover:text-gray-600 transition-colors mt-1">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- description -->
        <p class="text-sm text-gray-500 mb-5 leading-relaxed">
          Autorize o acesso seguro via <strong class="text-gray-700">Open Finance</strong>.
          Você será redirecionado ao {{ selectedInstitution.name }} para concluir a autorização.
        </p>

        <!-- steps -->
        <div class="space-y-3 mb-6">
          <div v-for="(step, i) in [
            'Você é redirecionado ao site do banco',
            'Autoriza o compartilhamento de dados',
            'Volta ao Organizze com a conta conectada',
          ]" :key="i" class="flex items-center gap-3">
            <div
              class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white"
              :style="{ backgroundColor: selectedInstitution.color }"
            >{{ i + 1 }}</div>
            <span class="text-sm text-gray-600">{{ step }}</span>
          </div>
        </div>

        <!-- security note -->
        <div class="flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 mb-5">
          <svg class="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span class="text-xs text-emerald-700">Sua senha bancária nunca é compartilhada com o Organizze</span>
        </div>

        <!-- actions -->
        <div class="flex gap-3">
          <button
            @click="closeConnect"
            class="flex-1 py-2.5 border border-gray-200 text-sm font-semibold text-gray-500 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            @click="confirmConnect"
            :disabled="connecting"
            class="flex-1 py-2.5 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            :style="{ backgroundColor: connecting ? '#6b7280' : selectedInstitution.color }"
          >
            <svg v-if="connecting" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {{ connecting ? 'Conectando...' : 'Conectar conta' }}
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>
