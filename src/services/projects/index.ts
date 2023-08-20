import { Repository, SelectQueryBuilder } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Projects } from "../../entities";
import { paginationParams } from "../../interfaces";

export class ProjectService {
  repository: Repository<Projects>;
  queryBuilder: SelectQueryBuilder<Projects>;

  constructor() {
    this.repository = AppDataSource.getRepository(Projects);
    this.queryBuilder = this.repository.createQueryBuilder();
  }

  async create(project: Projects) {
    return await this.queryBuilder
      .insert()
      .into(Projects)
      .values(project)
      .execute();
  }

  async getOne(id: string) {
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
}
