window.onload = function() {
  

  let containerPrincipal = document.getElementsByClassName("container")[0]
  
  produtos = JSON.parse(localStorage.getItem("produtos"))
  for (const key in produtos){
    if(produtos.hasOwnProperty(key)){
      containerPrincipal.appendChild(constroiProduto(produtos[key]))
      console.log(`${key} :` + JSON.stringify(produtos[key]))
    }
  }
}

function constroiProduto(produto) {
  let divConteudo = document.createElement("div")

  var image = new Image();
  image.src = produto["imagem"]

  let h2 = document.createElement("h2")
  h2.innerHTML = produto["nome"]


  divConteudo.appendChild(h2)
  divConteudo.appendChild(criaParagrafo(produto, "descricao"))
  divConteudo.appendChild(criaParagrafo(produto, "quantidade"))
  divConteudo.appendChild(criaParagrafo(produto, "valor"))
  divConteudo.appendChild(criaDivBotoes())
  divConteudo.classList.add("conteudo")

  let div = document.createElement("div")
  div.classList.add("card")
  div.classList.add("row")

  div.appendChild(image);

  div.appendChild(divConteudo)

  return div
}

function criaDivBotoes(){
  let divBotoes = document.createElement("div")

  let botaoComprar = document.createElement("a")
  botaoComprar.classList.add("btn")
  botaoComprar.classList.add("orange")
  botaoComprar.innerHTML = "Comprar"

  let botaoVisualizar = document.createElement("a")
  botaoVisualizar.classList.add("btn")
  botaoVisualizar.innerHTML = "Visualizar"

  divBotoes.append(botaoComprar)
  divBotoes.append(botaoVisualizar)
  return divBotoes
}

function criaParagrafo(produto, atributo){
  let paragrafo = document.createElement("p")
  paragrafo.innerHTML = transformarPrimeiraLetraEmMaiusculo(atributo) + " : " + produto[atributo]
  paragrafo.style.wordBreak = "break-word"
  paragrafo.style.wordWrap = "break-word"
  return paragrafo
}

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

function transformarPrimeiraLetraEmMaiusculo(atributo) {
  return atributo.charAt(0).toUpperCase() + atributo.slice(1);
}