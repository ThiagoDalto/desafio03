import AppDataSource from "../../data-source";
import { Contatos } from "../../entities/contatos.entity";
import { AppError } from "../../errors/appError";


const contatoSoftDeleteService = async (id: string
): Promise<void> => {
 

  const contatoRepository = AppDataSource.getRepository(Contatos);

  const findContato = await contatoRepository.findOneBy({
    id,
  });

   if (!findContato) {
    throw new AppError("Contato not found");
  } 

  if(findContato.isActive === false){
    throw new AppError("Missing authorization");
  }
 
 

  await contatoRepository.delete(id);

 
};

export default contatoSoftDeleteService;
