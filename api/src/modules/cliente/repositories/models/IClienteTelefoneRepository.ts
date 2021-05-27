import ICreateClienteTelefone from '@modules/cliente/dtos/ICreateClienteTelefone';
import ClienteTelefone from '../../entities/ClienteTelefone';

export default interface IClienteTelefoneRepository {
    findById(id: string): Promise<ClienteTelefone[]>;
    create(data: ICreateClienteTelefone): Promise<ClienteTelefone>;
}
