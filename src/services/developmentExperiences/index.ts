import { AppDataSource } from "../../data-source";
import { DevelopmentExperiences } from "../../entities";
import { ExperienceType } from "../../enums";
import {
  newDevelopmentExperience,
  updatedDevelopmentExperience,
} from "../../interfaces";

export class DevelopmentExperienceService {
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
      .getMany();
  }

  static async getByType(type: ExperienceType) {
    return AppDataSource.createQueryBuilder()
      .select("development_experiences")
      .from(DevelopmentExperiences, "development_experiences")
      .where("development_experiences.type = :type", { type })
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

    return developmentExperienceAfterUpdate.raw;
  }

  static async delete(id: number) {
    const deletedDevelopmentExperience =
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(DevelopmentExperiences)
        .where("id = :id", { id })
        .execute();

    return deletedDevelopmentExperience.affected;
  }
}
