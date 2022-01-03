import { Router } from "express";
import { CreateUserController } from "../modules/accounts/usecases/createUsers/CreateUserController";

const usersRoutes = Router();
const createUsersController = new CreateUserController();

usersRoutes.post("/", createUsersController.handler);

export { usersRoutes };
