document.getElementById("enviar").addEventListener("click", () => cadastraCliente());

function cadastraCliente() {

    let usuario = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        adminPermission: false,
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        endereco: document.getElementById("endereco").value
    }

    let json = JSON.parse(localStorage.getItem("bancoDeDados"))

    json[document.getElementById("username").value] = usuario
    console.log(json)

    localStorage.setItem("bancoDeDados", JSON.stringify(json))
    
   location.href = "./login.html"
    
}