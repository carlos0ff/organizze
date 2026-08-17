-- Cria o banco de dados da Evolution API caso não exista
CREATE DATABASE IF NOT EXISTS `evolution_api`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

GRANT ALL PRIVILEGES ON `evolution_api`.* TO 'sail'@'%';
FLUSH PRIVILEGES;
