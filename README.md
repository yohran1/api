Comando SQL para criar a base de dados
## CREATE DATABASE (nome-da-base-de-dados) CHARACTER uft8mb4 COLLATE utf8mb4_unicode_ci

Sequelize é uma biblioteca javaScript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Manipular variáveis de ambiente
### npm install dotenv --save

Criar a Models mensagem
### npx sequelize-cli model:generate --name Messages --attributes name:string,email:string,subject:string,content:string

Executar as migrations 
### npx sequelize-cli db:migrate

Axios é uma biblioteca de client HTTP que permite fazer requisição a API
### npm install axios

Permitir requisição externa
### npm install CORS