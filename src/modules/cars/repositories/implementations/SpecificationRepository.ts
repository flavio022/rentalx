import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {

    private specifications: Repository<Specification>;

    constructor() {
        this.specifications = getRepository(Specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.specifications.findOne({
            name
        })
        return specification;
    }

    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.specifications.create(
            {
                description,
                name
            }
        )
        await this.specifications.save(specification);
    }

}

export { SpecificationRepository };