import { AppDataSource } from "../../data-source";
import { DevelopmentExperiences } from "../../entities";
import { ExperienceType } from "../../enums";
import { RecordNotFoundError } from "../../errors";
import {
  newDevelopmentExperience,
  updatedDevelopmentExperience,
} from "../../interfaces";

export class DevelopmentExperiencesService {
  static recordType: string = "development experiences";

  static async create(newDevelopmentExperience: newDevelopmentExperience) {
    const createdDevelopmentExperience =
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(DevelopmentExperiences)
        .values(newDevelopmentExperience)
        .returning("*")
        .execute();

    return createdDevelopmentExperience.generatedMaps[0];
  }

  static async getAll() {
    return AppDataSource.getRepository(DevelopmentExperiences)
      .createQueryBuilder()
      .orderBy("startDate", "DESC")
      .getMany();
  }

  static async getByType(type: ExperienceType) {
    return AppDataSource.createQueryBuilder()
      .select("development_experiences")
      .from(DevelopmentExperiences, "development_experiences")
      .where("development_experiences.type = :type", { type })
      .orderBy("startDate", "DESC")
      .getMany();
  }

  static async update(
    id: number,
    updatedDevelopmentExperience: updatedDevelopmentExperience
  ) {
    const developmentExperienceAfterUpdate =
      await AppDataSource.createQueryBuilder()
        .update(DevelopmentExperiences)
        .set(updatedDevelopmentExperience)
        .where("id = :id", { id })
        .returning("*")
        .execute();

    const wasNoRecordUpdated = developmentExperienceAfterUpdate.affected === 0;
    if (wasNoRecordUpdated) {
      throw new RecordNotFoundError(
        DevelopmentExperiencesService.recordType,
        id
      );
    }

    return developmentExperienceAfterUpdate.raw[0];
  }

  static async delete(id: number) {
    const deletedDevelopmentExperience =
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(DevelopmentExperiences)
        .where("id = :id", { id })
        .execute();

    const wasNoRecordDeleted = deletedDevelopmentExperience.affected === 0;
    if (wasNoRecordDeleted) {
      throw new RecordNotFoundError(
        DevelopmentExperiencesService.recordType,
        id
      );
    }
  }
}
