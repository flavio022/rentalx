import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUsers/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase : AuthenticateUserUseCase;
let usersRepositoryInMemory :  UserRepositoryInMemory;
let createUserUseCase : CreateUserUseCase;


describe("Authenticate User", () => {
    
    beforeEach(()=>{
        usersRepositoryInMemory = new UserRepositoryInMemory();

        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);

    });

    it("should be able to authenticate an user", async ()=>{
        
        const user : ICreateUserDTO = {
            drive_license : "00123",
            email: "johndoe@gmail.com",
            password: "1234",
            name: "User test"
        };
        await createUserUseCase.execute(user);
        const result = await authenticateUserUseCase.execute({

            email:user.email,
            password: user.password

        });
        
        console.log(result);

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate an noneexistent user",async()=>{
        expect(async ( ) => {
        await authenticateUserUseCase.execute({
            email: "false@gmail.com",
            password: "121"
        });
        }).rejects.toBeInstanceOf(AppError);
    });
    it("should not be able to authenticate an incorrect password",()=>{
        expect(async()=> {
            const user: ICreateUserDTO = {
                drive_license: "9999",
                email: "flavio.danilo022@gmail.com",
                password: "12345",
                name: "Flavio"
            }
            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "incorrectPassword",
            })


        }).rejects.toBeInstanceOf(AppError);

    });
});