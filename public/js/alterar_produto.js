window.onload = function() {
    let produtos = JSON.parse(localStorage.getItem("produtos"))
    for (const key in produtos){
        if(produtos.hasOwnProperty(key)){
            delete produtos[key]["imagem"]
            }
      }
      document.getElementById("produtos").innerHTML = JSON.stringify(produtos) 
}



document.getElementById("alterar").addEventListener("submit", function() {
    alterarProduto()
});

function alterarProduto() {
    let id = document.getElementById("id").value
    let campo = document.getElementById("campo").value
    let novoValor = document.getElementById("novo_valor").value
    
    let produtos = JSON.parse(localStorage.getItem("produtos"))
    if(produtos.hasOwnProperty(id)){

        produto = produtos[id]
        if(produto.hasOwnProperty(campo)){
            produto[campo] = novoValor
            alert("produto alterado")
        }
        else {
            alert("campo " + campo + " nao existe")
        }
    }
    else {
        alert("produto de id " + id + " nao existe")
    }
    localStorage.setItem("produtos", JSON.stringify(produtos))
}