import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import clienteListService from "../../services/clientes/clientesList.service";

const clienteListController = async (req: Request, res: Response) => {
    const id = req.cliente.id
    const clientes = await clienteListService(id);

    return res.json(instanceToPlain(clientes));
}

export default clienteListController;