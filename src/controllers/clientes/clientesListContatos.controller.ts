import { Request, Response } from "express";
import clienteListContatosService from "../../services/clientes/clientesListcontatos.service";

const clienteListContatosController = async (req: Request, res: Response) => {
    const clienteId = req.params.id;
    console.log(clienteId)
    const clienteIdListContatos = await clienteListContatosService(clienteId);

    return res.status(200).json(clienteIdListContatos)
}

export default clienteListContatosController;