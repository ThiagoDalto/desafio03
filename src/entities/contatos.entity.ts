import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";
import { Clientes } from "./clientes.entity";
import { v4 as uuid } from "uuid"

@Entity("contatos")
export class Contatos {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        length: 75,
    })
    name: string;

    @Column({
        length: 75,
    })
    email: string

    @Column({
        length: 11,
    })
    phone: string

    @CreateDateColumn()
    createdAt: Date;

    @Column("boolean", { default: true })
  isActive: boolean = true;

  @ManyToOne(() => Clientes, (cliente) => cliente.contato, {onDelete: 'CASCADE'})
    cliente: Clientes

}