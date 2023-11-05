"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1692762924763 = void 0;
class CreateTables1692762924763 {
    constructor() {
        this.name = 'CreateTables1692762924763';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TYPE "public"."development_experiences_type_enum" RENAME TO "development_experiences_type_enum_old"`);
            yield queryRunner.query(`CREATE TYPE "public"."development_experiences_type_enum" AS ENUM('Acadêmica', 'Curso', 'Voluntariado', 'Emprego')`);
            yield queryRunner.query(`ALTER TABLE "development_experiences" ALTER COLUMN "type" TYPE "public"."development_experiences_type_enum" USING "type"::"text"::"public"."development_experiences_type_enum"`);
            yield queryRunner.query(`DROP TYPE "public"."development_experiences_type_enum_old"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."development_experiences_type_enum_old" AS ENUM('Acadêmica', 'Curso', 'Emprego', 'Voluntariado')`);
            yield queryRunner.query(`ALTER TABLE "development_experiences" ALTER COLUMN "type" TYPE "public"."development_experiences_type_enum_old" USING "type"::"text"::"public"."development_experiences_type_enum_old"`);
            yield queryRunner.query(`DROP TYPE "public"."development_experiences_type_enum"`);
            yield queryRunner.query(`ALTER TYPE "public"."development_experiences_type_enum_old" RENAME TO "development_experiences_type_enum"`);
        });
    }
}
exports.CreateTables1692762924763 = CreateTables1692762924763;
