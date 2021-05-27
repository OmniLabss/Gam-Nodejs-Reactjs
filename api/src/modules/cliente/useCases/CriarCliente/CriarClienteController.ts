import CriarCliente from '@modules/cliente/useCases/CriarCliente/CriarClienteUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CriarClienteController {
    public async handle(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { nome, cpf, email, telefoneDados } = request.body;

        const criarCliente = container.resolve(CriarCliente);

        const cliente = await criarCliente.execute({
          nome, cpf, email, telefoneDados
        });

        return response.json(cliente);
    }
}

export default CriarClienteController;
