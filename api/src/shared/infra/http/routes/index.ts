import { Router } from 'express';

import clienteRouter from './cliente.routes';

const routes = Router();

routes.use('/cliente', clienteRouter);

export default routes;
