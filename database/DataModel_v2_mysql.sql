-- ============================================================================
-- Organizze / CaféControl 2.0  —  Modelo de Dados (MySQL 8.0+)
-- Convertido de PostgreSQL 15+
--
-- Diferenças da conversão:
--   * BIGINT GENERATED ALWAYS AS IDENTITY  → BIGINT AUTO_INCREMENT
--   * UUID (tipo)                          → CHAR(36) com DEFAULT (UUID())
--   * TIMESTAMPTZ                          → DATETIME
--   * BOOLEAN                              → TINYINT(1)
--   * BYTEA                                → BLOB
--   * JSONB / TEXT[]                       → JSON
--   * INET                                 → VARCHAR(45)
--   * CITEXT                               → VARCHAR com utf8mb4_unicode_ci
--   * NUMERIC                              → DECIMAL
--   * CREATE TYPE AS ENUM                  → ENUM inline em cada coluna
--   * Índices parciais (WHERE ...)         → índices simples (MySQL não suporta)
--   * Índice GIN trigram                   → FULLTEXT INDEX
--   * Trigger updated_at                   → ON UPDATE CURRENT_TIMESTAMP
-- ============================================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ===========================================================================
-- 1. MOEDA / CÂMBIO
-- ===========================================================================
CREATE TABLE currencies (
    code        CHAR(3)      NOT NULL,
    name        VARCHAR(60)  NOT NULL,
    symbol      VARCHAR(8)   NOT NULL,
    minor_unit  SMALLINT     NOT NULL DEFAULT 2,
    is_active   TINYINT(1)   NOT NULL DEFAULT 1,
    PRIMARY KEY (code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE exchange_rates (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    base_code     CHAR(3)        NOT NULL,
    quote_code    CHAR(3)        NOT NULL,
    rate          DECIMAL(20,10) NOT NULL,
    rate_date     DATE           NOT NULL,
    source        VARCHAR(40),
    created_at    DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_fx_pair_date (base_code, quote_code, rate_date),
    CONSTRAINT fk_er_base  FOREIGN KEY (base_code)  REFERENCES currencies(code),
    CONSTRAINT fk_er_quote FOREIGN KEY (quote_code) REFERENCES currencies(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_fx_pair_date ON exchange_rates (base_code, quote_code, rate_date DESC);

-- ===========================================================================
-- 2. TENANT (multi-tenant leve + base p/ contas compartilhadas)
-- ===========================================================================
CREATE TABLE tenants (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid          CHAR(36)  NOT NULL DEFAULT (UUID()),
    name          VARCHAR(120) NOT NULL,
    type          ENUM('personal','household','business') NOT NULL DEFAULT 'personal',
    base_currency CHAR(3)   NOT NULL DEFAULT 'BRL',
    created_at    DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at    DATETIME,
    UNIQUE KEY uq_tenants_uuid (uuid),
    CONSTRAINT fk_tenants_currency FOREIGN KEY (base_currency) REFERENCES currencies(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================================================================
-- 3. USUÁRIOS / IDENTIDADE / GDPR
-- ===========================================================================
CREATE TABLE users (
    id                 BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid               CHAR(36)     NOT NULL DEFAULT (UUID()),
    email              VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci,
    email_verified_at  DATETIME,
    phone              VARCHAR(20),
    phone_verified_at  DATETIME,
    password_hash      VARCHAR(255),
    first_name         VARCHAR(120) NOT NULL,
    last_name          VARCHAR(120),
    display_name       VARCHAR(160),
    avatar_url         VARCHAR(500),
    locale             VARCHAR(10)  NOT NULL DEFAULT 'pt-BR',
    timezone           VARCHAR(40)  NOT NULL DEFAULT 'America/Sao_Paulo',
    preferred_currency CHAR(3),
    birth_date         DATE,
    gender             VARCHAR(20),
    tax_id_enc         BLOB,                   -- ENC CPF/CNPJ cifrado
    tax_id_last4       VARCHAR(4),
    mfa_enabled        TINYINT(1)   NOT NULL DEFAULT 0,
    mfa_secret_enc     BLOB,                   -- ENC TOTP secret
    status             VARCHAR(20)  NOT NULL DEFAULT 'active',
    marketing_opt_in   TINYINT(1)   NOT NULL DEFAULT 0,
    anonymized_at      DATETIME,
    last_login_at      DATETIME,
    created_at         DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at         DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at         DATETIME,
    UNIQUE KEY uq_users_uuid  (uuid),
    UNIQUE KEY uq_users_email (email),
    CONSTRAINT fk_users_currency FOREIGN KEY (preferred_currency) REFERENCES currencies(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tenant_members (
    id           BIGINT AUTO_INCREMENT PRIMARY KEY,
    tenant_id    BIGINT   NOT NULL,
    user_id      BIGINT   NOT NULL,
    role         ENUM('owner','admin','member','viewer') NOT NULL DEFAULT 'member',
    invited_by   BIGINT,
    joined_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at   DATETIME,
    UNIQUE KEY uq_tenant_member (tenant_id, user_id),
    CONSTRAINT fk_tm_tenant  FOREIGN KEY (tenant_id)  REFERENCES tenants(id) ON DELETE CASCADE,
    CONSTRAINT fk_tm_user    FOREIGN KEY (user_id)    REFERENCES users(id)   ON DELETE CASCADE,
    CONSTRAINT fk_tm_inviter FOREIGN KEY (invited_by) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_tenant_members_user ON tenant_members (user_id);

CREATE TABLE user_addresses (
    id           BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid         CHAR(36)     NOT NULL DEFAULT (UUID()),
    user_id      BIGINT       NOT NULL,
    label        VARCHAR(40),
    street       VARCHAR(255) NOT NULL,
    number       VARCHAR(30),
    complement   VARCHAR(120),
    district     VARCHAR(120),
    city         VARCHAR(120),
    state        VARCHAR(60),
    country      CHAR(2)      NOT NULL DEFAULT 'BR',
    postal_code  VARCHAR(20),
    is_primary   TINYINT(1)   NOT NULL DEFAULT 0,
    created_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at   DATETIME,
    UNIQUE KEY uq_addr_uuid (uuid),
    CONSTRAINT fk_addr_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_addr_user ON user_addresses (user_id);

CREATE TABLE user_identities (
    id                 BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id            BIGINT       NOT NULL,
    provider           ENUM('local','google','apple','facebook','microsoft','github') NOT NULL,
    provider_user_id   VARCHAR(255) NOT NULL,
    provider_email     VARCHAR(255) COLLATE utf8mb4_unicode_ci,
    access_token_enc   BLOB,                   -- ENC
    refresh_token_enc  BLOB,                   -- ENC
    token_expires_at   DATETIME,
    raw_profile        JSON,
    created_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at         DATETIME,
    UNIQUE KEY uq_identity_provider (provider, provider_user_id),
    CONSTRAINT fk_ident_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_identities_user ON user_identities (user_id);

CREATE TABLE auth_tokens (
    id                 BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid               CHAR(36)     NOT NULL DEFAULT (UUID()),
    user_id            BIGINT       NOT NULL,
    refresh_token_hash VARCHAR(255) NOT NULL,
    device_name        VARCHAR(120),
    ip_address         VARCHAR(45),
    user_agent         VARCHAR(400),
    scopes             JSON,                   -- substitui TEXT[]
    expires_at         DATETIME NOT NULL,
    revoked_at         DATETIME,
    created_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_authtok_uuid (uuid),
    UNIQUE KEY uq_authtok_hash (refresh_token_hash),
    CONSTRAINT fk_authtok_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_authtok_user ON auth_tokens (user_id);

CREATE TABLE user_consents (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id       BIGINT      NOT NULL,
    consent_type  VARCHAR(60) NOT NULL,
    version       VARCHAR(20) NOT NULL,
    granted       TINYINT(1)  NOT NULL,
    ip_address    VARCHAR(45),
    granted_at    DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    revoked_at    DATETIME,
    CONSTRAINT fk_consent_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_consents_user ON user_consents (user_id, consent_type);

-- ===========================================================================
-- 4. OPEN FINANCE / CONEXÃO BANCÁRIA
-- ===========================================================================
CREATE TABLE institutions (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid          CHAR(36)     NOT NULL DEFAULT (UUID()),
    name          VARCHAR(160) NOT NULL,
    short_name    VARCHAR(60),
    country       CHAR(2)      NOT NULL DEFAULT 'BR',
    compe_code    VARCHAR(10),
    ispb          VARCHAR(12),
    logo_url      VARCHAR(500),
    primary_color VARCHAR(9),
    provider      VARCHAR(40),
    provider_ref  VARCHAR(120),
    is_active     TINYINT(1)   NOT NULL DEFAULT 1,
    created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_inst_uuid (uuid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_inst_provider ON institutions (provider, provider_ref);

CREATE TABLE bank_connections (
    id                 BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid               CHAR(36)     NOT NULL DEFAULT (UUID()),
    tenant_id          BIGINT       NOT NULL,
    user_id            BIGINT       NOT NULL,
    institution_id     BIGINT       NOT NULL,
    provider           VARCHAR(40)  NOT NULL,
    provider_item_id   VARCHAR(160) NOT NULL,
    access_token_enc   BLOB,                   -- ENC
    refresh_token_enc  BLOB,                   -- ENC
    consent_expires_at DATETIME,
    status             ENUM('pending','connected','login_error','mfa_required','error','revoked') NOT NULL DEFAULT 'pending',
    status_detail      VARCHAR(255),
    last_synced_at     DATETIME,
    next_sync_at       DATETIME,
    created_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at         DATETIME,
    UNIQUE KEY uq_conn_uuid     (uuid),
    UNIQUE KEY uq_conn_provider (provider, provider_item_id),
    CONSTRAINT fk_conn_tenant FOREIGN KEY (tenant_id)      REFERENCES tenants(id)      ON DELETE CASCADE,
    CONSTRAINT fk_conn_user   FOREIGN KEY (user_id)        REFERENCES users(id),
    CONSTRAINT fk_conn_inst   FOREIGN KEY (institution_id) REFERENCES institutions(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_conn_tenant ON bank_connections (tenant_id);
CREATE INDEX idx_conn_sync   ON bank_connections (next_sync_at);

-- ===========================================================================
-- 5. CONTAS FINANCEIRAS (manuais + sincronizadas)
-- ===========================================================================
CREATE TABLE accounts (
    id                  BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid                CHAR(36)     NOT NULL DEFAULT (UUID()),
    tenant_id           BIGINT       NOT NULL,
    connection_id       BIGINT,
    institution_id      BIGINT,
    name                VARCHAR(160) NOT NULL,
    type                ENUM('checking','savings','wallet','cash','investment','loan','credit_card','other') NOT NULL DEFAULT 'checking',
    currency_code       CHAR(3)      NOT NULL DEFAULT 'BRL',
    number_masked       VARCHAR(40),
    number_enc          BLOB,                   -- ENC nº completo
    current_balance     DECIMAL(18,4) NOT NULL DEFAULT 0,
    available_balance   DECIMAL(18,4),
    is_manual           TINYINT(1)   NOT NULL DEFAULT 1,
    include_in_totals   TINYINT(1)   NOT NULL DEFAULT 1,
    color               VARCHAR(9),
    icon                VARCHAR(60),
    provider_account_id VARCHAR(160),
    last_synced_at      DATETIME,
    created_at          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at          DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at          DATETIME,
    UNIQUE KEY uq_accounts_uuid     (uuid),
    UNIQUE KEY uq_accounts_provider (connection_id, provider_account_id),
    CONSTRAINT fk_acc_tenant FOREIGN KEY (tenant_id)      REFERENCES tenants(id)          ON DELETE CASCADE,
    CONSTRAINT fk_acc_conn   FOREIGN KEY (connection_id)  REFERENCES bank_connections(id) ON DELETE SET NULL,
    CONSTRAINT fk_acc_inst   FOREIGN KEY (institution_id) REFERENCES institutions(id),
    CONSTRAINT fk_acc_curr   FOREIGN KEY (currency_code)  REFERENCES currencies(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_accounts_tenant ON accounts (tenant_id);

CREATE TABLE account_balance_history (
    id           BIGINT AUTO_INCREMENT PRIMARY KEY,
    account_id   BIGINT        NOT NULL,
    balance      DECIMAL(18,4) NOT NULL,
    captured_on  DATE          NOT NULL,
    created_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_balhist (account_id, captured_on),
    CONSTRAINT fk_balhist_acc FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_balhist_acc_date ON account_balance_history (account_id, captured_on DESC);

-- ===========================================================================
-- 6. CARTÕES (crédito/débito)
-- ===========================================================================
CREATE TABLE cards (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid          CHAR(36)      NOT NULL DEFAULT (UUID()),
    tenant_id     BIGINT        NOT NULL,
    account_id    BIGINT,
    name          VARCHAR(120)  NOT NULL,
    type          ENUM('credit','debit','prepaid','multi') NOT NULL DEFAULT 'credit',
    brand         VARCHAR(30),
    last_digits   VARCHAR(4),
    token_enc     BLOB,                   -- ENC token do gateway
    credit_limit  DECIMAL(18,4),
    closing_day   SMALLINT,
    due_day       SMALLINT,
    currency_code CHAR(3)       NOT NULL DEFAULT 'BRL',
    color         VARCHAR(9),
    status        ENUM('active','blocked','archived','expired') NOT NULL DEFAULT 'active',
    created_at    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at    DATETIME,
    UNIQUE KEY uq_cards_uuid (uuid),
    CONSTRAINT fk_cards_tenant FOREIGN KEY (tenant_id)    REFERENCES tenants(id)  ON DELETE CASCADE,
    CONSTRAINT fk_cards_acc    FOREIGN KEY (account_id)   REFERENCES accounts(id) ON DELETE SET NULL,
    CONSTRAINT fk_cards_curr   FOREIGN KEY (currency_code) REFERENCES currencies(code),
    CONSTRAINT chk_closing_day CHECK (closing_day BETWEEN 1 AND 31),
    CONSTRAINT chk_due_day     CHECK (due_day BETWEEN 1 AND 31)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_cards_tenant ON cards (tenant_id);

CREATE TABLE card_invoices (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid            CHAR(36)      NOT NULL DEFAULT (UUID()),
    tenant_id       BIGINT        NOT NULL,
    card_id         BIGINT        NOT NULL,
    reference_month DATE          NOT NULL,
    closing_date    DATE          NOT NULL,
    due_date        DATE          NOT NULL,
    total_amount    DECIMAL(18,4) NOT NULL DEFAULT 0,
    paid_amount     DECIMAL(18,4) NOT NULL DEFAULT 0,
    currency_code   CHAR(3)       NOT NULL DEFAULT 'BRL',
    status          ENUM('open','closed','paid','overdue','partial') NOT NULL DEFAULT 'open',
    paid_at         DATETIME,
    created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at      DATETIME,
    UNIQUE KEY uq_invoices_uuid       (uuid),
    UNIQUE KEY uq_invoice_card_month  (card_id, reference_month),
    CONSTRAINT fk_inv_tenant FOREIGN KEY (tenant_id)    REFERENCES tenants(id)    ON DELETE CASCADE,
    CONSTRAINT fk_inv_card   FOREIGN KEY (card_id)      REFERENCES cards(id)      ON DELETE CASCADE,
    CONSTRAINT fk_inv_curr   FOREIGN KEY (currency_code) REFERENCES currencies(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_invoices_due ON card_invoices (tenant_id, due_date);

-- ===========================================================================
-- 7. CATEGORIAS (hierárquicas, sistema + personalizadas)
-- ===========================================================================
CREATE TABLE categories (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid        CHAR(36)     NOT NULL DEFAULT (UUID()),
    tenant_id   BIGINT,
    parent_id   BIGINT,
    name        VARCHAR(120) NOT NULL,
    kind        ENUM('income','expense','transfer') NOT NULL,
    icon        VARCHAR(60),
    color       VARCHAR(9),
    is_system   TINYINT(1)   NOT NULL DEFAULT 0,
    is_archived TINYINT(1)   NOT NULL DEFAULT 0,
    sort_order  INT          NOT NULL DEFAULT 0,
    created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at  DATETIME,
    UNIQUE KEY uq_categories_uuid (uuid),
    CONSTRAINT fk_cat_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id)    ON DELETE CASCADE,
    CONSTRAINT fk_cat_parent FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_cat_tenant ON categories (tenant_id);
CREATE INDEX idx_cat_parent ON categories (parent_id);

CREATE TABLE tags (
    id         BIGINT AUTO_INCREMENT PRIMARY KEY,
    tenant_id  BIGINT      NOT NULL,
    name       VARCHAR(60) NOT NULL,
    color      VARCHAR(9),
    created_at DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    UNIQUE KEY uq_tag_tenant_name (tenant_id, name),
    CONSTRAINT fk_tag_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================================================================
-- 8. TRANSAÇÕES
-- ===========================================================================
CREATE TABLE recurring_rules (
    id             BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid           CHAR(36)  NOT NULL DEFAULT (UUID()),
    tenant_id      BIGINT    NOT NULL,
    frequency      ENUM('daily','weekly','biweekly','monthly','bimonthly','quarterly','semiannual','yearly') NOT NULL,
    interval_count SMALLINT  NOT NULL DEFAULT 1,
    start_date     DATE      NOT NULL,
    end_date       DATE,
    installments   SMALLINT,
    day_of_month   SMALLINT,
    next_run_date  DATE,
    is_active      TINYINT(1) NOT NULL DEFAULT 1,
    created_at     DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at     DATETIME,
    UNIQUE KEY uq_recur_uuid (uuid),
    CONSTRAINT fk_recur_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_recur_next ON recurring_rules (next_run_date);

CREATE TABLE transactions (
    id                 BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid               CHAR(36)      NOT NULL DEFAULT (UUID()),
    tenant_id          BIGINT        NOT NULL,
    account_id         BIGINT,
    card_id            BIGINT,
    card_invoice_id    BIGINT,
    category_id        BIGINT,
    recurring_rule_id  BIGINT,
    transfer_group_id  CHAR(36),
    created_by         BIGINT,
    type               ENUM('income','expense','transfer') NOT NULL,
    status             ENUM('pending','posted','scheduled','canceled') NOT NULL DEFAULT 'posted',
    source             ENUM('manual','open_finance','import','recurring','card_invoice') NOT NULL DEFAULT 'manual',
    description        VARCHAR(255)  NOT NULL,
    notes              TEXT,
    amount             DECIMAL(18,4) NOT NULL,
    currency_code      CHAR(3)       NOT NULL DEFAULT 'BRL',
    fx_amount          DECIMAL(18,4),
    fx_rate            DECIMAL(20,10),
    booked_at          DATE          NOT NULL,
    installment_no     SMALLINT,
    installment_total  SMALLINT,
    provider_txn_id    VARCHAR(160),
    external_hash      VARCHAR(64),
    is_reconciled      TINYINT(1)    NOT NULL DEFAULT 0,
    created_at         DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at         DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at         DATETIME,
    UNIQUE KEY uq_txn_uuid         (uuid),
    UNIQUE KEY uq_txn_provider     (account_id, provider_txn_id),
    UNIQUE KEY uq_txn_hash         (tenant_id, external_hash),
    CONSTRAINT fk_txn_tenant  FOREIGN KEY (tenant_id)         REFERENCES tenants(id)         ON DELETE CASCADE,
    CONSTRAINT fk_txn_account FOREIGN KEY (account_id)        REFERENCES accounts(id)        ON DELETE SET NULL,
    CONSTRAINT fk_txn_card    FOREIGN KEY (card_id)           REFERENCES cards(id)           ON DELETE SET NULL,
    CONSTRAINT fk_txn_invoice FOREIGN KEY (card_invoice_id)   REFERENCES card_invoices(id)   ON DELETE SET NULL,
    CONSTRAINT fk_txn_cat     FOREIGN KEY (category_id)       REFERENCES categories(id)      ON DELETE SET NULL,
    CONSTRAINT fk_txn_recur   FOREIGN KEY (recurring_rule_id) REFERENCES recurring_rules(id) ON DELETE SET NULL,
    CONSTRAINT fk_txn_creator FOREIGN KEY (created_by)        REFERENCES users(id),
    CONSTRAINT fk_txn_curr    FOREIGN KEY (currency_code)     REFERENCES currencies(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_txn_tenant_date  ON transactions (tenant_id, booked_at DESC);
CREATE INDEX idx_txn_cat_date     ON transactions (tenant_id, category_id, booked_at);
CREATE INDEX idx_txn_account_date ON transactions (account_id, booked_at);
CREATE INDEX idx_txn_card_invoice ON transactions (card_invoice_id);
CREATE INDEX idx_txn_transfer     ON transactions (transfer_group_id);
CREATE FULLTEXT INDEX idx_txn_desc_ft ON transactions (description);

CREATE TABLE transaction_splits (
    id             BIGINT AUTO_INCREMENT PRIMARY KEY,
    transaction_id BIGINT        NOT NULL,
    category_id    BIGINT,
    amount         DECIMAL(18,4) NOT NULL,
    notes          VARCHAR(255),
    CONSTRAINT fk_split_txn FOREIGN KEY (transaction_id) REFERENCES transactions(id) ON DELETE CASCADE,
    CONSTRAINT fk_split_cat FOREIGN KEY (category_id)    REFERENCES categories(id)   ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_splits_txn ON transaction_splits (transaction_id);
CREATE INDEX idx_splits_cat ON transaction_splits (category_id);

CREATE TABLE transaction_tags (
    transaction_id BIGINT NOT NULL,
    tag_id         BIGINT NOT NULL,
    PRIMARY KEY (transaction_id, tag_id),
    CONSTRAINT fk_txntag_txn FOREIGN KEY (transaction_id) REFERENCES transactions(id) ON DELETE CASCADE,
    CONSTRAINT fk_txntag_tag FOREIGN KEY (tag_id)         REFERENCES tags(id)         ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE attachments (
    id             BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid           CHAR(36)     NOT NULL DEFAULT (UUID()),
    transaction_id BIGINT       NOT NULL,
    file_url       VARCHAR(500) NOT NULL,
    mime_type      VARCHAR(100),
    size_bytes     BIGINT,
    created_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at     DATETIME,
    UNIQUE KEY uq_attach_uuid (uuid),
    CONSTRAINT fk_attach_txn FOREIGN KEY (transaction_id) REFERENCES transactions(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_attach_txn ON attachments (transaction_id);

-- ===========================================================================
-- 9. ORÇAMENTOS + LIMITES DE GASTOS
-- ===========================================================================
CREATE TABLE budgets (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid          CHAR(36)      NOT NULL DEFAULT (UUID()),
    tenant_id     BIGINT        NOT NULL,
    name          VARCHAR(120)  NOT NULL,
    period        ENUM('weekly','monthly','quarterly','yearly','custom') NOT NULL DEFAULT 'monthly',
    period_start  DATE          NOT NULL,
    period_end    DATE,
    total_amount  DECIMAL(18,4) NOT NULL,
    currency_code CHAR(3)       NOT NULL DEFAULT 'BRL',
    rollover      TINYINT(1)    NOT NULL DEFAULT 0,
    is_active     TINYINT(1)    NOT NULL DEFAULT 1,
    created_at    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at    DATETIME,
    UNIQUE KEY uq_budgets_uuid (uuid),
    CONSTRAINT fk_budgets_tenant FOREIGN KEY (tenant_id)    REFERENCES tenants(id)    ON DELETE CASCADE,
    CONSTRAINT fk_budgets_curr   FOREIGN KEY (currency_code) REFERENCES currencies(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_budgets_tenant ON budgets (tenant_id, period_start);

CREATE TABLE budget_categories (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    budget_id   BIGINT        NOT NULL,
    category_id BIGINT        NOT NULL,
    amount      DECIMAL(18,4) NOT NULL,
    UNIQUE KEY uq_budgetcat (budget_id, category_id),
    CONSTRAINT fk_budgetcat_budget FOREIGN KEY (budget_id)   REFERENCES budgets(id)     ON DELETE CASCADE,
    CONSTRAINT fk_budgetcat_cat    FOREIGN KEY (category_id) REFERENCES categories(id)  ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_budgetcat_cat ON budget_categories (category_id);

CREATE TABLE spending_limits (
    id             BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid           CHAR(36)      NOT NULL DEFAULT (UUID()),
    tenant_id      BIGINT        NOT NULL,
    scope          ENUM('category','card','account','tenant') NOT NULL,
    category_id    BIGINT,
    card_id        BIGINT,
    account_id     BIGINT,
    period         ENUM('weekly','monthly','quarterly','yearly','custom') NOT NULL DEFAULT 'monthly',
    amount_limit   DECIMAL(18,4) NOT NULL,
    currency_code  CHAR(3)       NOT NULL DEFAULT 'BRL',
    warn_threshold DECIMAL(5,2)  NOT NULL DEFAULT 80.00,
    is_active      TINYINT(1)    NOT NULL DEFAULT 1,
    created_at     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at     DATETIME,
    UNIQUE KEY uq_limits_uuid (uuid),
    CONSTRAINT fk_limits_tenant FOREIGN KEY (tenant_id)   REFERENCES tenants(id)    ON DELETE CASCADE,
    CONSTRAINT fk_limits_cat    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    CONSTRAINT fk_limits_card   FOREIGN KEY (card_id)     REFERENCES cards(id)      ON DELETE CASCADE,
    CONSTRAINT fk_limits_acc    FOREIGN KEY (account_id)  REFERENCES accounts(id)   ON DELETE CASCADE,
    CONSTRAINT fk_limits_curr   FOREIGN KEY (currency_code) REFERENCES currencies(code),
    CONSTRAINT chk_limit_scope CHECK (
        (scope = 'category' AND category_id IS NOT NULL) OR
        (scope = 'card'     AND card_id     IS NOT NULL) OR
        (scope = 'account'  AND account_id  IS NOT NULL) OR
        (scope = 'tenant')
    )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_limits_tenant ON spending_limits (tenant_id);

-- ===========================================================================
-- 10. METAS FINANCEIRAS
-- ===========================================================================
CREATE TABLE goals (
    id             BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid           CHAR(36)      NOT NULL DEFAULT (UUID()),
    tenant_id      BIGINT        NOT NULL,
    account_id     BIGINT,
    name           VARCHAR(120)  NOT NULL,
    kind           ENUM('savings','debt_payoff','purchase','travel','emergency_fund','custom') NOT NULL DEFAULT 'savings',
    target_amount  DECIMAL(18,4) NOT NULL,
    current_amount DECIMAL(18,4) NOT NULL DEFAULT 0,
    currency_code  CHAR(3)       NOT NULL DEFAULT 'BRL',
    target_date    DATE,
    icon           VARCHAR(60),
    color          VARCHAR(9),
    status         ENUM('active','paused','achieved','canceled') NOT NULL DEFAULT 'active',
    achieved_at    DATETIME,
    created_at     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at     DATETIME,
    UNIQUE KEY uq_goals_uuid (uuid),
    CONSTRAINT fk_goals_tenant FOREIGN KEY (tenant_id)    REFERENCES tenants(id)   ON DELETE CASCADE,
    CONSTRAINT fk_goals_acc    FOREIGN KEY (account_id)   REFERENCES accounts(id)  ON DELETE SET NULL,
    CONSTRAINT fk_goals_curr   FOREIGN KEY (currency_code) REFERENCES currencies(code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_goals_tenant ON goals (tenant_id);

CREATE TABLE goal_contributions (
    id             BIGINT AUTO_INCREMENT PRIMARY KEY,
    goal_id        BIGINT        NOT NULL,
    transaction_id BIGINT,
    amount         DECIMAL(18,4) NOT NULL,
    contributed_at DATE          NOT NULL,
    created_at     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_goalcontrib_goal FOREIGN KEY (goal_id)        REFERENCES goals(id)        ON DELETE CASCADE,
    CONSTRAINT fk_goalcontrib_txn  FOREIGN KEY (transaction_id) REFERENCES transactions(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_goalcontrib_goal ON goal_contributions (goal_id, contributed_at);

-- ===========================================================================
-- 11. ALERTAS & NOTIFICAÇÕES
-- ===========================================================================
CREATE TABLE alert_rules (
    id         BIGINT AUTO_INCREMENT PRIMARY KEY,
    tenant_id  BIGINT NOT NULL,
    user_id    BIGINT NOT NULL,
    kind       ENUM('limit_near','limit_exceeded','invoice_due','goal_reached','low_balance','budget_exceeded','sync_error') NOT NULL,
    channels   JSON   NOT NULL,    -- array: ["in_app","push","email","sms"]
    config     JSON,
    is_active  TINYINT(1) NOT NULL DEFAULT 1,
    created_at DATETIME   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME   NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    CONSTRAINT fk_alertrules_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    CONSTRAINT fk_alertrules_user   FOREIGN KEY (user_id)   REFERENCES users(id)   ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_alertrules_user ON alert_rules (user_id);

CREATE TABLE notifications (
    id         BIGINT AUTO_INCREMENT PRIMARY KEY,
    uuid       CHAR(36)     NOT NULL DEFAULT (UUID()),
    tenant_id  BIGINT       NOT NULL,
    user_id    BIGINT       NOT NULL,
    kind       ENUM('limit_near','limit_exceeded','invoice_due','goal_reached','low_balance','budget_exceeded','sync_error'),
    channel    ENUM('in_app','push','email','sms') NOT NULL DEFAULT 'in_app',
    title      VARCHAR(160) NOT NULL,
    body       TEXT,
    data       JSON,
    read_at    DATETIME,
    sent_at    DATETIME,
    created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    UNIQUE KEY uq_notif_uuid (uuid),
    CONSTRAINT fk_notif_tenant FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    CONSTRAINT fk_notif_user   FOREIGN KEY (user_id)   REFERENCES users(id)   ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_notif_user_unread ON notifications (user_id, created_at DESC);

-- ===========================================================================
-- 12. AUDITORIA
-- ===========================================================================
CREATE TABLE audit_logs (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    tenant_id   BIGINT,
    user_id     BIGINT,
    entity_type VARCHAR(60)  NOT NULL,
    entity_id   BIGINT       NOT NULL,
    action      VARCHAR(20)  NOT NULL,
    old_values  JSON,
    new_values  JSON,
    ip_address  VARCHAR(45),
    user_agent  VARCHAR(400),
    created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_audit_entity ON audit_logs (entity_type, entity_id, created_at DESC);
CREATE INDEX idx_audit_user   ON audit_logs (user_id, created_at DESC);

-- ===========================================================================
-- 13. RELATÓRIOS — snapshots pré-computados
-- ===========================================================================
CREATE TABLE report_category_monthly (
    id            BIGINT AUTO_INCREMENT PRIMARY KEY,
    tenant_id     BIGINT        NOT NULL,
    category_id   BIGINT,
    period_month  DATE          NOT NULL,
    kind          ENUM('income','expense','transfer') NOT NULL,
    total_amount  DECIMAL(18,4) NOT NULL DEFAULT 0,
    txn_count     INT           NOT NULL DEFAULT 0,
    currency_code CHAR(3)       NOT NULL DEFAULT 'BRL',
    computed_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_report_cat_month (tenant_id, category_id, period_month),
    CONSTRAINT fk_report_tenant FOREIGN KEY (tenant_id)   REFERENCES tenants(id)    ON DELETE CASCADE,
    CONSTRAINT fk_report_cat    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_reportcat_period ON report_category_monthly (tenant_id, period_month);

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================================
-- FIM
-- ============================================================================
