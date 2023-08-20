import { Repository, SelectQueryBuilder } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Projects } from "../../entities";

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
}
