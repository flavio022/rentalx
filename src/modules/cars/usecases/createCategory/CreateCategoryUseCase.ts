import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    name: string,
    description: string
}
@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) { }


    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoryRepository.findByName(
            name
        );

        if (categoryAlreadyExists) {
            throw new AppError("Category already exist!", 401);
        }

        await this.categoryRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase }