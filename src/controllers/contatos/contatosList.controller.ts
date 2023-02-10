import { Request, Response } from "express";

import contatosListService from "../../services/contatos/contatosList.service";

const contatosListConttroller = async (req: Request, res: Response) => {
    const id = req.cliente.id
    console.log(id)
    const contatos = await contatosListService(id);

    return res.json(contatos);
}

export default contatosListConttroller;