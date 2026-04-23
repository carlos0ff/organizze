<script setup>
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    email:    '',
    password: '',
    remember: false,
});

function submit() {
    form.post('/auth/entrar', {
        onFinish: () => form.reset('password'),
    });
}
</script>

<template>
    <div class="bg-gray-100 w-full min-h-screen flex flex-col items-center justify-center pt-8 pb-12 px-4 sm:px-6">

        <!-- Logo -->
        <div class="mb-8 sm:mb-10">
            <a href="/" class="flex items-center justify-center">
                <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                    alt="Organizze" class="h-10 sm:h-12 w-auto object-contain" />
            </a>
        </div>

        <div class="w-full max-w-md bg-white shadow-xl rounded-lg px-6 py-10 sm:px-10 sm:py-12">
            <h2 class="text-[#2E312D] text-2xl sm:text-3xl font-bold text-center mb-8">Acesse sua conta</h2>

            <!-- OAuth (visual only) -->
            <div class="flex flex-col gap-3 mb-8">
                <button type="button"
                    class="group flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3.5 text-gray-700 font-medium transition-all hover:bg-[#ea4435] hover:border-[#ea4435] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ea4435]/30">
                    <span class="relative flex h-6 w-6 items-center justify-center">
                        <svg class="absolute h-6 w-6 transition-opacity group-hover:opacity-0" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.9 2.3 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.56 13.16 17.83 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9.46h12.7c-.55 2.97-2.2 5.48-4.68 7.18l7.2 5.6C43.93 37.52 46.5 31.58 46.5 24.5z"/>
                            <path fill="#FBBC05" d="M10.6 28.46c-.5-1.48-.78-3.06-.78-4.71s.28-3.23.78-4.71l-8.04-6.24C.92 16.12 0 19.94 0 23.75s.92 7.63 2.56 10.95l8.04-6.24z"/>
                            <path fill="#34A853" d="M24 47.5c6.47 0 11.9-2.13 15.87-5.8l-7.2-5.6c-2 1.35-4.56 2.15-8.67 2.15-6.17 0-11.44-3.66-13.4-8.96l-8.04 6.24C6.51 42.62 14.62 47.5 24 47.5z"/>
                        </svg>
                        <svg class="absolute h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" viewBox="0 0 48 48">
                            <path fill="white" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.9 2.3 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.56 13.16 17.83 9.5 24 9.5z"/>
                            <path fill="white" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9.46h12.7c-.55 2.97-2.2 5.48-4.68 7.18l7.2 5.6C43.93 37.52 46.5 31.58 46.5 24.5z"/>
                            <path fill="white" d="M10.6 28.46c-.5-1.48-.78-3.06-.78-4.71s.28-3.23.78-4.71l-8.04-6.24C.92 16.12 0 19.94 0 23.75s.92 7.63 2.56 10.95l8.04-6.24z"/>
                            <path fill="white" d="M24 47.5c6.47 0 11.9-2.13 15.87-5.8l-7.2-5.6c-2 1.35-4.56 2.15-8.67 2.15-6.17 0-11.44-3.66-13.4-8.96l-8.04 6.24C6.51 42.62 14.62 47.5 24 47.5z"/>
                        </svg>
                    </span>
                    <span>Continuar com Google</span>
                </button>

                <button type="button"
                    class="flex w-full items-center justify-center gap-3 rounded-lg bg-[#1877F2] py-3.5 text-white font-medium transition-all hover:bg-[#166FE5] focus:outline-none focus:ring-2 focus:ring-[#1877F2]/40">
                    <svg width="10" height="20" viewBox="0 0 12 24" fill="currentColor">
                        <path d="M7.789 23.974V13.485h3.538l.529-4.087H7.789V6.787c0-1.183.33-1.99 2.036-1.99L12 4.796V1.14C11.624 1.09 10.332.98 8.83.98 5.694.98 3.547 2.885 3.547 6.383v3.015H0v4.088h3.547v10.488z"/>
                    </svg>
                    <span>Continuar com Facebook</span>
                </button>
            </div>

            <!-- Divisor -->
            <div class="relative my-6">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="bg-white px-4 text-gray-500">ou</span>
                </div>
            </div>

            <!-- Erro geral -->
            <div v-if="form.errors.email" class="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {{ form.errors.email }}
            </div>

            <!-- Formulário -->
            <form @submit.prevent="submit" class="flex flex-col gap-5">
                <div class="flex flex-col gap-1.5">
                    <label class="text-[#4D4D4D] font-medium text-sm">Seu e-mail</label>
                    <input
                        v-model="form.email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        autocomplete="email"
                        :class="form.errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-gray-300 focus:border-[#16C64F] focus:ring-[#16C64F]/20'"
                        class="h-12 w-full rounded-lg border bg-white px-4 text-gray-800 placeholder-gray-400 transition-all focus:ring-2 focus:outline-none"
                    />
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-[#4D4D4D] font-medium text-sm">Sua senha</label>
                    <input
                        v-model="form.password"
                        type="password"
                        placeholder="Digite sua senha"
                        autocomplete="current-password"
                        :class="form.errors.password ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-gray-300 focus:border-[#16C64F] focus:ring-[#16C64F]/20'"
                        class="h-12 w-full rounded-lg border bg-white px-4 text-gray-800 placeholder-gray-400 transition-all focus:ring-2 focus:outline-none"
                    />
                    <p v-if="form.errors.password" class="text-xs text-red-500 mt-0.5">{{ form.errors.password }}</p>
                    <a href="/auth/recuperar" class="mt-1 text-sm text-gray-500 hover:text-[#16C64F] transition-colors self-end">
                        Esqueci minha senha
                    </a>
                </div>

                <label class="flex items-center gap-2 cursor-pointer select-none">
                    <input v-model="form.remember" type="checkbox" class="w-4 h-4 accent-[#16C64F] rounded" />
                    <span class="text-sm text-gray-600">Lembrar de mim</span>
                </label>

                <button
                    type="submit"
                    :disabled="form.processing"
                    class="mt-1 h-12 w-full rounded-lg bg-[#16C64F] font-semibold text-white transition-all hover:bg-[#117641] focus:outline-none focus:ring-2 focus:ring-[#16C64F]/40 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {{ form.processing ? 'Entrando…' : 'Entrar' }}
                </button>
            </form>
        </div>

        <p class="mt-6 text-sm text-gray-600">
            Ainda não possui uma conta?
            <a href="/auth/cadastro" class="font-semibold text-[#16C64F] hover:underline">Faça seu cadastro</a>
        </p>
    </div>
</template>
