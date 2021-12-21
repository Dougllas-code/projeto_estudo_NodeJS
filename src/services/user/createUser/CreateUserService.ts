import { IUserRepository } from "../../../repositories/IUserRepository";

class CreateUserService {

  constructor(private userRepository: IUserRepository) { }

  async execute(name: string, userName: string, email: string) {

    const user = await this.userRepository.create(name, userName, email)

    return user
  }
}

export { CreateUserService }