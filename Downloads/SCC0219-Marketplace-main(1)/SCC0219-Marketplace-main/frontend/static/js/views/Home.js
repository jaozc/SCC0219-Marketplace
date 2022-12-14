import { addToCart } from "../controllers/CartController.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  handleProducts(retDiv) {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    let produtos = {};
    produtos = fetch('http://localhost:8080/product', options).then(T => T.json()).then(produtos => {
      if(produtos != null) {
        // console.log(response)
        //return response
        
    let section = document.createElement("div");
    section.classList.add("section");
    console.log(section)
    let container = document.createElement("div");
    container.classList.add("container");

    let row = document.createElement("div");
    row.classList.add("row");

    for (const key in produtos) {
      let col = document.createElement("div");
      col.classList.add("col", "s12", "m3");

      let card = document.createElement("div");
      card.id = produtos[key]._id;
      card.classList.add("card");

      let cardImageDiv = document.createElement("div");
      cardImageDiv.classList.add(
        "card-image",
        "waves-effect",
        "waves-block",
        "waves-light"
      );

      let cardImage = document.createElement("img");
      cardImage.classList.add("activator");
      cardImage.style.maxHeight = "250px";
      cardImage.src = produtos[key].image;

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
      cardTitle.innerHTML = produtos[key].name;

      let cardDescription = document.createElement("p");
      cardDescription.classList.add("description");
      cardDescription.innerHTML = produtos[key].description;

      let cardPrice = document.createElement("p");
      cardPrice.classList.add("bold");
      cardPrice.innerHTML = "Valor: R$ " + produtos[key].price;

      cardContent.appendChild(cardTitle);
      cardContent.appendChild(cardDescription);
      cardContent.appendChild(cardPrice);

      card.appendChild(cardContent);

      let cardAction = document.createElement("div");
      cardAction.classList.add("card-action");

      // Se esgotado desabilita o bot??o de compra
      let btnShop = document.createElement("a");
      if (produtos[key].quantity === 0) {
        btnShop.classList.add("btn", "disabled");
        btnShop.innerHTML = "Esgotado";
      } else {
        btnShop.classList.add("btn", "deep-orange");
        btnShop.innerHTML = "Comprar";
        // btnShop.href = "#";
        btnShop.dataset.id = produtos[key]._id;
        btnShop.dataset.nome = produtos[key].name;
        btnShop.addEventListener("click", addToCart);
        btnShop.dataset.link = "";
      }

      let btnShow = document.createElement("a");
      btnShow.classList.add("btn", "blue");
      btnShow.href = "/product/" + produtos[key]._id;
      btnShow.dataset.link = "";
      btnShow.innerHTML = "Visualizar";

      cardAction.appendChild(btnShop);
      cardAction.appendChild(btnShow);

      card.appendChild(cardAction);
      col.appendChild(card);

      row.appendChild(col);

      if (row.childElementCount === 4) {
        container.appendChild(row);
        row = document.createElement("div");
        row.classList.add("row");
      }
    }
    if (row.childElementCount < 4) container.appendChild(row);
    section.appendChild(container);
    retDiv.appendChild(section);
      }
    }).catch(() => alert("N??o foi poss??vel encontrar usuarios"));
    console.log(produtos)
    // let produtos = JSON.parse(localStorage.getItem("produtos"));
  }

  handlePromotion() {
    let section = document.createElement("div");
    section.classList.add("section", "no-pad-bot");
    section.id = "index-banner";

    let container = document.createElement("div");
    container.classList.add("container");

    let headerTitle = document.createElement("h1");
    headerTitle.classList.add("header", "center", "blue-text");
    headerTitle.innerHTML = "Propangada bacana!";

    container.appendChild(headerTitle);

    let promotionTextDiv = document.createElement("div");
    promotionTextDiv.classList.add("row", "center");

    let promotionText = document.createElement("h5");
    promotionText.classList.add("header", "col", "s12", "light");
    promotionText.innerHTML =
      "Promo????o imperd??vel de um produto que voc?? n??o pode perder!";

    promotionTextDiv.appendChild(promotionText);
    container.appendChild(promotionTextDiv);

    let promotionBtnDiv = document.createElement("div");
    promotionBtnDiv.classList.add("row", "center");

    let btnPromotion = document.createElement("a");
    btnPromotion.classList.add(
      "btn-large",
      "waves-effect",
      "waves-light",
      "deep-orange"
    );
    btnPromotion.id = "promotion-button";
    btnPromotion.href = "/";
    btnPromotion.innerHTML = "Comprar Agora!";

    promotionBtnDiv.appendChild(btnPromotion);
    container.appendChild(promotionBtnDiv);

    section.appendChild(container);

    return section;
  }

  async getHtml() {
    let retDiv = document.createElement("div");
    retDiv.classList.add("col");
    this.handleProducts(retDiv)
    retDiv.appendChild(this.handlePromotion());
    // retDiv.appendChild(this.handleProducts());
    return retDiv;

    // <div class="container">
    //     <div class="section">
    //         ${this.handleProducts()}
    //     </div>
    // </div>
    // `;
  }
}
