import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";
import { Contatos } from "./contatos.entity";

@Entity("clientes")
export class Clientes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 75,
  }) 
  name: string;

  @Column({
    length: 75,
    unique: true,
  })
  email: string

  @Column({
    length: 11,
  })
  phone: string

  @Column({
    length: 120,
  })
  @Exclude()
  password: string

  @CreateDateColumn()
  createdAt: Date;

  @Column("boolean", { default: true })
  isActive: boolean = true;
  
  @OneToMany(() => Contatos, (contato) => contato.cliente)
  contato: Contatos[]

}