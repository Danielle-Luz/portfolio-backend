<h1 align="center">Portfolio Back-end</h1>

<p align="center">
    <img alt="Badge indicando que o projeto foi criado em junho de 2023" src="https://img.shields.io/badge/Data%20de%20cria%C3%A7%C3%A3o-Junho%2F2023-blue">
    <img alt="Badge indicando que o status do projeto é 'developing'" src="https://img.shields.io/badge/Status-Developing-yellow">
</p>

## Índice

• <a href="#descricao">Descrição</a>
<br>
• <a href="#tecnologias">Tecnologias</a>
<br>
• <a href="#bd">Banco de dados</a>
<br>
• <a href="#endpoints">Endpoints do serviço</a>
<br>
• <a href="#entradas-responses">Endpoints, entradas e responses</a>
<br>
• <a href="#Desenvolvedora">Desenvolvedora</a>
<br>

<p align="center">
</p>

<h2 id="descricao">Descrição</h2>
API construída para fornecer uma interface de inclusão, atualização e obtenção de dados relevantes para o front-end do meu portfólio.

<h2 id="tecnologias">Tecnologias</h2>

- Stackscript
- Express
- StackORM
- NodeJS
- PostgreSQL
- Express Async Errors

<h2 id="bd">Banco de dados</h2>

| SGBD       | MER                                             |
| ---------- | ----------------------------------------------- |
| PostgreSQL | [Diagrama MER da base de dados](movies-mer.png) |

### Tabelas

- `projects`
- `developmentExperiences`
- `technologies`
- `projectsTechnologies`

### Especificações da tabela `projects`

- **Nome da tabela**: projects
- **Colunas da tabela**:
  - **id**: inteiro, sequencial e chave primária.
  - **name**: caractere, tamanho máximo de 20, único e obrigatório.
  - **description**: texto e obrigatório.
  - **stack**: caractere, tamanho máximo de 15 caracteres e obrigatório, os valores possíveis são: "Front-end", "Back-end" e "Full-Stack".
  - **coverImage**: caractere, tamanho máximo de 100 caracteres e obrigatório.
  - **url**: caractere, tamanho máximo de 100 caracteres e obrigatório.
  - **highlight**: boolean, opcional e com valor default false.

### Especificações da tabela `developmentExperiences`

- **Nome da tabela**: developmentExperiences
- **Colunas da tabela**:
  - **id**: inteiro, sequencial e chave primária.
  - **stack**: caractere, tamanho máximo de 15 e obrigatório, os valores possíveis são: "Educação", "Emprego" e "Voluntariado".
  - **name**: caractere, tamanho máximo de 50 e obrigatório.
  - **company**: caractere, tamanho máximo de 50 caracteres e opcional, tendo como valor default: "Empresa não informada".
  - **description**: texto e obrigatório.
  - **startDate**: data e opcional.
  - **endDate**: data e opcional.

### Especificações da tabela `technologies`

- **Nome da tabela**: technologies
- **Colunas da tabela**:
  - **id**: inteiro, sequencial e chave primária.
  - **name**: caractere, tamanho máximo de 40 e obrigatório.
  - **stack**: caractere, tamanho máximo de 15 caracteres e obrigatório, os valores possíveis são: "Front-end", "Back-end" e "Full-Stack".
  - **knowledgeLevel**: caractere, tamanho máximo de 15 caracteres e opcional, os valores possíveis são: "Iniciante", "Intermediário" e "Avançado", o valor default é "Iniciante".

### Especificações da tabela `projectsTechnologies`

- **Nome da tabela**: projectsTechnologies
- **Colunas da tabela**:
  - **projectId**: inteiro, chave estrangeira e chave primária.
  - **technologyId**: inteiro, chave estrangeira e chave primária.

<h2 id="endpoints">Endpoints do serviço</h2>

| Método | Endpoint                    | Responsabilidade                                                                                                 |
| ------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| GET    | /projects                   | Lista todos os projetos.                                                                                         |
| GET    | /projects/:stack      | Retorna um array de projetos de acordo com o tipo de projeto indicado: highlight, frontend, backend ou fullStack |
| POST   | /projects                   | Criação de projeto.                                                                                              |
| POST   | /projects/:id/technologies  | Relaciona as tecnologias no corpo da requisição com o projeto.                                                   |
| PATCH  | /projects/:id               | Atualiza o projeto passado por id.                                                                                 |
| DELETE | /projects/:id               | Deleta o projeto passado por id.                                                                                   |
| GET    | /developmentExperiences     | Lista todas as experiências de desenvolvimento.                                                                  |
| POST   | /developmentExperiences     | Criação de uma experiência de desenvolvimento.                                                                   |
| PATCH  | /developmentExperiences/:id | Atualiza a experiência de desenvolvimento passada por id.                                                        |
| DELETE | /developmentExperiences/:id | Deleta a experiência de desenvolvimento passada por id.                                                          |
| GET    | /technologies               | Lista todas as tecnologias.                                                                                      |
| POST   | /technologies               | Criação de uma tecnologia.                                                                                       |
| PATCH  | /technologies/:id           | Atualiza a tecnologia passada por id.                                                                            |
| DELETE | /technologies/:id           | Deleta a tecnologia passada por id.                                                                              |

