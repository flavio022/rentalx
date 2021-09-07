import { request, response, Router } from "express";
import { createSpecificaitionController } from "../modules/cars/usecases/createSpecification";


const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificaitionController.handler(request, response);
})

export { specificationsRoutes }