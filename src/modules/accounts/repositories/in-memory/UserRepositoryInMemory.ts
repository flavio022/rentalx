import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepository{

    users: User[] = [];

    async create({drive_license,email,name,password} : ICreateUserDTO ): Promise<void>{
            
        const user  = new User();

        Object.assign(user,{drive_license, email,name,password})

        this.users.push(user);
       
    }

    async findByEmail(email: string): Promise<User> {

        return this.users.find((user) => user.email === email);

    }

    async findById(id: string): Promise<User> {
        
        return this.users.find((user) => user.id === id);

    }
    
}

export {UserRepositoryInMemory};