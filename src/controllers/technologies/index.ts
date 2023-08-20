import { Request, Response } from "express";
import { TechnologyService } from "../../services/technologies";
import { newTechnology, updatedTechnology } from "../../interfaces";

export class TechnologyController {
  async create(request: Request, response: Response) {
    const { technology } = request;

    const createdTechnology = await TechnologyService.create(
      technology as newTechnology
    );

    return response.status(201).json(createdTechnology);
  }

  async update(request: Request, response: Response) {
    const { recordId, technology } = request;

    const updatedTechnology = await TechnologyService.update(
      recordId,
      technology as updatedTechnology
    );

    return response.status(200).json(updatedTechnology);
  }

  async getAll(request: Request, response: Response) {
    const allTechnologiesFound = await TechnologyService.getAll();

    return response.status(200).json(allTechnologiesFound);
  }

  async getOne(request: Request, response: Response) {
    const { recordId } = request;
    const foundTechnology = await TechnologyService.getOne(recordId);

    return response.status(200).json(foundTechnology);
  }

  async delete(request: Request, response: Response) {
    const { recordId } = request;

    await TechnologyService.delete(recordId);

    return response.status(204).send();
  }
}
