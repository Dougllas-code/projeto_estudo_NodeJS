import { IUserRepository } from "../../../repositories/IUserRepository"

class UpdateUserService {

  constructor(private userRepository: IUserRepository){}

  async execute(id: string, name?: string, email?: string) {

    const user = await this.userRepository.update(id, name, email)

    return user
  }
}

export { UpdateUserService }