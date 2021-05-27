import ICreateClienteTelefone from '@modules/cliente/dtos/ICreateClienteTelefone';
import { getRepository, Repository, Not } from 'typeorm';

import ClienteTelefone from '../../entities/ClienteTelefone';
import IClienteTelefoneRepository from '../models/IClienteTelefoneRepository';

class ClienteTelefoneRepository implements IClienteTelefoneRepository {
    private ormRepository: Repository<ClienteTelefone>;

    constructor() {
        this.ormRepository = getRepository(ClienteTelefone);
    }

    public async create(data: ICreateClienteTelefone): Promise<ClienteTelefone> {
      const clienteTelefone = this.ormRepository.create(data);
      
      await this.ormRepository.save(clienteTelefone);

      return clienteTelefone;
    }

    public async findById(id: string): Promise<ClienteTelefone[]> {
        const clienteTelefone = await this.ormRepository.find({
          where: {
            cliente_id: id
          }
        });

        return clienteTelefone;
    }
}

export default ClienteTelefoneRepository;
