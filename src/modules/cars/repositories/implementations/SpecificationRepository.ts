import { Specification } from "../../models/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];
    private static INSTANCE: SpecificationRepository;

    constructor() {
        this.specifications = [];
    }

    public static getInstance() {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find((specification) => specification.name == name);
        return specification;
    }
    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specification);
    }

}

export { SpecificationRepository };