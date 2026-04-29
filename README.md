Tecnologias Utilizadas:

Node.js: Ambiente de execução Javascript.

Express: Framework web para construção de APIs.

Sequelize: ORM para manipulação do banco de dados SQL.

SQLite: Banco de dados relacional leve.

JWT (JSON Web Token): Autenticação e segurança de rotas.

Bcrypt: Criptografia de senhas para segurança do usuário.

Nodemon: Ferramenta de auxílio ao desenvolvimento (reboot automático).

Estrutura do Banco de Dados:

O banco de dados possui três tabelas principais, conforme definido na estrutura do database.sqlite:

Users: Armazena informações dos usuários (Nome, Email, Senha, Perfil).

Products: Catálogo de itens (Nome, Preço, Categoria).

Orders: Registro de pedidos realizados (Cliente, Canal, Status, Valor Total).

Como Executar o Projeto:
Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina.

Instalação
Clone o repositório ou baixe os arquivos.

No terminal, acesse a pasta do projeto e instale as dependências:
npm install
npm start
npm run dev
O servidor será iniciado através do arquivo principal em src/app.js.

Autenticação
A aplicação está configurada para suportar diferentes níveis de acesso (ex: ADMIN e CLIENTE). As senhas são protegidas por hash bcrypt e as sessões são gerenciadas via tokens jsonwebtoken.
Licença
Este projeto está sob a licença ISC.

Notas de Desenvolvimento
Autor: Bruno Oliveira
Versão: 1.0.0
Scripts disponíveis: start, dev, test.
