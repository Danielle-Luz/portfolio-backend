import { Router } from "express";
import { ProjectsController } from "../../controllers";
import { app } from "../../app";

const projectRouter = Router();

projectRouter.post("/", ProjectsController.create);
projectRouter.post("/:id/technologies", ProjectsController.addTechnology);

projectRouter.get("/", ProjectsController.getAll);
projectRouter.get("/:id", ProjectsController.getOne);
projectRouter.get("/:stack", ProjectsController.getByStack);
projectRouter.get("/highlights", ProjectsController.getHighlights);
projectRouter.get("/technologies", ProjectsController.getTechnologies);

projectRouter.patch("/:id", ProjectsController.update);

projectRouter.delete("/:id", ProjectsController.delete);

app.use("/projects", projectRouter);
