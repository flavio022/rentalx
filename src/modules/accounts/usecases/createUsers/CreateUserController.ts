import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {


    async handler(request: Request, response: Response): Promise<Response> {
        const { name, email, password, drive_license } = request.body;
        const createSpecificationUseCase = container.resolve(CreateUserUseCase);

        await createSpecificationUseCase.execute({ name, email, password, drive_license });

        return response.status(201).send();
    }

}


export { CreateUserController }