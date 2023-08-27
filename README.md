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

### _Casos de erro_

- **Envio**: Uma request contento uma stack inválida na url.
- **Retorno**: Uma mensagem indicando que a stack na url é inválida.
- **URL da requisição**: `/projects/stack/aaa`.
- **Status**: 400 BAD REQUEST.

**Exemplo de retorno**:

```json
{
	"message": "The param stack should have one of these values: Front-end, Back-end, Full-stack"
}
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

- **Envio**: Uma request contento um id inválido na url.
- **Retorno**: Uma mensagem indicando que o id na url é inválida.
- **URL da requisição**: `/projects/aaa/technologies`.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "id": 1
}
```

**Exemplo de retorno**:

```json
{
	"message": "The id should be a integer number"
}
```

- **Envio**: Um objeto contendo um id inválido.
- **Retorno**: Uma mensagem indicando que o id no corpo da requisição é inválido.
- **URL da requisição**: `/projects/1/technologies`.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "id": "aaa"
}
```

**Exemplo de retorno**:

```json
{
	"id": [
		"Expected number, received string"
	]
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

- **Envio**: Uma request contento um id inválido na url.
- **Retorno**: Uma mensagem indicando que o id na url é inválida.
- **URL da requisição**: `/projects/aaa`.
- **Status**: 400 BAD REQUEST.

**Exemplo de retorno**:

```json
{
	"message": "The id should be a integer number"
}
```

### **GET `/developmentExperiences`**

### _Regras de negócio_

- Caso de sucesso:
  - **Retorno**: Uma lista de objetos.
  - **Status**: 200 OK.

**Exemplo de retorno**:

```json
[
	{
		"id": 1,
		"name": "Desenvolvedor Full Stack",
		"type": "Curso",
		"company": "TechCorp",
		"description": "Desenvolvimento de aplicações web",
		"startDate": "2022-08-26",
		"endDate": null
	},
	{
		"id": 2,
		"name": "Análise e desenvolvimento de sistemas",
		"type": "Acadêmica",
		"company": "Estácio",
    "description": "Ensino superior",
    "startDate": null,
		"endDate": null
	}
]
```

### **GET `/developmentExperiences/type/:type`**

### _Regras de negócio_

- Caso de sucesso:
  - **Retorno**: Uma lista de objetos cujos registros têm o tipo especificado na rota.
  - **Rota da requisição**: `/developmentExperiences/type/Curso`.
  - **Status**: 200 OK.

**Exemplo de retorno**:

```json
[
	{
		"id": 1,
		"name": "Desenvolvedor Full Stack",
		"type": "Curso",
		"company": "TechCorp",
		"description": "Desenvolvimento de aplicações web",
		"startDate": "2022-08-26",
		"endDate": null
	}
]
```

### _Casos de erro_

- **Envio**: Uma request contento um tipo inválido na url.
- **Retorno**: Uma mensagem indicando que o tipo na url é inválido.
- **URL da requisição**: `/developmentExperiences/type/aaa`.
- **Status**: 400 BAD REQUEST.

**Exemplo de retorno**:

```json
{
	"message": "The param type should have one of these values: Acadêmica, Curso, Voluntariado, Emprego"
}
```

### **POST `/developmentExperiences`**

### _Regras de negócio_

- Caso de sucesso:
  - **Envio**: Um objeto contendo os dados da experiência a ser criada.
  - **Retorno**: Um objeto contendo os dados da experiência de desenvolvimento criada.
  - **Status**: 201 CREATED.

**Exemplo de envio**:

```json
{
  "name": "Desenvolvedor Full Stack",
  "type": "Curso",
  "company": "TechCorp",
  "description": "Desenvolvimento de aplicações web"
}
```

**Exemplo de retorno**:

```json
{
  "id": 1,
  "name": "Desenvolvedor Full Stack",
  "type": "Curso",
  "company": "TechCorp",
  "description": "Desenvolvimento de aplicações web",
  "startDate": null,
  "endDate": null,
}
```

### _Casos de erro_

- **Envio**: Um objeto contendo dados em formato inválido.
- **Retorno**: Um objeto indicando em quais campos os dados têm formato inválido.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "name": 23,
  "type": true,
  "company": 9,
  "description": "Desenvolvimento de aplicações web"
}
```

**Exemplo de retorno**:

```json
{
	"name": [
		"Expected string, received number"
	],
	"type": [
		"Expected 'Acadêmica' | 'Curso' | 'Voluntariado' | 'Emprego', received boolean"
	],
	"company": [
		"Expected string, received number"
	]
}
```

### **PATCH `/developmentExperiences/:id`**

### _Regras de negócio_

- Caso de sucesso:
  - **Envio**: Um objeto contendo os dados atualizados da experiência de desenvolvimento.
  - **Retorno**: Um objeto contendo todos os dados da experiência de desenvolvimento.
  - **Rota da requisição**: `/developmentExperiences/1`
  - **Status**: 200 OK.

**Exemplo de envio**:

```json
{
  "type": "Emprego"
}
```

**Exemplo de retorno**:

```json
{
	"id": 1,
	"name": "Desenvolvedor Full Stack",
	"type": "Emprego",
	"company": "TechCorp",
	"description": "Desenvolvimento de aplicações web",
	"startDate": null,
	"endDate": null
}
```

### _Casos de erro_

- **Envio**: Uma request contento um id inválido na url.
- **Retorno**: Uma mensagem indicando que o id na url é inválida.
- **URL da requisição**: `/developmentExperiences/aaa`.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "type": "Emprego"
}
```

