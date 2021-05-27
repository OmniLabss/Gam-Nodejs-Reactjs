import MostrarTelefoneTipoUseCase from '@modules/cliente/useCases/MostrarTelefoneTipo/MostrarTelefoneTipoUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class MostrarTelefoneTipoController {
    public async handle(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const tiposTelefone = container.resolve(MostrarTelefoneTipoUseCase);

        const telefonesTipo = await tiposTelefone.execute();

        return response.json(telefonesTipo);
    }
}

export default MostrarTelefoneTipoController;
