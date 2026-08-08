<h1 align="center">
  <br /> <img src="" alt="Organizze logo" width="180"> <br /> Organizze <br />
</h1>

<p align="center">
  Plataforma SaaS de gestão financeira pessoal com Open Finance, relatórios interativos e controle inteligente de gastos.
</p>

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-stack">Stack</a> •
  <a href="#-instalação">Instalação</a> •
  <a href="#-rotas">Rotas</a> •
  <a href="#-open-finance">Open Finance</a> •
  <a href="#-licença">Licença</a>
</p>

<div align="center">

[![Laravel](https://img.shields.io/badge/Laravel_12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](#)
[![Vue](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![Inertia](https://img.shields.io/badge/Inertia.js-9553E9?style=for-the-badge&logo=inertia&logoColor=white)](#)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-22c55e?style=for-the-badge&logo=opensourceinitiative)](LICENSE)

</div>

---

## 📋 Sobre o projeto

O **Organizze** é uma aplicação full-stack de finanças pessoais que combina a robustez do Laravel 12 no backend com a reatividade do Vue 3 no frontend via Inertia.js — sem necessidade de API REST separada.

O projeto cobre o fluxo completo de um SaaS financeiro: autenticação, onboarding, dashboard com dados em tempo real, múltiplos tipos de relatório, controle de limites por categoria, gestão de cartões, assinatura por planos e integração com o ecossistema Open Finance Brasil regulamentado pelo BACEN.

---

## ✨ Funcionalidades

### App

| Módulo | Rota | Descrição |
|---|---|---|
| 🏠 **Dashboard** | `/app` | Saldo consolidado, lançamentos recentes, distribuição por categoria e resumo mensal |
| 💸 **Lançamentos** | `/app/lancamentos` | Registro, edição e categorização de receitas e despesas com filtro por mês |
| 📊 **Relatório Mensal** | `/app/relatorios/mensal` | Gráfico de linha SVG, donut animado por categoria e fluxo de caixa |
| 📅 **Relatório Anual** | `/app/relatorios/anual` | Visão consolidada do ano com comparativo mês a mês |
| 🏷️ **Por Categoria** | `/app/relatorios/categorias` | Ranking de gastos por categoria com barras de progresso |
| ↕️ **Receitas vs Despesas** | `/app/relatorios/receitas-despesas` | Comparativo visual entre entradas e saídas |
| 🎯 **Limite de Gastos** | `/app/limites` | Criação e acompanhamento de orçamento por categoria |
| 🏦 **Conexão Bancária** | `/app/conexao-bancaria` | Open Finance: conectar contas, logos dos bancos, modal de autorização |
| 💳 **Cartões** | `/app/cards` | Gestão de cartões de crédito e faturas |
| 👤 **Perfil** | `/app/perfil` | Dados pessoais, segurança e preferências |
| 🔔 **Notificações** | `/app/notificacoes` | Central de alertas e avisos do sistema |
| 💎 **Assinatura** | `/app/assinatura` | Planos Gratuito e Conectado com comparativo de funcionalidades |

### Web & Blog

| Módulo | Descrição |
|---|---|
| 🌐 **Landing Page** | Apresentação do produto com planos e CTA |
| 📝 **Blog** | Artigos sobre finanças pessoais com categorias, busca e paginação |

### Autenticação

- Login, Cadastro e Recuperação de senha
- Proteção de rotas via middleware Laravel

---

## 🛠️ Stack

### Backend
| Tecnologia | Versão | Uso |
|---|---|---|
| PHP | 8.3+ | Runtime |
| Laravel | 12 | Framework principal |
| Inertia.js | 2.x | Bridge SSR entre Laravel e Vue |
| SQLite / MySQL | — | Banco de dados |

### Frontend
| Tecnologia | Versão | Uso |
|---|---|---|
| Vue.js | 3.5 | Framework reativo (`<script setup lang="ts">`) |
| TypeScript | 5.9 | Tipagem estática |
| Tailwind CSS | 4.0 | Estilização utility-first |
| Lucide Vue | 0.577 | Ícones |
| Vite | 7 | Build tool e HMR |

### Tooling
| Ferramenta | Uso |
|---|---|
| Ziggy JS | Rotas Laravel no frontend |
| Laravel Wayfinder | Type-safe route actions |
| ESLint + Prettier | Qualidade e formatação de código |
| Docker | Containerização (compose.yaml) |

---

## 🚀 Instalação

### Requisitos

- PHP 8.3+
- Composer
- Node.js 20+
- SQLite ou MySQL

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/carlos0ff/organizze.git
cd organizze

# 2. Instale as dependências PHP
composer install

# 3. Instale as dependências JavaScript
npm install

# 4. Configure o ambiente
cp .env.example .env
php artisan key:generate

# 5. Execute as migrations
php artisan migrate --seed

# 6. Inicie o servidor de desenvolvimento
composer run dev
```

Acesse em: **http://localhost**

### Docker

```bash
docker compose up -d
```

---

## 🗺️ Rotas

```
GET  /                          → Landing page
GET  /entrar                    → Login
GET  /cadastro                  → Registro
GET  /recuperar-senha           → Recuperação de senha

GET  /app                       → Dashboard
GET  /app/lancamentos           → Lançamentos
GET  /app/relatorios/mensal     → Relatório mensal
GET  /app/relatorios/anual      → Relatório anual
GET  /app/relatorios/categorias → Relatório por categoria
GET  /app/relatorios/receitas-despesas → Receitas vs despesas
GET  /app/limites               → Limite de gastos
GET  /app/conexao-bancaria      → Conexão bancária (Open Finance)
GET  /app/cards                 → Cartões
GET  /app/assinatura            → Assinatura
GET  /app/perfil                → Perfil
GET  /app/notificacoes          → Notificações

GET  /blog                      → Blog
GET  /blog/articles             → Lista de artigos
GET  /planos                    → Página de planos
```

---

## 🏦 Open Finance

A página **Conexão Bancária** implementa a arquitetura de integração com o **Open Finance Brasil**, regulamentado pelo BACEN:

- **12 instituições** suportadas (Nubank, Inter, Itaú, Bradesco, Santander, BB, Caixa, C6, PicPay, BTG, XP, Mercado Pago)
- **Logos dinâmicas** via Simple Icons CDN com fallback para abreviação colorida
- **Modal de autorização** com fluxo de 3 etapas e indicador de loading
- **Status em tempo real** (Sincronizado / Erro) por conta conectada
- **Saldo consolidado** calculado automaticamente

Protocolo de segurança: FAPI-BR v2.2 · PAR · PKCE · mTLS · PS256 · DCR

> 📄 Estudo completo: [`docs/open-finance-brasil.md`](docs/open-finance-brasil.md)

---

## 📁 Estrutura do projeto

```
organizze/
├── app/
│   ├── Http/Controllers/App/   # Controllers do app (Dashboard, Reports, etc.)
│   └── Providers/
├── resources/
│   └── js/
│       ├── pages/
│       │   ├── App/            # Páginas autenticadas
│       │   ├── Auth/           # Login, cadastro, recuperação
│       │   ├── Web/            # Landing page e marketing
│       │   └── Blog/           # Blog público
│       └── Components/
│           ├── layout/         # Navbar, Footer, Sidebar, Modal
│           ├── buttons/        # BaseButton, ButtonPrimary, etc.
│           ├── inputs/         # TextInput, SelectInput, DatePicker, etc.
│           ├── feedback/       # Alert, Toast, Skeleton, Progress
│           └── tables/         # BaseTable, ListGroup
├── routes/
│   └── web/
│       ├── app.php             # Rotas autenticadas
│       ├── auth.php            # Rotas de autenticação
│       └── web.php             # Rotas públicas
└── docs/
    └── open-finance-brasil.md  # Estudo de integração Open Finance
```

---

## 📄 Licença

MIT © [carlos0ff](https://github.com/carlos0ff)

---

<p align="center"> Feito com ☕ e Laravel no Brasil </p>
