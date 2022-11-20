window.onload = function () {

    const produto = JSON.parse(localStorage.getItem("prod"));

    document.getElementById("q1").innerHTML = `Quantidade de produtos: ${produto.quantidade}`;

    document.getElementById("q2").innerHTML = `Quantidade vendida: ${produto.vendidos}`;
}