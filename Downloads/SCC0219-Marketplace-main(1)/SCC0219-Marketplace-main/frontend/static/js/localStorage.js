window.onload = () => {
  let usuarios = {
    admin: {
      password: "admin",
      adminPermission: true,
      nome: "ADMIN",
      sobrenome: "",
      email: "admin@gmail.com",
      telefone: "",
      endereco: "",
    },
    a: {
      password: "a",
      adminPermission: false,
      nome: "nome",
      sobrenome: "sobrenome",
      email: "a@gmail.com",
      telefone: "0000000",
      endereco: "rua aaaaaaaaa",
    },
  };

  // let produtos = {
  //   0: {
  //     id: 0,
  //     nome: "Apple iPhone X 1",
  //     descricao:
  //       "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 5.8 polegadas com uma resolução de 2436x1125 pixels. As funcionalidades oferecidas pelo Apple iPhone X são muitas e inovadoras. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 256 GB mas sem a possibilidade de expansão.",
  //     valor: 1999.99,
  //     quantidade: 10,
  //     urlImage: "./images/apple-iphone-x.jpg",
  //     vendidos: 4,
  //   },
  //   1: {
  //     id: 1,
  //     nome: "Apple iPhone X 2",
  //     descricao:
  //       "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 5.8 polegadas com uma resolução de 2436x1125 pixels. As funcionalidades oferecidas pelo Apple iPhone X são muitas e inovadoras. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 256 GB mas sem a possibilidade de expansão.",
  //     valor: 2999.99,
  //     quantidade: 10,
  //     urlImage: "./images/apple-iphone-x.jpg",
  //     vendidos: 4,
  //   },
  //   2: {
  //     id: 2,
  //     nome: "Apple iPhone X 3",
  //     descricao:
  //       "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 5.8 polegadas com uma resolução de 2436x1125 pixels. As funcionalidades oferecidas pelo Apple iPhone X são muitas e inovadoras. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 256 GB mas sem a possibilidade de expansão.",
  //     valor: 3999.99,
  //     quantidade: 10,
  //     urlImage: "./images/apple-iphone-x.jpg",
  //     vendidos: 4,
  //   },
  //   3: {
  //     id: 3,
  //     nome: "Apple iPhone X 4",
  //     descricao:
  //       "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 5.8 polegadas com uma resolução de 2436x1125 pixels. As funcionalidades oferecidas pelo Apple iPhone X são muitas e inovadoras. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 256 GB mas sem a possibilidade de expansão.",
  //     valor: 4999.99,
  //     quantidade: 10,
  //     urlImage: "./images/apple-iphone-x.jpg",
  //     vendidos: 4,
  //   },
  //   4: {
  //     id: 4,
  //     nome: "Apple iPhone X 5",
  //     descricao:
  //       "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 5.8 polegadas com uma resolução de 2436x1125 pixels. As funcionalidades oferecidas pelo Apple iPhone X são muitas e inovadoras. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 256 GB mas sem a possibilidade de expansão.",
  //     valor: 5999.99,
  //     quantidade: 10,
  //     urlImage: "./images/apple-iphone-x.jpg",
  //     vendidos: 4,
  //   },
  // };

  let cart = {};
  let logado = {};
  let lastKey = 4;

  // if (!("produtos" in localStorage))
  //   localStorage.setItem("produtos", JSON.stringify(produtos));
  if (!("usuarios" in localStorage))
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  if (!("logado" in localStorage))
    localStorage.setItem("logado", JSON.stringify(logado));
  if (!("cart" in localStorage))
    localStorage.setItem("cart", JSON.stringify(cart));
  if (!("lastKey" in localStorage))
    localStorage.setItem("lastKey", JSON.stringify(lastKey));
};
