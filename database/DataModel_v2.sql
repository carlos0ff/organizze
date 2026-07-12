-- ============================================================================
-- Organizze / CaféControl 2.0  —  Modelo de Dados (PostgreSQL 15+)
-- Fintech / PFM — Open Finance, OAuth2/Social, Metas, Orçamentos, Multi-moeda,
-- Contas compartilhadas, Auditoria, GDPR/LGPD.
--
-- Convenções globais:
--   * PK bigint identity (rápida em índices/FKs) + coluna `uuid` pública única.
--   * Soft delete: deleted_at TIMESTAMPTZ NULL em todas as tabelas de domínio.
--   * Timestamps: created_at / updated_at (trigger) / deleted_at.
--   * Multi-tenant leve: tenant_id em todas as tabelas de dados do usuário.
--   * Campos sensíveis (tokens OAuth, dados bancários) = BYTEA cifrado na app
--     (envelope encryption / KMS). NUNCA armazenar CVV. Marcados com  -- 🔒 ENC
--   * Dinheiro: NUMERIC(18,4) em unidade da moeda + currency_code (ISO-4217).
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;   -- gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS citext;     -- e-mail case-insensitive
CREATE EXTENSION IF NOT EXISTS pg_trgm;    -- busca textual (descrições)

-- ---------------------------------------------------------------------------
-- ENUM TYPES (mais seguros e baratos que varchar+CHECK espalhado)
-- ---------------------------------------------------------------------------
CREATE TYPE tenant_type          AS ENUM ('personal','household','business');
CREATE TYPE member_role          AS ENUM ('owner','admin','member','viewer');
CREATE TYPE auth_provider        AS ENUM ('local','google','apple','facebook','microsoft','github');
CREATE TYPE category_kind        AS ENUM ('income','expense','transfer');
CREATE TYPE account_type         AS ENUM ('checking','savings','wallet','cash','investment','loan','credit_card','other');
CREATE TYPE connection_status    AS ENUM ('pending','connected','login_error','mfa_required','error','revoked');
CREATE TYPE card_type            AS ENUM ('credit','debit','prepaid','multi');
CREATE TYPE card_status          AS ENUM ('active','blocked','archived','expired');
CREATE TYPE txn_type             AS ENUM ('income','expense','transfer');
CREATE TYPE txn_status           AS ENUM ('pending','posted','scheduled','canceled');
CREATE TYPE txn_source           AS ENUM ('manual','open_finance','import','recurring','card_invoice');
CREATE TYPE invoice_status       AS ENUM ('open','closed','paid','overdue','partial');
CREATE TYPE recurrence_freq      AS ENUM ('daily','weekly','biweekly','monthly','bimonthly','quarterly','semiannual','yearly');
CREATE TYPE budget_period        AS ENUM ('weekly','monthly','quarterly','yearly','custom');
CREATE TYPE limit_scope          AS ENUM ('category','card','account','tenant');
CREATE TYPE goal_status          AS ENUM ('active','paused','achieved','canceled');
CREATE TYPE goal_kind            AS ENUM ('savings','debt_payoff','purchase','travel','emergency_fund','custom');
CREATE TYPE notification_channel AS ENUM ('in_app','push','email','sms');
CREATE TYPE alert_kind           AS ENUM ('limit_near','limit_exceeded','invoice_due','goal_reached','low_balance','budget_exceeded','sync_error');

-- Trigger genérica de updated_at
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS trigger AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

-- ===========================================================================
-- 1. MOEDA / CÂMBIO
-- ===========================================================================
CREATE TABLE currencies (
    code        CHAR(3) PRIMARY KEY,           -- ISO-4217: BRL, USD, EUR
    name        VARCHAR(60) NOT NULL,
    symbol      VARCHAR(8)  NOT NULL,
    minor_unit  SMALLINT    NOT NULL DEFAULT 2, -- casas decimais
    is_active   BOOLEAN     NOT NULL DEFAULT true
);

CREATE TABLE exchange_rates (
    id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    base_code     CHAR(3) NOT NULL REFERENCES currencies(code),
    quote_code    CHAR(3) NOT NULL REFERENCES currencies(code),
    rate          NUMERIC(20,10) NOT NULL,
    rate_date     DATE NOT NULL,
    source        VARCHAR(40),
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (base_code, quote_code, rate_date)
);
CREATE INDEX idx_fx_pair_date ON exchange_rates (base_code, quote_code, rate_date DESC);

