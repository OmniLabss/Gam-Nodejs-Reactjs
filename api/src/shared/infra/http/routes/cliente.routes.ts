import CriarClienteController from '@modules/cliente/useCases/CriarCliente/CriarClienteController';
import EditarClienteController from '@modules/cliente/useCases/EditarCliente/EditarClienteController';
import MostrarTelefoneTipoController from '@modules/cliente/useCases/MostrarTelefoneTipo/MostrarTelefoneTipoController';
import ProcurarClienteController from '@modules/cliente/useCases/ProcurarCliente/ProcurarClienteController';
import { Router } from 'express';

const clienteRouter = Router();

const criarClienteController = new CriarClienteController();
const procurarClienteController = new ProcurarClienteController();
const editarClienteController = new EditarClienteController();
const mostrarTelefoneTipos = new MostrarTelefoneTipoController();

clienteRouter.post('/', criarClienteController.handle);
clienteRouter.get('/', procurarClienteController.handle);
clienteRouter.get('/telefone_tipos', mostrarTelefoneTipos.handle);
clienteRouter.put('/:cliente_id', editarClienteController.handle)

export default clienteRouter;
