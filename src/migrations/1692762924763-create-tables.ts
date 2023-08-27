import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1692762924763 implements MigrationInterface {
    name = 'CreateTables1692762924763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."development_experiences_type_enum" RENAME TO "development_experiences_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."development_experiences_type_enum" AS ENUM('Acadêmica', 'Curso', 'Voluntariado', 'Emprego')`);
        await queryRunner.query(`ALTER TABLE "development_experiences" ALTER COLUMN "type" TYPE "public"."development_experiences_type_enum" USING "type"::"text"::"public"."development_experiences_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."development_experiences_type_enum_old"`);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."development_experiences_type_enum_old" AS ENUM('Acadêmica', 'Curso', 'Emprego', 'Voluntariado')`);
        await queryRunner.query(`ALTER TABLE "development_experiences" ALTER COLUMN "type" TYPE "public"."development_experiences_type_enum_old" USING "type"::"text"::"public"."development_experiences_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."development_experiences_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."development_experiences_type_enum_old" RENAME TO "development_experiences_type_enum"`);
    }

}
