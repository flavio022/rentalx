import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificaionUseCase";

class CreateSpecificationController {
    private createSpecificationUseCase: CreateSpecificationUseCase;
    constructor(createSpecificationUseCase: CreateSpecificationUseCase) {
        this.createSpecificationUseCase = createSpecificationUseCase;
    }
    handler(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createSpecificationUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationController }