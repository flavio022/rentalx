import { IUserRepository } from "../../repositories/IUserRepository";
import { injectable, inject, container } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    };
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);
        console.log(email);
        if (!user) {
            throw new Error("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("password incorrect!")
        }

        const token = sign({}, "2d58a2003d8bd2bcdb1e0e57a77a4acf", {
            subject: user.id,
            expiresIn: "1d"
        });;

        const tokenReturn: IResponse = {

            token,
            user: {
                name: user.name,
                email: user.email
            }

        }
        return tokenReturn;
    }

}

export { AuthenticateUserUseCase }