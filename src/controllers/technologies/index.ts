import { Request, Response } from "express";
import { TechnologyService } from "../../services/technologies";
import { newTechnology, updatedTechnology } from "../../interfaces";

export class TechnologyController {
  static async create(request: Request, response: Response) {
    const { technology: newRecordData } = request;

    const createdTechnology = await TechnologyService.create(
      newRecordData as newTechnology
    );

    return response.status(201).json(createdTechnology);
  }

  static async update(request: Request, response: Response) {
    const { recordId, technology: updatedData } = request;

    const updatedTechnology = await TechnologyService.update(
      recordId,
      updatedData as updatedTechnology
    );

    return response.status(200).json(updatedTechnology);
  }

  static async getAll(request: Request, response: Response) {
    const allTechnologiesFound = await TechnologyService.getAll();

    return response.status(200).json(allTechnologiesFound);
  }

  static async getOne(request: Request, response: Response) {
    const { recordId } = request;
    const foundTechnology = await TechnologyService.getOne(recordId);

    return response.status(200).json(foundTechnology);
  }

  static async delete(request: Request, response: Response) {
    const { recordId } = request;

    await TechnologyService.delete(recordId);

    return response.status(204).send();
  }
}
