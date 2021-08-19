import { request, response, Router } from "express";
import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    categoryRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const categoriesList = categoryRepository.list();

    return response.json(categoriesList);
})
export { categoriesRoutes };
