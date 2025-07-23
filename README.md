# 🧠 TRILHAPRO - Backend
<p>Este é o repositório responsável pelo backend do projeto TRILHAPRO, uma aplicação que tem como objetivo ajudar nos estudos dos usuários criando planos de estudos via manual ou até mesmo utilizando a IA TrilhaPro.</p>

> 🎨 O design do projeto já está finalizado e servirá como base para toda a implementação do frontend e backend.

## 📦 Tecnologias Utilizadas
- 🔵 [Node.js](https://nodejs.org/)
- 🔵 [Express](https://expressjs.com/)
- 🔵 [TypeScript](https://www.typescriptlang.org/)
- 🔵 [Prisma ORM](https://www.prisma.io/)
- 🔵 [PostgreSQL](https://www.postgresql.org/)
- 🔵 [Zod](https://zod.dev/) - para validação de dados
- 🔵 [dotenv](https://www.npmjs.com/package/dotenv) - para gerenciamento de variáveis de ambiente

## 📁 Estrutura de Pastas

📦 src
├── 📁 config              # Configurações (ex: banco de dados, variáveis env)
│   └── prisma.ts
├── 📁 modules             # Módulos ou funcionalidades (por domínio)
│   └── user
│       ├── user.controller.ts
│       ├── user.service.ts
│       ├── user.repository.ts
│       ├── user.schema.ts     # Zod: validação e tipagem
│       ├── user.routes.ts
│       └── user.types.ts      # Tipagens específicas (se necessário)
├── 📁 middlewares         # Middlewares personalizados (auth, errors, etc.)
│   └── errorHandler.ts
├── 📁 utils               # Funções utilitárias
│   └── logger.ts
├── 📁 validations         # Schemas Zod reutilizáveis globais (opcional)
├── 📁 database            # Arquivos do Prisma
│   ├── prismaClient.ts
│   └── schema.prisma
├── 📁 routes              # Rotas agrupadas por módulo
│   └── index.ts
├── app.ts                # Configuração do Express
├── server.ts             # Inicialização da aplicação
└── types.d.ts            # Tipos globais (opcional)

## ⚙️ Como rodar o projeto localmente

#### Pré-requisitos
- Node.js LTS instalado
- PostgreSQL rodando localmente
- Yarn ou NPM

#### Passos
1. Clone o repositório
   > git clone https://github.com/seu-usuario/nome-do-repo-backend.git<br>
   > cd nome-do-repo-backend
2. Instale as dependências
   > yarn install
3. Configure as variáveis de ambiente
   - Crie um arquivo .env com base no .env.example:
     > cp .env.example .env
   - Adicione suas credenciais do banco de dados, por exemplo:
     > DATABASE_URL="postgresql://user:password@localhost:5432/nomeDoBanco"
4. Rode as migrations do banco
   > npx prisma migrate dev --name init
5. Inicie o servidor de desenvolvimento
   > yarn dev

## 🚧 Status do Projeto

- [x] Design finalizado
- [x] Estrutura de pastas definida
- [x] Modelagem do banco com Prisma
- [ ] Criação das rotas principais
- [ ] Implementação da autenticação
- [ ] Deploy no ambiente de produção

## 📌 Próximos Passos
- [ ] Implementar autenticação JWT
- [ ] Criar testes unitários e de integração
- [ ] Configurar CI/CD
- [ ] Criar documentação das rotas (Swagger ou Redoc)
