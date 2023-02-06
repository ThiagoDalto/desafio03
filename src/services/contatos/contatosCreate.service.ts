import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entity";
import { Contatos } from "../../entities/contatos.entity";
import { AppError } from "../../errors/appError";
import { IContatosRequest } from "../../interfaces/contatos";


const contatosCreateService = async ({
    name,
    email,
    phone,
    clienteId
}: IContatosRequest): Promise<Contatos> => {
    const contatosRepository = AppDataSource.getRepository(Contatos);
    const clienteRepository = AppDataSource.getRepository(Clientes)
    
    const cliente = await clienteRepository.findOneBy({id: clienteId})

    if(!cliente){
        throw new AppError("Cliente Not found", 404)
    }

    

    const contatosAlreadyExists = await contatosRepository.findOne({
        where: {
            email: email,
            phone: phone,
            name: name,
            cliente: { id: clienteId }
        }
    });
    
    if(contatosAlreadyExists){
        throw new AppError("Contatos already registred", 403);
    }

   
    

    const contato = contatosRepository.create({
        name,
        email,
        phone,        
    });

   

    await contatosRepository.save(contato)

    const emailFind = await contatosRepository.findOneBy({email: email}) 

    if (!emailFind){
        throw new AppError("Contatos not found", 404);
    }

    return emailFind
}

export default contatosCreateService;