import { handleUpdateUser } from "../controllers/UserController.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Área do Usuário");
  }

  setTitle(title) {
    document.title = title;
  }

  mountUpdateUser() {
    const user = JSON.parse(localStorage.getItem("logado"));

    let container = document.createElement("div");
    container.classList.add("container");

    let section = document.createElement("div");
    section.classList.add("section");
    section.id = "updateuser";
    container.appendChild(section);

    let card = document.createElement("div");
    card.classList.add("card");
    let row = document.createElement("div");
    row.classList.add("row");
    let form = document.createElement("form");
    form.classList.add("col", "s12");
    form.id = "updateUser";
    //form.addEventListener("submit", handleAddProduct);
    form.onsubmit = (e) => {
      e.preventDefault();
      handleUpdateUser(e);
    };

    section.appendChild(card);
    card.appendChild(row);
    row.appendChild(form);

    let formTitle = document.createElement("h4");
    formTitle.innerHTML = "Atualizar Perfil";
    form.appendChild(formTitle);

    // Nome =======================================

    let rowName = document.createElement("div");
    rowName.classList.add("row");
    form.appendChild(rowName);

    let inputFieldName = document.createElement("div");
    inputFieldName.classList.add("input-field", "col", "s12");
    rowName.appendChild(inputFieldName);

    let labelName = document.createElement("h6");
    labelName.htmlFor = "name";
    labelName.innerHTML = "Primeiro Nome:";
    inputFieldName.appendChild(labelName);

    let inputName = document.createElement("input");
    inputName.value = user.nome;
    inputName.id = "nome";
    inputName.name = "userNome";
    inputName.type = "text";
    inputName.required = true;
    inputName.classList.add("validate");
    inputFieldName.appendChild(inputName);

    // Sobrenome ======================================

    let rowSobrenome = document.createElement("div");
    rowSobrenome.classList.add("row");
    form.appendChild(rowSobrenome);

    let inputFieldSobrenome = document.createElement("div");
    inputFieldSobrenome.classList.add("input-field", "col", "s12");
    rowSobrenome.appendChild(inputFieldSobrenome);

    let labelSobrenome = document.createElement("h6");
    labelSobrenome.htmlFor = "sobrenome";
    labelSobrenome.innerHTML = "Último Nome:";
    inputFieldSobrenome.appendChild(labelSobrenome);

    let inputSobrenome = document.createElement("input");
    inputSobrenome.value = user.sobrenome;
    inputSobrenome.id = "sobrenome";
    inputSobrenome.type = "text";
    inputSobrenome.name = "sobrenome";
    inputSobrenome.required = true;
    inputSobrenome.classList.add("validate");
    inputFieldSobrenome.appendChild(inputSobrenome);

    // Email ======================================

    let rowEmail = document.createElement("div");
    rowEmail.classList.add("row");
    form.appendChild(rowEmail);

    let inputFieldEmail = document.createElement("div");
    inputFieldEmail.classList.add("input-field", "col", "s12");
    rowEmail.appendChild(inputFieldEmail);

    let labelEmail = document.createElement("h6");
    labelEmail.htmlFor = "email";
    labelEmail.innerHTML = "Email";
    inputFieldEmail.appendChild(labelEmail);

    let inputEmail = document.createElement("input");
    inputEmail.value = user.email;
    inputEmail.id = "email";
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.required = true;
    inputEmail.classList.add("validate");
    inputFieldEmail.appendChild(inputEmail);

    // Password ======================================

    let rowPassword = document.createElement("div");
    rowPassword.classList.add("row");
    form.appendChild(rowPassword);

    let inputFieldPassword = document.createElement("div");
    inputFieldPassword.classList.add("input-field", "col", "s12");
    rowPassword.appendChild(inputFieldPassword);

    let labelPassword = document.createElement("h6");
    labelPassword.htmlFor = "Password";
    labelPassword.innerHTML = "Password";
    inputFieldPassword.appendChild(labelPassword);

    let inputPassword = document.createElement("input");
    inputPassword.value = user.password;
    inputPassword.id = "password";
    inputPassword.type = "password";
    inputPassword.name = "password";
    inputPassword.required = true;
    inputPassword.classList.add("validate");
    inputFieldPassword.appendChild(inputPassword);

    // Telefone ======================================

    let rowTelefone = document.createElement("div");
    rowTelefone.classList.add("row");
    form.appendChild(rowTelefone);

    let inputFieldTelefone = document.createElement("div");
    inputFieldTelefone.classList.add("input-field", "col", "s12");
    rowTelefone.appendChild(inputFieldTelefone);

    let labelTelefone = document.createElement("h6");
    labelTelefone.htmlFor = "Telefone";
    labelTelefone.innerHTML = "Telefone";
    inputFieldTelefone.appendChild(labelTelefone);

    let inputTelefone = document.createElement("input");
    inputTelefone.value = user.telefone;
    inputTelefone.id = "telefone";
    inputTelefone.type = "text";
    inputTelefone.name = "telefone";
    inputTelefone.required = true;
    inputTelefone.classList.add("validate");
    inputFieldTelefone.appendChild(inputTelefone);

    // Endereco ======================================

    let rowEndereco = document.createElement("div");
    rowEndereco.classList.add("row");
    form.appendChild(rowEndereco);

    let inputFieldEndereco = document.createElement("div");
    inputFieldEndereco.classList.add("input-field", "col", "s12");
    rowEndereco.appendChild(inputFieldEndereco);

    let labelEndereco = document.createElement("h6");
    labelEndereco.htmlFor = "Endereco";
    labelEndereco.innerHTML = "Endereco";
    inputFieldEndereco.appendChild(labelEndereco);

    let inputEndereco = document.createElement("input");
    inputEndereco.value = user.endereco;
    inputEndereco.id = "endereco";
    inputEndereco.type = "text";
    inputEndereco.name = "endereco";
    inputEndereco.required = true;
    inputEndereco.classList.add("validate");
    inputFieldEndereco.appendChild(inputEndereco);

    // Submit ===================================

    let rowSubmit = document.createElement("div");
    rowSubmit.classList.add("row");
    form.appendChild(rowSubmit);

    let colSubmit = document.createElement("div");
    colSubmit.classList.add("col");
    rowSubmit.appendChild(colSubmit);

    let inputSubmit = document.createElement("input");
    inputSubmit.type = "submit";
    inputSubmit.id = "admSubmit";
    inputSubmit.classList.add("btn", "blue");
    inputSubmit.value = "Atualizar";
    colSubmit.appendChild(inputSubmit);

    return container;
  }
  async getHtml() {
    return this.mountUpdateUser();
  }
}
