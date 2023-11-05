"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologiesService = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const errors_1 = require("../../errors");
class TechnologiesService {
  static create(newTechnology) {
    return __awaiter(this, void 0, void 0, function* () {
      const createdTechnology =
        yield data_source_1.AppDataSource.createQueryBuilder()
          .insert()
          .into(entities_1.Technologies)
          .values(newTechnology)
          .returning("*")
          .execute();
      return createdTechnology.generatedMaps[0];
    });
  }
  static update(id, updatedTechnology) {
    return __awaiter(this, void 0, void 0, function* () {
      const technologyAfterUpdate =
        yield data_source_1.AppDataSource.createQueryBuilder()
          .update(entities_1.Technologies)
          .set(updatedTechnology)
          .where("technologies.id = :id", { id })
          .returning("*")
          .execute();
      const wasNoTechnologyUpdated = technologyAfterUpdate.affected === 0;
      if (wasNoTechnologyUpdated) {
        throw new errors_1.RecordNotFoundError(
          TechnologiesService.recordType,
          id
        );
      }
      return technologyAfterUpdate.raw[0];
    });
  }
  static getAll() {
    return __awaiter(this, void 0, void 0, function* () {
      return data_source_1.AppDataSource.getRepository(entities_1.Technologies)
        .createQueryBuilder()
        .orderBy("name", "ASC")
        .getMany();
    });
  }
  static getOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
      return data_source_1.AppDataSource.createQueryBuilder()
        .select("technologies")
        .from(entities_1.Technologies, "technologies")
        .where("technologies.id = :id", { id })
        .getOneOrFail()
        .then()
        .catch(() => {
          throw new errors_1.RecordNotFoundError(
            TechnologiesService.recordType,
            id
          );
        });
    });
  }
  static delete(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const deletedTechnology =
        yield data_source_1.AppDataSource.createQueryBuilder()
          .delete()
          .from(entities_1.Technologies)
          .where("technologies.id = :id", { id })
          .execute();
      const wasNoTechnologyDeleted = deletedTechnology.affected === 0;
      if (wasNoTechnologyDeleted) {
        throw new errors_1.RecordNotFoundError(
          TechnologiesService.recordType,
          id
        );
      }
    });
  }
}
exports.TechnologiesService = TechnologiesService;
TechnologiesService.recordType = "technologies";
