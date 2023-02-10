import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entity";
import { Request } from "express";
import { ICliente } from "../../interfaces/clientes";
import { AppError } from "../../errors/appError";

const clienteListService = async (id: string): Promise<Object> => {
    const clienteRepository = AppDataSource.getRepository(Clientes);
    

    const cliente = await clienteRepository.findOneBy({id});

    if(!cliente){
        throw new AppError("Cliente not found")
    }
    const clienteResponse = {
        id : cliente.id,
        name : cliente.name,
        email : cliente.email,
        phone : cliente.phone,
        isActive : cliente.isActive,
        createdAt : cliente.createdAt,
    }
    console.log(clienteResponse)

    return  clienteResponse;
}

export default clienteListService;