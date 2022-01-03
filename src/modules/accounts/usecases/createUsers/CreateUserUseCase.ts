import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from "bcryptjs";


@injectable()
class CreateUserUseCase {

    constructor(

        @inject("UserRepository")
        private usersRepository: IUserRepository
    ) {

    }
    async execute({
        name,
        email,
        password,
        drive_license }: ICreateUserDTO): Promise<void> {


        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            drive_license
        })
    }
}


export { CreateUserUseCase }