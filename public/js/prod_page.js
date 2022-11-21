window.onload = function () {

    const produto = JSON.parse(localStorage.getItem("prod"));

    document.getElementById("Descrição").innerHTML = `${produto.nome}: ${produto.descricao}`;

    document.getElementById("p1").innerHTML = `${produto.valor} em até 6 vezes sem juros.
    <br>Ou 10% de desconto no PIX.`;

    document.getElementById("valor-total").innerHTML = `Valor: R$${produto.valor}`;

    document.getElementById("q1").innerHTML = `Quantidade de produtos: ${produto.quantidade}`;

    document.getElementById("q2").innerHTML = `Quantidade vendida: ${produto.vendidos}`;
}