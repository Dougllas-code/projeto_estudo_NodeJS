import { IUserRepository } from "../../../repositories/IUserRepository"

class DeleteUserService {

  constructor(private userRepository: IUserRepository) { }

  async execute(id: string) {
    const user = await this.userRepository.delete(id)

    return user
  }
}

export { DeleteUserService }