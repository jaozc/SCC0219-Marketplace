import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
        <h5>
            Fale conosco: 4002-8922
        </h5>
        `;
    }
}