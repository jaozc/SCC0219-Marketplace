import express from 'express';
import bodyParser  from 'body-parser';

import { mongoose } from 'mongoose';

import { MainRoute } from './routes/main.route.js';
import { UserRoute } from './routes/user.route.js';
import { ProductRoute } from './routes/product.route.js';
import { OrderRoute } from './routes/order.route.js';

import { CorsService } from './services/cors.service.js';

import { config } from './config.js';


const app = express();

// MiddleWares
app.use(express.json());
app.use(express.static('public'));

app.use(CorsService.getCorsAccess);

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/',          new MainRoute().getRouter());
app.use('/user',      new UserRoute().getRouter());
app.use('/product',   new ProductRoute().getRouter());
app.use('/order',     new OrderRoute().getRouter());

// Connection
const uri = config.connectionString;
const mongoConfig = {
  useNewUrlParser:    true,
  useUnifiedTopology: true,
}

mongoose.set('strictQuery', false);

// Only connect if you have added the connection string at the config file.
mongoose.connect(uri, mongoConfig)
  .then(() => console.log('MongoDB Connected…'))
  .catch(err => console.log(err))

export const newApp = app;