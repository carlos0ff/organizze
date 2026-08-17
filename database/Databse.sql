/** Blog - author/user **/
CREATE TABLE `authors` (
   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
   `first_name` varchar(255) NOT NULL DEFAULT '',
   `last_name` varchar(255) NOT NULL DEFAULT '',
   `email` varchar(255) NOT NULL DEFAULT '',
   `password` varchar(255) NOT NULL DEFAULT '',
   `forget` varchar(255) DEFAULT NULL,
   `genre` varchar(10) DEFAULT NULL,
   `datebirth` date DEFAULT NULL,

   `bio` text DEFAULT NULL,
   `avatar` varchar(255) DEFAULT NULL,
   `slug` varchar(150) NOT NULL,

   `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
   `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `deleted_at` timestamp NULL DEFAULT NULL,

   PRIMARY KEY (`id`),
   UNIQUE KEY `authors_email_unique` (`email`),
   UNIQUE KEY `authors_slug_unique` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/** Blog - post **/
CREATE TABLE `posting` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `author_id` int(11) unsigned DEFAULT NULL,
    `category` int(11) unsigned DEFAULT NULL,

    `title` varchar(255) NOT NULL,
    `slug` varchar(255) NOT NULL,
    `subtitle` varchar(500) DEFAULT NULL,
    `excerpt` text DEFAULT NULL,
    `content` longtext NOT NULL,

    `meta_title` varchar(255) DEFAULT NULL,
    `meta_description` varchar(500) DEFAULT NULL,

    `thumbnail` varchar(255) DEFAULT NULL,
    `video_url` varchar(500) DEFAULT NULL,
    `status` varchar(20) NOT NULL DEFAULT 'draft' COMMENT 'draft, scheduled, published, archived',

    `is_featured` tinyint(1) NOT NULL DEFAULT 0,
    `views_count` bigint unsigned NOT NULL DEFAULT 0,
    `reading_time_minutes` smallint unsigned DEFAULT NULL,

    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` timestamp NULL DEFAULT NULL,

    PRIMARY KEY (`id`),
    KEY `category_id` (`category`),
    KEY `posting_id` (`posting`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/** Blog - tags **/
CREATE TABLE `tags` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `slug` varchar(100) NOT NULL,

    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`),
    UNIQUE KEY `tags_slug_unique` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/** Blog - Meta tags **/
CREATE TABLE `post_meta` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `post_id` int(11) unsigned DEFAULT NULL,

    `meta_title` VARCHAR(255) DEFAULT NULL,
    `meta_description` VARCHAR(500) DEFAULT NULL,

    `og_title` VARCHAR(255) DEFAULT NULL,
    `og_description` VARCHAR(500) DEFAULT NULL,
    `og_image_path` VARCHAR(255) DEFAULT NULL,
    `canonical_url` VARCHAR(500) DEFAULT NULL,

    `robots` VARCHAR(100) NOT NULL DEFAULT 'index,follow',

    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,

    PRIMARY KEY (`id`),
    UNIQUE KEY `post_meta_post_id_unique` (`post_id`),
    CONSTRAINT `post_meta_post_id_foreign`FOREIGN KEY (`post_id`)REFERENCES `posts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/** Blog - category **/
CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/** Blog - post <-> tags (N:N) **/
CREATE TABLE `post_tag` (
    `post_id` int(11) unsigned NOT NULL,
    `tag_id` int(11) unsigned NOT NULL,

    PRIMARY KEY (`post_id`, `tag_id`),
    KEY `post_tag_tag_id_index` (`tag_id`),
    CONSTRAINT `post_tag_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
    CONSTRAINT `post_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/** Blog - newsletter **/
CREATE TABLE `newsletter_subscribers` (
   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'subscribed' COMMENT 'subscribed, unsubscribed, bounced',

  `confirmed_at` timestamp NULL DEFAULT NULL,
  `unsubscribed_at` timestamp NULL DEFAULT NULL,

  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  UNIQUE KEY `newsletter_subscribers_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/** Blog - media/attachments **/
