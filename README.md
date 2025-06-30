# trpc-exe

Projeto exemplo usando tRPC, Drizzle ORM e Postgres.

## Pré-requisitos

- [Docker](https://www.docker.com/get-started/) instalado
- Node.js 18+
- Yarn ou npm

## 1. Subindo o banco de dados

```bash
docker-compose up -d
```

Isso irá subir um Postgres acessível em `localhost:5432` com usuário, senha e banco: `postgres`.

## 2. Instalando dependências

```bash
yarn install
# ou
npm install
```

## 3. Rodando as migrations

```bash
npx drizzle-kit push
```

Isso irá criar a tabela `users` no banco.

## 4. Rodando o servidor

```bash
yarn dev
# ou
npx tsx src/index.ts
```

O servidor irá rodar em `http://localhost:3000`.

## 5. Testando os endpoints

### Listar usuários

```bash
curl -X POST http://localhost:3000/userList \
  -H "Content-Type: application/json" \
  -d '{}'
```

### Buscar usuário por ID

```bash
curl -X POST http://localhost:3000/userById \
  -H "Content-Type: application/json" \
  -d '"1"'
```

### Criar usuário

```bash
curl -X POST http://localhost:3000/createUser \
  -H "Content-Type: application/json" \
  -d '{"name":"Novo Nome"}'
```

---

- O projeto usa Drizzle ORM com Postgres (configuração em `.env` ou padrão localhost).
- O banco de dados é persistido no volume Docker `pgdata`.
