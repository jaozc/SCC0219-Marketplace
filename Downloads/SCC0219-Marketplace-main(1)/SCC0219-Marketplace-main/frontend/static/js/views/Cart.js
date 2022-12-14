import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Cart");
  }

  async handleCloseCart() {
    const cartJSON = JSON.parse(localStorage.getItem("cart"));
    const cartProductsArray = Object.values(cartJSON);
    let totalPrice = 0
    const items = cartProductsArray.map(product => ({ product: product.id, quantity: 1 }));
    for(const product in cartProductsArray) {
      totalPrice = totalPrice + (cartProductsArray[product].quantidade * cartProductsArray[product].valor)
    }
    // const totalPrice = cartProductsArray.length > 1
    //   ? cartProductsArray.reduce((acumulator, current) => acumulator.valor + current.valor)
    //   : cartProductsArray[0].valor;
    const user = JSON.parse(localStorage.getItem("user"))._id;

    const body = JSON.stringify({
      token: localStorage.getItem('tokenUsuario'),
      date: new Date(),
      hour: new Date().getHours(),
      user,
      items,
      totalPrice,
    });

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body,
    }

    await fetch('http://localhost:8080/order', options).then(response => {
      if(response.status === 400) { throw new Error(); }

      return response.json();
    }).then(response => {
      alert(response.message);
      window.location.href = "/";
      localStorage.setItem("cart", JSON.stringify({}));
    }).catch(_ => alert("Não foi possível finalizar compra"));
  }

  handleRemoveItem(e) {
    const itemId = e.target.dataset.id;
    let cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[itemId];

    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.reload()
  }

  handleCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (Object.keys(cart).length === 0) {
      let container = document.createElement("div");
      container.classList.add("container");

      let section = document.createElement("div");
      section.classList.add("section");

      let emptyCartDiv = document.createElement("div");
      emptyCartDiv.classList.add("card");

      let emptyCartContent = document.createElement("div");
      emptyCartContent.classList.add("card-content");

      let emptyCartText = document.createElement("h5");
      emptyCartText.innerHTML =
        "Ops... Seu carrinho está vazio :( <br> Tente adicionar alguns produtos antes!";

      emptyCartContent.appendChild(emptyCartText);
      emptyCartDiv.appendChild(emptyCartContent);

      section.appendChild(emptyCartDiv);
      container.appendChild(section);

      return container;
    }
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    let totalPayment = 0;

    let container = document.createElement("div");
    container.classList.add("container");

    let section = document.createElement("div");
    section.classList.add("section");

    container.appendChild(section);

    let row = document.createElement("div");
    row.classList.add("row");

    for (const id in cart) {
      let col = document.createElement("div");
      col.classList.add("col", "s12");

      let card = document.createElement("div");
      card.classList.add("card", "horizontal", "small");

      let cardImageDiv = document.createElement("div");
      cardImageDiv.classList.add("card-image");

      let cardImage = document.createElement("img");
      cardImage.src = cart[id].urlImage;

      cardImageDiv.appendChild(cardImage);

      let cardStacked = document.createElement("div");
      cardStacked.classList.add("card-stacked");

      let cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      let cardTitle = document.createElement("span");
      cardTitle.classList.add("card-title");
      cardTitle.innerHTML = cart[id].nome;

      let cardDescription = document.createElement("p");
      cardDescription.classList.add("long-text");
      cardDescription.innerHTML = cart[id].descricao;

      cardContent.appendChild(cardTitle);
      cardContent.appendChild(cardDescription);

      let rowValues = document.createElement("div");
      rowValues.classList.add("row");

      let cardValue = document.createElement("span");
      cardValue.classList.add("flow-text", "col", "m4");
      cardValue.innerHTML = "Valor: R$ " + cart[id].valor;

      let cardQtd = document.createElement("span");
      cardQtd.classList.add("flow-text", "col", "m4");
      cardQtd.innerHTML = "Quantidade: " + cart[id].quantidade;

      let cardTotal = document.createElement("span");
      cardTotal.classList.add("flow-text", "col", "m4");
      cardTotal.innerHTML =
        "Total: R$ " +
        Math.round(cart[id].quantidade * cart[id].valor * 100) / 100;
      totalPayment += cart[id].quantidade * cart[id].valor;

      rowValues.appendChild(cardValue);
      rowValues.appendChild(cardQtd);
      rowValues.appendChild(cardTotal);

      cardContent.appendChild(rowValues);

      let btnRemove = document.createElement("a");
      btnRemove.href = "#";
      btnRemove.classList.add("btn", "red");
      btnRemove.innerHTML = "Remover";
      btnRemove.dataset.id = id;
      btnRemove.addEventListener("click", this.handleRemoveItem);

      cardContent.appendChild(btnRemove);

      cardStacked.appendChild(cardContent);

      card.appendChild(cardImageDiv);
      card.appendChild(cardStacked);

      col.appendChild(card);
      row.appendChild(col);

      section.appendChild(row);

      row = document.createElement("div");
      row.classList.add("row");
    }

    let emptyCartDiv = document.createElement("div");
    emptyCartDiv.classList.add("card");

    let emptyCartContent = document.createElement("div");
    emptyCartContent.classList.add("card-content");

    let emptyCartText = document.createElement("h5");
    emptyCartText.innerHTML =
      "Total da compra: R$" + Math.round(totalPayment * 100) / 100;

    let btnFinalizeCart = document.createElement("a");
    btnFinalizeCart.classList.add("btn", "deep-orange");
    btnFinalizeCart.innerHTML = "Finalizar Compra!";
    btnFinalizeCart.addEventListener("click", this.handleCloseCart);

    emptyCartContent.appendChild(emptyCartText);
    emptyCartContent.appendChild(btnFinalizeCart);

    emptyCartDiv.appendChild(emptyCartContent);

    section.appendChild(emptyCartDiv);
    return container;
  }

  async getHtml() {
    return this.handleCart();
  }
}
