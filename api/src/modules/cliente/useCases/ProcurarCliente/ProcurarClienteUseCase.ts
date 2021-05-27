import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Cliente from '../../entities/Cliente';
import ITelefoneTipoRepository from '@modules/cliente/repositories/models/ITelefoneTipoRepository';
import IClienteTelefoneRepository from '@modules/cliente/repositories/models/IClienteTelefoneRepository';
import IClienteRepository from '@modules/cliente/repositories/models/IClienteRepository';

interface IRequest {
  conteudo: string;
}

@injectable()
class CriarClienteUseCase {
    constructor(
      @inject('ClienteRepository')
      private clienteRepository: IClienteRepository,

      @inject('ClienteTelefoneRepository')
      private clienteTelefoneRepository: IClienteTelefoneRepository,

    ) {}

    public async execute({
        conteudo
    }: IRequest): Promise<Cliente[]> {
        const cliente = await this.clienteRepository.search(conteudo);

        const formatedCliente = await Promise.all(
          cliente.map(async c => {
            const telefoneCliente = await this.clienteTelefoneRepository.findById(c.id);

            const formated = Object.assign(c, {telefones: telefoneCliente})

            return formated;
          })
        )

        return formatedCliente;
    }
}

export default CriarClienteUseCase;
