import { mongoose } from 'mongoose';

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'O nome é obrigatório' ],
    },
    email: {
        type: String,
        required: [ true, 'O email é obrigatório' ],
        unique: true,
    },
    password: {
        type: String,
        required: [ true, 'A senha de usuário é obrigatória' ],
    },
    role: {
        type: String,
        required: true,
        enum: [ 'user', 'admin' ],
        default: 'user'
    },
    phone: {
        type: String,
        required: [true, 'O número de telefone é obrigatório'],
        pattern: "^(\\([0-9]{2}\\))?[0-9]{4}-[0-9]{4}$"
    },
    address: {
        type: String,
        required: [true, 'O endereço é obrigatório']
    },
});

export const User = mongoose.model('User', schema);