import { Router } from "express";
import multer from "multer";
import { ensureAuthetnticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/usecases/createUsers/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/usecases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "../config/upload";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUsersController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();


usersRoutes.post("/", createUsersController.handler);
usersRoutes.patch("/avatar", ensureAuthetnticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export { usersRoutes };
