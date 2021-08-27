import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    private specificationsRepository: ISpecificationRepository;
    constructor(specificationsRepository: ISpecificationRepository) {
        this.specificationsRepository = specificationsRepository;
    }
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExist = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExist) {
            throw new Error("Specification already exists!");
        }
        this.specificationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService };