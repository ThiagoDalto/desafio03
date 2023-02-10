import AppDataSource from "../../data-source";
import { Contatos } from "../../entities/contatos.entity";

 
const  contatosListService = async (id: string): Promise<Contatos[]> => { 
    const contatoRepository = AppDataSource.getRepository(Contatos);

    

    const contatos = await contatoRepository.find({where: {isActive: true}});

  //  const contatosID =  contatos.filter(contato => contato.cliente.id === id)

    return contatos;
}

export default contatosListService;
