import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entity";
import { AppError } from "../../errors/appError";
import { IClienteUpdate } from "../../interfaces/clientes";

const clienteUpdateService = async (
  { name, email, phone, password }: IClienteUpdate,
  id: string
): Promise<Clientes | Array<string | number>> => {
  
  

  const clienteRepository = AppDataSource.getRepository(Clientes);

  const findCliente = await clienteRepository.findOneBy({
    id,
  });




  if (!findCliente) {
    throw new AppError("Cliente not found", 404);
  }
 


 
  await clienteRepository.update(id, {
    name: name ? name : findCliente!.name,
    email: email ? email : findCliente!.email,
    phone: phone ? phone: findCliente!.phone,
    password: password ? await hash(password, 10) : findCliente!.password,
   
  });

  const cliente = await clienteRepository.findOneBy({
    id,
  });
 

  return cliente!;
};

export default clienteUpdateService;
