<script setup lang="ts">
import { Github, Linkedin, Youtube } from 'lucide-vue-next';

</script>

<template>
    <footer id="footer" class="bg-[#FEFDF9] padding-x-all-sections w-full border-t border-[#F1F1F1]">
        <div class="max-w-[1224px] m-auto py-11 overflow-hidden sm:px-6">
            <div class="flex flex-col items-center lg:flex-row lg:justify-between mb-8 lg:mb-0">
                <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                     alt="Organizze logo"
                     class="h-8 w-auto"
                />
                <nav class="-mx-5 -my-2 flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center mt-3 mb-3" aria-label="Footer">
                    <div class="px-5 py-2">
                        <a href="/" class="text-base text-[#454843] font-serif hover:text-gray-900 transition duration-200 ease-in-out">Início</a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="/conexao-bancaria" class="text-base text-[#454843] font-serif hover:text-gray-900 transition duration-200 ease-in-out">Conexão Bancária</a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="/quem-somos" class="text-base text-[#454843] font-serif hover:text-gray-900 transition duration-200 ease-in-out">Quem somos</a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="/recursos" class="text-base text-[#454843] font-serif hover:text-gray-900 transition duration-200 ease-in-out">Recursos</a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="/planos" class="text-base text-[#454843] font-serif hover:text-gray-900 transition duration-200 ease-in-out">Planos</a>
                    </div>
                    <div class="px-5 py-2">
                        <a target="_blank" href="/blog" class="text-base text-[#454843] font-serif hover:text-gray-900 transition duration-200 ease-in-out">Blog</a>
                    </div>
                </nav>
                <div>
                    <a class="rounded-lg text-base tracking-tig transition-colors font-serif ease-in-out duration-300 select-none inline-flex min-w-fit items-center text-[#FBF7EA] font-semibold py-3 px-6 bg-[#129E3F] hover:bg-[#006A33]" href="https://auth.organizze.com.br/cadastro">Começar agora</a>
                </div>
            </div>
            <div class="w-full overflow-hidden flex flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-between lg:mt-10">
                <p class="text-center text-sm text-[#454843] font-serif lg:text-left mt-6 lg:mt-0">
                    &copy; {{ new Date().getFullYear() }} Organizze Tecnologia Ltda. CNPJ 35.381.093/0001-26
                </p>
                <div class="flex flex-col lg:flex-row lg:space-x-10 items-center">
                    <div class="flex justify-center space-x-6 mb-6 lg:mb-0">
                        <a href="https://www.linkedin.com/company/organizze/" target="_blank" rel="noreferrer" class="text-[#454843] hover:text-gray-500 font-serif transition duration-200 ease-in-out"><span class="sr-only">Linkedin</span><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3231_915)">
                                    <path d="M0 1.39086C0 0.651637 0.597656 0.0380859 1.33594 0.0380859H16.6641C17.4023 0.0380859 18 0.644245 18 1.39086V17.6093C18 18.3485 17.4023 18.9621 16.6641 18.9621H1.33594C0.597656 18.9621 0 18.3559 0 17.6093V1.39086Z" fill="#454843"></path>
                                    <path d="M5.4707 15.8719V7.35615H2.77773V15.8719H5.4707ZM4.12773 6.18818C5.06289 6.18818 5.64648 5.53767 5.64648 4.71714C5.63242 3.88182 5.06289 3.24609 4.14883 3.24609C3.22773 3.24609 2.62305 3.88182 2.62305 4.72453C2.62305 5.53767 3.20664 6.19558 4.11367 6.19558H4.12773V6.18818ZM6.96133 15.8719H9.6543V11.1262C9.6543 10.8674 9.67539 10.6087 9.7457 10.4313C9.93555 9.92863 10.3785 9.39639 11.1238 9.39639C12.1012 9.39639 12.4879 10.18 12.4879 11.3184V15.8793H15.1879V11.0005C15.1879 8.38366 13.859 7.15656 12.0941 7.15656C11.5996 7.13648 11.1093 7.26047 10.6775 7.51484C10.2457 7.76921 9.88919 8.14407 9.64727 8.59804H9.66133V7.35615H6.96133C6.99648 8.15451 6.96133 15.8719 6.96133 15.8719Z" fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3231_915">
                                        <rect width="18" height="19" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/organizzeme" target="_blank" rel="noreferrer" class="text-[#454843] hover:text-gray-500 font-serif transition duration-200 ease-in-out"><span class="sr-only">Instagran</span><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3202_52132)">
                                    <path d="M9.25451 4.52215C6.63947 4.52215 4.53017 6.63146 4.53017 9.2465C4.53017 11.8615 6.63947 13.9708 9.25451 13.9708C11.8696 13.9708 13.9789 11.8615 13.9789 9.2465C13.9789 6.63146 11.8696 4.52215 9.25451 4.52215ZM9.25451 12.3179C7.56461 12.3179 6.18307 10.9405 6.18307 9.2465C6.18307 7.55248 7.56049 6.17506 9.25451 6.17506C10.9485 6.17506 12.326 7.55248 12.326 9.2465C12.326 10.9405 10.9444 12.3179 9.25451 12.3179ZM15.274 4.3289C15.274 4.94155 14.7806 5.43084 14.1721 5.43084C13.5595 5.43084 13.0702 4.93743 13.0702 4.3289C13.0702 3.72037 13.5636 3.22697 14.1721 3.22697C14.7806 3.22697 15.274 3.72037 15.274 4.3289ZM18.403 5.44729C18.3332 3.97118 17.996 2.66366 16.9146 1.5864C15.8373 0.509133 14.5298 0.171973 13.0537 0.0979624C11.5324 0.0116167 6.97252 0.0116167 5.45119 0.0979624C3.9792 0.167861 2.67168 0.505021 1.5903 1.58229C0.508927 2.65955 0.175879 3.96707 0.101869 5.44317C0.0155229 6.9645 0.0155229 11.5244 0.101869 13.0457C0.171768 14.5218 0.508927 15.8293 1.5903 16.9066C2.67168 17.9839 3.97509 18.321 5.45119 18.395C6.97252 18.4814 11.5324 18.4814 13.0537 18.395C14.5298 18.3251 15.8373 17.988 16.9146 16.9066C17.9919 15.8293 18.329 14.5218 18.403 13.0457C18.4894 11.5244 18.4894 6.96862 18.403 5.44729ZM16.4377 14.6781C16.1169 15.4839 15.4961 16.1048 14.6861 16.4296C13.4731 16.9107 10.5949 16.7997 9.25451 16.7997C7.9141 16.7997 5.0318 16.9066 3.82296 16.4296C3.01706 16.1089 2.3962 15.4881 2.07137 14.6781C1.5903 13.4651 1.70132 10.5869 1.70132 9.2465C1.70132 7.90608 1.59442 5.02378 2.07137 3.81494C2.39209 3.00905 3.01295 2.38818 3.82296 2.06336C5.03591 1.58229 7.9141 1.6933 9.25451 1.6933C10.5949 1.6933 13.4772 1.5864 14.6861 2.06336C15.492 2.38407 16.1128 3.00494 16.4377 3.81494C16.9187 5.02789 16.8077 7.90608 16.8077 9.2465C16.8077 10.5869 16.9187 13.4692 16.4377 14.6781Z" fill="#454843"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3202_52132">
                                        <rect width="19.3846" height="18.4615" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://twitter.com/organizze" target="_blank" rel="noreferrer" class="text-[#454843] hover:text-gray-500 font-serif transition duration-200 ease-in-out"><span class="sr-only">Twitter</span><svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3202_52124)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0015 4.60305C21.0159 4.80488 21.0159 5.00676 21.0159 5.2086C21.0159 11.3648 16.3303 18.4582 7.76628 18.4582C5.12788 18.4582 2.67694 17.6941 0.615234 16.3677C0.990101 16.4109 1.3505 16.4254 1.73979 16.4254C3.91679 16.4254 5.92084 15.6901 7.52118 14.4358C5.4739 14.3925 3.75822 13.0517 3.1671 11.2062C3.45547 11.2495 3.7438 11.2783 4.0466 11.2783C4.46469 11.2783 4.88282 11.2206 5.27207 11.1197C3.1383 10.6872 1.53791 8.81294 1.53791 6.54941V6.49176C2.15784 6.83778 2.87877 7.05404 3.64284 7.08284C2.38852 6.24661 1.56676 4.81931 1.56676 3.20454C1.56676 2.33951 1.79739 1.54655 2.20111 0.854513C4.49349 3.68033 7.93927 5.52573 11.8031 5.7276C11.731 5.38158 11.6878 5.02118 11.6878 4.66074C11.6878 2.09441 13.7639 0.00390625 16.3446 0.00390625C17.6854 0.00390625 18.8965 0.566184 19.7471 1.47448C20.7996 1.27265 21.8088 0.883359 22.7027 0.349927C22.3566 1.43126 21.6214 2.33956 20.6554 2.91621C21.5926 2.81534 22.5009 2.55577 23.337 2.19537C22.7028 3.11805 21.9098 3.93981 21.0015 4.60305Z" fill="#454843"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3202_52124">
                                        <rect width="23.0769" height="18.4615" fill="white" transform="translate(0.615234)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/Organizze" target="_blank" rel="noreferrer" class="text-[#454843] hover:text-gray-500 font-serif transition duration-200 ease-in-out"><span class="sr-only">Facebook</span><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3202_52140)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.61133 18.4615V10.2043H0.845703V6.92308H3.61133V4.33774C3.61133 1.52885 5.32767 0 7.83368 0C9.0344 0 10.0657 0.0901442 10.3649 0.129808V3.0649H8.62695C7.26397 3.0649 7.00075 3.71394 7.00075 4.66226V6.92308H10.0765L9.6546 10.2043H7.00075V18.4615" fill="#454843"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_3202_52140">
                                    <rect width="10.1538" height="18.4615" fill="white" transform="translate(0.845703)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>