<h2 id="entradas-responses">Endpoints, entradas e responses</h2>

### **GET `/projects`**

### _Regras de negócio_

- Caso de sucesso:
  - **Retorno**: Uma lista de objetos.
  - **Status**: 200 OK.

**Exemplo de retorno**:

```json
[
  {
    "id": 1,
    "name": "Projeto 1",
    "description": "Descrição do projeto",
    "coverImage": "https://imgur.com/imagem.png",
    "highlight": false,
    "url": "https://url-do-site.vercel.app"
  },
  {
    "id": 2,
    "name": "Projeto 2",
    "description": "Descrição do projeto",
    "coverImage": "https://imgur.com/imagem.png",
    "highlight": false,
    "url": "https://url-do-site.vercel.app"
  },
  {
    "id": 3,
    "name": "Projeto 3",
    "description": "Descrição do projeto",
    "coverImage": "https://imgur.com/imagem.png",
    "highlight": false,
    "url": "https://url-do-site.vercel.app"
  }
]
```

### **GET `/projects/:stack`**

### _Regras de negócio_

- Caso de sucesso:
  - **Retorno**: Uma lista de objetos cujos registros tenham o tipo especificado na rota.
  - **Rota da requisição**: `/projects/highlight`.
  - **Status**: 200 OK.

**Exemplo de retorno**:

```json
[
  {
    "id": 7,
    "name": "Projeto 7",
    "description": "Descrição do projeto",
    "coverImage": "https://imgur.com/imagem.png",
    "highlight": true,
    "url": "https://url-do-site.vercel.app"
  },
  {
    "id": 10,
    "name": "Projeto 10",
    "description": "Descrição do projeto",
    "coverImage": "https://imgur.com/imagem.png",
    "highlight": true,
    "url": "https://url-do-site.vercel.app"
  }
]
```

### **POST `/projects`**

### _Regras de negócio_

- Caso de sucesso:
  - **Envio**: Um objeto contendo os dados do projeto a ser criado.
  - **Retorno**: Um objeto contendo os dados do projeto criado.
  - **Status**: 201 CREATED.

**Exemplo de envio**:

```json
{
  "name": "Reciclarte",
  "description": "Site em que é possível ver e buscar ideias de projeto DIY",
  "coverImage": "https://imgur.com/tsl15Ae.png",
  "highlight": false,
  "url": "https://reciclarte.vercel.app"
}
```

**Exemplo de retorno**:

```json
{
  "id": 1,
  "name": "Reciclarte",
  "description": "Site em que é possível ver e buscar ideias de projeto DIY",
  "coverImage": "https://imgur.com/tsl15Ae.png",
  "highlight": false,
  "url": "https://reciclarte.vercel.app"
}
```

### _Casos de erro_

- **Envio**: Um objeto contendo o nome de um projeto já existente.
- **Retorno**: Um objeto contendo uma mensagem de erro.
- **Status**: 409 UNIQUE.

**Exemplo de envio**:

```json
{
  "name": "Reciclarte",
  "description": "Site em que é possível ver e buscar ideias de projeto DIY",
  "coverImage": "https://imgur.com/tsl15Ae.png",
  "highlight": false,
  "url": "https://reciclarte.vercel.app"
}
```

**Exemplo de retorno**:

```json
{
  "message": "Project already exists"
}
```

