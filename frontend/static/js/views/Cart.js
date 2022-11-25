import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("Cart");
    }

    async getHtml() {
        return `
        <h2>
            I'm Cart
        </h2>
        `;
    }
}