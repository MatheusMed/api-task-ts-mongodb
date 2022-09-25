import Express from 'express';
import mongoose from 'mongoose';
import router from './router';

const app = Express();

mongoose.connect('mongodb://localhost/api');

app.use(Express.json());

app.use(router);

app.listen(3000, () => {
  console.log('Server start');
});