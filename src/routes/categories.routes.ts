import { request, response, Router } from "express";
import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const categoryService = new CreateCategoryService(categoryRepository);
    categoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const categoriesList = categoryRepository.list();

    return response.json(categoriesList);
})
export { categoriesRoutes };
