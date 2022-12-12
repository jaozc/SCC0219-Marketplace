import express from 'express';

import { ProductController } from '../controllers/product.controller.js';
import { AuthService } from '../services/auth.service.js';


export class ProductRoute {

  constructor() {
    this.router = express.Router();

    const authService = new AuthService();

    this.router.get('/', ProductController.getAll);
    this.router.get('/:id', ProductController.getById);

    this.router.post('/', authService.isAdmin, ProductController.post);

    this.router.put('/:id', authService.isAdmin, ProductController.put);

    this.router.delete('/:id', authService.isAdmin, ProductController.delete);
  }

  getRouter() { return this.router; }
}