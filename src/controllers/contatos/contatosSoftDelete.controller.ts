import { Request, Response } from "express";
import { Contatos } from "../../entities/contatos.entity";
import { AppError } from "../../errors/appError";
import { IContatosUpdate } from "../../interfaces/contatos"
import contatoSoftDeleteService from "../../services/contatos/contatosSoftDelete.service";

const contatoSoftDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await contatoSoftDeleteService(id);

    return res.status(204).send();
  } catch (error) {
    if (error instanceof AppError) {
      if (error.message.includes("Contato")) {
        return res.status(404).json({
          message: "Id invalid",
        });
      } else {
        return res.status(400).json({
          message: error.message,
        });
      }
    }
  }
};

export default contatoSoftDeleteController;
