🧠 TRILHAPRO - Backend
Este é o repositório responsável pelo backend do projeto TRILHAPRO, uma aplicação que tem como objetivo ajudar nos estudos dos usuários criando planos de estudos via manual ou até mesmo utilizando a IA TrilhaPro.

🎨 O design do projeto já está finalizado e servirá como base para toda a implementação do frontend e backend.

📦 Tecnologias Utilizadas
🔵 Node.js
🔵 Express
🔵 TypeScript
🔵 Prisma ORM
🔵 PostgreSQL
🔵 Zod - para validação de dados
🔵 dotenv - para gerenciamento de variáveis de ambiente
⚙️ Como rodar o projeto localmente
Pré-requisitos
Node.js LTS instalado
PostgreSQL rodando localmente
Yarn ou NPM
Passos
Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repo-backend.git
cd nome-do-repo-backend

Instale as dependências
yarn install

Configure as variáveis de ambiente
Crie um arquivo .env com base no .env.example:
cp .env.example .env

Adicione suas credenciais do banco de dados, por exemplo:
DATABASE_URL="postgresql://user:password@localhost:5432/nomeDoBanco"

Rode as migrations do banco
npx prisma migrate dev --name init

Inicie o servidor de desenvolvimento
yarn dev

🚧 Status do Projeto
 Design finalizado
 Modelagem do banco com Prisma
 Criação das rotas principais
 Implementação da autenticação
 Deploy no ambiente de produção
📌 Próximos Passos
 Implementar autenticação JWT
 Criar testes unitários e de integração
 Configurar CI/CD
 Criar documentação das rotas (Swagger ou Redoc)