CREATE TABLE `media` (
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
 `post_id` int(11) unsigned DEFAULT NULL,

 `file_path` varchar(255) NOT NULL,
 `file_name` varchar(255) NOT NULL,
 `mime_type` varchar(100) DEFAULT NULL,
 `size_bytes` bigint unsigned DEFAULT NULL,
 `alt_text` varchar(255) DEFAULT NULL,

 `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

 PRIMARY KEY (`id`),
 KEY `media_post_id_index` (`post_id`),
 CONSTRAINT `media_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/** APP **/
CREATE TABLE `users` (
                         `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

                         `first_name` VARCHAR(100) NOT NULL,
                         `last_name` VARCHAR(100) NOT NULL,

                         `email` VARCHAR(255) NULL,
                         `password` VARCHAR(255) NULL COMMENT 'Nulo quando o usuário usar apenas login social',

                         `gender` VARCHAR(30) NULL,
                         `birth_date` DATE NULL,
                         `document` VARCHAR(14) NULL COMMENT 'CPF: mantém zeros à esquerda e permite pontuação',
                         `avatar` VARCHAR(500) NULL,

                         `status` ENUM('registered', 'active', 'blocked') NOT NULL DEFAULT 'registered',
                         `email_verified_at` TIMESTAMP NULL DEFAULT NULL,

                         `remember_token` VARCHAR(100) NULL,
                         `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
                         `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                         `deleted_at` TIMESTAMP NULL DEFAULT NULL,

                         PRIMARY KEY (`id`),

                         UNIQUE KEY `users_email_unique` (`email`),
                         UNIQUE KEY `users_document_unique` (`document`),

                         KEY `users_status_index` (`status`),
                         KEY `users_deleted_at_index` (`deleted_at`),

                         FULLTEXT KEY `users_search_fulltext` (`first_name`, `last_name`, `email`)
) ENGINE=InnoDBDEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `users` (
     `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

    -- Dados pessoais
     `first_name` VARCHAR(100) NOT NULL,
     `last_name` VARCHAR(100) NOT NULL,
     `email` VARCHAR(255) NULL,
     `cpf` VARCHAR(11) NULL COMMENT 'Somente números, mantendo zeros à esquerda',
     `birth_date` DATE NULL,
     `gender` VARCHAR(30) NULL,

    -- Autenticação
     `password` VARCHAR(255) NULL COMMENT 'Nulo quando o usuário usa somente login social',
     `email_verified_at` TIMESTAMP NULL DEFAULT NULL,
     `remember_token` VARCHAR(100) NULL,

    -- Perfil e controle
     `avatar` VARCHAR(500) NULL,
     `status` ENUM('pending', 'active', 'blocked') NOT NULL DEFAULT 'pending',
     `last_login_at` TIMESTAMP NULL DEFAULT NULL,

    -- Auditoria
     `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
     `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     `deleted_at` TIMESTAMP NULL DEFAULT NULL,

     PRIMARY KEY (`id`),

     UNIQUE KEY `users_email_unique` (`email`),
     UNIQUE KEY `users_cpf_unique` (`cpf`),

     KEY `users_status_index` (`status`),
     KEY `users_last_login_at_index` (`last_login_at`),
     KEY `users_deleted_at_index` (`deleted_at`),
     FULLTEXT KEY `users_search_fulltext` (`first_name`, `last_name`, `email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `password_reset_tokens` (
 `email` VARCHAR(255) NOT NULL,
 `token` VARCHAR(255) NOT NULL,
 `created_at` TIMESTAMP NULL DEFAULT NULL,

 PRIMARY KEY (`email`)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `social_accounts` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `user_id` int(11) unsigned DEFAULT NULL,

    PRIMARY KEY (`id`),
    KEY `user_social` (`user_id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
