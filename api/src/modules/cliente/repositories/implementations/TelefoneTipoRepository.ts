import { getRepository, Repository, Not } from 'typeorm';

import TelefoneTipo from '../../entities/TelefoneTipo';
import ITelefoneTipoRepository from '../models/ITelefoneTipoRepository';
// Repository possui os metedos do typeORM de criar deletar e etc, recebendo o model como parametro

class TelefoneTipoRepository implements ITelefoneTipoRepository {
    private ormRepository: Repository<TelefoneTipo>;

    constructor() {
        this.ormRepository = getRepository(TelefoneTipo);
    }

    public async show(): Promise<TelefoneTipo[]> {
      const telefonesTipo = await this.ormRepository.find();

      return telefonesTipo;
    }

    public async findById(id: string): Promise<TelefoneTipo | undefined> {
        const telefoneTipo = await this.ormRepository.findOne(id);

        return telefoneTipo;
    }
}

export default TelefoneTipoRepository;
