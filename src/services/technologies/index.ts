import { AppDataSource } from "../../data-source";
import { Technologies } from "../../entities";
import { newTechnology, updatedTechnology } from "../../interfaces";

export class TechnologyService {
  static async create(newTechnology: newTechnology) {
    const createdTechnology = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Technologies)
      .values(newTechnology)
      .returning("*")
      .execute();

    return createdTechnology.generatedMaps[0];
  }

  static async update(id: number, updatedTechnology: updatedTechnology) {
    const technologyAfterUpdate = await AppDataSource.createQueryBuilder()
      .update(Technologies)
      .set(updatedTechnology)
      .where("technologies.id = :id", { id })
      .returning("*")
      .execute();

    return technologyAfterUpdate.raw[0];
  }

  static async getAll() {
    return AppDataSource.getRepository(Technologies)
      .createQueryBuilder()
      .getMany();
  }

  static async delete(id: number) {
    const deletedTechnology = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Technologies)
      .where("technologies.id = :id", { id })
      .execute();

    return deletedTechnology.affected;
  }
}
