# FiberEmballage

WordPress site para [fiberemballage.com](https://fiberemballage.com), hospedado na VPS I8 Company.

## Stack
- WordPress 6.7 + PHP 8.2 + Apache
- MariaDB 11
- Traefik (gerenciado externamente na VPS)
- GitHub Actions para CI/CD

## Deploy
Push em `main` dispara GitHub Actions:
1. Rsync arquivos pra VPS
2. `docker compose up -d` na VPS

## Estrutura
- `docker-compose.yml` — definição dos serviços
- `.env.example` — template de variáveis (sem senhas)
- `.github/workflows/deploy.yml` — pipeline CI/CD

## Setup inicial na VPS (apenas primeira vez)
```bash
cd /opt/fiber-emballage
cp .env.example .env
# editar .env com senhas reais
docker compose up -d
