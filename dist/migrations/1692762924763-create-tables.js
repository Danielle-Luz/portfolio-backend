"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/migrations/1692762924763-create-tables.ts
var create_tables_exports = {};
__export(create_tables_exports, {
  CreateTables1692762924763: () => CreateTables1692762924763
});
module.exports = __toCommonJS(create_tables_exports);
var CreateTables1692762924763 = class {
  constructor() {
    this.name = "CreateTables1692762924763";
  }
  up(queryRunner) {
    return __async(this, null, function* () {
      yield queryRunner.query(`ALTER TYPE "public"."development_experiences_type_enum" RENAME TO "development_experiences_type_enum_old"`);
      yield queryRunner.query(`CREATE TYPE "public"."development_experiences_type_enum" AS ENUM('Acad\xEAmica', 'Curso', 'Voluntariado', 'Emprego')`);
      yield queryRunner.query(`ALTER TABLE "development_experiences" ALTER COLUMN "type" TYPE "public"."development_experiences_type_enum" USING "type"::"text"::"public"."development_experiences_type_enum"`);
      yield queryRunner.query(`DROP TYPE "public"."development_experiences_type_enum_old"`);
    });
  }
  down(queryRunner) {
    return __async(this, null, function* () {
      yield queryRunner.query(`CREATE TYPE "public"."development_experiences_type_enum_old" AS ENUM('Acad\xEAmica', 'Curso', 'Emprego', 'Voluntariado')`);
      yield queryRunner.query(`ALTER TABLE "development_experiences" ALTER COLUMN "type" TYPE "public"."development_experiences_type_enum_old" USING "type"::"text"::"public"."development_experiences_type_enum_old"`);
      yield queryRunner.query(`DROP TYPE "public"."development_experiences_type_enum"`);
      yield queryRunner.query(`ALTER TYPE "public"."development_experiences_type_enum_old" RENAME TO "development_experiences_type_enum"`);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateTables1692762924763
});
