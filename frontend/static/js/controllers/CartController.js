export const addToCart = (e) => {
  let cart = {};
  let produtos = JSON.parse(localStorage.getItem("produtos"));
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  const item = e.target.dataset;
  let newCart = cart;
  if (cart.hasOwnProperty(item.id)) {
    cart[item.id] = {
      id: item.id,
      nome: item.nome,
      quantidade: cart[item.id].quantidade + 1,
    };
  } else {
    cart[item.id] = {
      id: item.id,
      nome: item.nome,
      quantidade: 1,
    };
  }
  if (cart[item.id].quantidade > produtos[item.id].quantidade) {
    alert(
      "Quantidade indisponível no estoque. Limite máximo: " +
        produtos[item.id].quantidade
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
