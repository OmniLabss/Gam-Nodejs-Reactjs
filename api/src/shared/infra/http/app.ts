import 'dotenv/config';
import 'express-async-errors';
import 'reflect-metadata';
import '@shared/infra/typeorm';

import cors from 'cors';
import express from 'express';
import routes from './routes';

import errorsHandler from '@shared/errors/errorsHandler';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorsHandler);

export { app };
