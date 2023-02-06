import AppDataSource from "../../data-source";
import { Contatos } from "../../entities/contatos.entity";

 
const  contatosListService = async (): Promise<Contatos[]> => { 
    const contatoRepository = AppDataSource.getRepository(Contatos);

    const contatos = await contatoRepository.find({where: {isActive: true}});

    return contatos;
}

export default contatosListService;
