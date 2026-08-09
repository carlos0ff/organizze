<script setup>
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('auth.authenticate'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <div class="bg-gray-100 w-full min-h-screen flex flex-col items-center justify-center pt-8 pb-12 px-4 sm:px-6">
        <div class="mb-8 sm:mb-10">
            <a href="#" class="flex items-center justify-center">
                <img
                    src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                    class="h-10 sm:h-12 w-auto object-contain" alt="Logo Organizze"
                />
            </a>
        </div>

        <div class="w-full max-w-md bg-white shadow-xl rounded-lg px-6 py-10 sm:px-10 sm:py-12">
            <h2 class="text-[#2E312D] text-2xl sm:text-3xl font-bold text-center mb-8">Acesse sua conta</h2>

            <!-- Login Social -->
            <div class="flex flex-col gap-3 mb-8">
                <a
                    :href="route('auth.social.redirect')"
                    class="hover:cursor-pointer group flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3.5 text-gray-700 font-medium transition-all hover:bg-[#ea4435] hover:border-[#ea4435] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ea4435]/30"
                >
                    <span class="relative flex h-6 w-6 items-center justify-center">
                        <svg class="absolute h-6 w-6 transition-opacity group-hover:opacity-0" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.9 2.3 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.56 13.16 17.83 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9.46h12.7c-.55 2.97-2.2 5.48-4.68 7.18l7.2 5.6C43.93 37.52 46.5 31.58 46.5 24.5z"/>
                            <path fill="#FBBC05" d="M10.6 28.46c-.5-1.48-.78-3.06-.78-4.71s.28-3.23.78-4.71l-8.04-6.24C.92 16.12 0 19.94 0 23.75s.92 7.63 2.56 10.95l8.04-6.24z"/>
                            <path fill="#34A853" d="M24 47.5c6.47 0 11.9-2.13 15.87-5.8l-7.2-5.6c-2 1.35-4.56 2.15-8.67 2.15-6.17 0-11.44-3.66-13.4-8.96l-8.04 6.24C6.51 42.62 14.62 47.5 24 47.5z"/>
                        </svg>
                        <svg class="absolute h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path fill="white" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.9 2.3 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.56 13.16 17.83 9.5 24 9.5z"/>
                            <path fill="white" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9.46h12.7c-.55 2.97-2.2 5.48-4.68 7.18l7.2 5.6C43.93 37.52 46.5 31.58 46.5 24.5z"/>
                            <path fill="white" d="M10.6 28.46c-.5-1.48-.78-3.06-.78-4.71s.28-3.23.78-4.71l-8.04-6.24C.92 16.12 0 19.94 0 23.75s.92 7.63 2.56 10.95l8.04-6.24z"/>
                            <path fill="white" d="M24 47.5c6.47 0 11.9-2.13 15.87-5.8l-7.2-5.6c-2 1.35-4.56 2.15-8.67 2.15-6.17 0-11.44-3.66-13.4-8.96l-8.04 6.24C6.51 42.62 14.62 47.5 24 47.5z"/>
                        </svg>
                    </span>
                    <span>Continuar com Google</span>
                </a>
            </div>

            <div class="relative my-6">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="bg-white px-4 text-gray-500">ou</span>
                </div>
            </div>

            <form @submit.prevent="submit" class="flex flex-col gap-6">
                <!-- Email -->
                <div class="flex flex-col gap-2">
                    <label for="email" class="text-[#4D4D4D] font-medium">Seu email</label>
                    <input id="email" v-model="form.email" type="email" name="email" placeholder="Digite seu e-mail" autocomplete="email" class="h-12 w-full rounded-lg border px-4 text-gray-800 placeholder-gray-400 transition-all focus:outline-none focus:ring-2" required :class="form.errors.email ? 'border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-200': 'border-gray-300 bg-white focus:border-[#16C64F] focus:ring-[#16C64F]/20'"/>
                    <p v-if="form.errors.email" class="text-sm text-red-600">{{ form.errors.email }}</p>
                </div>

                <!-- Senha -->
                <div class="flex flex-col gap-2">
                    <label for="password" class="text-[#4D4D4D] font-medium">Sua senha</label>
                    <input
                        id="password"
                        v-model="form.password"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        autocomplete="current-password"
                        required
                        class="h-12 w-full rounded-lg border px-4 text-gray-800 placeholder-gray-400 transition-all focus:outline-none focus:ring-2"
                        :class="form.errors.password
                            ? 'border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-200'
                            : 'border-gray-300 bg-white focus:border-[#16C64F] focus:ring-[#16C64F]/20'"
                    />
                    <p v-if="form.errors.password" class="text-sm text-red-600">{{ form.errors.password }}</p>
                    <a :href="route('auth.forgot')" class="mt-1 text-sm text-gray-600 hover:text-[#16C64F] transition-colors">
                        Esqueci minha senha
                    </a>
                </div>

                <!-- Lembrar-me -->
                <label class="flex items-center gap-2 cursor-pointer">
                    <input
                        v-model="form.remember"
                        type="checkbox"
                        class="w-4 h-4 rounded border-gray-300 text-[#16C64F] focus:ring-[#16C64F]"
                    />
                    <span class="text-sm text-gray-600">Lembrar de mim</span>
                </label>

                <button
                    type="submit"
                    :disabled="form.processing"
                    class="mt-2 h-12 w-full rounded-lg bg-[#16C64F] font-semibold text-white transition-all hover:cursor-pointer hover:bg-[#117641] focus:outline-none focus:ring-2 focus:ring-[#16C64F]/40 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {{ form.processing ? 'Entrando...' : 'Entrar' }}
                </button>
            </form>
        </div>

        <p class="mt-6 text-sm text-gray-600">
            Ainda não possui uma conta?
            <a :href="route('auth.register')" class="font-semibold text-[#16C64F] hover:underline">Faça seu cadastro</a>
        </p>
    </div>
</template>
