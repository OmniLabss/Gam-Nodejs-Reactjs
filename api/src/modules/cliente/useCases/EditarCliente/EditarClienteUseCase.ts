import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Cliente from '../../entities/Cliente';
import ITelefoneTipoRepository from '@modules/cliente/repositories/models/ITelefoneTipoRepository';
import IClienteTelefoneRepository from '@modules/cliente/repositories/models/IClienteTelefoneRepository';
import IClienteRepository from '@modules/cliente/repositories/models/IClienteRepository';

interface IRequest {
  cliente_id: string;
  nome: string;
  cpf: string;
  email: string;
}

@injectable()
class EditarClienteUsecase {
    constructor(
      @inject('ClienteRepository')
      private clienteRepository: IClienteRepository,
    ) {}

    public async execute({
        cliente_id, cpf, email, nome
    }: IRequest): Promise<Cliente> {
        const cliente = await this.clienteRepository.findById(cliente_id);

        cliente.cpf = cpf
        cliente.email = email
        cliente.nome = nome
        
        await this.clienteRepository.save(cliente);

        return cliente
    }
}

export default EditarClienteUsecase;
