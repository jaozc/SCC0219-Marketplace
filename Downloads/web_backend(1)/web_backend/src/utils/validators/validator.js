
// @abstract
export class Validator {

    constructor() { this.errors = []; }

    addErrorMesage(message) {
        this.errors.push({ message: message });
    }

    isRequired(value, message) {
        if (!value || value.length <= 0) {
            this.addErrorMesage(message);
        }
    }

    hasMinLen(value, min, message) {
        if (!value || value.length < min) {
            this.addErrorMesage(message);
        }
    }

    hasMaxLen(value, max, message) {
        if (!value || value.length > max) {
            this.addErrorMesage(message);
        }
    }

    isFixedLen = (value, len, message) => {
        if (value.length !== len) {
            this.addErrorMesage(message);
        }
    }

    isEmail = (value, message) => {
        const reg = new RegExp(
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
        );

        if (!reg.test(value)) {
            this.addErrorMesage(message);
        }
    }

    validPassword = (value, message) => {
        const reg = new RegExp(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        );

        if (!reg.test(value)) {
            this.addErrorMesage(message);
        }
    }

    contains = (data, value, message) => {
        if (data.includes(value)) {
            this.addErrorMesage(message);
        }
    }

    isLower = (data, value, message) => {
        if (data < value) {
            this.addErrorMesage(message);
        }
    }

    isHigher = (data, value, message) => {
        if (data > value) {
            this.addErrorMesage(message);
        }
    }

    getErrors()     { return this.errors; }
    clearErrors()   { this.errors.clear(); }
    validate()      { return !this.errors.length; }
}