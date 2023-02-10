# 🧠 Desafio03

## Desafio da semana 3 do módulo 6.

## Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
- [Endpoints](#4-endpoints)
- [Testes](#5-testes)
- [Front-End](#6-front-end)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.
### Back-end:
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Jest](https://jestjs.io/)
  <br>
### Front-end:
- [Vite](https://vitejs.dev/)
- [Syled-Components](https://styled-components.com/)
- [Yup](https://www.npmjs.com/package/yup)
- [Axios](https://axios-http.com/ptbr/)
- [react-hook-form](https://react-hook-form.com/)
- [react-icons](https://react-icons.github.io/react-icons)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [react-toastify](https://reactrouter.com/en/main)
---
## 2. Diagrama ER
[ Voltar para o topo ](#tabela-de-conteúdos)


Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](clienteXcontatos.drawio.png)

---
## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---
## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Clientes](#1-users)
    - [POST - /clientes](#11-criação-de-cliente)
    - [POST - /login](#12-Login-de-cliente)
    - [GET - /clientes](#13-listando-Clientes)
	- [GET - /clientes/:id](#14-listar-cliente-por-id)
	- [PATCH - /clientes/:id](#15-atulaizar-cliente-por-id)
	- [DELETE - /clientes/:id](#16-deletar-cliente-por-id)
- [Contatos](#2-products)
    - [POST - /contatos](#21-criação-de-Contatos)
    - [GET - /contatos](#22-listar-de-Contatos)
    - [PATCH - /contatos/:id](#23-atualizar-de-Contatos-por-id)
    - [DELETE - /contatos/:id](#24-deletar-de-Contatos-por-id)

---

## 1. **Clientes**
[ Voltar para os Endpoints ](#4-endpoints)

O objeto Clientes é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | string | Identificador único do cliente                  |
| name       | string | O nome do cliente.                              |
| email      | string | O e-mail do cliente.                            |
| password   | string | A senha de acesso do cliente                    |
| createdAt  | date   | Define a data de criação do cliente.            |

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /clientes     | Criação de um cliente.                  |
| POST     | /login     | Login de clientes.                  |
| GET      | /clientes     | Lista todos os clientes                 |
| GET      | /clientes/:cliente_id/contatos     | Lista um cliente usando seu ID como parâmetro mais todos os contatos cadastrados
| PATCH      | /clientes/:cliente_id     | Atualiza um cliente usando seu ID como parâmetro 
| DELETE      | /clientes/:cliente_id     | Deleta um cliente usando seu ID como parâmetro 

---

### 1.1. **Criação de Cliente**

[ Voltar para os Endpoints ](#4-endpoints)

### `/clientes`

### Exemplo de Request:
```
POST /clientes
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"name": "EDUARDO",
	"email": "edu@mail.com",
	"password": "1234",
	"phone": "2125081000"
}
```
### Exemplo de Response:
```
201 Created
```

```json
{
	"isActive": true,
	"name": "EDUARDO",
	"email": "edu@mail.com",
	"phone": "2133053128",
	"id": "41c0a070-e4f0-4853-82d3-8f53338934ae",
	"createdAt": "2023-02-01T13:07:45.245Z"
}
```
### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 403 Forbidden | Email already registered. |

---

### 1.2. **Login do Cliente**

[ Voltar para os Endpoints ](#4-endpoints)

### `/login`

### Exemplo de Request:
```
POST /clientes
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	
	"email": "edu@mail.com",
	"password": "1234"
	
}
```
### Exemplo de Response:
```
200 OK
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY2ZmE5NmJhLWExYjYtNDlmOS05N2JkLWViMDY5ZThkZDAyMSIsImlhdCI6MTY3NjA1NDA1OCwiZXhwIjoxNjc2MTQwNDU4LCJzdWIiOiJmNmZhOTZiYS1hMWI2LTQ5ZjktOTdiZC1lYjA2OWU4ZGQwMjEifQ.SHZgFeQxmfKvcejN8FNVqvmMKmE1cpc3ULxA8H2w6RU",
	"clienteID": "f6fa96ba-a1b6-49f9-97bd-eb069e8dd021"
}
```
### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 403 Foprbidden   | "message": "invalid cliente or password" |

---

### 1.3. **Listando cliente**

[ Voltar aos Endpoints ](#4-endpoints)

### `/clientes`

### Exemplo de Request:
```
GET /clientes
Host: http://localhost:3000
Authorization: token
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json

	"isActive": true,
	"name": "EDUARDO",
	"email": "edu@mail.com",
	"phone": "2133053128",
	"id": "41c0a070-e4f0-4853-82d3-8f53338934ae",
	"createdAt": "2023-02-01T13:07:45.245Z"

```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.4. **Listar cliente e seus contaos por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/clientes/:id/contatos`

### Exemplo de Request:
```
GET /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: http://localhost:3000
Authorization: token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| clienteId     | string      | Identificador único do cliente (Cliente) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"isActive": true,
	"id": "d39d2bab-0131-4f1a-90bb-47f916b1c07a",
	"name": "EDUARDO",
	"email": "edu@mail.com",
	"phone": "2133053128",
	"password": "$2b$10$XLCAPrKIRyxoE4xgxw09H..15bxpeALKYgmXi8eGT9kGHncpUsOlO",
	"createdAt": "2023-02-03T03:45:59.676Z",
	"contato": [
		{
			"isActive": true,
			"id": "4f178482-fcd8-4fae-a51e-41c32bd9096e",
			"name": "zeca",
			"email": "zeca@kenzie.com",
			"phone": "2226309298",
			"createdAt": "2023-02-03T04:12:32.684Z"
		},
		{
			"isActive": true,
			"id": "db632ef9-e5b8-4c1f-a409-c91f972c97da",
			"name": "bibi",
			"email": "bibi@kenzie.com",
			"phone": "2226309298",
			"createdAt": "2023-02-03T05:04:21.697Z"
		}
	]
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | User not found. |

---

### 1.5. **Atualizando cliente**

[ Voltar aos Endpoints ](#4-endpoints)

### `/clientes/:id`

### Exemplo de Request:
```
PATCH /clientes/:id
Host: http://localhost:3000
Authorization: token
Content-type: application/json
```

### Corpo da Requisição:
```json
{
    "name": "Bianca",
    "email": "bianca@kenzie.com",
    "password": "123456",
    "phone": "2199999999"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"isActive": true,
	"id": "41c0a070-e4f0-4853-82d3-8f53338934ae",
	"name": "Bianca",
	"email": "bianca@kenzie.com",
	"phone": "2199999999",
	"createdAt": "2023-02-01T13:07:45.245Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized  | "message": "Invalid token". |

---

### 1.5. **Deletando cliente**

[ Voltar aos Endpoints ](#4-endpoints)

### `/clientes/:id`

### Exemplo de Request:
```
DELETE /clientes/:id
Host: http://localhost:3000
Authorization: token
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
Vazio
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized  | "message": "Invalid token". |

---

## 2. **Contatos**
[ Voltar para os Endpoints ](#4-endpoints)

O objeto Contatos é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | string | Identificador único do contato                  |
| name       | string | O nome do contato.                              |
| email      | string | O e-mail do contato.                            |
| createdAt  | date   | Define a data de criação do contato.            |
| clienteID  | string   | Define o identificador único do cliente criador do contato.            |

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /contatos     | Criação de um contato.                  |
| GET      | /contatos     | Lista todos os contatos                 |
| PATCH      | /contatos/:contato_id     | Atualiza um contato usando seu ID como parâmetro 
| DELETE      | /contatos/:contato_id     | Deleta um contato usando seu ID como parâmetro 

---

### 1.1. **Criação de Contatos**

[ Voltar para os Endpoints ](#4-endpoints)

### `/contatos`

### Exemplo de Request:
```
POST /contatos
Host: http://localhost:3000
Authorization: token
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"name": "Bia",
	"email": "bia@mail.com",
	"phone": "2125081000"
}
```
### Exemplo de Response:
```
201 Created
```

```json
{	
	"name": "Bia",
	"email": "bia@mail.com",
	"phone": "2133053128",
	"id": "41c0a070-e4f0-4853-82d3-8f53338934ae",
	"createdAt": "2023-02-01T13:07:45.245Z"
}
```
### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | "message": "Invalid token" |

---

### 1.2. **Listagem de Contatos**

[ Voltar para os Endpoints ](#4-endpoints)

### `/contatos`

### Exemplo de Request:
```
GET /contatos
Host: http://localhost:3000
Authorization: token
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```
### Exemplo de Response:
```
201 Created
```

```json
[
	{
		"isActive": true,
		"id": "87ac7904-bfa9-4567-9bf0-bb6ba216ee8a",
		"name": "bruna",
		"email": "bruna@kenzie.com",
		"phone": "2226309298",
		"createdAt": "2023-02-08T14:51:55.898Z"
	},
	{
		"isActive": true,
		"id": "faaf2d91-2d6f-4cb4-8f7b-09c6e2ad7a7b",
		"name": "ana",
		"email": "ana@kenzie.com",
		"phone": "2226309298",
		"createdAt": "2023-02-08T14:53:48.118Z"
	}
]
```
### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | "message": "Invalid token" |

---

### 1.3. **Atualização de Contatos**

[ Voltar para os Endpoints ](#4-endpoints)

### `/contatos`

### Exemplo de Request:
```
PATCH /contatos/:id
Host: http://localhost:3000
Authorization: token
Content-type: application/json
```

### Corpo da Requisição:
```json
{
    "name": "zeca",
    "email": "zeca@kenzie.com",
	"phone": "2133053128"
}
```
### Exemplo de Response:
```
200 OK
```

```json
{
	"isActive": true,
	"id": "faaf2d91-2d6f-4cb4-8f7b-09c6e2ad7a7b",
	"name": "zeca",
	"email": "zeca@kenzie.com",
	"phone": "2133053128",
	"createdAt": "2023-02-08T14:53:48.118Z"
}
```
### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | "message": "Invalid token" |

---

### 1.4. **Deleção de Contatos**

[ Voltar para os Endpoints ](#4-endpoints)

### `/contatos`

### Exemplo de Request:
```
DELETE /contatos/:id
Host: http://localhost:3000
Authorization: token
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```
### Exemplo de Response:
```
200 OK
```

```json
Vazio
```
### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | "message": "Invalid token" |

---

## 5. Testes

### **Sobre os testes**

Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

Os testes estão localizados em `src/__tests__`.

Na subpasta `integration` estão os testes.

Já na subpasta `mocks` estão os dados que serão utilizados para os testes.

No arquivo `jest.config.json` estão algumas configurações necessárias para os testes rodarem.

**`De modo algum altere qualquer um desses arquivos.`** Isso poderá comprometer a integridade dos testes.

E também não altere o script de `test` localizado no `package.json`. Isso será utilizado para rodar os testes.

<br>
# **Rodando os testes**

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes

```
yarn test
```

#

### Rodar todos os testes e ter um log ainda mais completo

```
yarn test --all
```

#

### Rodar os testes de uma pasta específica

`detalhe: repare que tests está envolvido por 2 underlines. Isso se chama dunder.`

```
yarn test ./scr/__tests__/integration/<subpasta>
```

#

### Rodar os testes de um arquivo específico

```
yarn test ./scr/__tests__/integration/<subpasta>/<arquivo>
```

#

### Rodar um teste específico

```
yarn test -t <describe ou test específico envolto em aspas>
```

```
\\ ex: yarn test -t "/categories"
\\ rodaria os testes do describe "/categorias" no caminho
\\ ./scr/__tests__/integration/categories/categoriesRoutes.test.ts
```

<br>

**Caso você queira verificar todas as opções de execução de testes, visite a [Documentação oficial do Jest](https://jestjs.io/docs/cli)**

Após rodar um dos comandos aparecerá um log no seu terminal, contendo as informações da execução do teste.

**Observação:** O teste pode demorar alguns segundos para ser finalizado. Quanto maior for o teste, mais tempo será consumido para a execução.

---
## 6. Front-End
[ Voltar para o topo ](#tabela-de-conteúdos)

Foi desenvolvido com Vite:<br>
Para inciar este projeto, **é necessário executar o diretório front**, que está dentro de **diretório desafio03**,  instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```
yarn
```

# 🚀 Começando

Para inicializar :

```
yarn dev
```
