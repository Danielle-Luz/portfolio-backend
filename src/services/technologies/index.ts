import { AppDataSource } from "../../data-source";
import { Technologies } from "../../entities";
import { newTechnology, updatedTechnology } from "../../interfaces";

export class TechnologyService {
  async create(newTechnology: newTechnology) {
    const createdTechnology = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Technologies)
      .values(newTechnology)
      .returning("*")
      .execute();

    return createdTechnology.generatedMaps[0];
  }

  async update(id: number, updatedTechnology: updatedTechnology) {
    const technologyAfterUpdate = await AppDataSource.createQueryBuilder()
      .update(Technologies)
      .set(updatedTechnology)
      .where("technologies.id = :id", { id })
      .returning("*")
      .execute();

    return technologyAfterUpdate.generatedMaps[0];
  }

  async getAll() {
    return AppDataSource.createQueryBuilder()
      .select()
      .from(Technologies, "technologies")
      .getMany();
  }

  async delete(id: number) {
    const deletedTechnology = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Technologies)
      .where("technologies.id = :id", { id })
      .execute();

    return deletedTechnology.affected;
  }
}
