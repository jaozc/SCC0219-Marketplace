import { handleLogoff } from "../controllers/LoginController.js";
import {
  handleAddProduct,
  handleUpdateProduct,
} from "../controllers/ProductController.js";
import { handleCreateAdm } from "../controllers/UserController.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Área do Administrador");
  }

  setTitle(title) {
    document.title = title;
  }

  async mountAddProduct() {
    let section = document.createElement("div");
    section.classList.add("col", "s12");
    section.id = "addprod";
    let card = document.createElement("div");
    card.classList.add("card");
    let row = document.createElement("div");
    row.classList.add("row");
    let form = document.createElement("form");
    form.classList.add("col", "s12");
    form.id = "addProduct";
    //form.addEventListener("submit", handleAddProduct);
    form.onsubmit = (e) => {
      e.preventDefault();
      handleAddProduct(e);
    };

    section.appendChild(card);
    card.appendChild(row);
    row.appendChild(form);

    let formTitle = document.createElement("h4");
    formTitle.innerHTML = "Adicionar Produto";
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
    labelName.innerHTML = "Nome do Produto";
    inputFieldName.appendChild(labelName);

    let inputName = document.createElement("input");
    inputName.placeholder = "Insira o nome do seu produto";
    inputName.id = "name";
    inputName.name = "productName";
    inputName.type = "text";
    inputName.required = true;
    inputName.classList.add("validate");
    inputFieldName.appendChild(inputName);

    // Preço ======================================

    let rowPrice = document.createElement("div");
    rowPrice.classList.add("row");
    form.appendChild(rowPrice);

    let inputFieldPrice = document.createElement("div");
    inputFieldPrice.classList.add("input-field", "col", "s12");
    rowPrice.appendChild(inputFieldPrice);

    let labelPrice = document.createElement("h6");
    labelPrice.htmlFor = "price";
    labelPrice.innerHTML = "Preço do produto";
    inputFieldPrice.appendChild(labelPrice);

    let inputPrice = document.createElement("input");
    inputPrice.placeholder = "Insira o preço do seu produto";
    inputPrice.id = "price";
    inputPrice.type = "text";
    inputPrice.name = "price";
    inputPrice.required = true;
    inputPrice.classList.add("validate");
    inputFieldPrice.appendChild(inputPrice);

    // Quantidade ======================================

    let rowQuantity = document.createElement("div");
    rowQuantity.classList.add("row");
    form.appendChild(rowQuantity);

    let inputFieldQuantity = document.createElement("div");
    inputFieldQuantity.classList.add("input-field", "col", "s12");
    rowQuantity.appendChild(inputFieldQuantity);

    let labelQuantity = document.createElement("h6");
    labelQuantity.htmlFor = "quantity";
    labelQuantity.innerHTML = "Quantidade do produto";
    inputFieldQuantity.appendChild(labelQuantity);

    let inputQuantity = document.createElement("input");
    inputQuantity.placeholder = "Insira a quantidade do seu produto";
    inputQuantity.id = "quantity";
    inputQuantity.type = "text";
    inputQuantity.name = "quantity";
    inputQuantity.required = true;
    inputQuantity.classList.add("validate");
    inputFieldQuantity.appendChild(inputQuantity);

    // Descricao ======================================

    let rowDescription = document.createElement("div");
    rowDescription.classList.add("row");
    form.appendChild(rowDescription);

    let inputFieldDescription = document.createElement("div");
    inputFieldDescription.classList.add("input-field", "col", "s12");
    rowDescription.appendChild(inputFieldDescription);

    let labelDescription = document.createElement("h6");
    labelDescription.htmlFor = "description";
    labelDescription.innerHTML = "Descrição do produto";
    inputFieldDescription.appendChild(labelDescription);

    let inputDescription = document.createElement("textarea");
    inputDescription.placeholder = "Insira a descrição do seu produto";
    inputDescription.id = "description";
    inputDescription.name = "description";
    inputDescription.required = true;
    inputDescription.classList.add("materialize-textarea");
    inputFieldDescription.appendChild(inputDescription);

    // Upload Imagem ======================================

    let rowImage = document.createElement("div");
    rowImage.classList.add("row");
    form.appendChild(rowImage);

    let inputFieldImage = document.createElement("div");
    inputFieldImage.classList.add("input-field", "col", "s12", "file-field");
    rowImage.appendChild(inputFieldImage);

    let imageText = document.createElement("h6");
    imageText.innerHTML = "Upload imagem";
    inputFieldImage.appendChild(imageText);

    let btnFileUpload = document.createElement("div");
    btnFileUpload.classList.add("btn", "blue");
    let btnName = document.createElement("span");
    btnName.innerHTML = "Upload";
    let inputImage = document.createElement("input");
    inputImage.type = "file";
    inputImage.name = "image";
    inputImage.id = "image";
    inputImage.required = true;
    inputImage.accept = "images/*";

    btnFileUpload.appendChild(btnName);
    btnFileUpload.appendChild(inputImage);
    inputFieldImage.appendChild(btnFileUpload);

    let filePathWrapper = document.createElement("div");
    filePathWrapper.classList.add("file-path-wrapper");
    let inputFilePath = document.createElement("input");
    inputFilePath.classList.add("file-path", "validate");
    inputFilePath.type = "text";
    inputFilePath.name = "filePath";
    inputFilePath.placeholder =
      "Upload da imagem (certifique-se que ela esteja em ./static/images)";

    filePathWrapper.appendChild(inputFilePath);
    inputFieldImage.appendChild(filePathWrapper);

    // Submit ===================================

    let rowSubmit = document.createElement("div");
    rowSubmit.classList.add("row");
    form.appendChild(rowSubmit);

    let colSubmit = document.createElement("div");
    colSubmit.classList.add("col");
    rowSubmit.appendChild(colSubmit);

    let inputSubmit = document.createElement("input");
    inputSubmit.type = "submit";
    inputSubmit.id = "submit";
    inputSubmit.classList.add("btn", "blue");
    inputSubmit.value = "Adicionar";
    colSubmit.appendChild(inputSubmit);

    return section;
  }

  async mountUpdateProduct() {
    let section = document.createElement("div");
    section.classList.add("col", "s12");
    section.id = "updateprod";
    let card = document.createElement("div");
    card.classList.add("card");
    let row = document.createElement("div");
    row.classList.add("row");
    let form = document.createElement("form");
    form.classList.add("col", "s12");
    form.id = "updateProduct";
    //form.addEventListener("submit", handleUpdateProduct);
    form.onsubmit = (e) => {
      // e.preventDefault();
      handleUpdateProduct(e);
    };

    section.appendChild(card);
    card.appendChild(row);
    row.appendChild(form);

    let formTitle = document.createElement("h4");
    formTitle.innerHTML = "Atualizar Produto";
    form.appendChild(formTitle);

    // Select de produtos ========================

    let rowSelect = document.createElement("div");
    rowSelect.classList.add("row");
    form.appendChild(rowSelect);

    let inputFieldSelect = document.createElement("div");
    inputFieldSelect.classList.add("input-field", "col", "s12");
    rowSelect.appendChild(inputFieldSelect);

    let labelSelect = document.createElement("h6");
    labelSelect.innerHTML = "Selecione um produto:";
    inputFieldSelect.appendChild(labelSelect);

    let inputSelect = document.createElement("select");
    inputSelect.classList.add("browser-default");
    inputSelect.name = "productId";
    inputSelect.id = "updateProductId";
    inputFieldSelect.appendChild(inputSelect);

    const produtos = JSON.parse(localStorage.getItem("produtos"));
    for (const key in produtos) {
      let inputOption = document.createElement("option");
      inputOption.value = key;
      inputOption.innerHTML = "ID: " + key + " Nome: " + produtos[key].nome;
      inputSelect.appendChild(inputOption);
    }

    // Nome =======================================

    let rowName = document.createElement("div");
    rowName.classList.add("row");
    form.appendChild(rowName);

    let inputFieldName = document.createElement("div");
    inputFieldName.classList.add("input-field", "col", "s12");
    rowName.appendChild(inputFieldName);

    let labelName = document.createElement("h6");
    labelName.htmlFor = "name";
    labelName.innerHTML = "Nome do Produto";
    inputFieldName.appendChild(labelName);

    let inputName = document.createElement("input");
    inputName.placeholder = "Insira o novo nome do seu produto";
    inputName.id = "updateName";
    inputName.name = "productName";
    inputName.type = "text";
    inputName.required = true;
    inputName.classList.add("validate");
    inputFieldName.appendChild(inputName);

    // Preço ======================================

    let rowPrice = document.createElement("div");
    rowPrice.classList.add("row");
    form.appendChild(rowPrice);

    let inputFieldPrice = document.createElement("div");
    inputFieldPrice.classList.add("input-field", "col", "s12");
    rowPrice.appendChild(inputFieldPrice);

    let labelPrice = document.createElement("h6");
    labelPrice.htmlFor = "price";
    labelPrice.innerHTML = "Preço do produto";
    inputFieldPrice.appendChild(labelPrice);

    let inputPrice = document.createElement("input");
    inputPrice.placeholder = "Insira o novo preço do seu produto";
    inputPrice.id = "updatePrice";
    inputPrice.type = "text";
    inputPrice.name = "price";
    inputPrice.required = true;
    inputPrice.classList.add("validate");
    inputFieldPrice.appendChild(inputPrice);

    // Quantidade ======================================

    let rowQuantity = document.createElement("div");
    rowQuantity.classList.add("row");
    form.appendChild(rowQuantity);

    let inputFieldQuantity = document.createElement("div");
    inputFieldQuantity.classList.add("input-field", "col", "s12");
    rowQuantity.appendChild(inputFieldQuantity);

    let labelQuantity = document.createElement("h6");
    labelQuantity.htmlFor = "quantity";
    labelQuantity.innerHTML = "Quantidade do produto";
    inputFieldQuantity.appendChild(labelQuantity);

    let inputQuantity = document.createElement("input");
    inputQuantity.placeholder = "Insira a nova quantidade do seu produto";
    inputQuantity.id = "updateQuantity";
    inputQuantity.type = "text";
    inputQuantity.name = "quantity";
    inputQuantity.required = true;
    inputQuantity.classList.add("validate");
    inputFieldQuantity.appendChild(inputQuantity);

    // Descricao ======================================

    let rowDescription = document.createElement("div");
    rowDescription.classList.add("row");
    form.appendChild(rowDescription);

    let inputFieldDescription = document.createElement("div");
    inputFieldDescription.classList.add("input-field", "col", "s12");
    rowDescription.appendChild(inputFieldDescription);

    let labelDescription = document.createElement("h6");
    labelDescription.htmlFor = "description";
    labelDescription.innerHTML = "Descrição do produto";
    inputFieldDescription.appendChild(labelDescription);

    let inputDescription = document.createElement("textarea");
    inputDescription.placeholder = "Insira a nova descrição do seu produto";
    inputDescription.id = "updateDescription";
    inputDescription.name = "description";
    inputDescription.required = true;
    inputDescription.classList.add("materialize-textarea");
    inputFieldDescription.appendChild(inputDescription);

    // Upload Imagem ======================================

    let rowImage = document.createElement("div");
    rowImage.classList.add("row");
    form.appendChild(rowImage);

    let inputFieldImage = document.createElement("div");
    inputFieldImage.classList.add("input-field", "col", "s12", "file-field");
    rowImage.appendChild(inputFieldImage);

    let imageText = document.createElement("h6");
    imageText.innerHTML = "Upload imagem";
    inputFieldImage.appendChild(imageText);

    let btnFileUpload = document.createElement("div");
    btnFileUpload.classList.add("btn", "blue");
    let btnName = document.createElement("span");
    btnName.innerHTML = "Upload";
    let inputImage = document.createElement("input");
    inputImage.type = "file";
    inputImage.name = "image";
    inputImage.id = "updateImage";
    inputImage.required = true;
    inputImage.accept = "images/*";

    btnFileUpload.appendChild(btnName);
    btnFileUpload.appendChild(inputImage);
    inputFieldImage.appendChild(btnFileUpload);

    let filePathWrapper = document.createElement("div");
    filePathWrapper.classList.add("file-path-wrapper");
    let inputFilePath = document.createElement("input");
    inputFilePath.classList.add("file-path", "validate");
    inputFilePath.type = "text";
    inputFilePath.name = "filePath";
    inputFilePath.placeholder =
      "Upload da nova imagem (certifique-se que ela esteja em ./static/images)";

    filePathWrapper.appendChild(inputFilePath);
    inputFieldImage.appendChild(filePathWrapper);

    // Submit ===================================

    let rowSubmit = document.createElement("div");
    rowSubmit.classList.add("row");
    form.appendChild(rowSubmit);

    let colSubmit = document.createElement("div");
    colSubmit.classList.add("col");
    rowSubmit.appendChild(colSubmit);

    let inputSubmit = document.createElement("input");
    inputSubmit.type = "submit";
    inputSubmit.id = "updateSubmit";
    inputSubmit.classList.add("btn", "blue");
    inputSubmit.value = "Adicionar";
    colSubmit.appendChild(inputSubmit);

    return section;
  }

  async mountListUser() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    let section = document.createElement("div");
    section.classList.add("col", "s12");
    section.id = "listusers";

    let row = document.createElement("div");
    row.classList.add("row");
    section.appendChild(row);

    let col = document.createElement("div");
    col.classList.add("col", "s12");
    row.appendChild(col);

    let card = document.createElement("div");
    card.classList.add("card");
    col.appendChild(card);

    for (const key in usuarios) {
      let newUser = document.createElement("div");
      newUser.classList.add("card-content");

      let userTitle = document.createElement("span");
      userTitle.classList.add("card-title");
      userTitle.innerHTML = "Usuário: " + key;
      newUser.appendChild(userTitle);

      let userInfo = document.createElement("p");
      userInfo.classList.add("wordwrap");
      userInfo.innerHTML = JSON.stringify(usuarios[key]);
      newUser.appendChild(userInfo);

      card.appendChild(newUser);
    }

    return section;
  }

  async mountAddAdm() {
    let section = document.createElement("div");
    section.classList.add("col", "s12");
    section.id = "addadm";

    let card = document.createElement("div");
    card.classList.add("card");
    let row = document.createElement("div");
    row.classList.add("row");
    let form = document.createElement("form");
    form.classList.add("col", "s12");
    form.id = "createAdm";
    //form.addEventListener("submit", handleAddProduct);
    form.onsubmit = (e) => {
      handleCreateAdm(e);
    };

    section.appendChild(card);
    card.appendChild(row);
    row.appendChild(form);

    let formTitle = document.createElement("h4");
    formTitle.innerHTML = "Adicionar Administrador";
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
    inputName.placeholder = "Insira o seu nome";
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
    inputSobrenome.placeholder = "Insira o seu sobrenome";
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
    inputEmail.placeholder = "Insira o seu email";
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
    inputPassword.placeholder = "Insira a sua senha";
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
    inputTelefone.placeholder = "Insira a sua senha";
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
    inputEndereco.placeholder = "Insira a sua senha";
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
    inputSubmit.value = "Cadastrar";
    colSubmit.appendChild(inputSubmit);

    return section;
  }

  async getHtml() {
    let container = document.createElement("div");
    container.classList.add("container");

    let tabRow = document.createElement("div");
    tabRow.classList.add("row");
    container.appendChild(tabRow);

    let tabCol = document.createElement("div");
    tabCol.classList.add("col", "s12");
    tabRow.appendChild(tabCol);

    let ulTab = document.createElement("ul");
    ulTab.classList.add("tabs");
    tabCol.appendChild(ulTab);

    // Tab - Adicionar Produto ====================
    let liAddProd = document.createElement("li");
    liAddProd.classList.add("tab", "col", "s3");
    ulTab.appendChild(liAddProd);

    let linkAddProd = document.createElement("a");
    linkAddProd.href = "#addprod";
    linkAddProd.innerHTML = "Adicionar Produto";
    liAddProd.appendChild(linkAddProd);

    // Tab - Atualizar Produto ====================
    let liUpdateProd = document.createElement("li");
    liUpdateProd.classList.add("tab", "col", "s3");
    ulTab.appendChild(liUpdateProd);

    let linkUpdateProd = document.createElement("a");
    linkUpdateProd.href = "#updateprod";
    linkUpdateProd.innerHTML = "Atualizar Produto";
    liUpdateProd.appendChild(linkUpdateProd);

    // Tab - Listar Usuários ====================
    let liListUsers = document.createElement("li");
    liListUsers.classList.add("tab", "col", "s3");
    ulTab.appendChild(liListUsers);

    let linkListUsers = document.createElement("a");
    linkListUsers.href = "#listusers";
    linkListUsers.innerHTML = "Listar Usuários";
    liListUsers.appendChild(linkListUsers);

    // Tab - Adicionar Administrador ===========
    let liAddAdm = document.createElement("li");
    liAddAdm.classList.add("tab", "col", "s3");
    ulTab.appendChild(liAddAdm);

    let linkAddAdm = document.createElement("a");
    linkAddAdm.href = "#addadm";
    linkAddAdm.innerHTML = "Adicionar Administrador";
    liAddAdm.appendChild(linkAddAdm);

    tabRow.appendChild(await this.mountAddProduct());
    tabRow.appendChild(await this.mountUpdateProduct());
    tabRow.appendChild(await this.mountListUser());
    tabRow.appendChild(await this.mountAddAdm());

    let logoff = document.createElement("a");
    logoff.classList.add("btn", "red");
    logoff.addEventListener("click", handleLogoff);
    logoff.innerHTML = "Sair da Aplicação";

    tabRow.appendChild(logoff);

    return container;
  }
}
