
import { Product } from '../models/Product.model.js';


export class ProductRepository {

  static async create(productData) {
    const newproduct = new Product(productData);

    await newproduct.save();
  }

  static async getAll() {
    const products = await Product.find();

    return products;
  }

  static async getById(id) {
    const product = await Product.findById(id);

    return product;
  }

  static async update(id, productData) {
    const updatedProduct = await Product.findByIdAndUpdate(id, productData);

    return updatedProduct;
  }

  static async delete(_id) {
    const deleted = await Product.deleteOne({ _id });

    return deleted;
  }
}