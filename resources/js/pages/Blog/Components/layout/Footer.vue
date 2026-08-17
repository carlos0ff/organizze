<script setup lang="ts">
</script>

<template>
    <footer class="bg-[#2F4F3F] text-gray-300 mt-16 border-t border-white/10">
        <div class="max-w-6xl mx-auto px-4 py-10">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                <div class="flex flex-col gap-6 md:col-span-1 lg:col-span-1">
                    <div class="transition-opacity hover:opacity-80">
                        <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d" alt="Organizze" class="h-7 w-auto" style="filter: brightness(0) invert(1)"/>
                    </div>
                    <p class="text-sm text-gray-300 max-w-xs leading-relaxed">Simplificando o controle financeiro para você tomar decisões melhores todos os dias.</p>
                </div>
                <div>
                    <h3 class="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                        Navegação
                    </h3>

                    <ul class="space-y-3 text-sm">
                        <li><a href="/" class="footer-link">Início</a></li>
                        <li><a href="/artigos" class="footer-link">Artigos</a></li>
                        <li><a href="/temas" class="footer-link">Temas</a></li>

                        <li>
                            <a href="/app" class="footer-link text-emerald-200/85 hover:text-emerald-100">
                                Baixar App
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                        Mais lidos
                    </h3>

                    <ul class="space-y-3 text-sm">
                        <li><a href="#" class="footer-link">Apps de finanças</a></li>
                        <li><a href="#" class="footer-link">Montar orçamento</a></li>
                        <li><a href="#" class="footer-link">Organizar rápido</a></li>
                        <li><a href="#" class="footer-link">Sair das dívidas</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                        Institucional
                    </h3>

                    <ul class="space-y-3 text-sm">
                        <li><a href="/sobre" class="footer-link text-emerald-200/70 hover:text-emerald-100">Sobre nós</a></li>
                        <li><a href="/contato" class="footer-link">Centro de Ajuda</a></li>
                        <li><a href="/termos" class="footer-link">Termos de uso</a></li>
                        <li><a href="/privacidade" class="footer-link">Privacidade</a></li>
                    </ul>
                </div>

                <div class="flex flex-col gap-4">
                    <h4 class="text-sm font-semibold text-white uppercase">Baixe o app</h4>
                    <div class="flex gap-3">
                        <a href="#" class="hover:opacity-90 transition">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" class="h-10">
                        </a>
                        <a href="#" class="hover:opacity-90 transition">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-10">
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
            <div class="border-t border-[#3A5849] mt-10 pt-4">
                <p class="text-center text-xs text-gray-300"> © {{ new Date().getFullYear() }} Organizze Tecnologia Ltda. CNPJ 35.381.093/0001-26 </p>
            </div>
        </div>
    </footer>
</template>
