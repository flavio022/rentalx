import { ICreateCategoryDTO, ICategoryRepository } from "./ICategoryRepository";
import { Category } from "../models/Category";

class PostgressRepository implements ICategoryRepository {
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name);
    }

    findByName(name: string): Category | undefined {
        return undefined;
    }

    list(): Category[] {
        const list = [];
        const category = new Category();
        list.push(category);
        return list;
    }
}

export { PostgressRepository }