import { Router } from "express";
import { TechnologiesController } from "../../controllers";
import { app } from "../../app";

const technologyRouter = Router();

technologyRouter.post("/", TechnologiesController.create);

technologyRouter.patch("/:id", TechnologiesController.update);

technologyRouter.get("/", TechnologiesController.getAll);
technologyRouter.get("/:id", TechnologiesController.getOne);

technologyRouter.delete("/:id", TechnologiesController.delete);

app.use("/technologies", technologyRouter);
