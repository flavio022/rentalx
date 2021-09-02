import { ICategoryRepository } from '../../repositories/ICategoryRepository';
import { Category } from '../../models/Category';

class ListCategoryUseCase {
    private categoryRepository: ICategoryRepository;
    constructor(categoryRepository: ICategoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    execute(): Category[] {
        const categories = this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoryUseCase }