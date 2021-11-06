import { Router } from "express";

import { CreateCategoryController } from "../modules/cars/usecases/createCategory/CreateCategoryController";
import { listCategoryController } from "../modules/cars/usecases/listCategory";
import { importCategoryController } from "../modules/cars/usecases/importCategory";
import multer from 'multer';

const upload = multer({
    dest: "./tmp",
})

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {

    return importCategoryController.handler(request, response);
})
categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handler(request, response);
})
export { categoriesRoutes };
