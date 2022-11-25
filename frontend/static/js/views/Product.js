import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <h2>
            I'm Product
        </h2>
        `;
    }
}