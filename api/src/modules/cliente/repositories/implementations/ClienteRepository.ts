import ICreateCliente from '@modules/cliente/dtos/ICreateCliente';
import { getRepository, Repository, Not } from 'typeorm';

import Cliente from '../../entities/Cliente';
import IClienteRepository from '../models/IClienteRepository';

class ClienteRepository implements IClienteRepository {
    private ormRepository: Repository<Cliente>;

    constructor() {
        this.ormRepository = getRepository(Cliente);
    }
    public async save(cliente: Cliente): Promise<void> {
      await this.ormRepository.save(cliente);
    }

    public async search(content: string): Promise<Cliente[]> {
      const cliente = await this.ormRepository.query(
        `
        SELECT * 
        FROM cliente 
        WHERE 1=1
        AND COALESCE(nome, '') || COALESCE(cpf, '') || COALESCE(email, '') ILIKE '%${content}%'
        ORDER BY 1;
        `
      );

      return cliente
    }

    public async create(data: ICreateCliente): Promise<Cliente> {
      const cliente = this.ormRepository.create(data);
      
      await this.ormRepository.save(cliente);

      return cliente;
    }

    public async findById(id: string): Promise<Cliente | undefined> {
        const cliente = await this.ormRepository.findOne(id);

        return cliente;
    }
}

export default ClienteRepository;
