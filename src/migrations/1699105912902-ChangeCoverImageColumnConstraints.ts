import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeCoverImageColumnConstraints1699105912902 implements MigrationInterface {
    name = 'ChangeCoverImageColumnConstraints1699105912902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "coverImage" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "coverImage" SET NOT NULL`);
    }

}
