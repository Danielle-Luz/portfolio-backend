import { Request, Response } from "express";
import { ProjectsService } from "../../services";
import { newProject, recordId } from "../../interfaces";
import { Stack } from "../../enums";

export class ProjectsController {
  static async create(request: Request, response: Response) {
    const { project: newRecordData } = request;

    const createdProject = await ProjectsService.create(
      newRecordData as newProject
    );

    return response.status(201).json(createdProject);
  }

  static createMany(request: Request, response: Response) {
    
  }

  static async getAll(request: Request, response: Response) {
    const allProjectsFound = await ProjectsService.getAll();

    return response.status(200).json(allProjectsFound);
  }

  static async getOne(request: Request, response: Response) {
    const { recordId } = request;

    const foundProject = await ProjectsService.getOne(recordId);

    return response.status(200).json(foundProject);
  }

  static async getByStack(request: Request, response: Response) {
    const stack = request.params.stack as Stack;

    const foundProjects = await ProjectsService.getByStack(stack);

    return response.status(200).json(foundProjects);
  }

  static async getHighlights(request: Request, response: Response) {
    const highlightProjects = await ProjectsService.getHighlights();

    return response.status(200).json(highlightProjects);
  }

  static async getTechnologies(request: Request, response: Response) {
    const { recordId } = request;

    const projectTechnologies = await ProjectsService.getTechnologies(recordId);

    return response.status(200).json(projectTechnologies);
  }

  static async update(request: Request, response: Response) {
    const { recordId, project: updatedData } = request;

    const updatedProject = await ProjectsService.update(recordId, updatedData);

    return response.status(200).json(updatedProject);
  }

  static async delete(request: Request, response: Response) {
    const { recordId } = request;

    const deletedProject = await ProjectsService.delete(recordId);

    return response.status(204).send();
  }

  static async addTechnology(request: Request, response: Response) {
    const { recordId: projectId } = request;

    const technologyId = request.body.id as number;

    const projectWithTechnology = await ProjectsService.addTechnology(
      projectId,
      technologyId
    );

    return response.status(200).json(projectWithTechnology);
  }
}
