import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { Contatos } from "../../entities/contatos.entity";
import { AppError } from "../../errors/appError";
import { IContatosUpdate } from "../../interfaces/contatos";

const contatosUpdateService = async (
  { name, email, phone }: IContatosUpdate,
  id: string
): Promise<Contatos | Array<string>> => {
  
  

  const contatosRepository = AppDataSource.getRepository(Contatos);

  const findContatos = await contatosRepository.findOneBy({
    id,
  });




  if (!findContatos) {
    throw new AppError("Contatos not found", 404);
  }
 


 
  await contatosRepository.update(id, {
    name: name ? name : findContatos!.name,
    email: email ? email : findContatos!.email,
    phone: phone ? phone : findContatos!.phone
   
  });

  const contatos = await contatosRepository.findOneBy({
    id,
  });
 

  return contatos!;
};

export default contatosUpdateService;
