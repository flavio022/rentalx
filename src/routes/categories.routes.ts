import { Router } from "express";
import { createCategoryController } from "../modules/cars/usecases/createCategory";
import { listCategoryController } from "../modules/cars/usecases/listCategory";
import { importCategoryController } from "../modules/cars/usecases/importCategory";
import multer from 'multer';

const upload = multer({
    dest: "./tmp",
})

const categoriesRoutes = Router();

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {

    return importCategoryController.handler(request, response);
})
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handler(request, response);
})
export { categoriesRoutes };
