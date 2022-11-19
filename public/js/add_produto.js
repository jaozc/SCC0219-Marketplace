document.getElementById("add_produto").addEventListener("submit", function() {
    console.log(document.getElementById("foto"))

    converterImagem()
    

    alert("produto cadastrado   ")
});

function converterImagem() {
    var receberArquivo = document.getElementById("foto").files;

    if (receberArquivo.length > 0) {
        var carregarImagem = receberArquivo[0];
        console.log("2")

        var lerArquivo = new FileReader();

        lerArquivo.onload = function(arquivoCarregado) {
            let imagemBase64 = arquivoCarregado.target.result; 
            let produtos = JSON.parse(localStorage.getItem("produtos"))

            produtos[document.getElementById("nome").value] = {
                nome : document.getElementById("nome").value,
                descricao : document.getElementById("descricao").value,
                valor : document.getElementById("preco").value,
                imagem : imagemBase64
            }
        
            localStorage.setItem("produtos", JSON.stringify(produtos))

        }
        lerArquivo.readAsDataURL(carregarImagem);
    }
}