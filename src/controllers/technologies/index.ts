import { Request, Response } from "express";
import { TechnologiesService } from "../../services";
import { newTechnology, updatedTechnology } from "../../interfaces";

export class TechnologiesController {
  static async create(request: Request, response: Response) {
    const { technology: newRecordData } = request;

    const createdTechnology = await TechnologiesService.create(
      newRecordData as newTechnology
    );

    return response.status(201).json(createdTechnology);
  }

  static async update(request: Request, response: Response) {
    const { recordId, technology: updatedData } = request;

    const updatedTechnology = await TechnologiesService.update(
      recordId,
      updatedData as updatedTechnology
    );

    return response.status(200).json(updatedTechnology);
  }

  static async getAll(request: Request, response: Response) {
    const allTechnologiesFound = await TechnologiesService.getAll();

    return response.status(200).send(allTechnologiesFound);
  }

  static async getOne(request: Request, response: Response) {
    const { recordId } = request;
    const foundTechnology = await TechnologiesService.getOne(recordId);

    return response.status(200).json(foundTechnology);
  }

  static async delete(request: Request, response: Response) {
    const { recordId } = request;

    await TechnologiesService.delete(recordId);

    return response.status(204).send();
  }
}
