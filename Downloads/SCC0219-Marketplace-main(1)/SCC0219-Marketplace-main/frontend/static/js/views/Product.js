import { addToCart } from "../controllers/CartController.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.productId = params.id;
    this.setTitle("Product");
  }

  async getHtml() {
    console.log("id")
    console.log(this.productId)
  
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    
    const response = await fetch('http://localhost:8080/product/' + this.productId, options).then(produto => {
      if(produto.status === 400) {
        throw new Error()
      }
      
      return produto
      })
      const produto = await response.json()

      let section = document.createElement("div");
      section.classList.add("section");
  
      let container = document.createElement("div");
      container.classList.add("container");
  
      let row = document.createElement("div");
      row.classList.add("row");
  
      let col = document.createElement("div");
      col.classList.add("col", "s12", "m8", "offset-m2");
  
      let card = document.createElement("div");
      card.id = produto._id;
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
      cardImage.src = "." + produto.image;
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
      cardTitle.innerHTML = produto.name;
  
      let cardDescription = document.createElement("p");
      // cardDescription.classList.add("");
      cardDescription.innerHTML = produto.description;
  
      let cardPrice = document.createElement("p");
      cardPrice.classList.add("bold");
      cardPrice.innerHTML = "Valor: R$ " + produto.price;
  
      let cardStorage = document.createElement("p");
      cardStorage.classList.add("bold");
      cardStorage.innerHTML = "Estoque: " + produto.quantity;
  
      cardContent.appendChild(cardTitle);
      cardContent.appendChild(cardDescription);
      cardContent.appendChild(cardPrice);
      cardContent.appendChild(cardStorage);
      card.appendChild(cardContent);
  
      let cardAction = document.createElement("div");
      cardAction.classList.add("card-action");
  
      // Se esgotado desabilita o botão de compra
      let btnShop = document.createElement("a");
      if (produto.quantity === 0) {
        btnShop.classList.add("btn", "disabled");
        btnShop.innerHTML = "Esgotado";
      } else {
        btnShop.classList.add("btn", "deep-orange");
        btnShop.innerHTML = "Comprar";
        // btnShop.href = "#";
        btnShop.dataset.id = produto._id;
        btnShop.dataset.nome = produto.name;
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
