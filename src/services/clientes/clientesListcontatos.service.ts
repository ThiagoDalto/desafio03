import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entity";
import { Contatos } from "../../entities/contatos.entity";
import { AppError } from "../../errors/appError";
import { IContatosRequest } from "../../interfaces/contatos";

const clienteListContatosService = async (id: string) => {
    const clienteRepository = AppDataSource.getRepository(Clientes);
           
    const clientesList = await clienteRepository.findOneBy({ id });
   
    if (!clientesList) {
        throw new AppError("Invalid cliente id", 404);
    }

    const clienteListContatos = await clienteRepository.findOne({
        where: {
            id: id,
        },
        relations: {
            contato: true,
        }
    });
    
    return clienteListContatos;
}

export default clienteListContatosService;