export interface IClienteRequest {
    name: string;
    email: string;
    password: string;
    phone: string;

}

export interface ICliente {
    name: string;
    email: string;
    password: string;
    phone: string;
    createdAt: Date;
}

export interface IClienteLogin {
    email: string;
    password: string;
}

export interface IClienteUpdate {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
  }