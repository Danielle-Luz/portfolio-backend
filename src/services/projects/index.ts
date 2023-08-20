import { AppDataSource } from "../../data-source";
import { Projects } from "../../entities";
import { newProject, updatedProject } from "../../interfaces";
import { TechnologyService } from "../technologies";

export class ProjectService {
  static async create(project: newProject) {
    const createdProject = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Projects)
      .values(project)
      .returning("*")
      .execute();

    return createdProject.generatedMaps[0];
  }

  static async getAll() {
    return AppDataSource.getRepository(Projects)
      .createQueryBuilder("projects")
      .getMany();
  }

  static async getOne(id: number) {
    return AppDataSource.createQueryBuilder()
      .select("projects")
      .from(Projects, "projects")
      .where("projects.id = :id", { id })
      .getOneOrFail();
  }

  static async getRecordsByStack(stack: string) {
    return AppDataSource.createQueryBuilder()
      .select("projects")
      .from(Projects, "projects")
      .where("projects.stack = :stack", { stack })
      .getMany();
  }

  static async getRecordTechnologies(id: number) {
    const foundProject = await AppDataSource.createQueryBuilder()
      .select("projects")
      .from(Projects, "projects")
      .where("projects.id = :id", { id })
      .getOneOrFail();

    return foundProject.technologies;
  }

  static async update(id: number, updatedProject: updatedProject) {
    const projectAfterUpdate = await AppDataSource.createQueryBuilder()
      .update(Projects)
      .set(updatedProject)
      .where("id = :id", { id })
      .returning("*")
      .execute();

    return projectAfterUpdate.raw;
  }

  static async delete(id: number) {
    const deletedProject = await AppDataSource.getRepository(Projects)
      .createQueryBuilder()
      .delete()
      .from(Projects, "projects")
      .where("projects.id = :id", { id })
      .execute();

    return deletedProject.affected;
  }

  static async addTechnology(projectId: number, technologyId: number) {
    const foundProject = await ProjectService.getOne(projectId);
    const foundTechnology = await TechnologyService.getOne(technologyId);

    await AppDataSource.createQueryBuilder()
      .relation(Projects, "technologies")
      .of(foundProject)
      .add(foundTechnology);
  }
}
