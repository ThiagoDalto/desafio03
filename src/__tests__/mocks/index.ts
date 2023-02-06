// Para cadastro do cliente é necessário, no mínimo, conter os seguintes campos:
// nome completo
// email
// telefone
// data de registro (data em que o cliente foi registrado)

import { IClienteLogin, IClienteRequest } from "../../interfaces/clientes";
import { IContatosRequest, IContatosUpdate } from "../../interfaces/contatos";

export const mockedCliente : IClienteRequest = {
    name: "Fulano de Tal",
    email: "fulano@mail.com",
    password: "123456",
    phone: "2133053128",
}

export const mockedClienteToDelete : IClienteRequest = {
    name: "Ciclano de Tal",
    email: "ciclano@mail.com",
    password:"123456",
    phone: "2133053002",
}

export const mockedClienteToUpdate : IClienteRequest = {
    name: "Beltrano de Tal",
    email: "beltrano@mail.com",
    password:"123456",
    phone: "2133053069",
}

export const mockedClienteLogin : IClienteLogin = {
    email: "fulano@mail.com",
    password: "123456",
}

export const mockedClienteToDeleteLogin : IClienteLogin = {
    email: "ciclano@mail.com",
    password: "123456",
}

export const mockedClienteToUpdateLogin : IClienteLogin = {
    email: "beltrano@mail.com",
    password: "123456",
}


export const mockedContato : IContatosRequest = {
    name: "Fuliano de Tal",
    email: "fulan@mail.com",
    phone: "2133053122",
    clienteId: "nome"
}

export const mockedUpdateContato: IContatosUpdate = {
    name: "Fulano de tal",
    email: "fulano@mail.com",
    phone: "2133053128"
}
export const mockedDeleteContato: IContatosUpdate = {
    name: "Beltrano de Tal",
    email: "beltrano@mail.com",
    phone: "2133053128"
}
