import { Repository, SelectQueryBuilder } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Projects } from "../../entities";
import { newProject, paginationParams } from "../../interfaces";
import { updatedProject } from "../../interfaces/projects";

export class ProjectService {
  static repository: Repository<Projects>;
  static queryBuilder: SelectQueryBuilder<Projects>;

  constructor() {
    ProjectService.repository = AppDataSource.getRepository(Projects);
    ProjectService.queryBuilder =
      ProjectService.repository.createQueryBuilder();
  }

  static async create(project: newProject) {
    return await ProjectService.queryBuilder
      .insert()
      .into(Projects)
      .values(project)
      .execute();
  }

  static async getOne(id: number) {
    return await ProjectService.queryBuilder
      .select()
      .from(Projects, "projects")
      .where("projects.id = :id", { id })
      .getOneOrFail();
  }

  static async getMany(paginationParams: paginationParams) {
    return await ProjectService.queryBuilder
      .select()
      .from(Projects, "projects")
      .getMany();
  }

  static async update(id: number, updatedProject: updatedProject) {
    return await ProjectService.queryBuilder
      .update(Projects)
      .set(updatedProject)
      .where("id = :id", { id })
      .execute();
  }

  static async delete(id: number) {
    return await ProjectService.queryBuilder
      .delete()
      .from(Projects)
      .where("id = :id", { id })
      .execute();
  }
}
