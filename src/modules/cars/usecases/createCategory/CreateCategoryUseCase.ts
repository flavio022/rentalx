import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { inject, injectable } from "tsyringe";

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

    async execute({ description, name }: IRequest): Promise<void> {
        const categoryAlredyExist = await this.categoryRepository.findByName(name);

        if (categoryAlredyExist) {
            throw new Error("Category alredy exists!");
        }

        this.categoryRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase }