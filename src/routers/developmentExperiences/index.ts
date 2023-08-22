import { Router } from "express";
import { DevelopmentExperiencesController } from "../../controllers";
import { app } from "../../app";

const developmentExperienceRouter = Router();

developmentExperienceRouter.post("/", DevelopmentExperiencesController.create);

developmentExperienceRouter.get("/", DevelopmentExperiencesController.getAll);
developmentExperienceRouter.get(
  "/:type",
  DevelopmentExperiencesController.getByType
);

developmentExperienceRouter.patch(
  "/:id",
  DevelopmentExperiencesController.update
);

developmentExperienceRouter.delete(
  "/:id",
  DevelopmentExperiencesController.delete
);

app.use("/developmentExperiences", developmentExperienceRouter);
