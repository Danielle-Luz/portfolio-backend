import { Router } from "express";
import { DevelopmentExperiencesController } from "../../controllers";
import { app } from "../../app";
import {
  DevelopmentExperiencesMiddlewares,
  UtilsMiddlewares,
} from "../../middlewares";

export const developmentExperienceRouter = Router();

developmentExperienceRouter.post(
  "",
  DevelopmentExperiencesMiddlewares.validateNewDevelopmentExperience(),
  DevelopmentExperiencesController.create
);

developmentExperienceRouter.get("", DevelopmentExperiencesController.getAll);
developmentExperienceRouter.get(
  "/:type",
  DevelopmentExperiencesMiddlewares.validateValueAsExperienceType(),
  DevelopmentExperiencesController.getByType
);

developmentExperienceRouter.patch(
  "/:id",
  UtilsMiddlewares.validateId,
  DevelopmentExperiencesMiddlewares.validateUpdatedDevelopmentExperience(),
  DevelopmentExperiencesController.update
);

developmentExperienceRouter.delete(
  "/:id",
  UtilsMiddlewares.validateId,
  DevelopmentExperiencesController.delete
);
