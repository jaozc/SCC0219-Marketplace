export const addToCart = async (e) => {

  if ("{}" == localStorage.getItem("tokenUsuario") || localStorage.getItem("tokenUsuario") == null) {
    alert("Faça login para comprar")
    
    window.location.href = "/login"
    return
  }
  let cart = {};
  
  // let produtos = JSON.parse(localStorage.getItem("produtos"));
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  const item = e.target.dataset;

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  
  const response = await fetch('http://localhost:8080/product/' + item.id, options).then(produto => {
    if(produto.status === 400) {
      throw new Error()
    }
    
    return produto
    })
  const produto = await response.json()
  let newCart = cart;
  if (cart.hasOwnProperty(item.id)) {
    cart[item.id] = {
      id: item.id,
      nome: item.nome,
      quantidade: cart[item.id].quantidade + 1,
      quantidade_servidor:produto.quantity,
      urlImage: produto.image,
      descricao: produto.description,
      valor: produto.price*cart[item.id].quantidade
    };
  } else {
    cart[item.id] = {
      id: item.id,
      nome: item.nome,
      quantidade: 1,
      quantidade_servidor:produto.quantity,
      urlImage: produto.image,
      descricao: produto.description,
      valor: produto.price
    };
  }
  if (cart[item.id].quantidade > produto.quantity) {
    alert(
      "Quantidade indisponível no estoque. Limite máximo: " +
      produto.quantity
    );
  } else {
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(
      item.nome +
        " adicionado no carrinho. Quantidade: " +
        cart[item.id].quantidade
    );
  }
};
