// Para cadastro do cliente é necessário, no mínimo, conter os seguintes campos:
// nome completo
// email
// telefone
// data de registro (data em que o cliente foi registrado)

import { IClienteRequest } from "../../interfaces/clientes";

export const mockedCliente : IClienteRequest = {
    name: "Fulano de Tal",
    email: "fulano@mail.com",
    password: "123456",
    phone: "2133053128",
}