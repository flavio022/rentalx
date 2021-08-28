import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { createCategoryController } from "../modules/cars/usecases/createCategory";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    const categoriesList = categoryRepository.list();

    return response.json(categoriesList);
})
export { categoriesRoutes };
