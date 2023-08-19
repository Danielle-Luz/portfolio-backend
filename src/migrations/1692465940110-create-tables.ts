import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1692465940110 implements MigrationInterface {
    name = 'CreateTables1692465940110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."development_experiences_type_enum" AS ENUM('Educação', 'Emprego', 'Voluntariado')`);
        await queryRunner.query(`CREATE TABLE "development_experiences" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "type" "public"."development_experiences_type_enum" NOT NULL, "company" character varying(50) DEFAULT 'Empresa não informada', "description" text NOT NULL, "startDate" date, "endDate" date, CONSTRAINT "PK_712a7b0282b403f84f89dd6ae12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."projects_stack_enum" AS ENUM('Front-end', 'Back-end', 'Full-stack')`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "description" text NOT NULL, "stack" "public"."projects_stack_enum" NOT NULL, "coverImage" text NOT NULL, "url" text NOT NULL, "highlight" boolean DEFAULT false, CONSTRAINT "UQ_2187088ab5ef2a918473cb99007" UNIQUE ("name"), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."technologies_stack_enum" AS ENUM('Front-end', 'Back-end', 'Full-stack')`);
        await queryRunner.query(`CREATE TYPE "public"."technologies_knowledgelevel_enum" AS ENUM('Iniciante', 'Intermediário', 'Avançado')`);
        await queryRunner.query(`CREATE TABLE "technologies" ("id" SERIAL NOT NULL, "name" character varying(40) NOT NULL, "stack" "public"."technologies_stack_enum" NOT NULL, "knowledgeLevel" "public"."technologies_knowledgelevel_enum" DEFAULT 'Iniciante', CONSTRAINT "PK_9a97465b79568f00becacdd4e4a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "technologies"`);
        await queryRunner.query(`DROP TYPE "public"."technologies_knowledgelevel_enum"`);
        await queryRunner.query(`DROP TYPE "public"."technologies_stack_enum"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TYPE "public"."projects_stack_enum"`);
        await queryRunner.query(`DROP TABLE "development_experiences"`);
        await queryRunner.query(`DROP TYPE "public"."development_experiences_type_enum"`);
    }

}
