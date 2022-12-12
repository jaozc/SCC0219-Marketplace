import express from 'express';

import { OrderController } from '../controllers/order.controller.js';
import { AuthService } from '../services/auth.service.js';


export class OrderRoute {

  constructor() {
    this.router = express.Router();

    const authService = new AuthService();

    this.router.get('/', OrderController.getAll);
    this.router.get('/:id', authService.isAdmin, OrderController.getById);
    this.router.get('/user/:userId', authService.authorize, OrderController.getByUserId);

    this.router.post('/', OrderController.post);
  }

  getRouter() { return this.router; }
}