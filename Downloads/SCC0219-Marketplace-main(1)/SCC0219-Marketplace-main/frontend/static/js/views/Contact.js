import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("Contact");
    }

    handleContact() {
        let section = document.createElement('div');
        section.classList.add('section', 'no-pad-bot');
        section.id = "index-banner";

        let container = document.createElement('div');
        container.classList.add('container');

        let headerTitle = document.createElement('h1');
        headerTitle.classList.add('header', 'center', 'blue-text');
        headerTitle.innerHTML = "Fale Conosco!";

        container.appendChild(headerTitle);
        
        let promotionTextDiv = document.createElement('div');
        promotionTextDiv.classList.add('row', 'center');

        let promotionText = document.createElement('h5');
        promotionText.classList.add('header','col','s12','light');
        promotionText.innerHTML = "Vamos ficar muito contentes em te ouvir!";

        promotionTextDiv.appendChild(promotionText);
        container.appendChild(promotionTextDiv);

        let promotionBtnDiv = document.createElement('div');
        promotionBtnDiv.classList.add('row', 'center');

        let btnPromotion = document.createElement('a');
        btnPromotion.classList.add('btn-large', 'waves-effect', 'waves-light', 'green', 'darken-2');
        btnPromotion.id = "promotion-button";
        btnPromotion.href ="https://www.whatsapp.com/";
        btnPromotion.innerHTML = `<i class="material-icons left">call</i>` + "Whatsapp"

        promotionBtnDiv.appendChild(btnPromotion);
        container.appendChild(promotionBtnDiv);

        section.appendChild(container);

        return section;
    }

    async getHtml() {
        return this.handleContact();
    }
}