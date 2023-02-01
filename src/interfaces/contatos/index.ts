export interface IContatosRequest {
    name: string;
    email: string;
    phone: string;

}

export interface IContatos {
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
}

export interface IContatosUpdate {
    name?: string;
    email?: string;
    phone?: string;
}