import { Request, Response, response } from "express";
import { DevelopmentExperiencesService } from "../../services";
import { newDevelopmentExperience } from "../../interfaces";
import { ExperienceType } from "../../enums";

export class DevelopmentExperiencesController {
  static async create(request: Request, response: Response) {
    const { developmentExperience: newRecordData } = request;

    const createdDevelopmentExperience =
      await DevelopmentExperiencesService.create(
        newRecordData as newDevelopmentExperience
      );

    return response.status(201).json(createdDevelopmentExperience);
  }

  static async getAll(request: Request, response: Response) {
    const allDevelopmentExperiences =
      await DevelopmentExperiencesService.getAll();

    return response.status(200).json(allDevelopmentExperiences);
  }

  static async getByType(request: Request, response: Response) {
    const experienceType = request.params.type as ExperienceType;

    const foundDevelopmentExperiences =
      await DevelopmentExperiencesService.getByType(experienceType);

    return response.status(200).json(foundDevelopmentExperiences);
  }

  static async update(request: Request, response: Response) {
    const { recordId, developmentExperience: updatedData } = request;

    const updatedDevelopmentExperience =
      await DevelopmentExperiencesService.update(recordId, updatedData);

    return response.status(200).json(updatedDevelopmentExperience);
  }

  static async delete(request: Request, response: Response) {
    const { recordId } = request;

    await DevelopmentExperiencesService.delete(recordId);

    return response.status(204).send();
  }
}
