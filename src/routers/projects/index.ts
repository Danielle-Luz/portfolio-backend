import { Router } from "express";
import { ProjectsController } from "../../controllers";
import { ProjectsMiddlewares, UtilsMiddlewares } from "../../middlewares";

export const projectRouter = Router();

projectRouter.post(
  "",
  ProjectsMiddlewares.validateNewProject(),
  ProjectsController.create
);
projectRouter.post(
  "/many",
  ProjectsMiddlewares.validateManyNewProjects(),
  ProjectsController.createMany
);
projectRouter.post(
  "/:id/technologies",
  UtilsMiddlewares.validateId,
  UtilsMiddlewares.validateBodyParameterId(),
  ProjectsController.addTechnology
);

projectRouter.get("", ProjectsController.getAll);
projectRouter.get("/highlights", ProjectsController.getHighlights);
projectRouter.get(
  "/stack/:stack",
  UtilsMiddlewares.validateValueAsStack(),
  ProjectsController.getByStack
);
projectRouter.get(
  "/:id",
  UtilsMiddlewares.validateId,
  ProjectsController.getOne
);
projectRouter.get(
  "/:id/technologies",
  UtilsMiddlewares.validateId,
  ProjectsController.getTechnologies
);

projectRouter.patch(
  "/:id",
  UtilsMiddlewares.validateId,
  ProjectsMiddlewares.validateUpdatedProject(),
  ProjectsController.update
);

projectRouter.delete(
  "/:id",
  UtilsMiddlewares.validateId,
  ProjectsController.delete
);
