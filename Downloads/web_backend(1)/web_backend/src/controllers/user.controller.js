import { UserRepository } from '../repositories/user.repository.js';
import { AuthService } from '../services/auth.service.js';
import { UserValidator } from '../utils/validators/user.validator.js';
import { getDefaultError } from '../utils/errors.utils.js';

import md5 from 'md5';
import { User } from '../models/User.model.js';

export class UserController {


  static async authenticate(req, res) {
    try {
      const user = await UserRepository.authenticate(req.body);
      console.log(user);

      if (!user) {
        res.status(204).send({ message: 'Email ou senha inválidos!' });
        return null;
      }

      const authService = new AuthService();
      const { _id, email, name, role } = user;

      const token = await authService.generateToken({ id: _id, email, name, role});

      res.status(200).send({ token, user });
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async getById(req, res) {
    try{
      const data = await UserRepository.getById(req.params.id);
      // console.log(data)
      res.status(200).send(data);
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async post(req, res) {
    try {
      const userValidator = new UserValidator();

      if (userValidator.postValidation(req.body)) {
        console.log("body eh " + JSON.stringify(req.body))
        const { name, phone, email, address, role } = req.body;

        // if(req.body.role === "admin"){
        //   role = req.body.role;
        // }
        // const password = md5(req.body.password + global.SALT_KEY);
        const password = req.body.password;

        const user = await UserRepository.create({ name,  phone, email, address, password, role });
        if(user) {
          res.status(201).send({ message: 'User criado com sucesso!'});
        }
        else {
          res.status(400).send({ message: 'Este email já está em uso!'});
        }
      } else {
        res.status(400).send({ errors: userValidator.getErrors() });
      }
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async put(req, res)  {
    try {
      const userValidator = new UserValidator();

      if(userValidator.putValidation(req.body)) {
          const updatedData = await UserRepository.update(req.params.id, req.body);

          const message = updatedData
            ? 'Informações atualizadas com sucesso!'
            : 'Este email já está em uso!'

          res.status(200).send({ message });
      } else {
          res.status(200).send(userValidator.getErrors());
      }
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async delete(req, res) {
    try {
      const deleted = await UserRepository.delete(req.params.id);

      const message = deleted
        ? 'Cliente removido com sucesso!'
        : 'Usuário não encontrado!';

      res.status(200).send({ message });
    } catch(error) {
      res.status(500).send(getDefaultError(error));
    };
  }

  static async getAll(req, res) {
    try{

      const userList = await UserRepository.getAll()
      res.status(200).send(userList);

    } catch(error) {
      res.status(500).send(getDefaultError(error));
    }
  }
}
