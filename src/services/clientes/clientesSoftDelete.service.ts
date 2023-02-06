import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entity";
import { AppError } from "../../errors/appError";


const clienteSoftDeleteService = async (id: string
): Promise<void> => {
 

  const clienteRepository = AppDataSource.getRepository(Clientes);

  const findCliente = await clienteRepository.findOneBy({
    id,
  });

   if (!findCliente) {
    throw new AppError("Cliente not found");
  } 

  
 

  await clienteRepository.delete(id);

 
};

export default clienteSoftDeleteService;
