import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Cliente from '../../entities/Cliente';
import ITelefoneTipoRepository from '@modules/cliente/repositories/models/ITelefoneTipoRepository';
import IClienteTelefoneRepository from '@modules/cliente/repositories/models/IClienteTelefoneRepository';
import IClienteRepository from '@modules/cliente/repositories/models/IClienteRepository';

interface IRequest {
  nome: string;
  cpf: string;
  email: string;
  telefoneDados?: [{
      telefone_tipo: string;
      telefone: string;
  }];
}

@injectable()
class CriarClienteUseCase {
    constructor(
      @inject('ClienteTelefoneRepository')
      private clienteTelefoneRepository: IClienteTelefoneRepository,

      @inject('ClienteRepository')
      private clienteRepository: IClienteRepository,
    ) {}

    public async execute({
        cpf, email, nome, telefoneDados
    }: IRequest): Promise<Cliente> {
        const cliente = await this.clienteRepository.create({
          cpf,
          email,
          nome
        })

        if(telefoneDados) {
          await Promise.all(
            telefoneDados.map(async telefone => {
                await this.clienteTelefoneRepository.create({
                  cliente_id: cliente.id,
                  numero: telefone.telefone,
                  telefone_tipo_id: telefone.telefone_tipo
                })
            })
          )
        }

        return cliente;
    }
}

export default CriarClienteUseCase;
