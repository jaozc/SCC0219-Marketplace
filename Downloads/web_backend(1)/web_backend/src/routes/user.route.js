import express from 'express';

import { UserController } from '../controllers/user.controller.js';
import { AuthService } from '../services/auth.service.js';


export class UserRoute {

  constructor() {
    this.router = express.Router();

    const authService = new AuthService();

    this.router.post('/login', UserController.authenticate);
    this.router.get('/:id', UserController.getById);
    this.router.get('/', UserController.getAll);


    this.router.post('/', UserController.post);

    this.router.put('/:id', authService.authorize, UserController.put);

    this.router.delete('/:id', authService.isAdmin, UserController.delete);
  }

  getRouter() { return this.router; }
}