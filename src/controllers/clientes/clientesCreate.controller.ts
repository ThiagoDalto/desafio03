import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IClienteRequest } from "../../interfaces/clientes";
import clienteCreateService from "../../services/clientes/clientesCreate.service";

const clienteCreateController = async (req: Request, res: Response) => {
    const cliente: IClienteRequest = req.body;

    const createdCliente = await clienteCreateService(cliente);

    return res.status(201).json(instanceToPlain(createdCliente));
}

export default clienteCreateController;