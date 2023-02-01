import { Request, Response } from "express";
import { IClienteLogin } from "../../interfaces/clientes";
import clienteLoginCreateService from "../../services/session/clienteLogin.service";

const clienteLoginCreateController = async (req: Request, res: Response) => {
    try{
        const data: IClienteLogin = req.body;
        const token = await clienteLoginCreateService(data);
        return res.json({ token });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(403).json({
                message: error.message,
            });
        }
    }
};

export default clienteLoginCreateController;