import { AppDataSource } from "../../data-source";
import { Technologies } from "../../entities";
import { RecordNotFoundError } from "../../errors/RecordNotFoundError";
import { newTechnology, updatedTechnology } from "../../interfaces";

export class TechnologiesService {
  static recordType: string = "technologies";

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

  static async getOne(id: number) {
    return AppDataSource.createQueryBuilder()
      .select("technologies")
      .from(Technologies, "technologies")
      .where("technologies.id = :id", { id })
      .getOneOrFail();
  }

  static async delete(id: number) {
    const deletedTechnology = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Technologies)
      .where("technologies.id = :id", { id })
      .execute();

    if (deletedTechnology.affected === 0) {
      throw new RecordNotFoundError(TechnologiesService.recordType, id);
    }

    return deletedTechnology.affected;
  }
}
