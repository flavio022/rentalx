import { IUserRepository } from "../IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";

class UserRepository implements IUserRepository {

    private userRepository: Repository<User>;
    constructor() {
        this.userRepository = getRepository(User);
    }
    async findById(id: string): Promise<User> {
        const user = await this.userRepository.findOne(id);

        return user;
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findOne({ email });

        return user;
    }

    async create({
        name,
        email,
        drive_license,
        password,
        id,
        avatar
    }: ICreateUserDTO): Promise<void> {
        const user = this.userRepository.create({
            name,
            email,
            drive_license,
            password,
            id,
            avatar
        })

        await this.userRepository.save(user);
    }

}


export { UserRepository }