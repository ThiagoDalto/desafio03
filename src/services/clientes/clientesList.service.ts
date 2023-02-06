import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entity";
import { Request } from "express";
import { ICliente } from "../../interfaces/clientes";
import { AppError } from "../../errors/appError";

const clienteListService = async (id: string): Promise<Clientes> => {
    const clienteRepository = AppDataSource.getRepository(Clientes);
    

    const cliente = await clienteRepository.findOneBy({id});

    if(!cliente){
        throw new AppError("Cliente not found")
    }
    let clienteResponse = {...cliente}
    

    return  cliente;
}

export default clienteListService;