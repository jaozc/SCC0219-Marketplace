window.onload = function() {

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

    let produtos = {
    }

    localStorage.setItem("contadorId", 0)
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
    localStorage.setItem("produtos", JSON.stringify(produtos))

    window.location.replace("../pages/homepage.html");
}