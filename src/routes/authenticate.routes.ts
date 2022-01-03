import { AuthenticateUserController } from "../modules/accounts/usecases/authenticate/AuthenticateUserController";
import { Router } from "express";


const authenticateRoutes = Router();
const authenticateController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateController.handler);


export { authenticateRoutes }