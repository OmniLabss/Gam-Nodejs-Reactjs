import ClienteRepository from '@modules/cliente/repositories/implementations/ClienteRepository';
import ClienteTelefoneRepository from '@modules/cliente/repositories/implementations/ClienteTelefoneRepository';
import TelefoneTipoRepository from '@modules/cliente/repositories/implementations/TelefoneTipoRepository';
import IClienteRepository from '@modules/cliente/repositories/models/IClienteRepository';
import IClienteTelefoneRepository from '@modules/cliente/repositories/models/IClienteTelefoneRepository';
import ITelefoneTipoRepository from '@modules/cliente/repositories/models/ITelefoneTipoRepository';

import { container } from 'tsyringe';

container.registerSingleton<ITelefoneTipoRepository>(
  'TelefoneTipoRepository',
  TelefoneTipoRepository
);

container.registerSingleton<IClienteTelefoneRepository>(
  'ClienteTelefoneRepository',
  ClienteTelefoneRepository
);

container.registerSingleton<IClienteRepository>(
  'ClienteRepository',
  ClienteRepository
)