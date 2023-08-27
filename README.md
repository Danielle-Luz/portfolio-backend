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

- Typescript
- Express
- TypeORM
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

### Especificações da tabela `projects`

- **Nome da tabela**: projects
- **Colunas da tabela**:
  - **id**: inteiro, sequencial e chave primária.
  - **name**: caractere, tamanho máximo de 20, único e obrigatório.
  - **description**: texto e obrigatório.
  - **stack**: caractere, os valores possíveis são: "Front-end", "Back-end" e "Full-Stack".
  - **coverImage**: texto e obrigatório.
  - **url**: texto e obrigatório.
  - **highlight**: boolean, opcional e com valor default false.

### Especificações da tabela `developmentExperiences`

- **Nome da tabela**: developmentExperiences
- **Colunas da tabela**:
  - **id**: inteiro, sequencial e chave primária.
  - **type**: caractere, os valores possíveis são: "Acadêmica", "Curso", "Emprego" e "Voluntariado".
  - **name**: caractere, tamanho máximo de 50 e obrigatório.
  - **company**: caractere, tamanho máximo de 50 caracteres e opcional, tendo como valor default: "Empresa não informada".
  - **description**: texto e obrigatório.
  - **startDate**: datetime e opcional.
  - **endDate**: datetime e opcional.

### Especificações da tabela `technologies`

- **Nome da tabela**: technologies
- **Colunas da tabela**:
  - **id**: inteiro, sequencial e chave primária.
  - **name**: caractere, tamanho máximo de 40 e obrigatório.
  - **stack**: caractere, obrigatório, os valores possíveis são: "Front-end", "Back-end" e "Full-Stack".
  - **knowledgeLevel**: caractere, opcional, os valores possíveis são: "Iniciante", "Intermediário" e "Avançado", o valor default é "Iniciante".

### Especificações da tabela `projectsTechnologies`

- **Nome da tabela**: projectsTechnologies
- **Colunas da tabela**:
  - **projectId**: inteiro, chave estrangeira e chave primária.
  - **technologyId**: inteiro, chave estrangeira e chave primária.

<h2 id="endpoints">Endpoints do serviço</h2>

