import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { router as Inertia } from '@inertiajs/vue3';

const routes: RouteRecordRaw[] = [
    // ── Auth ──────────────────────────────────────
    { path: '/auth/entrar',   name: 'auth.login',       component: () => import('@/pages/Auth/Entrar.vue') },
    { path: '/auth/cadastro', name: 'auth.register',    component: () => import('@/pages/Auth/Cadastro.vue') },
    { path: '/auth/recuperar',name: 'auth.recover',     component: () => import('@/pages/Auth/Recuperar.vue') },

    // ── App ───────────────────────────────────────
    { path: '/app',                    name: 'app.dashboard',       component: () => import('@/pages/App/Dashboard/Index.vue') },
    { path: '/app/lancamentos',        name: 'app.lancamentos',     component: () => import('@/pages/App/Lancamentos/Index.vue') },
    { path: '/app/limites-gastos',     name: 'app.limites',         component: () => import('@/pages/App/LimitesGastos/Index.vue') },
    { path: '/app/conexao-bancaria',   name: 'app.conexao',         component: () => import('@/pages/App/ConexaoBancaria/Index.vue') },
    { path: '/app/contas',             name: 'app.contas',          component: () => import('@/pages/App/Account/Index.vue') },
    { path: '/app/cartao',             name: 'app.cartao',          component: () => import('@/pages/App/Cards/Index.vue') },
    { path: '/app/assinatura',         name: 'app.assinatura',      component: () => import('@/pages/App/Signature/Index.vue') },
    { path: '/app/perfil',             name: 'app.perfil',          component: () => import('@/pages/App/Profile/Index.vue') },
    { path: '/app/plano',              name: 'app.plano',           component: () => import('@/pages/App/Plan/Index.vue') },
    { path: '/app/configuracao',       name: 'app.configuracao',    component: () => import('@/pages/App/Settings/Index.vue') },
    { path: '/app/ajuda',              name: 'app.ajuda',           component: () => import('@/pages/App/Help/Index.vue') },

    // ── Blog ──────────────────────────────────────
    { path: '/blog',                        name: 'blog.home',     component: () => import('@/pages/Blog/Home/Index.vue') },
    { path: '/blog/post/:slug',            name: 'blog.post',     component: () => import('@/pages/Blog/Posts/Show.vue') },
    { path: '/blog/categoria/:category',   name: 'blog.category', component: () => import('@/pages/Blog/Categories/Show.vue') },
    { path: '/blog/artigos',               name: 'blog.articles', component: () => import('@/pages/Blog/Articles/Index.vue') },

    // ── Panel ─────────────────────────────────────
    { path: '/panel',              name: 'panel.dashboard',  component: () => import('@/pages/Panel/Dashboard/Index.vue') },
    { path: '/panel/usuarios',     name: 'panel.users',      component: () => import('@/pages/Panel/Users/Index.vue') },
    { path: '/panel/relatorios',   name: 'panel.reports',    component: () => import('@/pages/Panel/Reports/Index.vue') },

    // ── Public ────────────────────────────────────
    { path: '/',                  name: 'home',    component: () => import('@/pages/Web/Index.vue') },
    { path: '/termos',            name: 'terms',   component: () => import('@/pages/Web/Terms/Index.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ top: 0 }),
});

// Delega toda navegação para o Inertia (Inertia é o renderizador real)
// Vue Router só fornece: <router-link>, useRoute(), useRouter(), route names
router.beforeEach((to, from) => {
    if (to.fullPath !== from.fullPath) {
        Inertia.visit(to.fullPath, { preserveScroll: false });
        return false; // cancela a navegação do Vue Router (Inertia assume)
    }
});

export default router;
