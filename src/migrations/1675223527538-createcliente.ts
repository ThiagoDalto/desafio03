import { MigrationInterface, QueryRunner } from "typeorm";

export class createcliente1675223527538 implements MigrationInterface {
    name = 'createcliente1675223527538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contatos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(75) NOT NULL, "email" character varying(75) NOT NULL, "phone" character varying(11) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "clienteId" uuid, CONSTRAINT "PK_994cdcb2c56dfb5b66217c854cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(75) NOT NULL, "email" character varying(75) NOT NULL, "phone" character varying(11) NOT NULL, "password" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_3cd5652ab34ca1a0a2c7a255313" UNIQUE ("email"), CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contatos" ADD CONSTRAINT "FK_4239f05a745fb2f8ff77569c52f" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contatos" DROP CONSTRAINT "FK_4239f05a745fb2f8ff77569c52f"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "contatos"`);
    }

}
