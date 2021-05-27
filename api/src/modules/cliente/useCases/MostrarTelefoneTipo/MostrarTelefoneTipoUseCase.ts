import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITelefoneTipoRepository from '@modules/cliente/repositories/models/ITelefoneTipoRepository';
import TelefoneTipo from '@modules/cliente/entities/TelefoneTipo';

@injectable()
class CriarClienteUseCase {
    constructor(
      @inject('TelefoneTipoRepository')
      private telefoneTipoRepository: ITelefoneTipoRepository,
    ) {}

    public async execute(): Promise<TelefoneTipo[]> {
        const tiposTelefone = await this.telefoneTipoRepository.show();

        return tiposTelefone
    }
}

export default CriarClienteUseCase;
