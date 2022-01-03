import { ISpecificationRepository } from "../repositories/ISpecificationRepository";
import { AppError } from "../../../errors/AppError";

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
            throw new AppError("Specification already exists!", 401);
        }
        this.specificationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService };