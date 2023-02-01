import { Request, Response } from "express";
import { IContatosRequest } from "../../interfaces/contatos";
import contatosCreateService from "../../services/contatos/contatosCreate.service";

const contatosCreateController = async (req: Request, res: Response) => {
    const contato: IContatosRequest = req.body;

    const createdContato = await contatosCreateService(contato);

    return res.status(201).json(createdContato);
}

export default contatosCreateController;