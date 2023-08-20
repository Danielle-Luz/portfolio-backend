import { Request, Response } from "express";
import { ProjectService } from "../../services/projects";
import { newProject, recordId } from "../../interfaces";
import { Stack } from "../../enums";

export class ProjectController {
  static async create(request: Request, response: Response) {
    const { project } = request;

    const createdProject = await ProjectService.create(project as newProject);

    return response.status(201).json(createdProject);
  }

  static async getAll(request: Request, response: Response) {
    const allProjectsFound = await ProjectService.getAll();

    return response.status(200).json(allProjectsFound);
  }

  static async getOne(request: Request, response: Response) {
    const { recordId } = request;

    const foundProject = await ProjectService.getOne(recordId);

    return response.status(200).json(foundProject);
  }

  static async getByStack(request: Request, response: Response) {
    const stack = request.params.stack as Stack;

    const foundProjects = await ProjectService.getByStack(stack);

    return response.status(200).json(foundProjects);
  }

  static async getHighlights(request: Request, response: Response) {
    const highlightProjects = await ProjectService.getHighlights();

    return response.status(200).json(highlightProjects);
  }

  static async getTechnologies(request: Request, response: Response) {
    const { recordId } = request;

    const projectTechnologies = await ProjectService.getTechnologies(recordId);

    return response.status(200).json(projectTechnologies);
  }

  static async update(request: Request, response: Response) {
    const { recordId, project: updatedProjectData } = request;

    const updatedProject = await ProjectService.update(
      recordId,
      updatedProjectData
    );

    return response.status(200).json(updatedProject);
  }

  static async delete(request: Request, response: Response) {
    const { recordId } = request;

    await ProjectService.delete(recordId);

    return response.status(204).send();
  }

  static async addTechnology(request: Request, response: Response) {
    const { recordId: projectId } = request;

    const technologyId = request.body.id as number;

    const projectWithTechnology = await ProjectService.addTechnology(
      projectId,
      technologyId
    );

    return response.status(200).json(projectWithTechnology);
  }
}
