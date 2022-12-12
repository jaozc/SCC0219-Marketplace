import { ProductRepository } from '../repositories/product.repository.js';
import { ProductValidator } from '../utils/validators/product.validator.js';
import { getDefaultError } from '../utils/errors.utils.js';


export class ProductController {

  static async getAll(_, res) {
    try{
      const data = await ProductRepository.getAll();

      res.status(200).send(data);
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async getById(req, res) {
    try{
      const data = await ProductRepository.getById(req.params.id);

      res.status(200).send(data);
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async post(req, res) {
    try {
      const productValidator = new ProductValidator();

      if (productValidator.postValidation(req.body)) {
        const { name, description, price, quantity, sold, image } = req.body;
        console.log("body " + JSON.stringify(req.body))
        console.log("sold " +  sold)
        await ProductRepository.create({ name, description, price, quantity, sold, image});

        res.status(201).send({ message: "Produto criado com sucesso" });
      } else {
        res.status(400).send({ errors: productValidator.getErrors() });
      }
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async put(req, res) {
    try {
      const productValidator = new ProductValidator();

      if(productValidator.putValidation(req.body)) {
          await ProductRepository.update(req.params.id, req.body);

          res.status(200).send({ message: 'Produto atualizado com sucesso!' });
      } else {
          res.status(200).send(productValidator.getErrors());
      }
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async delete(req, res) {
    try {
      const deleted = await ProductRepository.delete(req.params.id);

      const message = deleted
        ? 'Produto removido com sucesso!'
        : 'Produto não encontrado!';

      res.status(200).send({ message });
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }
}
