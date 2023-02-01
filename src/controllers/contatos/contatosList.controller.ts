import { Request, Response } from "express";

import contatosListService from "../../services/contatos/contatosList.service";

const contatosListConttroller = async (req: Request, res: Response) => {
    const contatos = await contatosListService();

    return res.json(contatos);
}

export default contatosListConttroller;