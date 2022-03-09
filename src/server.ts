import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import authorRoutes from './routes/authorRoute';
import userRoutes from './routes/userRoutes';
import swaggerUi  from "swagger-ui-express";
import swaggerDocument  from "../swagger.json";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })    ); //?
app.use('/author', authorRoutes);
app.use('/', userRoutes);
app.use(
    '/users',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log(`Server is running at PORT 3000`);
});
