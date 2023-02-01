import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import clienteListService from "../../services/clientes/clientesList.service";

const clienteListController = async (req: Request, res: Response) => {
    const clientes = await clienteListService();

    return res.json(instanceToPlain(clientes));
}

export default clienteListController;