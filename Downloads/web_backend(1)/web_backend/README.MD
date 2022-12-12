Para rodar a aplicação basta dar um <b>'npm install'</b> e depois um <b>'npm run dev'</b>.

Por padrão o servidor irá rodar na porta 8080, ficando com a base url  <b>http://localhost:8080</b>.

Qualquer endpoint deverá ser chamado passando a base url + o endpoint, portanto se o endpoint é '/user/login' deverá ser chamado http://localhost:8080/user/login para realizar a requisição naquele endpoint.

<h1>Endpoints criados:</h1>

- User:
  - /user/:id (GET): Retorna as informações de um usuário específico, deve passar o id do usuário como parâmetro da requisição.
  - /user/login (POST): Realiza a autenticação do usuário na aplicação, retornando, em caso de sucesso, um JSON contendo um token e as informações do usuário autenticado. Deve ser passado o email e a senha no body da requisição.
  <br>Exemplo de chamada:
    { "email": "admin@gmail.com", "password": "admin" }
  <br>Exemplo de response:<br>
  ```
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTM4ZDIxNTQ4OTZkMWRhMDFjZGM0OSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwibmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcwNjgwMTA2LCJleHAiOjE2NzA3MjMzMDZ9.Hza50BjtSWaUUnf9XYEIWhAV2XsqRaI0cyyDY5ajO-w",
    "user": {
        "_id": "63938d2154896d1da01cdc49",
        "email": "admin@gmail.com",
        "password": "b0572888f0a3c1f372182904989e4d61",
        "role": "admin",
        "phone": "1234567890",
        "address": "endereço com 10 caracteres",
        "name": "Admin"
    }
  }
  ```
  - /user (POST): Cria um novo usuário no bando, deve passar obrigatoriamente no body da requisição: name, email, password, phone, address.
  - /user/:id (PUT) : Altera as informações de um usuário específico, cujo id foi passado nos parâmetros da rota. Deve ser passado o token daquele usuário no no header da requisição ou junto do body. No body da requisição deve ser passado a informação daquele usuário que será alterada, podendo ser: name, email, password, phone, address.
  - /user/:id (DELETE) : Remove um usuário do banco, o id do usuário deve ser passado nos parâmetros da rota. Somente admins podem realizar esta operação, portanto deve-se passar um token no header da requisição. Esse token deve ser o de um admin que realizou autenticação.

- Product:
  - /product (POST) : Cria um produto na base, deve-se passar no body da requisição, obrigatóriamente: name, description, price, quantity. Deve-se passr um token no header ou no body da requisição e ele deve ser de ADMIN.
  - /product (GET) : Retorna TODOS os produtos existentes na base.
  - /product/:id (GET) : Retorna um único produto cujo id foi passado nos parâmetros da requisição.
  - /product/:id (PUT) : Altera as informações de algum produto, cujo id foi passado nos parâmetros da requisição. Deve-se passar no body a informação daquele produto que deve ser alterada. Deve-se passr um token no header ou no body da requisição e ele deve ser de ADMIN.
  - /product/:id (DELETE) : Remove algum produto da base, cujo id foi passado nos parâmetros da requisição. Somente admins podem realizar essa operação portanto deve-se passr um token no header da requisição e ele deve ser de ADMIN.

- Order:
  - /order (POST) : Cria uma nova compra na base, deve ser passado: id do usuário que está comprando, a data da compra, a hora da compra, e um array contendo os items, cada item do array deve ser um objeto contendo a id do produto e a quantidade daquele produto que foi comprada e  por fim o valor total da compra.
  <br>Exemplo de body para essa requisição:
  ```
  {
    "user": "63939259d3cd6c7268db0106",
    "date": "01-01-2023",
    "hour": "13:39",
    "items": [
        {
            "product": "6393a45b67c66bcd480af975",
            "quantity": 2
        },
        {
            "product": "6393a46267c66bcd480af979",
            "quantity": 1
        }
    ],
    "totalPrice": "32.92"
  }
  ```
  - /order (GET) : Retorna todas as compras existentes no banco.
  - /order/:id (GET) : Retorna alguma compra específica cujo id da compra foi passado nos parâmetros da requisição. Somente admins podem fazer essa consulta, portanto deve-se passar um token no header da requsição que seja de admin.
  - /order/user/:userId (GET) : Retorna as compras de um usuário específico, a id passada no parâmetro da requisição é a do usuário que você deseja visualizar as compras. Deve-se passar um token no header da requisição do usuário logado na plataforma.
