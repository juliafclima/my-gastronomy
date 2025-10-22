# my-gastronomy - Back-End

API REST simples para gerenciar um cardápio (pratos), pedidos e usuários.

Este repositório contém um backend em Node.js (Express + MongoDB). O README abaixo documenta como executar a API e descreve os endpoints disponíveis.

## Sobre

O backend implementa CRUD para `plates`, `orders` e `users`, além de rotas de autenticação (`/auth/signup` e `/auth/login`). Os controllers usam uma camada de data access que se comunica com uma base MongoDB.


## Requisitos

- Node.js 16+ (recomendado)
- npm ou yarn
- MongoDB (local ou Atlas)

## Variáveis de ambiente

Recomenda-se configurar as seguintes variáveis de ambiente em produção:

- MONGO_CS - string de conexão com MongoDB
- MONGO_DB_NAME - nome do banco de dados no MongoDB

## Endpoints

Base URL (exemplo local): http://localhost:3000

Observação sobre respostas: os handlers seguem um padrão e retornam objetos com as chaves: `success`, `statusCode`, `body`.


### Autenticação

- POST /auth/signup
	- Descrição: registra um novo usuário.
	- Body: { fullname, email, password }
	- Retorno (exemplo): { success, statusCode, body: { text: 'User registered', user, token } }

- POST /auth/login
	- Descrição: autentica um usuário com email e senha.
	- Body: { email, password }
	- Retorno (exemplo): { success, statusCode, body: { text: 'User logged in correctly', user, token } }

### Usuários

- GET /users
	- Descrição: lista todos os usuários.
	- Retorno: array de usuários (sem senha/salt quando projetado pelos controllers/dataAccess)

- PUT /users/:id
	- Descrição: atualiza um usuário. Se o body contiver `password`, o código re-hash e gera um novo salt automaticamente.
	- Body: campos a atualizar (fullname, email, password, ...)

- DELETE /users/:id
	- Descrição: remove um usuário pelo id.


### Pratos (plates)

- GET /plates
	- Descrição: lista todos os pratos.

- GET /plates/availables
	- Descrição: lista apenas pratos com `available: true`.

- POST /plates
	- Descrição: cria um novo prato.
	- Body (exemplo): { name, description, price, available }

- PUT /plates/:id
	- Descrição: atualiza um prato existente.
	- Body: campos a atualizar (name, description, price, available, ...)

- DELETE /plates/:id
	- Descrição: deleta um prato pelo id.


### Pedidos (orders)

- GET /orders
	- Descrição: lista todos os pedidos. A consulta agrega dados de `orderItems`, `users` e `plates` para devolver detalhes dos itens e do usuário.

- GET /orders/user-orders/:id
	- Descrição: lista pedidos feitos por um usuário específico (userId = :id).

- POST /orders
	- Descrição: cria um novo pedido. O controller adiciona `createdAt` e `pickupStatus = 'Pending'` e persiste os `items` em `orderItems`.
	- Body (exemplo):
		{
			userId: "<userId>",
			pickupTime: "2025-10-22T12:00:00Z",
			items: [ { plateId: "<plateId>", quantity: 2 }, { plateId: "<plateId2>", quantity: 1 } ]
		}

- PUT /orders/:id
	- Descrição: atualiza campos do pedido (ex.: `pickupStatus`, `pickupTime`).

- DELETE /orders/:id
	- Descrição: deleta um pedido e os itens associados. Retorna um objeto com `itemsToDelete` e `orderToDelete`.


## Exemplos de payload

- Criar um prato (POST /plates)

```json
{
      "name": "Squid Stew with Peas",
      "price": 10.99,
      "available": false,
      "description": "Fresh squid slowly cooked in a stew with fresh peas and tomatoes reveal an explosion of flavors that will make you come back for another bite!",
      "ingredients": [
         "Fresh squid",
         "Fresh peas",
         "Tomatoes"
      ],
      "imgUrl": "/imgs/plates/squidStewwithPeas.png",
      "category": "First"
}
```

- Criar pedido (POST /orders)

```json
{
    "userId": "68f8fdb018190b5e6a8749eb",
    "pickupTime": "12:30-22/10/2025",
    "items": [
        { 
            "plateId": "68f8deee34bf1eaefa890816",
            "quantity": 1
        }
    ]         
}
```
