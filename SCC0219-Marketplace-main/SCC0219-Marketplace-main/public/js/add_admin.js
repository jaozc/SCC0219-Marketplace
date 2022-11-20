document.getElementById("add_admin").addEventListener("submit", function() {
    cadastraAdmin()
    alert("Administrador cadastrado")
});

function cadastraAdmin() {
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    alert(document.getElementById("nome").value)

    bancoDeDados[document.getElementById("username").value] = {
        password : document.getElementById("password").value,
        nome : document.getElementById("nome").value,
        sobrenome : document.getElementById("sobrenome").value,
        email : document.getElementById("email").value,
        telefone : document.getElementById("telefone").value,
        endereco : document.getElementById("endereco").value,
        adminPermission : true
    }
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
}