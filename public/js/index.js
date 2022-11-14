// setando o banco de dados no local storage
let bancoDeDados = {
  "admin" : {
      password: "admin",
      adminPermission: true,
      nome: "ADMIN",
      sobrenome: "",
      email: "admin@gmail.com",
      telefone: "",
      endereco: "",
  },
  "a" : {
      password: "a",
      adminPermission: false,
      nome: "nome",
      sobrenome: "sobrenome",
      email: "admin@gmail.com",
      telefone: "0000000",
      endereco: "rua aaaaaaaaa",
  }
}

localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))

function simulaComprar(){
  alert("Produto adicionado ao seu carrinho!");
}

function finalizaCompra(){
  alert("Sua compra foi finalizada!");
  window.location.replace("../pages/homepage.html");
}

function calculaCep(){
  alert("A entrega é R$15 e o prazo é 5 dias úteis.")
}