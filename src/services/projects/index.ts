import { Repository, SelectQueryBuilder } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Projects } from "../../entities";
import { newProject, paginationParams } from "../../interfaces";
import { updatedProject } from "../../interfaces/projects";

export class ProjectService {
  repository: Repository<Projects>;
  queryBuilder: SelectQueryBuilder<Projects>;

  constructor() {
    this.repository = AppDataSource.getRepository(Projects);
    this.queryBuilder = this.repository.createQueryBuilder();
  }

  async create(project: newProject) {
    return await this.queryBuilder
      .insert()
      .into(Projects)
      .values(project)
      .execute();
  }

  async getOne(id: number) {
    return await this.queryBuilder
      .select()
      .from(Projects, "projects")
      .where("projects.id = :id", { id })
      .getOneOrFail();
  }

  async getMany(paginationParams: paginationParams) {
    return await this.queryBuilder
      .select()
      .from(Projects, "projects")
      .getMany();
  }

  async update(id: number, updatedProject: updatedProject) {
    return await this.queryBuilder
      .update(Projects)
      .set(updatedProject)
      .where("id = :id", { id })
      .execute();
  }

  async delete(id: number) {
    return await this.queryBuilder
      .delete()
      .from(Projects)
      .where("id = :id", { id })
      .execute();
  }
}
