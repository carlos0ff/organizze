
<script setup>
import { Youtube, Linkedin, Github, Instagram} from 'lucide-vue-next'

</script>

<template>
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
                        <a href="/app" class="hover:text-white hover:translate-x-1 transition-all inline-block font-medium text-green-400">Baixar App</a>
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
                    <a href="#">
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" class="h-9 w-auto" alt="App Store" />
                    </a>
                    <a href="#" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" class="h-9 w-auto" alt="Google Play" />
                    </a>
                </div>

                <div class="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/10">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.organizze.com.br" class="h-14 w-14 rounded-md bg-white p-1 shadow-lg" alt="QR Code"
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
                    <a href="#" class="flex items-center gap-1 hover:text-white transition-colors">
                        <Instagram class="w-3 h-3"/> Instagram
                    </a>
                    <a href="#" class="flex items-center gap-1 hover:text-white transition-colors">
                        <Youtube class="w-3 h-3" /> YouTube
                    </a>
                    <a href="#" class="flex items-center gap-1 hover:text-white transition-colors">
                        <Linkedin class="w-3 h-3" /> LinkedIn
                    </a>
                    <a href="#" class="flex items-center gap-1 hover:text-white transition-colors">
                        <Github class="w-3 h-3" /> Github
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

