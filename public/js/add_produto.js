document.getElementById("add_produto").addEventListener("submit", function() {
    converterImagem()
    alert("produto cadastrado")
});

function converterImagem() {
    var receberArquivo = document.getElementById("foto").files;

    if (receberArquivo.length > 0) {
        var carregarImagem = receberArquivo[0];

        var lerArquivo = new FileReader();

        lerArquivo.onload = function(arquivoCarregado) {
            let imagemBase64 = arquivoCarregado.target.result; 
            let produtos = JSON.parse(localStorage.getItem("produtos"))

            produtos[localStorage.getItem("contadorId")] = {
                id : localStorage.getItem("contadorId"),
                nome : document.getElementById("nome").value,
                descricao : document.getElementById("descricao").value,
                valor : document.getElementById("preco").value,
                quantidade : document.getElementById("quantidade").value,
                imagem : imagemBase64
            }
            localStorage.setItem("produtos", JSON.stringify(produtos))
            localStorage.setItem("contadorId", parseInt(localStorage.getItem("contadorId")) + 1)

        }
        lerArquivo.readAsDataURL(carregarImagem);
    }
}