import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/usecases/createCategory/CreateCategoryController";
import { ListCategoryController } from "../modules/cars/usecases/listCategory/ListCategoryController";
import { ImportCategoryController } from "../modules/cars/usecases/importCategory/ImportCategoryController";

import multer from 'multer';

const upload = multer({
    dest: "./tmp",
})

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handler);
categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoryController.handler);

export { categoriesRoutes };
