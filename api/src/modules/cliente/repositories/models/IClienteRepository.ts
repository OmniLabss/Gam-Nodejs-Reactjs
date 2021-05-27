import ICreateCliente from '@modules/cliente/dtos/ICreateCliente';
import Cliente from '../../entities/Cliente';

export default interface IClienteRepository {
    findById(id: string): Promise<Cliente | undefined>;
    create(data: ICreateCliente): Promise<Cliente>;
    search(content: string): Promise<Cliente[]>;
    save(cliente: Cliente): Promise<void>;
}
