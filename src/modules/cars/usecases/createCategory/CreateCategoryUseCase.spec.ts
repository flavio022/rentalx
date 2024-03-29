import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase; CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create category",()=>{
    beforeEach(()=>{
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    })
    it("it should be able to create new category",async () => {
        const category = {
            name: "Category Test",
            description:"Category test"
        }
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

        expect(categoryCreated).toHaveProperty("id");
    })

    it("it should not be able to create new category with the same name",async () => {
        expect(async () => {
            const category = {
                name: "Category Test",
                description:"Category test"
            }
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            });
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            });

         }).rejects.toBeInstanceOf(AppError);

    })
})