import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle("Login");
    }

    async getHtml() {
        return `
        <div class="container">
            <div class="section">
                <div class="row">
                    <div class="row card col s12 m8 offset-m2 l4 offset-l4">
                        <div class="card-content">
                                <h4 class="center black-text">Login</h4>
                                <form class="row s12">
                                <div class="col s12">
                                    <div class="input-field">
                                        <input type="text" name="" placeholder="Usuário*">
                                    </div>
                                </div>
                                    <div class="col s12">
                                    <div class="input-field">
                                        <input type="password" class="" name="" placeholder="Senha*">
                                    </div>
                                </div>
                                <div class="col s12">
                                    <p><label><input type="checkbox"></label></p>
                                </div>
                                <div class="col s12 center">
                                    <button type="button" 
                                            class="btn btn-large waves-effect waves-light blue"
                                            
                                            >Login<i class="material-icons right">send</i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}