**Exemplo de retorno**:

```json
{
	"message": "The id should be a integer number"
}
```

- **Envio**: Um objeto contendo dados em formato inválido.
- **Retorno**: Um objeto indicando em quais campos os dados têm formato inválido.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "type": 1
}
```

**Exemplo de retorno**:

```json
{
	"type": [
		"Expected 'Acadêmica' | 'Curso' | 'Voluntariado' | 'Emprego', received number"
	]
}
```

- Não é possível atualizar uma experiência de desenvolvimento usando um ID não existente na URL:
  - **Rota**: `/developmentExperiences/100000000`
  - **Envio**: Um objeto contendo os dados atualizados da experiência de desenvolvimento.
  - **Retorno**: Um objeto contendo uma mensagem de erro.
  - **Status**: 404 NOT FOUND.

**Exemplo de envio**:

```json
{
  "type": "Curso"
}
```

**Exemplo de retorno**:

```json
{
	"message": "Couldn't find any record of type development experiences with id 100000000"
}
```

### **DELETE `/developmentExperiences/:id`**

### _Regras de negócio_

- Caso de sucesso:
  - **Rota da requisição**: `/developmentExperiences/1`
  - **Status**: 204 NO CONTENT.

### _Casos de erro_

- **Envio**: Uma request contento um id inválido na url.
- **Retorno**: Uma mensagem indicando que o id na url é inválida.
- **URL da requisição**: `//developmentExperiences/aaa`.
- **Status**: 400 BAD REQUEST.

**Exemplo de retorno**:

```json
{
	"message": "The id should be a integer number"
}
```


- Não é possível excluir uma experiência de desenvolvimento usando um ID não existente na URL:
  - **Rota**: `/developmentExperiences/100000000`
  - **Retorno**: Um objeto contendo uma mensagem de erro.
  - **Status**: 404 NOT FOUND.

**Exemplo de retorno**:

```json
{
	"message": "Couldn't find any record of type development experiences with id 100000000"
}
```

### **GET `/technologies`**

### _Regras de negócio_

- Caso de sucesso:
  - **Retorno**: Uma lista de objetos.
  - **Status**: 200 OK.

**Exemplo de retorno**:

```json
[
	{
		"id": 1,
		"name": "Django",
		"stack": "Full-stack",
		"knowledgeLevel": "Iniciante"
	},
	{
		"id": 2,
		"name": "C#",
		"stack": "Back-end",
		"knowledgeLevel": "Iniciante"
	},
	{
		"id": 3,
		"name": "ReactJS",
		"stack": "Front-end",
		"knowledgeLevel": "Intermediário"
	}
]
```

### **GET `/technologies/:id`**

### _Regras de negócio_

- Caso de sucesso:
  - **Retorno**: Um objeto com os dados da tecnologia cujo id foi especificado na rota.
  - **Rota da requisição**: `/technologies/2`.
  - **Status**: 200 OK.

**Exemplo de retorno**:

```json
{
	"id": 2,
	"name": "C#",
	"stack": "Back-end",
	"knowledgeLevel": "Iniciante"
}
```

### _Casos de erro_
- **Envio**: Uma request contento um id inválido na url.
- **Retorno**: Uma mensagem indicando que o id na url é inválida.
- **URL da requisição**: `/technologies/aaa`.
- **Status**: 400 BAD REQUEST.

**Exemplo de retorno**:

