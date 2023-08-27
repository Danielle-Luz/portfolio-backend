import { AppDataSource } from "../../data-source";
import { Projects } from "../../entities";
import { Stack } from "../../enums";
import { RecordNotFoundError } from "../../errors";
import { newProject, updatedProject } from "../../interfaces";
import { TechnologiesService } from "../technologies";

export class ProjectsService {
  static recordType: string = "projects";

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
      .leftJoinAndSelect("projects.technologies", "technologies")
      .getMany();
  }

  static async getOne(id: number) {
    return AppDataSource.createQueryBuilder()
      .select("projects")
      .from(Projects, "projects")
      .where("projects.id = :id", { id })
      .leftJoinAndSelect("projects.technologies", "technologies")
      .getOneOrFail()
      .then()
      .catch(() => {
        throw new RecordNotFoundError(ProjectsService.recordType, id);
      });
  }

  static async getByStack(stack: Stack) {
    return AppDataSource.createQueryBuilder()
      .select("projects")
      .from(Projects, "projects")
      .where("projects.stack = :stack", { stack })
      .leftJoinAndSelect("projects.technologies", "technologies")
      .getMany();
  }

  static async getHighlights() {
    return AppDataSource.createQueryBuilder()
      .select("projects")
      .from(Projects, "projects")
      .where("projects.highlight = true")
      .leftJoinAndSelect("projects.technologies", "technologies")
      .getMany();
  }

  static async getTechnologies(id: number) {
    const foundProject = await AppDataSource.createQueryBuilder()
      .select("projects")
      .from(Projects, "projects")
      .where("projects.id = :id", { id })
      .leftJoinAndSelect("projects.technologies", "technologies")
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

    return projectAfterUpdate.raw[0];
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
    const foundProject = await ProjectsService.getOne(projectId);
    const foundTechnology = await TechnologiesService.getOne(technologyId);

    await AppDataSource.createQueryBuilder()
      .relation(Projects, "technologies")
      .of(foundProject)
      .add(foundTechnology);

    return await ProjectsService.getOne(projectId);
  }
}
