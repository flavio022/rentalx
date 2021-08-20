import { CategoryRepository } from "../repositories/CategoryRepository";

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryService {
    private categoryRepository: CategoryRepository;
    constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    execute({ description, name }: IRequest): void {
        const categoryAlredyExist = this.categoryRepository.find(name);

        if (categoryAlredyExist) {
            throw new Error("Category alredy exists!");
        }

        this.categoryRepository.create({ name, description });
    }

}

export { CreateCategoryService }