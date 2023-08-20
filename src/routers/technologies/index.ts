import { Router } from "express";
import { TechnologyController } from "../../controllers/technologies";
import { app } from "../../app";

const technologyRouter = Router();

technologyRouter.post("/", TechnologyController.create);

technologyRouter.patch("/", TechnologyController.update);

technologyRouter.get("/", TechnologyController.getAll);
technologyRouter.get("/:id", TechnologyController.getOne);

technologyRouter.delete("/:id", TechnologyController.delete);

app.use("/technologies", technologyRouter);
