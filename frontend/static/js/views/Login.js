import { handleLogin } from "../controllers/LoginController.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Login");
  }

  async getHtml() {
    let container = document.createElement("div");
    container.classList.add("container");

    let section = document.createElement("div");
    section.classList.add("section");

    container.appendChild(section);

    let row = document.createElement("div");
    row.classList.add("row");

    section.appendChild(row);

    let card = document.createElement("div");
    card.classList.add(
      "card",
      "row",
      "col",
      "s12",
      "m8",
      "offset-m2",
      "l4",
      "offset-l4"
    );

    row.appendChild(card);

    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    card.appendChild(cardContent);

    let loginTitle = document.createElement("h4");
    loginTitle.classList.add("center", "black-text");
    loginTitle.innerHTML = "Login";

    cardContent.appendChild(loginTitle);

    let loginForm = document.createElement("div");
    loginForm.classList.add("row", "s12");

    cardContent.appendChild(loginForm);

    let userInputField = document.createElement("div");
    userInputField.classList.add("input-field");

    loginForm.appendChild(userInputField);

    let userInput = document.createElement("input");
    userInput.type = "email";
    userInput.name = "username";
    userInput.id = "username";
    userInput.placeholder = "Email*";
    userInput.required = true;

    userInputField.appendChild(userInput);

    let passwordInputField = document.createElement("div");
    passwordInputField.classList.add("input-field");

    loginForm.appendChild(passwordInputField);

    let passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.name = "password";
    passwordInput.id = "password";
    passwordInput.placeholder = "Senha*";
    passwordInput.required = true;

    passwordInputField.appendChild(passwordInput);

    let submitButtonField = document.createElement("div");
    submitButtonField.classList.add("col", "m5", "center");

    loginForm.appendChild(submitButtonField);

    let submitButton = document.createElement("button");
    submitButton.classList.add(
      "btn",
      "btn-large",
      "waves-effect",
      "waves-light",
      "blue"
    );
    submitButton.innerHTML = 'Login<i class="material-icons right">send</i>';
    submitButton.addEventListener("click", handleLogin);

    submitButtonField.appendChild(submitButton);

    let regisButtonField = document.createElement("div");
    regisButtonField.classList.add("col", "m5", "center");

    loginForm.appendChild(regisButtonField);

    let regisButton = document.createElement("a");
    regisButton.classList.add(
      "btn",
      "btn-large",
      "waves-effect",
      "waves-light",
      "deep-orange"
    );
    regisButton.dataset.link = "";
    regisButton.innerHTML = "Cadastro";
    regisButton.href = "/register";
    regisButtonField.appendChild(regisButton);
    return container;
  }
}
