import { ICategoryRepository } from '../../repositories/ICategoryRepository';
import { Category } from '../../entities/Category';
import { inject, injectable } from 'tsyringe';


@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository) {
    }
    async execute(): Promise<Category[]> {

        const categories = await this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoryUseCase }