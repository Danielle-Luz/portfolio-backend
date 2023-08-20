import { Router } from "express";
import { ProjectController } from "../../controllers";
import { app } from "../../app";

const projectRouter = Router();

projectRouter.post("/", ProjectController.create);
projectRouter.post("/:id/technologies", ProjectController.addTechnology);

projectRouter.get("/", ProjectController.getAll);
projectRouter.get("/:id", ProjectController.getOne);
projectRouter.get("/:stack", ProjectController.getByStack);
projectRouter.get("/highlights", ProjectController.getHighlights);
projectRouter.get("/technologies", ProjectController.getTechnologies);

projectRouter.patch("/:id", ProjectController.update);

projectRouter.delete("/:id", ProjectController.delete);

app.use("/projects", projectRouter);
