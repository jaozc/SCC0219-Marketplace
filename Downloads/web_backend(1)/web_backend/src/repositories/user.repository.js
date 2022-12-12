
import { User } from '../models/User.model.js';

import md5 from 'md5';


export class UserRepository {

  static async create(userData) {
    // checa se email ja existe
    const findEmail = await User.findOne({ email:userData.email });

    if (findEmail !== null) {
      return null;
    }
    const newUser = new User(userData);
    console.log("new user" + JSON.stringify(userData))

    return await newUser.save();
  }

  static async authenticate({ email, password }) {
    const userAuthenticatedData = await User.findOne({
      email,
      // password: md5(password + global.SALT_KEY), funciona pra criar, mas da problema na hora do update
      password: password

    });

    return userAuthenticatedData;
  }

  static async getById(id) {
    const user = await User.findById(id);
    console.log(user)
    return user;
  }

  static async update(id, userData) {
    const update = { ...userData };

    const { email, password } = userData;

    // checa se o email eh de outro usuario
    const findEmail = await User.findOne({ email });
    if(findEmail._id != id && findEmail !== null) {
      return null;  
    }

    if (password) {
      //update.password = md5(password + global.SALT_KEY); nao consegui fazer funcionar ainda
      update.password = password
    }

    const updatedUser = await User.findByIdAndUpdate(id, update);

    return updatedUser;
  }

  // static async setUserAdmin(email) {
  //   // checa se o usuario existe
  //   const user = await User.find({ email });

  //   if(!user) { return null; }

  //   const userUpdated = await User.findOneAndUpdate({ email }, { roles: 'admin'});

  //   return userUpdated;
  // }

  static async delete(_id) {
    const deleted = await User.deleteOne({ _id });

    return deleted;
  }

  static async getAll() {
    return await User.find();
  }
}