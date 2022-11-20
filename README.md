# SCC0219 Marketplace

Projeto realizado para disciplina de Introdução ao Desenvolvimento Web no segundo semestre de 2022.  O seguinte projeto tem como intuito a criação de um Marketplace utilizando as ferramentas vistas em aula.

# Students
  * Henrique Morey Pereira - 10349508
  * João Gabriel Zanão Costa - 11234266
  * Leonardo Perassoli - 10376026 

# Project Report

## Requirements

  - The system must have 2 types of users: Clients and Administrators
    - Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
    - Customers are users who access the system to buy products/services.
  - Customers are users who access the system to buy products/services.
  - Each customer's record includes, at least: name, id, address, phone, email.
  - Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
  - Your store may sell products, services or both (you decide).
  - Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers. 
  - Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
  - Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.
  - The system must provide accessibility requirements and provide good usability.
  - The system must be responsive, meaning that it should complete assigned tasks within a reasonable time.

## Project Desciption

Criação de um site de marketplace de produtos eletrônicos.

###  Milestone 01
  As páginas foram realizadas individualmente pelos 3 membros do grupo, são arquivos brutos de HTML/CSS sem a utilização de frameworks ou bibliotecas externa, exceto    pelo FontAwesome para a utilização de algumas ícones.

  Para a primeira entrega o grupo optou por realizar o mockup das seguintes páginas:
  - Homepage;
  - Informações do produto;
  - Carrinho de Compras;

  Interfaces para login, área do usuário, área do administrador e contato, não foram implementadas para essa entrega, mas futuramente serão realizadas para a Milestone 02.
  
  É possível acessar o seguinte link https://marvelapp.com/prototype/8268f3d para visualizar uma simulação da interação entre as páginas da aplicação nessa entrega.
  
## Comments About the Code

### Milestone 2

 As issues foram divididas e realizadas individualmente por cada um dos membros do projeto, cada um foi responsável por analisar e utilizar as ferramentas da própria maneira. 

## Test Plan

Foram feitos testes manuais para checar se o código funciona de maneira apropriada. O LocalStorage foi utilizado para armazenar os produtos e usuarios do site, imitando um banco de dados. O carrinho da aplicação também foi realizado utilizando o Local Storage.

Testes realizados:
* Como administrador:
 - Adicionar novo produto
 - Adicionar novo administrador
 - Verificar se o novo administrador aparece na lista de usuarios disponível no perfil do administrador
 - Log in e Log out como adiministrador
* Como usuario:
 - Se cadastrar
 - Comprar produto (a ser feito)
* Teste de carrinho
 - Adicionar diversos produto;
 - Adicionar vários vezes o mesmo produto;
 - Comprar mais produtos do que em estoque;
 - Comprar produtos sem estoque;
 - Remover produtos do carrinho;

## Test Results

* Como administrador:
* Como usuario:
* Teste de carrinho
 Ao comprar mais produtos do que o disponível em estoque, a aplicação sobreescreve a quantidade selecionada pelo usuário pela quantidade do produto em estoque.

## Build Procedures

Faça o download de todos os arquivos. É necessario ter node instalado na maquina para rodar um servidor local ([guia de instalação do node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

Após instalar rode:
 - Vá para a pasta SCC0219-Marketplace
 - Execute ```npm install```
 - Execute ```node index.js```
 - Abra o navegador e digite o endereço ```localhost:5000```

## Problems

- Local Storage possui um tamanho máximo de 5MB, adicionar muito produtos pode acarretar em um overflow da variável.

## Comments

-