-- ===========================================================================
-- 2. TENANT (multi-tenant leve + base p/ contas compartilhadas)
-- ===========================================================================
CREATE TABLE tenants (
    id                BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid              UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    name              VARCHAR(120) NOT NULL,
    type              tenant_type  NOT NULL DEFAULT 'personal',
    base_currency     CHAR(3) NOT NULL DEFAULT 'BRL' REFERENCES currencies(code),
    created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at        TIMESTAMPTZ
);
CREATE TRIGGER trg_tenants_upd BEFORE UPDATE ON tenants FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ===========================================================================
-- 3. USUÁRIOS / IDENTIDADE / GDPR
-- ===========================================================================
CREATE TABLE users (
    id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid               UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    email              CITEXT NOT NULL,
    email_verified_at  TIMESTAMPTZ,
    phone              VARCHAR(20),
    phone_verified_at  TIMESTAMPTZ,
    password_hash      VARCHAR(255),            -- NULL se somente social login
    first_name         VARCHAR(120) NOT NULL,
    last_name          VARCHAR(120),
    display_name       VARCHAR(160),
    avatar_url         VARCHAR(500),
    locale             VARCHAR(10)  NOT NULL DEFAULT 'pt-BR',
    timezone           VARCHAR(40)  NOT NULL DEFAULT 'America/Sao_Paulo',
    preferred_currency CHAR(3) REFERENCES currencies(code),
    birth_date         DATE,
    gender             VARCHAR(20),
    tax_id_enc         BYTEA,                   -- 🔒 ENC CPF/CNPJ cifrado
    tax_id_last4       VARCHAR(4),              -- busca sem decifrar
    mfa_enabled        BOOLEAN NOT NULL DEFAULT false,
    mfa_secret_enc     BYTEA,                   -- 🔒 ENC TOTP secret
    status             VARCHAR(20) NOT NULL DEFAULT 'active', -- active,suspended,pending
    -- GDPR/LGPD
    marketing_opt_in   BOOLEAN NOT NULL DEFAULT false,
    anonymized_at      TIMESTAMPTZ,             -- direito ao esquecimento
    last_login_at      TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at         TIMESTAMPTZ
);
CREATE UNIQUE INDEX uq_users_email ON users (email) WHERE deleted_at IS NULL;
CREATE TRIGGER trg_users_upd BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Vínculo usuário <-> tenant (N:N) — base de contas compartilhadas
CREATE TABLE tenant_members (
    id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tenant_id    BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    user_id      BIGINT NOT NULL REFERENCES users(id)   ON DELETE CASCADE,
    role         member_role NOT NULL DEFAULT 'member',
    invited_by   BIGINT REFERENCES users(id),
    joined_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at   TIMESTAMPTZ,
    UNIQUE (tenant_id, user_id)
);
CREATE INDEX idx_tenant_members_user ON tenant_members (user_id) WHERE deleted_at IS NULL;
CREATE TRIGGER trg_tmembers_upd BEFORE UPDATE ON tenant_members FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Endereços (substitui `address`)
CREATE TABLE user_addresses (
    id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid         UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    user_id      BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    label        VARCHAR(40),                  -- casa, trabalho
    street       VARCHAR(255) NOT NULL,
    number       VARCHAR(30),
    complement   VARCHAR(120),
    district     VARCHAR(120),
    city         VARCHAR(120),
    state        VARCHAR(60),
    country      CHAR(2) NOT NULL DEFAULT 'BR',
    postal_code  VARCHAR(20),
    is_primary   BOOLEAN NOT NULL DEFAULT false,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at   TIMESTAMPTZ
);
CREATE INDEX idx_addr_user ON user_addresses (user_id) WHERE deleted_at IS NULL;
CREATE TRIGGER trg_addr_upd BEFORE UPDATE ON user_addresses FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Social login / OAuth providers (1 user : N provedores)
CREATE TABLE user_identities (
    id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id            BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    provider           auth_provider NOT NULL,
    provider_user_id   VARCHAR(255) NOT NULL,      -- "sub" do IdP
    provider_email     CITEXT,
    access_token_enc   BYTEA,                       -- 🔒 ENC
    refresh_token_enc  BYTEA,                       -- 🔒 ENC
    token_expires_at   TIMESTAMPTZ,
    raw_profile        JSONB,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at         TIMESTAMPTZ,
    UNIQUE (provider, provider_user_id)
);
CREATE INDEX idx_identities_user ON user_identities (user_id);
CREATE TRIGGER trg_ident_upd BEFORE UPDATE ON user_identities FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Tokens da própria API (OAuth2 first-party / refresh rotation)
CREATE TABLE auth_tokens (
    id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid               UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    user_id            BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    refresh_token_hash VARCHAR(255) NOT NULL,       -- só hash, nunca o token
    device_name        VARCHAR(120),
    ip_address         INET,
    user_agent         VARCHAR(400),
    scopes             TEXT[],
    expires_at         TIMESTAMPTZ NOT NULL,
    revoked_at         TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_authtok_user   ON auth_tokens (user_id) WHERE revoked_at IS NULL;
CREATE UNIQUE INDEX uq_authtok_hash ON auth_tokens (refresh_token_hash);

-- Consentimentos GDPR/LGPD (versionado)
CREATE TABLE user_consents (
    id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id       BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    consent_type  VARCHAR(60) NOT NULL,            -- terms, privacy, open_finance, marketing
    version       VARCHAR(20) NOT NULL,
    granted       BOOLEAN NOT NULL,
    ip_address    INET,
    granted_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    revoked_at    TIMESTAMPTZ
);
CREATE INDEX idx_consents_user ON user_consents (user_id, consent_type);

-- ===========================================================================
-- 4. OPEN FINANCE / CONEXÃO BANCÁRIA
-- ===========================================================================
CREATE TABLE institutions (
    id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid          UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    name          VARCHAR(160) NOT NULL,
    short_name    VARCHAR(60),
    country       CHAR(2) NOT NULL DEFAULT 'BR',
    compe_code    VARCHAR(10),                 -- código do banco (BR)
    ispb          VARCHAR(12),                 -- Open Finance BR
    logo_url      VARCHAR(500),
    primary_color VARCHAR(9),
    provider      VARCHAR(40),                 -- pluggy, belvo, plaid...
    provider_ref  VARCHAR(120),                -- id no agregador
    is_active     BOOLEAN NOT NULL DEFAULT true,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_inst_provider ON institutions (provider, provider_ref);

-- "Item"/"Link" — a conexão consentida entre o usuário e a instituição
CREATE TABLE bank_connections (
    id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid               UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id          BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    user_id            BIGINT NOT NULL REFERENCES users(id),
    institution_id     BIGINT NOT NULL REFERENCES institutions(id),
    provider           VARCHAR(40) NOT NULL,        -- pluggy/belvo/plaid/ofbr
    provider_item_id   VARCHAR(160) NOT NULL,       -- item_id/link_id
    access_token_enc   BYTEA,                        -- 🔒 ENC
    refresh_token_enc  BYTEA,                        -- 🔒 ENC
    consent_expires_at TIMESTAMPTZ,                  -- consentimento OF (até 12m)
    status             connection_status NOT NULL DEFAULT 'pending',
    status_detail      VARCHAR(255),
    last_synced_at     TIMESTAMPTZ,
    next_sync_at       TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at         TIMESTAMPTZ,
    UNIQUE (provider, provider_item_id)
);
CREATE INDEX idx_conn_tenant ON bank_connections (tenant_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_conn_sync   ON bank_connections (next_sync_at) WHERE status = 'connected';
CREATE TRIGGER trg_conn_upd BEFORE UPDATE ON bank_connections FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ===========================================================================
-- 5. CONTAS FINANCEIRAS (manuais + sincronizadas)
-- ===========================================================================
CREATE TABLE accounts (
    id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid               UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id          BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    connection_id      BIGINT REFERENCES bank_connections(id) ON DELETE SET NULL, -- NULL = manual
    institution_id     BIGINT REFERENCES institutions(id),
    name               VARCHAR(160) NOT NULL,
    type               account_type NOT NULL DEFAULT 'checking',
    currency_code      CHAR(3) NOT NULL DEFAULT 'BRL' REFERENCES currencies(code),
    number_masked      VARCHAR(40),                 -- ****1234
    number_enc         BYTEA,                        -- 🔒 ENC nº completo
    current_balance    NUMERIC(18,4) NOT NULL DEFAULT 0,
    available_balance  NUMERIC(18,4),
    is_manual          BOOLEAN NOT NULL DEFAULT true,
    include_in_totals  BOOLEAN NOT NULL DEFAULT true,
    color              VARCHAR(9),
    icon               VARCHAR(60),
    provider_account_id VARCHAR(160),                -- id no agregador
    last_synced_at     TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at         TIMESTAMPTZ,
    UNIQUE (connection_id, provider_account_id)
);
CREATE INDEX idx_accounts_tenant ON accounts (tenant_id) WHERE deleted_at IS NULL;
CREATE TRIGGER trg_accounts_upd BEFORE UPDATE ON accounts FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Histórico de saldos (para gráficos de evolução patrimonial)
CREATE TABLE account_balance_history (
    id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    account_id    BIGINT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
    balance       NUMERIC(18,4) NOT NULL,
    captured_on   DATE NOT NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (account_id, captured_on)
);
CREATE INDEX idx_balhist_acc_date ON account_balance_history (account_id, captured_on DESC);

-- ===========================================================================
-- 6. CARTÕES (crédito/débito, N por conta) — substitui app_credit_cards
-- ===========================================================================
CREATE TABLE cards (
    id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid               UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id          BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    account_id         BIGINT REFERENCES accounts(id) ON DELETE SET NULL,
    name               VARCHAR(120) NOT NULL,       -- "Nubank Roxinho"
    type               card_type NOT NULL DEFAULT 'credit',
    brand              VARCHAR(30),                 -- visa, mastercard, amex
    last_digits        VARCHAR(4),
    token_enc          BYTEA,                        -- 🔒 ENC token do gateway (NUNCA PAN/CVV)
    credit_limit       NUMERIC(18,4),
    closing_day        SMALLINT,                    -- dia de fechamento fatura
    due_day            SMALLINT,                    -- dia de vencimento
    currency_code      CHAR(3) NOT NULL DEFAULT 'BRL' REFERENCES currencies(code),
    color              VARCHAR(9),
    status             card_status NOT NULL DEFAULT 'active',
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at         TIMESTAMPTZ,
    CHECK (closing_day BETWEEN 1 AND 31),
    CHECK (due_day BETWEEN 1 AND 31)
);
CREATE INDEX idx_cards_tenant ON cards (tenant_id) WHERE deleted_at IS NULL;
CREATE TRIGGER trg_cards_upd BEFORE UPDATE ON cards FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Faturas de cartão (separadas das transações) — parte de app_invoices
CREATE TABLE card_invoices (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid           UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id      BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    card_id        BIGINT NOT NULL REFERENCES cards(id) ON DELETE CASCADE,
    reference_month DATE NOT NULL,                  -- 1º dia do mês de referência
    closing_date   DATE NOT NULL,
    due_date       DATE NOT NULL,
    total_amount   NUMERIC(18,4) NOT NULL DEFAULT 0,
    paid_amount    NUMERIC(18,4) NOT NULL DEFAULT 0,
    currency_code  CHAR(3) NOT NULL DEFAULT 'BRL' REFERENCES currencies(code),
    status         invoice_status NOT NULL DEFAULT 'open',
    paid_at        TIMESTAMPTZ,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at     TIMESTAMPTZ,
    UNIQUE (card_id, reference_month)
);
CREATE INDEX idx_invoices_due ON card_invoices (tenant_id, due_date) WHERE status <> 'paid';
CREATE TRIGGER trg_invoices_upd BEFORE UPDATE ON card_invoices FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ===========================================================================
-- 7. CATEGORIAS (hierárquicas, sistema + personalizadas) — subst. app_categories
-- ===========================================================================
CREATE TABLE categories (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid           UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id      BIGINT REFERENCES tenants(id) ON DELETE CASCADE, -- NULL = categoria de sistema
    parent_id      BIGINT REFERENCES categories(id) ON DELETE CASCADE,
    name           VARCHAR(120) NOT NULL,
    kind           category_kind NOT NULL,
    icon           VARCHAR(60),
    color          VARCHAR(9),
    is_system      BOOLEAN NOT NULL DEFAULT false,
    is_archived    BOOLEAN NOT NULL DEFAULT false,
    sort_order     INT NOT NULL DEFAULT 0,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at     TIMESTAMPTZ
);
CREATE INDEX idx_cat_tenant ON categories (tenant_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_cat_parent ON categories (parent_id);
-- nome único por tenant+pai (sistema tem tenant_id NULL)
CREATE UNIQUE INDEX uq_cat_name ON categories (COALESCE(tenant_id,0), COALESCE(parent_id,0), lower(name)) WHERE deleted_at IS NULL;
CREATE TRIGGER trg_cat_upd BEFORE UPDATE ON categories FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Tags livres (complemento às categorias)
CREATE TABLE tags (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tenant_id   BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    name        VARCHAR(60) NOT NULL,
    color       VARCHAR(9),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at  TIMESTAMPTZ,
    UNIQUE (tenant_id, name)
);

-- ===========================================================================
-- 8. TRANSAÇÕES (manuais, importadas, recorrentes) — núcleo de app_invoices
-- ===========================================================================
CREATE TABLE recurring_rules (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid           UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id      BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    frequency      recurrence_freq NOT NULL,
    interval_count SMALLINT NOT NULL DEFAULT 1,
    start_date     DATE NOT NULL,
    end_date       DATE,
    installments   SMALLINT,                     -- parcelas (NULL = infinito)
    day_of_month   SMALLINT,
    next_run_date  DATE,
    is_active      BOOLEAN NOT NULL DEFAULT true,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at     TIMESTAMPTZ
);
CREATE INDEX idx_recur_next ON recurring_rules (next_run_date) WHERE is_active;
CREATE TRIGGER trg_recur_upd BEFORE UPDATE ON recurring_rules FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE transactions (
    id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid               UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id          BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    account_id         BIGINT REFERENCES accounts(id) ON DELETE SET NULL,
    card_id            BIGINT REFERENCES cards(id) ON DELETE SET NULL,
    card_invoice_id    BIGINT REFERENCES card_invoices(id) ON DELETE SET NULL,
    category_id        BIGINT REFERENCES categories(id) ON DELETE SET NULL,
    recurring_rule_id  BIGINT REFERENCES recurring_rules(id) ON DELETE SET NULL,
    -- transferências: aponta para a contraparte
    transfer_group_id  UUID,
    created_by         BIGINT REFERENCES users(id),
    type               txn_type   NOT NULL,
    status             txn_status NOT NULL DEFAULT 'posted',
    source             txn_source NOT NULL DEFAULT 'manual',
    description        VARCHAR(255) NOT NULL,
    notes              TEXT,
    amount             NUMERIC(18,4) NOT NULL,       -- sempre positivo; sinal via `type`
    currency_code      CHAR(3) NOT NULL DEFAULT 'BRL' REFERENCES currencies(code),
    fx_amount          NUMERIC(18,4),                -- valor na moeda base do tenant
    fx_rate            NUMERIC(20,10),
    booked_at          DATE NOT NULL,                -- data contábil
    -- parcelamento
    installment_no     SMALLINT,
    installment_total  SMALLINT,
    -- Open Finance / dedupe
    provider_txn_id    VARCHAR(160),
    external_hash      VARCHAR(64),                  -- hash p/ deduplicação de import
    is_reconciled      BOOLEAN NOT NULL DEFAULT false,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at         TIMESTAMPTZ
);
-- Índices para relatórios (o coração do PFM)
CREATE INDEX idx_txn_tenant_date  ON transactions (tenant_id, booked_at DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_txn_cat_date     ON transactions (tenant_id, category_id, booked_at) WHERE deleted_at IS NULL;
CREATE INDEX idx_txn_account_date ON transactions (account_id, booked_at) WHERE deleted_at IS NULL;
CREATE INDEX idx_txn_card_invoice ON transactions (card_invoice_id);
CREATE INDEX idx_txn_transfer     ON transactions (transfer_group_id);
CREATE INDEX idx_txn_desc_trgm    ON transactions USING gin (description gin_trgm_ops);
CREATE UNIQUE INDEX uq_txn_provider ON transactions (account_id, provider_txn_id) WHERE provider_txn_id IS NOT NULL;
CREATE UNIQUE INDEX uq_txn_hash     ON transactions (tenant_id, external_hash) WHERE external_hash IS NOT NULL;
CREATE TRIGGER trg_txn_upd BEFORE UPDATE ON transactions FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Rateio de 1 transação em várias categorias
CREATE TABLE transaction_splits (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    transaction_id BIGINT NOT NULL REFERENCES transactions(id) ON DELETE CASCADE,
    category_id    BIGINT REFERENCES categories(id) ON DELETE SET NULL,
    amount         NUMERIC(18,4) NOT NULL,
    notes          VARCHAR(255)
);
CREATE INDEX idx_splits_txn ON transaction_splits (transaction_id);
CREATE INDEX idx_splits_cat ON transaction_splits (category_id);

-- N:N transação <-> tag
CREATE TABLE transaction_tags (
    transaction_id BIGINT NOT NULL REFERENCES transactions(id) ON DELETE CASCADE,
    tag_id         BIGINT NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (transaction_id, tag_id)
);

-- Anexos (comprovantes)
CREATE TABLE attachments (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid           UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    transaction_id BIGINT NOT NULL REFERENCES transactions(id) ON DELETE CASCADE,
    file_url       VARCHAR(500) NOT NULL,
    mime_type      VARCHAR(100),
    size_bytes     BIGINT,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at     TIMESTAMPTZ
);
CREATE INDEX idx_attach_txn ON attachments (transaction_id);

-- ===========================================================================
-- 9. ORÇAMENTOS (budgeting) + LIMITES DE GASTOS
-- ===========================================================================
CREATE TABLE budgets (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid           UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id      BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    name           VARCHAR(120) NOT NULL,
    period         budget_period NOT NULL DEFAULT 'monthly',
    period_start   DATE NOT NULL,
    period_end     DATE,
    total_amount   NUMERIC(18,4) NOT NULL,
    currency_code  CHAR(3) NOT NULL DEFAULT 'BRL' REFERENCES currencies(code),
    rollover       BOOLEAN NOT NULL DEFAULT false,  -- sobra acumula p/ próximo período
    is_active      BOOLEAN NOT NULL DEFAULT true,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at     TIMESTAMPTZ
);
CREATE INDEX idx_budgets_tenant ON budgets (tenant_id, period_start) WHERE deleted_at IS NULL;
CREATE TRIGGER trg_budgets_upd BEFORE UPDATE ON budgets FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Alocação do orçamento por categoria (N:N budgets<->categories)
CREATE TABLE budget_categories (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    budget_id      BIGINT NOT NULL REFERENCES budgets(id) ON DELETE CASCADE,
    category_id    BIGINT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    amount         NUMERIC(18,4) NOT NULL,
    UNIQUE (budget_id, category_id)
);
CREATE INDEX idx_budgetcat_cat ON budget_categories (category_id);

-- Limites de gasto (por categoria / cartão / conta / tenant, por período)
CREATE TABLE spending_limits (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid           UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id      BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    scope          limit_scope NOT NULL,
    category_id    BIGINT REFERENCES categories(id) ON DELETE CASCADE,
    card_id        BIGINT REFERENCES cards(id) ON DELETE CASCADE,
    account_id     BIGINT REFERENCES accounts(id) ON DELETE CASCADE,
    period         budget_period NOT NULL DEFAULT 'monthly',
    amount_limit   NUMERIC(18,4) NOT NULL,
    currency_code  CHAR(3) NOT NULL DEFAULT 'BRL' REFERENCES currencies(code),
    warn_threshold NUMERIC(5,2) NOT NULL DEFAULT 80.00,  -- alerta em % do limite
    is_active      BOOLEAN NOT NULL DEFAULT true,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at     TIMESTAMPTZ,
    -- garante coerência do alvo conforme o escopo
    CHECK (
        (scope='category' AND category_id IS NOT NULL) OR
        (scope='card'     AND card_id     IS NOT NULL) OR
        (scope='account'  AND account_id  IS NOT NULL) OR
        (scope='tenant')
    )
);
CREATE INDEX idx_limits_tenant ON spending_limits (tenant_id) WHERE is_active AND deleted_at IS NULL;
CREATE TRIGGER trg_limits_upd BEFORE UPDATE ON spending_limits FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ===========================================================================
-- 10. METAS FINANCEIRAS
-- ===========================================================================
CREATE TABLE goals (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid           UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id      BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    account_id     BIGINT REFERENCES accounts(id) ON DELETE SET NULL,  -- conta vinculada (poupança)
    name           VARCHAR(120) NOT NULL,
    kind           goal_kind NOT NULL DEFAULT 'savings',
    target_amount  NUMERIC(18,4) NOT NULL,
    current_amount NUMERIC(18,4) NOT NULL DEFAULT 0,
    currency_code  CHAR(3) NOT NULL DEFAULT 'BRL' REFERENCES currencies(code),
    target_date    DATE,
    icon           VARCHAR(60),
    color          VARCHAR(9),
    status         goal_status NOT NULL DEFAULT 'active',
    achieved_at    TIMESTAMPTZ,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at     TIMESTAMPTZ
);
CREATE INDEX idx_goals_tenant ON goals (tenant_id) WHERE deleted_at IS NULL;
CREATE TRIGGER trg_goals_upd BEFORE UPDATE ON goals FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE goal_contributions (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    goal_id        BIGINT NOT NULL REFERENCES goals(id) ON DELETE CASCADE,
    transaction_id BIGINT REFERENCES transactions(id) ON DELETE SET NULL,
    amount         NUMERIC(18,4) NOT NULL,
    contributed_at DATE NOT NULL,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_goalcontrib_goal ON goal_contributions (goal_id, contributed_at);

-- ===========================================================================
-- 11. ALERTAS & NOTIFICAÇÕES
-- ===========================================================================
CREATE TABLE alert_rules (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tenant_id      BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    user_id        BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    kind           alert_kind NOT NULL,
    channels       notification_channel[] NOT NULL DEFAULT '{in_app}',
    config         JSONB,                        -- thresholds, ids alvo, etc.
    is_active      BOOLEAN NOT NULL DEFAULT true,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at     TIMESTAMPTZ
);
CREATE INDEX idx_alertrules_user ON alert_rules (user_id) WHERE is_active;
CREATE TRIGGER trg_alertrules_upd BEFORE UPDATE ON alert_rules FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE notifications (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uuid           UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    tenant_id      BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    user_id        BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    kind           alert_kind,
    channel        notification_channel NOT NULL DEFAULT 'in_app',
    title          VARCHAR(160) NOT NULL,
    body           TEXT,
    data           JSONB,                        -- deep-link, ids relacionados
    read_at        TIMESTAMPTZ,
    sent_at        TIMESTAMPTZ,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at     TIMESTAMPTZ
);
CREATE INDEX idx_notif_user_unread ON notifications (user_id, created_at DESC) WHERE read_at IS NULL AND deleted_at IS NULL;

-- ===========================================================================
-- 12. AUDITORIA / HISTÓRICO DE ALTERAÇÕES
-- ===========================================================================
CREATE TABLE audit_logs (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tenant_id      BIGINT,
    user_id        BIGINT,
    entity_type    VARCHAR(60) NOT NULL,         -- 'transactions','cards',...
    entity_id      BIGINT NOT NULL,
    action         VARCHAR(20) NOT NULL,         -- create, update, delete, restore
    old_values     JSONB,
    new_values     JSONB,
    ip_address     INET,
    user_agent     VARCHAR(400),
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_audit_entity ON audit_logs (entity_type, entity_id, created_at DESC);
CREATE INDEX idx_audit_user   ON audit_logs (user_id, created_at DESC);
-- Recomenda-se particionar audit_logs por range de created_at (mensal) em escala.

-- ===========================================================================
-- 13. RELATÓRIOS — snapshots/agregados pré-computados (performance)
-- ===========================================================================
-- Materialização diária de gastos por categoria para dashboards rápidos.
CREATE TABLE report_category_monthly (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tenant_id      BIGINT NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    category_id    BIGINT REFERENCES categories(id) ON DELETE CASCADE,
    period_month   DATE NOT NULL,                -- 1º dia do mês
    kind           category_kind NOT NULL,
    total_amount   NUMERIC(18,4) NOT NULL DEFAULT 0,
    txn_count      INT NOT NULL DEFAULT 0,
    currency_code  CHAR(3) NOT NULL DEFAULT 'BRL',
    computed_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (tenant_id, category_id, period_month)
);
CREATE INDEX idx_reportcat_period ON report_category_monthly (tenant_id, period_month);

-- ============================================================================
-- FIM
-- ============================================================================
