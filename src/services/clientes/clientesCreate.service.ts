import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entity";
import { IClienteRequest } from "../../interfaces/clientes";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";


const clienteCreateService = async ({name, email, phone, password,}: IClienteRequest): Promise<Clientes> => {
    const clienteRepository = AppDataSource.getRepository(Clientes);

    const clientes = await clienteRepository.find();

    const emailAlreadyExists = clientes.find((cliente) => cliente.email === email);

    if(emailAlreadyExists) {
        throw new AppError("Email already exists");
    }

    if (!password) {
        throw new AppError("Password is missing");
    }

    const hashedPassword = await hash(password, 10);

    const cliente = clienteRepository.create({
        name,
        email,
        phone,
        password: hashedPassword,
    });

    await clienteRepository.save(cliente);

    return cliente;
}

export default clienteCreateService;