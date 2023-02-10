import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entity";
import { IClienteLogin } from "../../interfaces/clientes";
import { compare } from "bcrypt";
import  jwt  from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/appError";

const clienteLoginCreateService = async ({ email, password }: IClienteLogin): Promise<Object> => {
    const clienteRepository = AppDataSource.getRepository(Clientes);

    const clientes = await clienteRepository.find();

    const account = clientes.find((cliente) => cliente.email === email);

    if (!account) {
        throw new AppError("Invalid cliente or password", 401);
    }

    const passwordMatch = await compare(password, account.password);

    if (!passwordMatch) {
        throw new AppError("invalid cliente or password", 401);
    }

    const token = jwt.sign({id: account.id}, process.env.SECRET_KEY as string, {expiresIn: "24h", subject: account.id})
    const clienteID = account.id

const response = {token, clienteID}

    return {token, clienteID};
}


export default clienteLoginCreateService;



