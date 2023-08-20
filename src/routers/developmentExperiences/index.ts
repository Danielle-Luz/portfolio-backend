import { Router } from "express";
import { DevelopmentExperienceController } from "../../controllers";
import { app } from "../../app";

const developmentExperienceRouter = Router();

developmentExperienceRouter.post("/", DevelopmentExperienceController.create);

developmentExperienceRouter.get("/", DevelopmentExperienceController.getAll);
developmentExperienceRouter.get(
  "/:type",
  DevelopmentExperienceController.getByType
);

developmentExperienceRouter.patch(
  "/:id",
  DevelopmentExperienceController.update
);

developmentExperienceRouter.delete(
  "/:id",
  DevelopmentExperienceController.delete
);

app.use("/developmentExperiences", developmentExperienceRouter);
