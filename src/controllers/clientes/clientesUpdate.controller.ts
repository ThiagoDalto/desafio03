import { Request, Response } from "express";
import { Clientes } from "../../entities/clientes.entity";
import { AppError } from "../../errors/appError";
import { IClienteUpdate } from "../../interfaces/clientes";
import clienteUpdateService from "../../services/clientes/clientesUpdate.service";

const clienteUpdateController = async (req: Request, res: Response) => {
  const cliente: IClienteUpdate = req.body;
  const id: string = req.params.id;

  const bodyKeys = Object.keys(req.body);

  if (
    bodyKeys.includes("isActive") ||
    bodyKeys.includes("id")
  ) {
    throw new AppError("Can not update this field", 401);
  }

  const updatedCliente = await clienteUpdateService(cliente, id);
  const updatedClienteNoPWD: any = { ...updatedCliente };
  delete updatedClienteNoPWD.password;

  return res.status(200).json(updatedClienteNoPWD);
};

export default clienteUpdateController;
