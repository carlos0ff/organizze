<h1 align="center">Organizze</h1>

<p align="center">
  Plataforma de gestão financeira pessoal com Open Finance, relatórios interativos e controle de gastos.
</p>

<div align="center">

[![Laravel](https://img.shields.io/badge/Laravel_12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](#)
[![Inertia](https://img.shields.io/badge/Inertia.js-9553E9?style=for-the-badge&logo=inertia&logoColor=white)](#)
[![Vue](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-green?style=for-the-badge&logo=opensourceinitiative)](LICENSE)

</div>

---

## Sobre

O **Organizze** é uma aplicação SaaS de finanças pessoais construída com Laravel 12 + Inertia.js + Vue 3. Permite controlar receitas, despesas, cartões, limites de gastos e conectar contas bancárias via Open Finance regulamentado pelo BACEN.

## Funcionalidades

| Módulo | Descrição |
|---|---|
| **Dashboard** | Visão geral com saldo, lançamentos recentes, categorias e metas |
| **Lançamentos** | Registro e categorização de receitas e despesas |
| **Relatórios** | Mensal, anual, por categoria e receitas vs despesas com gráficos SVG |
| **Limite de Gastos** | Definição e acompanhamento de limites por categoria |
| **Conexão Bancária** | Integração com bancos via Open Finance (BACEN) com logos, status e modal de conexão |
| **Cartões** | Gestão de cartões de crédito |
| **Assinatura** | Planos Gratuito e Conectado com comparativo de funcionalidades |
| **Perfil** | Configurações de conta, segurança e preferências |
| **Notificações** | Central de notificações do usuário |
| **Blog** | Artigos sobre finanças pessoais com categorias e paginação |

## Stack

- **Backend:** Laravel 12, Inertia.js, PHP
- **Frontend:** Vue 3 (Composition API, `<script setup lang="ts">`), TypeScript
- **Estilização:** Tailwind CSS 4
- **Ícones:** Lucide Vue Next, Simple Icons CDN
- **Roteamento:** Ziggy JS + Laravel Wayfinder
- **Build:** Vite 7
- **Qualidade:** ESLint, Prettier, TypeScript strict

## Estrutura de páginas

```
resources/js/pages/
├── App/
│   ├── Dashboard/          # Visão geral financeira
│   ├── Lancamentos/        # Receitas e despesas
│   ├── Relatorios/         # Mensal, Anual, Categorias, ReceitasDespesas
│   ├── Limites/            # Limite de gastos por categoria
│   ├── ConexaoBancaria/    # Open Finance — conectar contas bancárias
│   ├── Cards/              # Cartões de crédito
│   ├── Assinatura/         # Planos e upgrade
│   ├── Perfil/             # Configurações do usuário
│   ├── Notificacoes/       # Notificações
│   └── Account/            # Conta
├── Auth/                   # Login, cadastro, recuperação de senha
├── Web/                    # Landing page, planos, termos
└── Blog/                   # Artigos e categorias
```

## Instalação

```bash
# Clone o repositório
git clone https://github.com/carlos0ff/organizze.git
cd organizze

# Instale as dependências PHP
composer install

# Instale as dependências JS
npm install

# Configure o ambiente
cp .env.example .env
php artisan key:generate

# Execute as migrations
php artisan migrate

# Inicie o servidor de desenvolvimento
composer run dev
```

> Também disponível via Docker: `docker compose up -d`

## Open Finance

A página **Conexão Bancária** demonstra a arquitetura de integração com o Open Finance Brasil (FAPI-BR v2.2, PAR, PKCE, mTLS, PS256). Consulte [`docs/open-finance-brasil.md`](docs/open-finance-brasil.md) para o estudo completo de integração.

## Licença

MIT © [carlos0ff](https://github.com/carlos0ff)
