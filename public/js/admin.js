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

function pegaUsuariosDoBanco() {
    mostrar = !mostrar
    if(mostrar) {
        document.getElementById("exibir").innerHTML = JSON.stringify(bancoDeDados)
    }
    else{
        document.getElementById("exibir").innerHTML = ""
    }
}

// document.getElementById("h1").innerHTML = JSON.stringify(localStorage.getItem(bancoDeDados))  