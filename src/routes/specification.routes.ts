import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/usecases/createSpecification/CreateSpecificationController";
import { ensureAuthetnticated } from "../middlewares/ensureAuthenticated";


const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthetnticated);


specificationsRoutes.post("/", createSpecificationController.handler);

export { specificationsRoutes }