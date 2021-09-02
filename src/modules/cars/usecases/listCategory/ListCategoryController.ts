import { Request, Response } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';


class ListCategoryController {
    private listCategoryUseCase: ListCategoryUseCase;
    constructor(listCategoryUseCase: ListCategoryUseCase) {
        this.listCategoryUseCase = listCategoryUseCase;
    }

    handler(request: Request, response: Response) {
        const categoriesList = this.listCategoryUseCase.execute();

        return response.json(categoriesList);
    }
}

export { ListCategoryController }