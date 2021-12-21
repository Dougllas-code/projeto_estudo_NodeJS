import prismaCLient from "../../../prisma"
import { IUserRepository } from "../../../repositories/IUserRepository"

class ListUsersService {

  constructor(private userRepository: IUserRepository) { }
  async execute() {
    const users = await this.userRepository.list()

    return users
  }
}

export { ListUsersService }