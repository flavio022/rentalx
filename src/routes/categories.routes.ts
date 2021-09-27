import { request, response, Router } from "express";
import { createCategoryController } from "../modules/cars/usecases/createCategory";
import { listCategoryController } from "../modules/cars/usecases/listCategory";
import multer from 'multer';

const upload = multer({
    dest: "./tmp",
})

const categoriesRoutes = Router();

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    const { file } = request;
    console.log(file);
    return response.send();
})
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handler(request, response);
})
export { categoriesRoutes };
