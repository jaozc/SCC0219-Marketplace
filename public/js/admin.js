let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
mostrar = false

document.getElementById("add_admin").addEventListener("click", function() {
    location.href = "./adicionar_admin.html"
});

document.getElementById("get_usuarios").addEventListener("click", function() {
    pegaUsuariosDoBanco()
});

document.getElementById("add_produto").addEventListener("click", function() {
    location.href = "./adicionar_produto.html"
});

document.getElementById("sair").addEventListener("click", function() {
    localStorage.removeItem("usuario")
    location.href = "./homepage.html"
});

document.getElementById("alterar_produto").addEventListener("click", function() {
    location.href = "./alterar_produto.html"
});

function pegaUsuariosDoBanco() {
    mostrar = !mostrar
    if(mostrar) {
        document.getElementById("exibir").innerHTML = JSON.stringify(bancoDeDados)
    }
    else{
        document.getElementById("exibir").innerHTML = ""
    }
}