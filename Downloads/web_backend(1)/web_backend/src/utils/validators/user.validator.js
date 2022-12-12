import { Validator } from './validator.js';

export class UserValidator extends Validator {


  postValidation(data) {
    const { name, email, phone, password, address } = data;

    this.isRequired(name, 'O campo Nome é obrigatório');
    this.isRequired(email, 'O campo Email é obrigatório');
    this.isRequired(phone, 'O campo Telefone é obrigatório');
    this.isRequired(address, 'O campo Endereço é obrigatório');
    this.isRequired(password, 'O campo Senha é obrigatório');

    if (!this.validate()) {
      return false;
    }

    // Name validation
    this.hasMinLen(name, 5, 'O nome deve possuir mínimo de 5 caracteres');
    this.hasMaxLen(name, 50, 'O nome deve possuir máximo de 50 caracteres');

    // Email validation
    this.isEmail(email, 'O email deve estar no formato user@domain.com');

    // Phone validation
    this.hasMinLen(phone, 10, 'O número de telefone deve estar no formato (dd) 9999-9999');
    this.hasMaxLen(phone, 12, 'O número de telefone deve estar no formato (dd) 9999-9999');

    // Address validation
    this.hasMinLen(address, 10, 'O endereço deve possuir no mínimo 10 caracteres');


    return this.validate();
  }

  putValidation(data) {
    const { name, email, phone, password, address } = data;

    // Name validation
    if (name) {
      this.hasMinLen(name, 5, 'O nome deve possuir mínimo de 5 caracteres');
      this.hasMaxLen(name, 50, 'O nome deve possuir máximo de 50 caracteres');
    }

    // Email validation
    if (email) {
      this.isEmail(email, 'O email deve estar no formato user@domain.com');
    }

    // Phone validation
    if (phone) {
      this.hasMinLen(phone, 10, 'O número de telefone deve estar no formato (dd) 9999-9999');
      this.hasMaxLen(phone, 12, 'O número de telefone deve estar no formato (dd) 9999-9999');
    }

    // Address validation
    if (address) {
      this.hasMinLen(address, 10, 'O endereço deve possuir no mínimo 10 caracteres');
    }

    return this.validate();
  }
}