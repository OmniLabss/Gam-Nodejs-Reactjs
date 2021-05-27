import EditarClienteUseCase from '@modules/cliente/useCases/EditarCliente/EditarClienteUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class EditarClienteController {
    public async handle(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { nome, cpf, email } = request.body;
        const {cliente_id} = request.params;

        const editarCliente = container.resolve(EditarClienteUseCase);

        const cliente = await editarCliente.execute({
          nome, cpf, email, cliente_id
        });

        return response.json(cliente);
    }
}

export default EditarClienteController;
