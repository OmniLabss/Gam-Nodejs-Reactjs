import ProcurarClienteUseCase from '@modules/cliente/useCases/ProcurarCliente/ProcurarClienteUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ProcurarClienteController {
    public async handle(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {conteudo} = request.query;

        const procurarCliente = container.resolve(ProcurarClienteUseCase);

        const cliente = await procurarCliente.execute({
          conteudo: String(conteudo)
        });

        return response.json(cliente);
    }
}

export default ProcurarClienteController;