```json
{
	"message": "The id should be a integer number"
}
```

- Não é possível buscar uma tecnologia usando um ID não existente na URL:
  - **Rota**: `/technologies/100000000`
  - **Retorno**: Um objeto contendo uma mensagem de erro.
  - **Status**: 404 NOT FOUND.

**Exemplo de retorno**:

```json
{
	"message": "Couldn't find any record of type technologies with id 100000000"
}
```

### **POST `/technologies`**

### _Regras de negócio_

- Caso de sucesso:
  - **Envio**: Um objeto contendo os dados da tecnologia a ser criada.
  - **Retorno**: Um objeto contendo os dados da tecnologia criada.
  - **Status**: 201 CREATED.

**Exemplo de envio**:

```json
{
	"name": "C#",
	"stack": "Back-end",
	"knowledgeLevel": "Iniciante"
}
```

**Exemplo de retorno**:

```json
{
	"id": 2,
	"name": "C#",
	"stack": "Back-end",
	"knowledgeLevel": "Iniciante"
}
```

### _Casos de erro_

- **Envio**: Um objeto contendo dados em formato inválido.
- **Retorno**: Um objeto indicando em quais campos os dados têm formato inválido.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "name": 0,
  "stack": true,
  "knowledgeLevel": "Intermediário"
}

```

**Exemplo de retorno**:

```json
{
	"name": [
		"Expected string, received number"
	],
	"stack": [
		"Expected 'Front-end' | 'Back-end' | 'Full-stack', received boolean"
	]
}
```

### **PATCH `/technologies/:id`**

### _Regras de negócio_

- Caso de sucesso:
  - **Envio**: Um objeto contendo os dados atualizados da tecnologia.
  - **Retorno**: Um objeto contendo todos os dados da tecnologia.
  - **Rota da requisição**: `/technologies/3`
  - **Status**: 200 OK.

**Exemplo de envio**:

```json
{
  "knowledgeLevel": "Avançado"
}
```

**Exemplo de retorno**:

```json
{
  "name": "ReactJS",
  "stack": "Front-end",
  "knowledgeLevel": "Avançado"
}
```

### _Casos de erro_

- **Envio**: Uma request contento um id inválido na url.
- **Retorno**: Uma mensagem indicando que o id na url é inválida.
- **URL da requisição**: `/technologies/aaa`.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "knowledgeLevel": "Intermediário"
}

```

**Exemplo de retorno**:

```json
{
	"message": "The id should be a integer number"
}
```

- **Envio**: Um objeto contendo dados em formato inválido.
- **Retorno**: Um objeto indicando em quais campos os dados têm formato inválido.
- **Status**: 400 BAD REQUEST.

**Exemplo de envio**:

```json
{
  "name": 0,
  "stack": true,
  "knowledgeLevel": "Intermediário"
}

```

**Exemplo de retorno**:

```json
{
	"name": [
		"Expected string, received number"
	],
	"stack": [
		"Expected 'Front-end' | 'Back-end' | 'Full-stack', received boolean"
	]
}
```

- Não é possível atualizar uma tecnologia usando um ID não existente na URL:
  - **Rota**: `/technologies/100000000`
  - **Envio**: Um objeto contendo os dados atualizados da tecnologia.
  - **Retorno**: Um objeto contendo uma mensagem de erro.
  - **Status**: 404 NOT FOUND.

**Exemplo de envio**:

```json
{
  "knowledgeLevel": "Intermediário"
}
```

**Exemplo de retorno**:

```json
{
	"message": "Couldn't find any record of type technologies with id 100000000"
}
```

### **DELETE `/technologies/:id`**

### _Regras de negócio_

- Caso de sucesso:
  - **Rota da requisição**: `/technologies/1`
  - **Status**: 204 NO CONTENT.

### _Casos de erro_

- **Envio**: Uma request contento um id inválido na url.
- **Retorno**: Uma mensagem indicando que o id na url é inválida.
- **URL da requisição**: `/technologies/aaa`.
- **Status**: 400 BAD REQUEST.

**Exemplo de retorno**:

```json
{
	"message": "The id should be a integer number"
}
```

- Não é possível excluir uma tecnologia usando um ID não existente na URL:
  - **Rota**: `/technologies/100000000`
  - **Retorno**: Um objeto contendo uma mensagem de erro.
  - **Status**: 404 NOT FOUND.

**Exemplo de retorno**:

```json
{
	"message": "Couldn't find any record of type technologies with id 100000000"
}
```
