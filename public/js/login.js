if(localStorage.hasOwnProperty("usuario")) {
    location.href = "../pages/usuario.html"
}

let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))

document.getElementById("enviar").addEventListener("click", checaBancoDeDados);
document.getElementById("cadastrar").addEventListener("click", () => location.href = "../pages/cadastro.html")

function checaBancoDeDados() {
    
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if(bancoDeDados.hasOwnProperty(username) && 
    bancoDeDados[username].password === password) {
        
        localStorage.setItem("usuario",
                             JSON.stringify(bancoDeDados[username]));
        
        if(bancoDeDados[username].adminPermission) {
            location.href = "../pages/admin.html"
            return false
        }
        location.href = "../pages/usuario.html"
        return false
    }


    
    alert("usuario nao cadastrado")
}