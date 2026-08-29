# Database Schema

Documentação das tabelas do banco de dados.

---

## Blog

### `authors`
Autores do blog — usuários com acesso para publicar conteúdo.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | BIGINT PK | Identificador único |
| `first_name` | VARCHAR(255) | Nome |
| `last_name` | VARCHAR(255) | Sobrenome |
| `email` | VARCHAR(255) UNIQUE | E-mail de acesso |
| `password` | VARCHAR(255) | Senha hasheada |
| `forget` | VARCHAR(255) | Token para redefinição de senha |
| `genre` | VARCHAR(10) | Gênero do autor |
| `datebirth` | DATE | Data de nascimento |
| `bio` | TEXT | Biografia exibida no perfil |
| `avatar` | VARCHAR(255) | Caminho da imagem de perfil |
| `slug` | VARCHAR(150) UNIQUE | Identificador de URL do perfil |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data da última atualização |
| `deleted_at` | TIMESTAMP | Soft delete |

---

### `posts`
Posts do blog.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | BIGINT PK | Identificador único |
| `author_id` | BIGINT FK | Autor do post (`authors.id`) |
| `category_id` | BIGINT FK | Categoria do post (`categories.id`) |
| `title` | VARCHAR(255) | Título principal |
| `slug` | VARCHAR(255) UNIQUE | Identificador de URL |
| `subtitle` | VARCHAR(500) | Subtítulo opcional |
| `excerpt` | TEXT | Resumo curto exibido em listagens |
| `content` | LONGTEXT | Corpo completo do post |
| `meta_title` | VARCHAR(255) | Título para SEO (sobrescreve `title`) |
| `meta_description` | VARCHAR(500) | Descrição para SEO |
| `thumbnail` | VARCHAR(255) | Imagem de capa |
| `video_url` | VARCHAR(500) | URL de vídeo associado |
| `status` | VARCHAR(20) | Estado: `draft`, `scheduled`, `published`, `archived` |
| `is_featured` | TINYINT(1) | Indica se o post está em destaque |
| `views_count` | BIGINT UNSIGNED | Contador de visualizações |
| `reading_time_minutes` | SMALLINT UNSIGNED | Tempo estimado de leitura em minutos |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data da última atualização |
| `deleted_at` | TIMESTAMP | Soft delete |

---

### `categories`
Categorias dos posts.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | BIGINT PK | Identificador único |
| `name` | VARCHAR(100) | Nome exibido da categoria |
| `slug` | VARCHAR(100) UNIQUE | Identificador de URL |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data da última atualização |

---

### `tags`
Tags para classificação granular dos posts.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | BIGINT PK | Identificador único |
| `name` | VARCHAR(100) | Nome exibido da tag |
| `slug` | VARCHAR(100) UNIQUE | Identificador de URL |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data da última atualização |

---

### `post_tag`
Tabela pivot N:N entre posts e tags.

| Campo | Tipo | Descrição |
|---|---|---|
| `post_id` | BIGINT FK PK | Referência ao post (`posts.id`) |
| `tag_id` | BIGINT FK PK | Referência à tag (`tags.id`) |

---

### `post_meta`
Metadados de SEO e Open Graph por post. Relação 1:1 com `posts`.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | BIGINT PK | Identificador único |
| `post_id` | BIGINT FK UNIQUE | Post associado (`posts.id`) |
| `meta_title` | VARCHAR(255) | Título para mecanismos de busca |
| `meta_description` | VARCHAR(500) | Descrição para mecanismos de busca |
| `og_title` | VARCHAR(255) | Título para compartilhamento social (Open Graph) |
| `og_description` | VARCHAR(500) | Descrição para compartilhamento social |
| `og_image_path` | VARCHAR(255) | Imagem para compartilhamento social |
| `canonical_url` | VARCHAR(500) | URL canônica para evitar conteúdo duplicado |
| `robots` | VARCHAR(100) | Diretiva para robôs (ex: `index,follow`) |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data da última atualização |

---

### `media`
Arquivos de mídia (imagens, documentos) vinculados a posts.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | BIGINT PK | Identificador único |
| `post_id` | BIGINT FK | Post associado (`posts.id`) |
| `file_path` | VARCHAR(255) | Caminho do arquivo no storage |
| `file_name` | VARCHAR(255) | Nome original do arquivo |
| `mime_type` | VARCHAR(100) | Tipo MIME (ex: `image/jpeg`) |
| `size_bytes` | BIGINT UNSIGNED | Tamanho do arquivo em bytes |
| `alt_text` | VARCHAR(255) | Texto alternativo para acessibilidade |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data da última atualização |

---

### `newsletter_subscribers`
Assinantes da newsletter do blog.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | BIGINT PK | Identificador único |
| `email` | VARCHAR(255) UNIQUE | E-mail do assinante |
| `status` | VARCHAR(20) | Estado: `subscribed`, `unsubscribed`, `bounced` |
| `confirmed_at` | TIMESTAMP | Data de confirmação do e-mail (double opt-in) |
| `unsubscribed_at` | TIMESTAMP | Data de descadastro |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data da última atualização |

---

## App

### `users`
Usuários da aplicação principal.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | BIGINT PK | Identificador único |
| `first_name` | VARCHAR(100) | Nome |
| `last_name` | VARCHAR(100) | Sobrenome |
| `email` | VARCHAR(255) UNIQUE | E-mail de acesso |
| `cpf` | VARCHAR(11) UNIQUE | CPF (somente números, com zeros à esquerda) |
| `birthdate` | DATE | Data de nascimento |
| `gender` | VARCHAR(30) | Gênero |
| `password` | VARCHAR(255) | Senha hasheada — nulo quando usa apenas login social |
| `email_verified_at` | TIMESTAMP | Data de verificação do e-mail |
| `remember_token` | VARCHAR(100) | Token de sessão persistente |
| `avatar` | VARCHAR(500) | URL da foto de perfil |
| `status` | ENUM | Estado da conta: `pending`, `active`, `blocked` |
| `last_login_at` | TIMESTAMP | Data do último login |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data da última atualização |
| `deleted_at` | TIMESTAMP | Soft delete |

---

### `password_reset_tokens`
Tokens para redefinição de senha dos usuários.

| Campo | Tipo | Descrição |
|---|---|---|
| `email` | VARCHAR(255) PK | E-mail do usuário solicitante |
| `token` | VARCHAR(255) | Token gerado para redefinição |
| `created_at` | TIMESTAMP | Data de criação (usado para expirar o token) |

---

### `social_accounts`
Contas de login social vinculadas aos usuários.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | BIGINT PK | Identificador único |
| `user_id` | BIGINT FK | Usuário vinculado (`users.id`) |
