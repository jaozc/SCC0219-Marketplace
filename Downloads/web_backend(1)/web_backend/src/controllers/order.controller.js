import { OrderRepository } from '../repositories/order.repository.js';
import { ProductRepository } from '../repositories/product.repository.js';
import { getDefaultError } from '../utils/errors.utils.js';


export class OrderController {

  static async getAll(_, res) {
    try{
      const data = await OrderRepository.getAll();

      res.status(200).send(data);
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async getByUserId(req, res) {
    try{
      const data = await OrderRepository.getByUserId(req.params.userId);

      res.status(200).send(data);
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async getById(req, res) {
    try{
      const data = await OrderRepository.getById(req.params.id);

      res.status(200).send(data);
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async post(req, res) {
    try {
      const { user, date, hour, items, totalPrice } = req.body;

      items.forEach(async item => {
        const product = await ProductRepository.getById(item.product);
        const updatedProduct = {
          quantity: product.quantity - item.quantity,
          sold: product.sold + item.quantity,
        };

        await ProductRepository.update(item.product, updatedProduct);
      });

      await OrderRepository.create({ user, date, hour, items, totalPrice });

      res.status(201).send({ message: "Pedido realizado com sucesso!" });
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

}
