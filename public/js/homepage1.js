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

    // let produtos = {
    //     "celular1" : {
    //         "nome" : "Celular Motorola",
    //         "descricao" : "Celular motorola Celular motorola Celular motorola Celular motorola",
    //         "valor" : "123,45",
    //         "imagem" : "AAAA",
    //     },
    //     "celular2" : {
    //         "nome" : "Celular Apple",
    //         "descricao" : "Celular Apple Celular Apple Celular Apple Celular Apple Celular Apple",
    //         "valor" : "111",
    //         "imagem" : "aaaaa"
    //     },
    //     "fone1" : {
    //         "nome" : "Airdots",
    //         "descricao" : "Airdots Airdots Airdots Airdots Airdots Airdots Airdots Airdots Airdots",
    //         "valor" : "222",
    //         "imagem" : "aaaaa"
    //     }
    // }
    
    let produtos = {
    }

    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
    localStorage.setItem("produtos", JSON.stringify(produtos))

    window.location.replace("../pages/homepage.html");
}