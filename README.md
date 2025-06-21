# 💡 Aplicação Backend com Fastify

Projeto desenvolvido como parte prática da pós-graduação **POS TECH** (FIAP + Alura), com foco em backend moderno utilizando **Node.js com Fastify**.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 💠 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Suba o banco de dados com Docker

```bash
docker compose up --build
```

> Isso iniciará um container PostgreSQL conforme definido no `docker-compose.yml`.

### 3. Instale as dependências do projeto

```bash
npm install
```

### 4. Execute a aplicação em modo de desenvolvimento

```bash
npm run dev
```

---

## 📆 Scripts Disponíveis

| Comando         | Descrição                               |
| --------------- | --------------------------------------- |
| `npm run dev`   | Inicia o servidor com `ts-node-dev`     |
| `npm run build` | Compila o projeto TypeScript            |
| `npm start`     | Executa o código já compilado (`dist/`) |
| `npm run lint`  | Executa o ESLint para análise de código |

---

## 📄 Arquivo `.env`

Crie um arquivo `.env` com as variáveis de ambiente necessárias. Exemplo:

```env
DATABASE_URL=postgresql://postgres:admin@localhost:5454/gestdb
```

> Certifique-se de que o PostgreSQL está escutando na porta `5454`.

---

## 📚 Créditos

Este projeto é parte das atividades da pós-graduação em Engenharia de Software da **FIAP** em parceria com a **Alura**.

---