| Método | Endpoint                    | Responsabilidade                                                                                                 |
| ------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| GET    | /projects                   | Lista todos os projetos.                                                                                         |
| GET    | /projects/stack/:stack      | Retorna um array com os projetos que possuem a stack indicada no endpoint, os valores possíveis são: Front-end, Back-end ou Full-Stack |
| GET    | /projects/highlights      | Retorna um array com todos os projetos com o campo highlight com o valor true |
| POST   | /projects                   | Criação de projeto.                                                                                              |
| POST   | /projects/:id/technologies  | Relaciona a tecnologia com o id indicado no corpo da requisição com o projeto cujo id foi indicado no endpoint.                                                   |
| GET  | /projects/:id               | Retorna o projeto com o id indicado                                                                                  |
| PATCH  | /projects/:id               | Atualiza o projeto passado por id.                                                                                 |
| DELETE | /projects/:id               | Deleta o projeto passado por id.                                                                                   |
| GET    | /developmentExperiences     | Lista todas as experiências de desenvolvimento.                                                                  |
| GET    | /developmentExperiences/:type     | Lista todas as experiências de desenvolvimento com o tipo indicado no endpoint.                                                                  |
| POST   | /developmentExperiences     | Criação de uma experiência de desenvolvimento.                                                                   |
| PATCH  | /developmentExperiences/:id | Atualiza a experiência de desenvolvimento passada por id.                                                        |
| DELETE | /developmentExperiences/:id | Deleta a experiência de desenvolvimento passada por id.                                                          |
| GET    | /technologies               | Lista todas as tecnologias.                                                                                      |
| GET    | /technologies/:id               | Retorna a tecnologia cujo id foi indicado no endpoint.                                                                                      |
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
		"name": "Nome de projeto",
		"description": "Descrição aqui",
		"stack": "Front-end",
		"coverImage": "caminho/para/imagem.png",
		"url": "https://www.projeto-incrivel.com",
		"highlight": true,
		"technologies": [
			{
				"id": 2,
				"name": "ReactJS",
				"stack": "Front-end",
				"knowledgeLevel": "Intermediário"
			}
		]
	},
	{
		"id": 2,
		"name": "Outro projeto",
		"description": "Outra descrição.",
		"stack": "Full-stack",
		"coverImage": "caminho/para/imagem.png",
		"url": "https://www.projeto-incrivel.com",
		"highlight": true,
		"technologies": [
			{
				"id": 1,
				"name": "Django",
				"stack": "Back-end",
				"knowledgeLevel": "Iniciante"
			},
			{
				"id": 2,
				"name": "ReactJS",
				"stack": "Front-end",
				"knowledgeLevel": "Intermediário"
			}
		]
	}
]
```

### **GET `/projects/stack/:stack`**

### _Regras de negócio_

- Caso de sucesso:
  - **Retorno**: Uma lista de objetos cujos registros têm a stack especificada na rota.
  - **Rota da requisição**: `/projects/stack/Full-stack`.
  - **Status**: 200 OK.

**Exemplo de retorno**:

```json
[
	{
		"id": 2,
		"name": "Outro projeto",
		"description": "Outra descrição.",
		"stack": "Full-stack",
		"coverImage": "caminho/para/imagem.png",
		"url": "https://www.projeto-incrivel.com",
		"highlight": true,
		"technologies": [
			{
				"id": 1,
				"name": "Django",
				"stack": "Back-end",
				"knowledgeLevel": "Iniciante"
			},
			{
				"id": 2,
				"name": "ReactJS",
				"stack": "Front-end",
				"knowledgeLevel": "Intermediário"
			}
		]
	}
]
```

### **GET `/projects/highlights`**

### _Regras de negócio_

- Caso de sucesso:
  - **Retorno**: Uma lista de objetos cujos registros têm o campo highlight com o valor true.
  - **Status**: 200 OK.

**Exemplo de retorno**:

```json
[
	{
		"id": 1,
		"name": "Nome de projeto",
		"description": "Descrição aqui",
		"stack": "Front-end",
		"coverImage": "caminho/para/imagem.png",
		"url": "https://www.projeto-incrivel.com",
		"highlight": true,
		"technologies": [
			{
				"id": 2,
				"name": "ReactJS",
				"stack": "Front-end",
				"knowledgeLevel": "Intermediário"
			}
		]
	},
	{
		"id": 2,
		"name": "Outro projeto",
		"description": "Outra descrição.",
		"stack": "Full-stack",
		"coverImage": "caminho/para/imagem.png",
		"url": "https://www.projeto-incrivel.com",
		"highlight": true,
		"technologies": [
			{
				"id": 1,
				"name": "Django",
				"stack": "Back-end",
				"knowledgeLevel": "Iniciante"
			},
			{
				"id": 2,
				"name": "ReactJS",
				"stack": "Front-end",
				"knowledgeLevel": "Intermediário"
			}
		]
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
  "name": "Nome de projeto",
  "description": "Descrição aqui",
  "stack": "Front-end",
  "coverImage": "caminho/para/imagem.png",
  "url": "https://www.projeto-incrivel.com",
}
```

**Exemplo de retorno**:

```json
{
  "id": 1,
  "name": "Nome de projeto",
  "description": "Descrição aqui",
  "stack": "Front-end",
  "coverImage": "caminho/para/imagem.png",
  "url": "https://www.projeto-incrivel.com",
  "highlight": false,
}
```

### _Casos de erro_

- **Envio**: Um objeto contendo o nome de um projeto já existente.
- **Retorno**: Um objeto contendo uma mensagem de erro.
- **Status**: 409 UNIQUE.

**Exemplo de envio**:

```json
{
  "name": "Nome de projeto",
  "description": "Descrição aqui",
  "stack": "Front-end",
  "coverImage": "caminho/para/imagem.png",
  "url": "https://www.projeto-incrivel.com",
}
```

**Exemplo de retorno**:

```json
{
	"message": "A project with this name was already created"
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
	"name": [
		"Expected string, received number"
	],
	"description": [
		"Expected string, received boolean"
	],
	"stack": [
		"Required"
	],
	"url": [
		"Invalid url"
	]
}
```

### **POST `/projects/:id/technologies`**

### _Regras de negócio_

- Caso de sucesso:
  - **Envio**: Um objeto contendo o id da tecnologia com a qual o projeto se relacionará.
  - **Retorno**: Um objeto com os dados do projeto e com todas as tecnologias adicionadas.
  - **URL da requisição**: `/projects/1/technologies`.
  - **Status**: 200 OK.

**Exemplo de envio**:

```json
{
  "id": 1
}
```

**Exemplo de retorno**:

```json
{
  "id": 1,
  "name": "Nome de projeto",
  "description": "Descrição aqui",
  "stack": "Front-end",
  "coverImage": "caminho/para/imagem.png",
  "url": "https://www.projeto-incrivel.com",
  "highlight": true,
  "technologies": [
    {
      "id": 1,
      "name": "ReactJS",
      "stack": "Front-end",
      "knowledgeLevel": "Intermediário"
    }
  ]
}
```

### _Casos de erro_

- **Envio**: Um objeto contendo o id de uma tecnologia já relacionada ao projeto.
- **Retorno**: Uma mensagem indicando que a tecnologia já foi relacionada ao projeto.
- **URL da requisição**: `/projects/1/technologies`.
- **Status**: 409 UNIQUE.

**Exemplo de envio**:

```json
{
  "id": 1
}
```

**Exemplo de retorno**:

```json
{
	"message": "The technology with id 1 was already added in this project"
}
```

- **Envio**: Um objeto contendo o id de uma tecnologia não existente.
- **Retorno**: Uma mensagem indicando que o id não foi encontrado.
- **URL da requisição**: `/projects/1/technologies`.
- **Status**: 404 NOT FOUND.

**Exemplo de envio**:

```json
{
  "id": 100
}
```

**Exemplo de retorno**:

```json
{
	"message": "Couldn't find any record of type technologies with id 100"
}
```

- Não é possível inserir tecnologias num projeto não existente cujo id foi indicado na url:
  - **Rota**: `/projects/100000000/technologies`
  - **Retorno**: Um objeto contendo uma mensagem de erro indicando que o projeto não existe.
  - **Status**: 404 NOT FOUND.

**Exemplo de retorno**:

```json
{
	"message": "Couldn't find any record of type projects with id 100000000"
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
  "highlight": false
}
```

**Exemplo de retorno**:

```json
{
  "id": 1,
  "name": "Nome de projeto",
  "description": "Descrição aqui",
  "stack": "Front-end",
  "coverImage": "caminho/para/imagem.png",
  "url": "https://www.projeto-incrivel.com",
  "highlight": false,
}
```

### _Casos de erro_

- **Envio**: Um objeto contendo o nome de um projeto já existente.
- **Retorno**: Um objeto contendo uma mensagem de erro.
- **Status**: 409 UNIQUE.

**Exemplo de envio**:

```json
{
  "name": "Nome do projeto",
}
```

**Exemplo de retorno**:

```json
{
	"message": "A project with this name was already created"
}
```

- **Envio**: Um objeto contendo dados em formato inválido.
- **Retorno**: Um objeto indicando em quais campos os dados têm formato inválido.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "highlight": "aaa"
}
```

**Exemplo de retorno**:

```json
{
	"highlight": [
		"Expected boolean, received string"
	]
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
	"message": "Couldn't find any record of type projects with id 100000000"
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
	"message": "Couldn't find any record of type projects with id 100000000"
}
```
