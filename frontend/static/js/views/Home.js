import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("Home");
    }



    handleProducts() {
        let produtos = JSON.parse(localStorage.getItem("produtos"));
        let itemCount = 0;
        let retVal = "";
        for(const key in produtos) {
            if(itemCount === 0) {
                retVal += `<div class="row">`;
            }
            retVal += ` <div class="col s12 m3">
                            <div class="card">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src="${produtos[key].urlImage}">
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator black-text text-darken-4">${produtos[key].nome}</span>
                                    <p class="description">${produtos[key].descricao}</p>
                                    <p class="bold">Valor: R$ ${produtos[key].valor}</p>
                                </div>
                                <div class="card-action">
                                    <a class="btn deep-orange addToCart" 
                                        href="#"
                                        dataset-item=${produtos[key]}
                                    >
                                        Comprar
                                    </a>
                                    <a class="btn blue" href="#">Visualizar</a>
                                </div>
                            </div>
                        </div>
                        `;
            itemCount++;
            if(itemCount === 4){
                retVal += `</div>`;
                itemCount = 0;
            }
        }
        if(itemCount != 0) {
            retVal += `</div>`;
        }
        return retVal;
    }

    async getHtml() {
        return `
        <div class="section no-pad-bot" id="index-banner">
            <div class="container">
                <br><br>
                <h1 class="header center blue-text">Propaganda bacana!</h1>
                <div class="row center">
                    <h5 class="header col s12 light">Promoção imperdivel de um produto que você não pode perder!</h5>
                </div>
                <div class="row center">
                    <a href="/" id="download-button" class="btn-large waves-effect waves-light deep-orange">Comprar Agora</a>
                </div>
                <br><br>
            </div>
        </div>

        <div class="container">
            <div class="section">
                ${this.handleProducts()}
            </div>
        </div>
        `;
    
    }
}