- **Envio**: Um objeto contendo dados em formato inválido.
- **Retorno**: Um objeto indicando em quais campos os dados têm formato inválido.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "name": 123,
  "description": true,
  "coverImage": "https://imgur.com/tsl15Ae.png",
  "highlight": false,
  "url": "abc"
}
```

**Exemplo de retorno**:

```json
{
  "name": ["Expected string, received number"],
  "description": ["Expected string, received boolean"],
  "url": ["Expected url, received string"]
}
```

### **POST `/projects/:id/technologies`**

### _Regras de negócio_

- Caso de sucesso:
  - **Envio**: Um objeto contendo um array com os nomes das tecnologias que o projeto se relacionará.
  - **Retorno**: Uma mensagem de sucesso.
  - **URL da requisição**: `/projects/1/technologies`.
  - **Status**: 200 OK.

**Exemplo de envio**:

```json
{
  "technologies": ["Django", "Flask"]
}
```

**Exemplo de retorno**:

```json
{
  "message": "Technologies related with success"
}
```

### _Casos de erro_

- **Envio**: Um objeto contendo uma lista com tecnologias já relacionadas ao projeto.
- **Retorno**: Uma mensagem indicando a quais tecnologias o projeto já estava relacionado.
- **URL da requisição**: `/projects/1/technologies`.
- **Status**: 409 UNIQUE.

**Exemplo de envio**:

```json
{
  "technologies": ["Django", "Flask", "Javascript"]
}
```

**Exemplo de retorno**:

```json
{
  "message": "The project is already related with the following technologies: Django, Flask"
}
```

- **Envio**: Um objeto contendo uma ou mais tecnologias não existentes.
- **Retorno**: Uma mensagem indicando quais tecnologias não existem na base de dados.
- **URL da requisição**: `/projects/1/technologies`.
- **Status**: 404 NOT FOUND.

**Exemplo de envio**:

```json
{
  "technologies": ["HTML", "Panela"]
}
```

**Exemplo de retorno**:

```json
{
  "message": "The following technologies don't exist in the database: Panela"
}
```

- Não é possível inserir tecnologias num projeto usando um ID não existente na URL:
  - **Rota**: `/projects/100000000/technologies`
  - **Retorno**: Um objeto contendo uma mensagem de erro.
  - **Status**: 404 NOT FOUND.

**Exemplo de retorno**:

```json
{
  "message": "Project not found"
}
```

### **PATCH `/projects/:id`**

### _Regras de negócio_

- Caso de sucesso:
  - **Envio**: Um objeto contendo os dados atualizados do projeto.
  - **Retorno**: Um objeto contendo todos os dados do projeto atualizado.
  - **Rota da requisição**: `/projects/1`
  - **Status**: 200 OK.

**Exemplo de envio**:

```json
{
  "id": 400,
  "coverImage": "https://i.imgur.com/4ZW9Gzm.jpeg",
  "highlight": false
}
```

**Exemplo de retorno**:

```json
{
  "id": 1,
  "name": "Reciclarte",
  "description": "Site em que é possível ver e buscar ideias de projeto DIY",
  "coverImage": "https://i.imgur.com/4ZW9Gzm.jpeg",
  "highlight": false,
  "url": "https://reciclarte.vercel.app"
}
```

### _Casos de erro_

- **Envio**: Um objeto contendo o nome de um projeto já existente.
- **Retorno**: Um objeto contendo uma mensagem de erro.
- **Status**: 409 UNIQUE.

**Exemplo de envio**:

```json
{
  "name": "Reciclarte",
  "description": "Site em que é possível ver e buscar ideias de projeto DIY",
  "coverImage": "https://imgur.com/tsl15Ae.png",
  "highlight": false,
  "url": "https://reciclarte.vercel.app"
}
```

**Exemplo de retorno**:

```json
{
  "message": "Project already exists"
}
```

- **Envio**: Um objeto contendo dados em formato inválido.
- **Retorno**: Um objeto indicando em quais campos os dados têm formato inválido.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "name": 123,
  "description": true,
  "coverImage": "https://imgur.com/tsl15Ae.png",
  "highlight": false,
  "url": "https://reciclarte.vercel.app"
}
```

**Exemplo de retorno**:

```json
{
  "name": ["Expected string, received number"],
  "description": ["Expected string, received boolean"]
}
```

- Não é possível atualizar um projeto usando um ID não existente na URL:
  - **Rota**: `/projects/100000000`
  - **Envio**: Um objeto contendo os dados atualizados do projeto.
  - **Retorno**: Um objeto contendo uma mensagem de erro.
  - **Status**: 404 NOT FOUND.

**Exemplo de envio**:

```json
{
  "coverImage": "https://i.imgur.com/4ZW9Gzm.jpeg",
  "highlight": false
}
```

**Exemplo de retorno**:

```json
{
  "message": "Project not found"
}
```

### **DELETE `/projects/:id`**

### _Regras de negócio_

- Caso de sucesso:
  - **Rota da requisição**: `/projects/1`
  - **Status**: 204 NO CONTENT.

### _Casos de erro_

- Não é possível excluir um projeto usando um ID não existente na URL:
  - **Rota**: `/projects/100000000`
  - **Retorno**: Um objeto contendo uma mensagem de erro.
  - **Status**: 404 NOT FOUND.

**Exemplo de retorno**:

```json
{
  "message": "Project not found"
}
```
