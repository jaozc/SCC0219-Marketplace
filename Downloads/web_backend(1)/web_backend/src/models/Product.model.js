import { mongoose } from 'mongoose';

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'O nome é obrigatório' ],
        trim: true,
    },
    description: {
        type: String,
        required: [ true, 'A descrição é obrigatória' ],
    },
    price: {
        type: Number,
        trim: true,
        required: [ true, 'O preço é obrigatório' ],
    },
    quantity: {
        type: Number,
        required: [ true, 'A quantidade é obrigatória' ],
        default: 1,
    },
    sold: {
      type: Number,
      required: false,
      default: 0,
    },
    image: {
        type: String,
    },
});

export const Product = mongoose.model('Product', schema);