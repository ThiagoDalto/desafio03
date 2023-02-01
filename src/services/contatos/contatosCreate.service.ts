import AppDataSource from "../../data-source";
import { Contatos } from "../../entities/contatos.entity";
import { AppError } from "../../errors/appError";
import { IContatosRequest } from "../../interfaces/contatos";


const contatosCreateService = async ({
    name,
    email,
    phone
}: IContatosRequest): Promise<Contatos> => {
    const contatosRepository = AppDataSource.getRepository(Contatos);

    const contatos = await contatosRepository.find()

    const contatosAlreadyExists = contatos.find((contato) =>
     contato.email === email &&
     contato.phone === phone &&
     contato.name === name     
     )
    
    if(contatosAlreadyExists){
        throw new AppError("Contatos already registred, 400");
    }

    const contato = contatosRepository.create({
        name,
        email,
        phone
    });

    await contatosRepository.save(contato)

    return contato
}

export default contatosCreateService;