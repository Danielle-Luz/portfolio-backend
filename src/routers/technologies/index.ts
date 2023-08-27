import { Router } from "express";
import { TechnologiesController } from "../../controllers";
import { TechnologiesMiddlewares, UtilsMiddlewares } from "../../middlewares";

export const technologyRouter = Router();

technologyRouter.post(
  "",
  TechnologiesMiddlewares.validateNewTechnology,
  TechnologiesController.create
);

technologyRouter.patch(
  "/:id",
  UtilsMiddlewares.validateId,
  TechnologiesMiddlewares.validateUpdatedTechnology,
  TechnologiesController.update
);

technologyRouter.get("", TechnologiesController.getAll);
technologyRouter.get(
  "/:id",
  UtilsMiddlewares.validateId,
  TechnologiesController.getOne
);

technologyRouter.delete(
  "/:id",
  UtilsMiddlewares.validateId,
  TechnologiesController.delete
);