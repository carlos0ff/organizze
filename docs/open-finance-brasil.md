# Open Finance Brasil — Guia Completo de Integração

> Fonte oficial: https://openfinancebrasil.atlassian.net/wiki/spaces/OF  
> Regulamentação: Banco Central do Brasil (BCB) — Resoluções BCB nº 1/2020 e atualizações 2025-2026  
> Última revisão deste guia: Julho 2026

---

## Índice

1. [O que é o Open Finance Brasil](#1-o-que-é-o-open-finance-brasil)
2. [Papéis no Ecossistema](#2-papéis-no-ecossistema)
3. [Fases de Implementação](#3-fases-de-implementação)
4. [Arquitetura de Segurança (FAPI 2.0)](#4-arquitetura-de-segurança-fapi-20)
5. [Fluxo Completo de Consentimento](#5-fluxo-completo-de-consentimento)
6. [APIs Disponíveis](#6-apis-disponíveis)
7. [Certificados e mTLS](#7-certificados-e-mtls)
8. [Dynamic Client Registration (DCR)](#8-dynamic-client-registration-dcr)
9. [Ambiente Sandbox](#9-ambiente-sandbox)
10. [Processo de Certificação](#10-processo-de-certificação)
11. [Integração no Projeto Laravel](#11-integração-no-projeto-laravel)
12. [Exemplo de Código PHP/Laravel](#12-exemplo-de-código-phplaravel)
13. [Referências](#13-referências)

---

## 1. O que é o Open Finance Brasil

Open Finance Brasil é o sistema financeiro aberto regulado pelo Banco Central que permite o **compartilhamento padronizado de dados e serviços financeiros** entre instituições autorizadas, mediante consentimento explícito do cliente.

### Diferença para Open Banking
| Open Banking | Open Finance |
|---|---|
| Apenas dados bancários (conta, transações, cartões) | Inclui também investimentos, seguros, câmbio, previdência, crédito |
| Fase 1 e 2 (2021–2022) | Fase 3 e 4 (2022–atual) |

### Participantes obrigatórios
Todas as instituições com **patrimônio de referência acima de R$ 1 bilhão** são obrigadas a participar como transmissores de dados. Isso inclui: Itaú, Bradesco, Santander, Caixa, Banco do Brasil, Nubank, Inter, BTG, XP, e mais de 800 instituições.

---

## 2. Papéis no Ecossistema

```
┌─────────────────────────────────────────────────────────┐
│                   DIRETÓRIO DE PARTICIPANTES             │
│              (Registro central — BCB/OF Brasil)          │
└─────────────────────────────────────────────────────────┘
        ↑ registra e valida               ↑ registra e valida
┌───────────────────┐            ┌───────────────────────┐
│   TRANSMISSOR     │            │   RECEPTOR (TPP)       │
│  (banco/fintech   │◄──────────►│   = seu app/produto    │
│   que tem o dado) │  consente  │   (Organizze)          │
└───────────────────┘            └───────────────────────┘
         ↑
    cliente dá
    consentimento
```

| Papel | Quem é | O que faz |
|---|---|---|
| **Transmissor (ASPSP)** | Banco/fintech que detém os dados | Expõe APIs, valida consentimento, retorna dados |
| **Receptor (TPP)** | Seu app (Organizze) | Solicita consentimento, consome APIs |
| **Iniciador de Pagamentos (PISP)** | App que inicia Pix/TED | Inicia transação via Open Finance (Fase 3) |
| **Diretório** | Infraestrutura BCB/OF | Registra participantes, emite certificados, valida JWKs |

> **Para o Organizze**, o papel é de **Receptor de Dados (TPP — Third Party Provider)**, pois você quer ler transações, saldos e dados financeiros dos usuários.

---

## 3. Fases de Implementação

| Fase | Nome | O que cobre | Status |
|---|---|---|---|
| **Fase 1** | Dados Abertos | Produtos, tarifas, canais de atendimento (sem autenticação) | ✅ Produção |
| **Fase 2** | Dados do Cliente | Contas, cartões, transações, crédito, investimentos | ✅ Produção |
| **Fase 3** | Iniciação de Pagamentos | Pix, TED via Open Finance | ✅ Produção |
| **Fase 4** | Open Finance Completo | Câmbio, seguros, previdência, dados avançados | ✅ Produção |

Para um **agregador financeiro como o Organizze**, o foco é na **Fase 2** (leitura de dados).

---

## 4. Arquitetura de Segurança (FAPI 2.0)

O Open Finance Brasil usa o perfil **FAPI-BR v2.2.0** (Financial-grade API), baseado em:

```
OAuth 2.0
    └── OIDC (OpenID Connect)
            └── FAPI 1.0 Advanced → FAPI-BR (específico Brasil)
                        └── FAPI 2.0 / FAPI-Único (2025+)
```

### Stack de segurança obrigatória

| Componente | Requisito |
|---|---|
| **TLS** | TLS 1.2+ com suites `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256` |
| **mTLS** | Certificados ICP-Brasil para autenticar requisições |
| **PAR** | Pushed Authorization Requests obrigatório (RFC 9126) |
| **PKCE** | Obrigatório em todos os fluxos (RFC 7636) |
| **JWT** | Assinatura PS256, criptografia RSA-OAEP + A256GCM |
| **DCR** | Dynamic Client Registration obrigatório (RFC 7591) |
| **private_key_jwt** | Autenticação do cliente no token endpoint |

### Algoritmos obrigatórios

```json
{
  "token_endpoint_auth_method": "private_key_jwt",
  "token_endpoint_auth_signing_alg": "PS256",
  "request_object_signing_alg": "PS256",
  "id_token_encrypted_response_alg": "RSA-OAEP",
  "id_token_encrypted_response_enc": "A256GCM"
}
```

### Tempo de vida dos tokens

| Token | Duração |
|---|---|
| Access Token | 300–900 segundos (5–15 min) |
| Refresh Token | Sem expiração definida (não rotaciona) |
| Consentimento | Até 365 dias |

---

## 5. Fluxo Completo de Consentimento

O fluxo segue o padrão **Authorization Code + PAR + PKCE**:

```
USUÁRIO         ORGANIZZE (TPP)          BANCO (ASPSP)         DIRETÓRIO
   │                  │                       │                     │
   │  1. Quer conectar│                       │                     │
   │  conta bancária  │                       │                     │
   │─────────────────►│                       │                     │
   │                  │ 2. POST /consents      │                     │
   │                  │  (cria consentimento)  │                     │
   │                  │───────────────────────►│                     │
   │                  │  ← consent_id          │                     │
   │                  │                       │                     │
   │                  │ 3. POST /par           │                     │
   │                  │  (envia request JWT)   │                     │
   │                  │───────────────────────►│                     │
   │                  │  ← request_uri         │                     │
   │                  │                       │                     │
   │  4. Redireciona  │                       │                     │
   │  p/ banco        │                       │                     │
   │◄─────────────────│                       │                     │
   │                  │                       │                     │
   │ 5. Loga no banco │                       │                     │
   │  e aprova        │                       │                     │
   │─────────────────────────────────────────►│                     │
   │                  │                       │                     │
   │  6. Redireciona  │                       │                     │
   │  com code        │                       │                     │
   │ ─────────────────►│                      │                     │
   │                  │ 7. POST /token         │                     │
   │                  │  (troca code por token)│                     │
   │                  │───────────────────────►│                     │
   │                  │  ← access_token        │                     │
   │                  │                       │                     │
   │                  │ 8. GET /accounts etc   │                     │
   │                  │  (Bearer + mTLS)       │                     │
   │                  │───────────────────────►│                     │
   │                  │  ← dados financeiros   │                     │
   │                  │                       │                     │
   │  9. Exibe dados  │                       │                     │
   │◄─────────────────│                       │                     │
```

### Detalhamento de cada etapa

#### Etapa 2 — Criar Consentimento
```http
POST /open-banking/consents/v3/consents
Authorization: Bearer <client_credentials_token>
Content-Type: application/json

{
  "data": {
    "loggedUser": {
      "document": { "identification": "11111111111", "rel": "CPF" }
    },
    "expirationDateTime": "2026-12-31T23:59:59Z",
    "permissions": [
      "ACCOUNTS_READ",
      "ACCOUNTS_BALANCES_READ",
      "ACCOUNTS_TRANSACTIONS_READ",
      "CREDIT_CARDS_ACCOUNTS_READ",
      "CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ",
      "RESOURCES_READ"
    ]
  }
}
```

**Resposta:**
```json
{
  "data": {
    "consentId": "urn:bancoex:C1DD33123",
    "status": "AWAITING_AUTHORISATION",
    "expirationDateTime": "2026-12-31T23:59:59Z"
  }
}
```

#### Etapa 3 — PAR (Pushed Authorization Request)
```http
POST /as/par
Content-Type: application/x-www-form-urlencoded
Authorization: client assertion (private_key_jwt)

request=<JWT assinado com PS256 contendo:>
{
  "response_type": "code id_token",
  "client_id": "seu-client-id",
  "scope": "openid consent:urn:bancoex:C1DD33123 accounts",
  "redirect_uri": "https://app.organizze.com.br/callback",
  "code_challenge": "E9Melhom...",
  "code_challenge_method": "S256",
  "nonce": "uuid-aleatorio",
  "state": "uuid-aleatorio"
}
```

#### Etapa 7 — Trocar code por token
```http
POST /token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code=AUTH_CODE
&redirect_uri=https://app.organizze.com.br/callback
&code_verifier=PKCE_VERIFIER
&client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer
&client_assertion=<JWT assinado>
```

---

## 6. APIs Disponíveis

### Fase 1 — Dados Abertos (sem autenticação)
| API | Endpoint base | Descrição |
|---|---|---|
| Channels | `/open-banking/channels/v1` | Agências, ATMs, canais digitais |
| Products & Services | `/open-banking/products-services/v1` | Produtos, tarifas, taxas |

### Fase 2 — Dados do Cliente (requer consentimento)
| API | Endpoint base | Permissão necessária |
|---|---|---|
| **Consentimento** | `/open-banking/consents/v3` | — |
| **Recursos** | `/open-banking/resources/v3` | `RESOURCES_READ` |
| **Contas** | `/open-banking/accounts/v2` | `ACCOUNTS_READ` |
| Saldos | `/open-banking/accounts/v2/{id}/balances` | `ACCOUNTS_BALANCES_READ` |
| Transações | `/open-banking/accounts/v2/{id}/transactions` | `ACCOUNTS_TRANSACTIONS_READ` |
| **Cartões** | `/open-banking/credit-cards-accounts/v2` | `CREDIT_CARDS_ACCOUNTS_READ` |
| Faturas cartão | `/open-banking/credit-cards-accounts/v2/{id}/bills` | `CREDIT_CARDS_ACCOUNTS_BILLS_READ` |
| Transações cartão | `/open-banking/credit-cards-accounts/v2/{id}/transactions` | `CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ` |
| **Empréstimos** | `/open-banking/loans/v2` | `LOANS_READ` |
| **Financiamentos** | `/open-banking/financings/v2` | `FINANCINGS_READ` |
| **Investimentos** | `/open-banking/bank-fixed-incomes/v1` | `BANK_FIXED_INCOMES_READ` |
| Fundos | `/open-banking/funds/v1` | `FUNDS_READ` |
| **Câmbio** | `/open-banking/exchanges/v1` | `EXCHANGES_READ` |

### Fase 3 — Iniciação de Pagamentos
| API | Endpoint base |
|---|---|
| Pix | `/open-banking/payments/v4/pix/payments` |
| Pagamento automático | `/open-banking/automatic-payments/v1` |

### Estrutura de resposta padrão (todas as APIs)
```json
{
  "data": { ... },
  "links": {
    "self": "https://...",
    "first": "https://...",
    "prev": "https://...",
    "next": "https://...",
    "last": "https://..."
  },
  "meta": {
    "totalRecords": 100,
    "totalPages": 5,
    "requestDateTime": "2026-07-12T10:00:00Z"
  }
}
```

---

## 7. Certificados e mTLS

O Open Finance Brasil exige **dois tipos de certificados ICP-Brasil** por participante:

| Tipo | Uso | OID |
|---|---|---|
| **Transporte (BRSEAL)** | Autenticar requisições mTLS | 2.16.76.1.2.3.2 |
| **Assinatura (BRSSL)** | Assinar JWTs (request objects, client assertions) | 2.16.76.1.2.3.3 |

### Onde obter
Certificados são emitidos pelo **Diretório de Participantes** após registro:
- **Produção**: https://web.directory.openbankingbrasil.org.br
- **Sandbox**: https://web.sandbox.directory.openbankingbrasil.org.br

### Configurar mTLS no PHP/Laravel

```php
// config/openfinance.php
return [
    'cert_path'    => env('OF_CERT_PATH', storage_path('certs/transport.pem')),
    'key_path'     => env('OF_KEY_PATH',  storage_path('certs/transport.key')),
    'signing_key'  => env('OF_SIGN_KEY',  storage_path('certs/signing.key')),
];
```

```php
// Guzzle com mTLS
$client = new \GuzzleHttp\Client([
    'cert'    => [config('openfinance.cert_path'), ''],
    'ssl_key' => config('openfinance.key_path'),
    'verify'  => true, // valida certificado do servidor
]);
```

---

## 8. Dynamic Client Registration (DCR)

Antes de usar qualquer API, seu app deve se **registrar como cliente** em cada banco via DCR.

### Passo a passo DCR

```
1. Obter Software Statement Assertion (SSA) do Diretório
2. Criar JWT de registro assinado com seu certificado de assinatura
3. POST no endpoint DCR do banco
4. Receber client_id e client_secret
```

#### 1. Obter SSA do Diretório
```http
GET /organisations/{orgId}/softwarestatements/{ssId}/assertion
Host: auth.directory.openbankingbrasil.org.br
Authorization: Bearer <token do diretório>
```

#### 2. Montar JWT de registro
```php
$payload = [
    'iss' => $seu_org_id,
    'iat' => time(),
    'exp' => time() + 300,
    'jti' => Str::uuid()->toString(),

    // Software Statement
    'software_statement'          => $ssa,
    'software_id'                 => env('OF_SOFTWARE_ID'),

    // Redirect URIs
    'redirect_uris'               => ['https://app.organizze.com.br/callback'],

    // Grant types
    'grant_types'                 => ['authorization_code', 'client_credentials', 'refresh_token'],
    'response_types'              => ['code id_token'],

    // Autenticação
    'token_endpoint_auth_method'  => 'private_key_jwt',
    'token_endpoint_auth_signing_alg' => 'PS256',

    // Algoritmos
    'request_object_signing_alg'          => 'PS256',
    'id_token_signed_response_alg'        => 'PS256',
    'id_token_encrypted_response_alg'     => 'RSA-OAEP',
    'id_token_encrypted_response_enc'     => 'A256GCM',
    'userinfo_signed_response_alg'        => 'PS256',
    'userinfo_encrypted_response_alg'     => 'RSA-OAEP',
    'userinfo_encrypted_response_enc'     => 'A256GCM',
    'authorization_signed_response_alg'   => 'PS256',
    'authorization_encrypted_response_alg'=> 'RSA-OAEP',
    'authorization_encrypted_response_enc'=> 'A256GCM',

    // TLS
    'tls_client_certificate_bound_access_tokens' => true,
];

$jwt = JWT::encode($payload, $signing_key, 'PS256', $kid);
```

#### 3. Registrar no banco
```http
POST /open-banking/register
Content-Type: application/jwt

<JWT assinado acima>
```

**Resposta:**
```json
{
  "client_id": "abc123",
  "client_secret": "...",
  "registration_access_token": "...",
  "registration_client_uri": "https://banco.com.br/register/abc123"
}
```

---

## 9. Ambiente Sandbox

O Diretório de Participantes mantém um ambiente sandbox **completamente isolado** do produtivo.

### Acesso
- **Portal Sandbox**: https://web.sandbox.directory.openbankingbrasil.org.br
- **Discovery das instituições sandbox**: https://data.sandbox.directory.openbankingbrasil.org.br/participants

### O que fazer no sandbox

| Passo | Ação |
|---|---|
| 1 | Criar conta de organização no portal sandbox |
| 2 | Registrar seu Software Statement (SSA) |
| 3 | Gerar certificados de transporte e assinatura de teste |
| 4 | Fazer DCR em uma instituição de teste |
| 5 | Executar fluxo completo de consentimento |
| 6 | Consumir APIs com dados fictícios |

### Instituições de teste disponíveis
O sandbox inclui implementações de referência que simulam bancos reais para testes.

### Variáveis de ambiente para sandbox
```env
OF_ENV=sandbox
OF_DIRECTORY_URL=https://auth.sandbox.directory.openbankingbrasil.org.br
OF_PARTICIPANTS_URL=https://data.sandbox.directory.openbankingbrasil.org.br/participants
OF_CERT_PATH=/storage/certs/sandbox/transport.pem
OF_KEY_PATH=/storage/certs/sandbox/transport.key
OF_SIGN_KEY=/storage/certs/sandbox/signing.key
OF_SOFTWARE_ID=seu-software-id-sandbox
OF_ORG_ID=seu-org-id-sandbox
```

---

## 10. Processo de Certificação

Obrigatório antes de ir para produção. Duas certificações independentes:

### Certificação 1 — Segurança (OIDF)
- **Executor**: OpenID Foundation
- **O que testa**: Conformidade com FAPI-BR e DCR
- **Ferramenta**: Motor de Conformidade de Segurança (OIDF)
- **Resultado**: Badge FAPI-BR no diretório

### Certificação 2 — Funcional (OBB)
- **Executor**: Estrutura Inicial do Open Finance
- **O que testa**: Conformidade das APIs com as especificações
- **Ferramenta**: Motor de Conformidade Funcional (disponível online ou local)
- **Exigência**: 100% de sucesso antes de solicitar certificação

### Fluxo de certificação

```
Sandbox → Testes funcionais → 100% OK → Motor de Segurança (OIDF)
       → Certificação funcional aprovada
       → Certificação segurança aprovada
       → Registro no Diretório de Produção
       → Publicação das APIs
```

---

## 11. Integração no Projeto Laravel

### Estrutura de pastas recomendada

```
app/
├── Services/
│   └── OpenFinance/
│       ├── OpenFinanceService.php       ← orquestrador principal
│       ├── ConsentService.php           ← cria/revoga consentimentos
│       ├── TokenService.php             ← gerencia tokens OAuth
│       ├── DirectoryService.php         ← DCR, SSA, JWKs
│       ├── AccountService.php           ← contas e saldos
│       ├── TransactionService.php       ← transações
│       └── CreditCardService.php        ← cartões de crédito
├── Models/
│   ├── OpenFinanceConsent.php
│   ├── OpenFinanceToken.php
│   └── OpenFinanceInstitution.php
└── Http/
    └── Controllers/App/
        └── BankConnectionController.php

config/
└── openfinance.php

database/migrations/
├── create_open_finance_consents_table.php
├── create_open_finance_tokens_table.php
└── create_open_finance_institutions_table.php
```

### Dependências necessárias

```bash
composer require guzzlehttp/guzzle          # HTTP client com mTLS
composer require firebase/php-jwt            # JWT (assinar/verificar)
composer require web-token/jwt-library       # PS256 / RSA-OAEP
composer require spatie/laravel-data         # DTOs tipados
```

### Migrations necessárias

```sql
-- open_finance_consents
CREATE TABLE open_finance_consents (
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id       BIGINT NOT NULL,
    institution   VARCHAR(100) NOT NULL,          -- ex: "itau", "nubank"
    consent_id    VARCHAR(255) NOT NULL UNIQUE,   -- URN do consentimento
    status        ENUM('AWAITING_AUTHORISATION','AUTHORISED','REJECTED','REVOKED') DEFAULT 'AWAITING_AUTHORISATION',
    permissions   JSON NOT NULL,
    expires_at    DATETIME,
    created_at    TIMESTAMP,
    updated_at    TIMESTAMP
);

-- open_finance_tokens
CREATE TABLE open_finance_tokens (
    id             BIGINT PRIMARY KEY AUTO_INCREMENT,
    consent_id     BIGINT NOT NULL,
    access_token   TEXT NOT NULL,
    refresh_token  TEXT,
    expires_at     DATETIME NOT NULL,
    created_at     TIMESTAMP
);

-- open_finance_institutions
CREATE TABLE open_finance_institutions (
    id              BIGINT PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(100) NOT NULL,
    slug            VARCHAR(50) NOT NULL UNIQUE,
    authorization_server_url VARCHAR(500),
    api_base_url    VARCHAR(500),
    client_id       VARCHAR(255),
    logo_url        VARCHAR(500),
    active          BOOLEAN DEFAULT TRUE
);
```

---

## 12. Exemplo de Código PHP/Laravel

### config/openfinance.php

```php
<?php

return [
    'env'          => env('OF_ENV', 'sandbox'),
    'org_id'       => env('OF_ORG_ID'),
    'software_id'  => env('OF_SOFTWARE_ID'),
    'redirect_uri' => env('OF_REDIRECT_URI', 'https://app.organizze.com.br/callback/open-finance'),

    'directory' => [
        'sandbox'    => 'https://auth.sandbox.directory.openbankingbrasil.org.br',
        'production' => 'https://auth.directory.openbankingbrasil.org.br',
    ],

    'certs' => [
        'transport_cert' => env('OF_TRANSPORT_CERT', storage_path('certs/transport.pem')),
        'transport_key'  => env('OF_TRANSPORT_KEY',  storage_path('certs/transport.key')),
        'signing_key'    => env('OF_SIGNING_KEY',    storage_path('certs/signing.key')),
        'signing_kid'    => env('OF_SIGNING_KID'),
    ],

    'permissions' => [
        'ACCOUNTS_READ',
        'ACCOUNTS_BALANCES_READ',
        'ACCOUNTS_TRANSACTIONS_READ',
        'CREDIT_CARDS_ACCOUNTS_READ',
        'CREDIT_CARDS_ACCOUNTS_BILLS_READ',
        'CREDIT_CARDS_ACCOUNTS_TRANSACTIONS_READ',
        'RESOURCES_READ',
    ],
];
```

### app/Services/OpenFinance/TokenService.php

```php
<?php

namespace App\Services\OpenFinance;

use Firebase\JWT\JWT;
use Illuminate\Support\Str;

class TokenService
{
    public function buildClientAssertion(string $tokenEndpoint, string $clientId): string
    {
        $signingKey = file_get_contents(config('openfinance.certs.signing_key'));
        $kid        = config('openfinance.certs.signing_kid');

        return JWT::encode([
            'iss' => $clientId,
            'sub' => $clientId,
            'aud' => $tokenEndpoint,
            'jti' => Str::uuid()->toString(),
            'iat' => time(),
            'exp' => time() + 300,
        ], $signingKey, 'PS256', $kid);
    }

    public function buildCodeVerifier(): string
    {
        return rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
    }

    public function buildCodeChallenge(string $verifier): string
    {
        return rtrim(strtr(base64_encode(hash('sha256', $verifier, true)), '+/', '-_'), '=');
    }
}
```

### app/Services/OpenFinance/ConsentService.php

```php
<?php

namespace App\Services\OpenFinance;

use App\Models\OpenFinanceConsent;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;

class ConsentService
{
    public function __construct(
        private readonly Client       $http,
        private readonly TokenService $tokens,
    ) {}

    public function create(string $institution, string $cpf, string $apiBase): array
    {
        $response = $this->http->post("{$apiBase}/open-banking/consents/v3/consents", [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->getClientCredentialsToken($institution),
                'Content-Type'  => 'application/json',
                'x-fapi-interaction-id' => (string) \Str::uuid(),
            ],
            'json' => [
                'data' => [
                    'loggedUser' => [
                        'document' => ['identification' => $cpf, 'rel' => 'CPF'],
                    ],
                    'expirationDateTime' => now()->addYear()->toIso8601String(),
                    'permissions'        => config('openfinance.permissions'),
                ],
            ],
        ]);

        $body = json_decode($response->getBody(), true);

        OpenFinanceConsent::create([
            'user_id'     => Auth::id(),
            'institution' => $institution,
            'consent_id'  => $body['data']['consentId'],
            'status'      => $body['data']['status'],
            'permissions' => config('openfinance.permissions'),
            'expires_at'  => $body['data']['expirationDateTime'],
        ]);

        return $body['data'];
    }

    public function revoke(string $consentId, string $apiBase): void
    {
        $this->http->delete("{$apiBase}/open-banking/consents/v3/consents/{$consentId}");

        OpenFinanceConsent::where('consent_id', $consentId)
            ->update(['status' => 'REVOKED']);
    }

    private function getClientCredentialsToken(string $institution): string
    {
        // Implementar: POST /token com grant_type=client_credentials
        // Retorna access_token para criar o consentimento
        return cache()->remember("of_cc_token_{$institution}", 800, function () {
            // ...
        });
    }
}
```

### app/Services/OpenFinance/AccountService.php

```php
<?php

namespace App\Services\OpenFinance;

use GuzzleHttp\Client;

class AccountService
{
    public function __construct(private readonly Client $http) {}

    public function list(string $accessToken, string $apiBase): array
    {
        $response = $this->http->get("{$apiBase}/open-banking/accounts/v2/accounts", [
            'headers' => $this->headers($accessToken),
        ]);

        return json_decode($response->getBody(), true)['data'];
    }

    public function balances(string $accountId, string $accessToken, string $apiBase): array
    {
        $response = $this->http->get("{$apiBase}/open-banking/accounts/v2/accounts/{$accountId}/balances", [
            'headers' => $this->headers($accessToken),
        ]);

        return json_decode($response->getBody(), true)['data'];
    }

    public function transactions(string $accountId, string $accessToken, string $apiBase, array $params = []): array
    {
        $response = $this->http->get("{$apiBase}/open-banking/accounts/v2/accounts/{$accountId}/transactions", [
            'headers' => $this->headers($accessToken),
            'query'   => array_merge([
                'fromBookingDate' => now()->startOfMonth()->toDateString(),
                'toBookingDate'   => now()->toDateString(),
                'page'            => 1,
                'page-size'       => 25,
            ], $params),
        ]);

        return json_decode($response->getBody(), true);
    }

    private function headers(string $token): array
    {
        return [
            'Authorization'          => "Bearer {$token}",
            'x-fapi-interaction-id'  => (string) \Str::uuid(),
            'Accept'                 => 'application/json',
        ];
    }
}
```

### app/Http/Controllers/App/BankConnectionController.php — rotas

```php
// routes/web/app.php — adicionar:
Route::prefix('conexao-bancaria')->group(function () {
    Route::get('/',                        [BankConnectionController::class, 'index'])->name('app.conexao-bancaria');
    Route::post('/iniciar',                [BankConnectionController::class, 'initiate'])->name('app.of.initiate');
    Route::get('/callback',                [BankConnectionController::class, 'callback'])->name('app.of.callback');
    Route::delete('/{consentId}/revogar',  [BankConnectionController::class, 'revoke'])->name('app.of.revoke');
});
```

### .env — variáveis necessárias

```env
# Open Finance Brasil
OF_ENV=sandbox
OF_ORG_ID=seu-organization-id-no-diretorio
OF_SOFTWARE_ID=seu-software-statement-id
OF_REDIRECT_URI=https://app.organizze.com.br/callback/open-finance
OF_SIGNING_KID=kid-do-seu-certificado-de-assinatura

# Certificados (caminhos dentro do container)
OF_TRANSPORT_CERT=/var/www/html/storage/certs/transport.pem
OF_TRANSPORT_KEY=/var/www/html/storage/certs/transport.key
OF_SIGNING_KEY=/var/www/html/storage/certs/signing.key
```

---

## 13. Referências

| Recurso | URL |
|---|---|
| Portal do Desenvolvedor | https://openfinancebrasil.atlassian.net/wiki/spaces/OF |
| Especificações de APIs | https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17367659 |
| Perfil FAPI-BR v2.2.0 | https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/1675395089 |
| Guia de Certificação | https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/155910145 |
| Sandbox do Diretório | https://web.sandbox.directory.openbankingbrasil.org.br |
| Diretório de Produção | https://web.directory.openbankingbrasil.org.br |
| OpenAPI Consents | https://openbanking-brasil.github.io/openapi/swagger-apis/consents |
| GitHub specs segurança | https://github.com/OpenBanking-Brasil/specs-seguranca |
| BCB — Open Finance | https://www.bcb.gov.br/en/financialstability/open_finance |
| Ozone API (parceiro OF) | https://ozoneapi.com/the-open-finance-tracker/library/open-finance-brasil |

---

> **Atenção sobre TPP terceirizado**: A integração direta exige registro no Diretório, certificados ICP-Brasil, infraestrutura com mTLS e processo de certificação formal — estimativa de 3 a 12 meses e custo elevado. Para um MVP, considere usar um **middleware especializado** (Belvo, Pluggy, Quanto, TecnoSpeed) que abstrai toda essa camada e entrega dados via API REST simples.
