import { addToCart } from "../controllers/CartController.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.productId = params.id;
    this.setTitle("Product");
  }

  async getHtml() {
    let produtos = JSON.parse(localStorage.getItem("produtos"));

    let section = document.createElement("div");
    section.classList.add("section");

    let container = document.createElement("div");
    container.classList.add("container");

    let row = document.createElement("div");
    row.classList.add("row");

    let col = document.createElement("div");
    col.classList.add("col", "s12", "m8", "offset-m2");

    let card = document.createElement("div");
    card.id = produtos[this.productId].id;
    card.classList.add("card");

    let cardImageDiv = document.createElement("div");
    cardImageDiv.classList.add(
      "card-image",
      "waves-effect",
      "waves-block",
      "waveimgs-light"
    );

    let cardImage = document.createElement("img");
    cardImage.classList.add("activator");
    console.log(produtos[this.productId].urlImage);
    cardImage.src = "." + produtos[this.productId].urlImage;
    cardImage.style.maxWidth = "400px";

    cardImageDiv.appendChild(cardImage);
    card.appendChild(cardImageDiv);

    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    let cardTitle = document.createElement("span");
    cardTitle.classList.add(
      "card-title",
      "activator",
      "black-text",
      "text-darken-4"
    );
    cardTitle.innerHTML = produtos[this.productId].nome;

    let cardDescription = document.createElement("p");
    // cardDescription.classList.add("");
    cardDescription.innerHTML = produtos[this.productId].descricao;

    let cardPrice = document.createElement("p");
    cardPrice.classList.add("bold");
    cardPrice.innerHTML = "Valor: R$ " + produtos[this.productId].valor;

    let cardStorage = document.createElement("p");
    cardStorage.classList.add("bold");
    cardStorage.innerHTML = "Estoque: " + produtos[this.productId].quantidade;

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardPrice);
    cardContent.appendChild(cardStorage);
    +card.appendChild(cardContent);

    let cardAction = document.createElement("div");
    cardAction.classList.add("card-action");

    // Se esgotado desabilita o botão de compra
    let btnShop = document.createElement("a");
    if (produtos[this.productId].quantidade === 0) {
      btnShop.classList.add("btn", "disabled");
      btnShop.innerHTML = "Esgotado";
    } else {
      btnShop.classList.add("btn", "deep-orange");
      btnShop.innerHTML = "Comprar";
      // btnShop.href = "#";
      btnShop.dataset.id = produtos[this.productId].id;
      btnShop.dataset.nome = produtos[this.productId].nome;
      btnShop.addEventListener("click", addToCart);
      btnShop.dataset.link = "";
    }

    cardAction.appendChild(btnShop);

    card.appendChild(cardAction);
    col.appendChild(card);

    row.appendChild(col);

    container.appendChild(row);
    row = document.createElement("div");
    row.classList.add("row");

    section.appendChild(container);
    return section;
  }
}
