
import { Order } from '../models/Order.model.js';


export class OrderRepository {

  static async create(data) {
    const order = new Order(data);

    return await order.save();
  }

  static async getAll() {
    const orders = await Order.find()
      .populate('user', 'name')
      .populate('items.product', 'name price');

    return orders;
  }

  static async getByUserId(userId) {
    const allUserorders = await Order.find({ user: { _id: userId } });

    return allUserorders;
  }

  static async getById(id) {
    const order = await Order.findById(id);

    return order;
  }

  static async delete(_id) {
    const deleted = await Order.deleteOne({ _id });

    return deleted;
  }
}