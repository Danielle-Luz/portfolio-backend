import { Router } from "express";
import { ProjectsController } from "../../controllers";
import { app } from "../../app";
import { ProjectsMiddlewares, UtilsMiddlewares } from "../../middlewares";

const projectRouter = Router();

projectRouter.post(
  "/",
  ProjectsMiddlewares.validateNewProject,
  ProjectsController.create
);
projectRouter.post(
  "/:id/technologies",
  UtilsMiddlewares.validateId,
  UtilsMiddlewares.validateBodyParameterId,
  ProjectsController.addTechnology
);

projectRouter.get("/", ProjectsController.getAll);
projectRouter.get(
  "/:id",
  UtilsMiddlewares.validateId,
  ProjectsController.getOne
);
projectRouter.get(
  "/:stack",
  UtilsMiddlewares.validateValueAsStack,
  ProjectsController.getByStack
);
projectRouter.get("/highlights", ProjectsController.getHighlights);
projectRouter.get("/technologies", ProjectsController.getTechnologies);

projectRouter.patch(
  "/:id",
  UtilsMiddlewares.validateId,
  ProjectsMiddlewares.validateUpdatedProject,
  ProjectsController.update
);

projectRouter.delete(
  "/:id",
  UtilsMiddlewares.validateId,
  ProjectsController.delete
);

app.use("/projects", projectRouter);
