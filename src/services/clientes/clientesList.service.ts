import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entity";


const clienteListService = async (): Promise<Clientes[]> => {
    const clienteRepository = AppDataSource.getRepository(Clientes);

    const clientes = await clienteRepository.find();

    return clientes;
}

export default clienteListService;