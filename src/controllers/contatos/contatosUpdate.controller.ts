import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IContatosUpdate } from "../../interfaces/contatos";
import contatosUpdateService from "../../services/contatos/contatosUpdate.service";


const contatosUpdateController = async (req: Request, res: Response) => {
    const contatos: IContatosUpdate = req.body;
    const id: string = req.params.id;
  
    const bodyKeys = Object.keys(req.body);
  
    if (
      bodyKeys.includes("isActive") ||
      bodyKeys.includes("id")
    ) {
      throw new AppError("Can not update this field", 401);
    }
  
    const updatedContatos = await contatosUpdateService(contatos, id);
  
    return res.status(200).json(updatedContatos);
  };
  
  export default contatosUpdateController;
  