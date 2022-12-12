import { mongoose } from 'mongoose';

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [ true, 'O usuário do pedido é obrigatório' ],
  },
  date: {
    type: String,
    required: true,
    required: [ true, 'Data do pedido é obrigatória' ],
  },
  hour: {
    type: String,
    required: true,
    required: [ true, 'Hora do pedido é obrigatória' ],
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: true,
      default: 1
    },
  }],
  totalPrice: {
    type: Number,
    required: true,
    required: [ true, 'O valor do pedido é obrigatório' ],
  }
});

export const Order = mongoose.model('Order', schema);