<div align="center">
  <img src="https://www.organizze.com.br/assets/images/logo-AQ2YPMYN.svg" alt="Organizze Logo" width="220"/>
</div>

<div align="center">

[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](#)
[![Inertia](https://img.shields.io/badge/Inertia.js-9553E9?style=for-the-badge&logo=inertia&logoColor=white)](#)
[![Vue](https://img.shields.io/badge/Vue.js-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](#)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-green?style=for-the-badge&logo=opensourceinitiative)](LICENSE)

</div>

<p align="center">
  Aplicação web moderna de gestão financeira pessoal inspirada no <a href="https://www.organizze.com.br/" target="_blank">Organizze</a> — uma das plataformas de finanças pessoais mais populares do Brasil. O projeto recria as principais funcionalidades da plataforma original utilizando uma stack moderna e open-source.
</p>

---

## Sobre o projeto

Este projeto é uma recriação educacional/pessoal baseada no [Organizze](https://www.organizze.com.br/), plataforma brasileira focada em controle financeiro pessoal. O objetivo é reproduzir a experiência de uso da plataforma original — com dashboard intuitivo, lançamentos, limites de gastos e relatórios — utilizando tecnologias modernas como Laravel 12, Vue 3 e Inertia.js.

> **Aviso:** Este projeto não possui vínculo oficial com a empresa Organizze. É desenvolvido apenas para fins de estudo e aprendizado.

---

## Funcionalidades

### Financeiro
- **Dashboard** — visão geral com métricas de receitas, despesas e saldo do mês atual, com atalhos para as principais ações
- **Lançamentos** — cadastro e gerenciamento de transações financeiras (despesa, receita e transferência) com filtros por mês e ano, marcação de pago/pendente e categorização
- **Limites de gastos** — defina tetos de gasto por categoria com ícone e cor personalizados; acompanhe o progresso em tempo real com barras visuais e alertas
- **Contas bancárias** — visualize e gerencie múltiplas contas com seus saldos atualizados
- **Cartões de crédito** — acompanhe faturas, datas de vencimento e status de pagamento dos cartões
- **Conexão bancária** — conecte contas externas para importação automática de transações

### Relatórios e Insights
- **Relatórios financeiros** — visão consolidada de receitas e despesas por período e categoria
- **Painel administrativo** — gestão global de usuários e relatórios para administradores do sistema

### Conteúdo e Conta
- **Blog** — artigos sobre educação financeira com categorias, SEO e tempo estimado de leitura
- **Planos e assinatura** — diferentes planos de acesso com controle de expiração e upgrade
- **Configurações** — preferências da conta do usuário

---

## Stack

| Camada | Tecnologias |
|---|---|
| Backend | Laravel 12, PHP 8.4+ |
| Autenticação | Laravel Fortify, Laravel Sanctum |
| Autorização | Spatie Laravel Permission (RBAC) |
| Frontend | Vue 3 (Composition API), Inertia.js, TypeScript |
| Estilização | Tailwind CSS 4, Lucide Icons |
| Build | Vite 7 |
| Banco de dados | SQLite |
| Roteamento | Ziggy (Laravel → JS), Laravel Wayfinder |
| Qualidade | ESLint, Prettier, PHPUnit |
| DevOps | Docker, Docker Compose, Laravel Sail |

---

## Arquitetura

O projeto utiliza o padrão **Monólito com Inertia.js**, onde:

- O **Laravel** gerencia rotas, regras de negócio, autenticação e acesso ao banco
- O **Inertia.js** conecta o backend ao frontend sem necessidade de uma API REST separada, entregando componentes Vue como se fossem páginas
- O **Vue 3** renderiza a interface de forma reativa no cliente
- Para integrações externas, há uma **API REST** protegida por Sanctum (`/api/*`)

```
Navegador → Inertia.js → Laravel (rotas/controllers) → Eloquent ORM → SQLite
                ↓
           Vue 3 (componentes reativos)
```

---

## Estrutura de rotas

| Prefixo | Acesso | Módulos |
|---|---|---|
| `/` | Público | Landing page, blog, planos, sobre, termos |
| `/auth/*` | Público | Login, cadastro, recuperação de senha |
| `/app/*` | Autenticado | Dashboard, lançamentos, contas, cartões, limites, configurações |
| `/panel/*` | Admin | Painel administrativo, gestão de usuários, relatórios |
| `/api/*` | Autenticado (Sanctum) | API REST para transações e limites de gastos |

---

## Modelos de dados

| Entidade | Descrição |
|---|---|
| `User` | Conta do usuário com papel (admin/user), plano e expiração da assinatura |
| `Transaction` | Lançamento financeiro com tipo (despesa/receita/transferência), valor, data, conta, categoria e status de pagamento |
| `SpendingLimit` | Limite de gasto por categoria com ícone e cor personalizados |
| `Post` | Artigo do blog com SEO, tempo de leitura e contador de visualizações |
| `Category` | Categorias para classificação de transações |

---

## Requisitos

- PHP 8.4+
- Composer
- Node.js 20+
- npm
- Docker e Docker Compose *(opcional, para ambiente containerizado)*

---

## Instalação local

```bash
# 1. Clone o repositório
git clone https://github.com/carlos0ff/organizze.git
cd organizze

# 2. Execute o setup completo
# (instala dependências PHP e JS, configura .env, roda migrations e build)
composer setup
```

O comando `composer setup` executa automaticamente:
1. `composer install` — instala dependências PHP
2. Copia `.env.example` → `.env` e gera a `APP_KEY`
3. `php artisan migrate` — cria as tabelas no banco
4. `npm install && npm run build` — instala dependências JS e gera os assets

---

## Instalação com Docker

```bash
# 1. Clone o repositório
git clone https://github.com/carlos0ff/organizze.git
cd organizze

# 2. Suba os containers
docker compose up -d

# 3. Acesse o container da aplicação e rode o setup
docker compose exec app composer setup
```

---

## Desenvolvimento

```bash
# Inicia todos os serviços em paralelo:
# servidor Laravel + fila + log monitor + Vite dev server
composer dev
```

Acesse em: `http://localhost:8000`

---

## Comandos úteis

| Comando | Descrição |
|---|---|
| `composer dev` | Ambiente de desenvolvimento completo |
| `composer setup` | Setup inicial do projeto |
| `composer test` | Executa os testes com PHPUnit |
| `npm run build` | Build de produção dos assets |
| `npm run dev` | Vite em modo watch |
| `npm run lint` | Lint e correção automática com ESLint |
| `npm run format` | Formatação de código com Prettier |

---

## Referência

Este projeto é inspirado e baseado na interface e funcionalidades do **[Organizze](https://www.organizze.com.br/)**, plataforma de finanças pessoais brasileira. Todos os direitos da marca e do produto original pertencem à empresa Organizze.

---

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.
