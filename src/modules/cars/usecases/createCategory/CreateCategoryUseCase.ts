import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {
    private categoryRepository: ICategoryRepository;
    constructor(categoryRepository: ICategoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    execute({ description, name }: IRequest): void {
        const categoryAlredyExist = this.categoryRepository.findByName(name);

        if (categoryAlredyExist) {
            throw new Error("Category alredy exists!");
        }

        this.categoryRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase }