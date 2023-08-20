import { AppDataSource } from "../../data-source";
import { Projects } from "../../entities";
import { newProject, updatedProject } from "../../interfaces";

export class ProjectService {
  static async create(project: newProject) {
    const createdProject = await AppDataSource.getRepository(Projects)
      .createQueryBuilder()
      .insert()
      .into(Projects)
      .values(project)
      .returning("*")
      .execute();

    return createdProject.generatedMaps[0];
  }

  static async getOne(id: number) {
    return AppDataSource.getRepository(Projects)
      .createQueryBuilder("projects")
      .where("projects.id = :id", { id })
      .getOneOrFail();
  }

  static async getMany() {
    return AppDataSource.getRepository(Projects)
      .createQueryBuilder("projects")
      .getMany();
  }

  static async getRecordsByStack(stack: string) {
    return AppDataSource.getRepository(Projects)
      .createQueryBuilder("projects")
      .where("projects.stack = :stack", { stack })
      .getMany();
  }

  static async getRecordTechnologies(id: number) {
    const foundProject = await AppDataSource.getRepository(Projects)
      .createQueryBuilder("projects")
      .where("projects.id = :id", { id })
      .getOneOrFail();

    return foundProject.technologies;
  }

  static async update(id: number, updatedProject: updatedProject) {
    return AppDataSource.getRepository(Projects)
      .createQueryBuilder()
      .update(Projects)
      .set(updatedProject)
      .where("id = :id", { id })
      .execute();
  }

  static async delete(id: number) {
    return AppDataSource.getRepository(Projects)
      .createQueryBuilder()
      .delete()
      .from(Projects)
      .where("id = :id", { id })
      .execute();
  }
}
