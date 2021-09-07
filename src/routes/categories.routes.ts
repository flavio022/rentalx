import { Router } from "express";
import { createCategoryController } from "../modules/cars/usecases/createCategory";
import { listCategoryController } from "../modules/cars/usecases/listCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handler(request, response);
})
export { categoriesRoutes };
