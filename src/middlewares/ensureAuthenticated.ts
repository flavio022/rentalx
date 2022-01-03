import { NextFunction, Request, response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";
import { AppError } from "../errors/AppError"

interface IPayLoad {
    sub: string;
}

export async function ensureAuthetnticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing!", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "2d58a2003d8bd2bcdb1e0e57a77a4acf") as IPayLoad;
        const userRepository = new UserRepository();
        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        next();

    } catch {
        throw new AppError("Inválid token", 401);
    }
}
