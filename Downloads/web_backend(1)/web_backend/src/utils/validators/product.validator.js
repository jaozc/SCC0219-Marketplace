
import { Validator } from './validator.js';

export class ProductValidator extends Validator {

  postValidation(data) {
    const { name, description, price, quantity } = data;

    // Required validation
    this.isRequired(name, 'O campo Nome é obrigatório');
    this.isRequired(description, 'O campo Descrição é obrigatório');
    this.isRequired(price, 'O campo Preço é obrigatório');
    this.isRequired(quantity, 'O campo Quantidade é obrigatório');

    if(!this.validate()) {
      return false;
    }

    // Name this
    this.hasMinLen(name, 5, 'O nome deve possuir mínimo de 5 caracteres');
    this.hasMaxLen(name, 50, 'O nome deve possuir máximo de 50 caracteres');

    // Description this
    this.hasMinLen(description, 10, 'Descriçãodeve conter no mínimo 10 caracteres');
    this.hasMaxLen(description, 500, 'Descrição deve conter no máximo 500 caracteres');

    return this.validate();
  }

  putValidation(data) {
    const { name, description, price, quantity } = data;

    if (name) {
      this.hasMinLen(name, 5, 'O nome deve possuir mínimo de 5 caracteres');
      this.hasMaxLen(name, 50, 'O nome deve possuir máximo de 50 caracteres');
    }
    if (price) {
      this.isRequired(price, 'Preço deve ser maior que 0');
    }

    if (description) {
      this.hasMinLen(description, 10, 'Descriçãodeve conter no mínimo 10 caracteres');
      this.hasMaxLen(description, 400, 'Descrição deve conter no máximo 400 caracteres');
    }

    if (quantity) {
      this.isRequired(quantity, 'Quantidade deve ser maior que 0');
    }

    return this.validate()
  }
}
