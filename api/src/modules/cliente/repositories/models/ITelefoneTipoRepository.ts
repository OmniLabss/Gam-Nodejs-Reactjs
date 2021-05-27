import TelefoneTipo from '../../entities/TelefoneTipo';

export default interface ITelefoneTipoRepository {
    findById(id: string): Promise<TelefoneTipo | undefined>;
    show(): Promise<TelefoneTipo[]>;
}
