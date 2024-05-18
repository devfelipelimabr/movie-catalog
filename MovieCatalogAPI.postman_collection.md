1. Registro de usuário.
2. Login de usuário.
3. CRUD de filmes (criar, obter, atualizar e deletar filmes).

### 1. Registro de Usuário

**Método:** POST  
**URL:** `http://localhost:3000/api/auth/register`  
**Corpo da Requisição (JSON):**

```json
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}
```

**Resposta Esperada (201 Created):**

```json
{
  "user": {
    "id": 1,
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "$2b$10$...",
    "updatedAt": "2024-05-17T10:00:00.000Z",
    "createdAt": "2024-05-17T10:00:00.000Z"
  }
}
```

### 2. Login de Usuário

**Método:** POST  
**URL:** `http://localhost:3000/api/auth/login`  
**Corpo da Requisição (JSON):**

```json
{
  "email": "testuser@example.com",
  "password": "password123"
}
```

**Resposta Esperada (200 OK):**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. CRUD de Filmes

Para as operações de CRUD de filmes, você precisará incluir o token de autenticação no cabeçalho `Authorization` da requisição.

#### 3.1. Criar Filme

**Método:** POST  
**URL:** `http://localhost:3000/api/movies`  
**Cabeçalho:**

```
Authorization: Bearer <your_jwt_token>
```

**Corpo da Requisição (JSON):**

```json
{
  "title": "Inception",
  "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  "director": "Christopher Nolan",
  "releaseYear": 2010
}
```

**Resposta Esperada (201 Created):**

```json
{
  "id": 1,
  "title": "Inception",
  "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  "director": "Christopher Nolan",
  "releaseYear": 2010,
  "updatedAt": "2024-05-17T10:00:00.000Z",
  "createdAt": "2024-05-17T10:00:00.000Z"
}
```

#### 3.2. Obter Lista de Filmes

**Método:** GET  
**URL:** `http://localhost:3000/api/movies`  
**Cabeçalho:**

```
Authorization: Bearer <your_jwt_token>
```

**Resposta Esperada (200 OK):**

```json
[
  {
    "id": 1,
    "title": "Inception",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "director": "Christopher Nolan",
    "releaseYear": 2010,
    "createdAt": "2024-05-17T10:00:00.000Z",
    "updatedAt": "2024-05-17T10:00:00.000Z"
  }
]
```

#### 3.3. Obter Detalhes de um Filme

**Método:** GET  
**URL:** `http://localhost:3000/api/movies/1`  
**Cabeçalho:**

```
Authorization: Bearer <your_jwt_token>
```

**Resposta Esperada (200 OK):**

```json
{
  "id": 1,
  "title": "Inception",
  "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  "director": "Christopher Nolan",
  "releaseYear": 2010,
  "createdAt": "2024-05-17T10:00:00.000Z",
  "updatedAt": "2024-05-17T10:00:00.000Z"
}
```

#### 3.4. Atualizar um Filme

**Método:** PUT  
**URL:** `http://localhost:3000/api/movies/1`  
**Cabeçalho:**

```
Authorization: Bearer <your_jwt_token>
```

**Corpo da Requisição (JSON):**

```json
{
  "title": "Inception Updated",
  "description": "Updated description.",
  "director": "Christopher Nolan",
  "releaseYear": 2010
}
```

**Resposta Esperada (200 OK):**

```json
{
  "id": 1,
  "title": "Inception Updated",
  "description": "Updated description.",
  "director": "Christopher Nolan",
  "releaseYear": 2010,
  "createdAt": "2024-05-17T10:00:00.000Z",
  "updatedAt": "2024-05-17T10:15:00.000Z"
}
```

#### 3.5. Deletar um Filme

**Método:** DELETE  
**URL:** `http://localhost:3000/api/movies/1`  
**Cabeçalho:**

```
Authorization: Bearer <your_jwt_token>
```

**Resposta Esperada (204 No Content):**

Sem corpo de resposta.

### Importando para o Postman

Para importar essas requisições no Postman, siga os passos abaixo:

1. Abra o Postman.
2. Crie uma nova coleção chamada "Movie Catalog API".
3. Adicione as requisições listadas acima na coleção.
4. Para cada requisição que requer autenticação, adicione o cabeçalho `Authorization` com o valor `Bearer <your_jwt_token>`.

Certifique-se de substituir `<your_jwt_token>` pelo token JWT obtido após o login.

Com essas requisições configuradas, você poderá testar facilmente sua API.