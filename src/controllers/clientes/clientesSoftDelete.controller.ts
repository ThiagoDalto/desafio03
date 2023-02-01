import { Request, Response } from "express";
import { Clientes } from "../../entities/clientes.entity";
import { AppError } from "../../errors/appError";
import { IClienteUpdate } from "../../interfaces/clientes"; 
import clienteSoftDeleteService from "../../services/clientes/clientesSoftDelete.service";

const clienteSoftDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await clienteSoftDeleteService(id);

    return res.status(204).send();
  } catch (error) {
    if (error instanceof AppError) {
      if (error.message.includes("CLientes")) {
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

export default clienteSoftDeleteController;
