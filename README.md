
```markdown
# Movie Catalog API

API de catálogo de filmes com autenticação JWT e CRUD de filmes.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM para PostgreSQL)
- JWT (JSON Web Tokens)
- bcrypt (para criptografia de senhas)
- dotenv (para carregar variáveis de ambiente)
- Nodemon (para reinicialização automática do servidor)
- PostgreSQL

## Instalação

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/movie-catalog.git
```

2. Instale as dependências:

```
cd movie-catalog
npm install
```

3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente conforme necessário:

```
PORT=3000
DATABASE_URL=postgres://seu-usuario:senha@localhost:5432/moviecatalog
JWT_SECRET=sua_chave_secreta
```

## Executando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```
npm start
```

O servidor estará acessível em [http://localhost:your_port_number](http://localhost:your_port_number).

## Endpoints

### Autenticação

- **POST /api/auth/register**: Registrar um novo usuário.
- **POST /api/auth/login**: Login de usuário (retorna token JWT).

### CRUD de Filmes

- **POST /api/movies**: Criar um novo filme.
- **GET /api/movies**: Obter todos os filmes.
- **GET /api/movies/:id**: Obter detalhes de um filme específico.
- **PUT /api/movies/:id**: Atualizar um filme existente.
- **DELETE /api/movies/:id**: Deletar um filme existente.

Para as operações de CRUD de filmes, você deve incluir o token JWT no cabeçalho `Authorization` das requisições.

## Exemplos de Requisições

Veja o arquivo [Postman Collection](./MovieCatalogAPI.postman_collection.md) para exemplos de requisições para cada endpoint.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
```

Esse é o README.md formatado em Markdown. Você pode copiar e colar diretamente em seu arquivo README.md no seu repositório.