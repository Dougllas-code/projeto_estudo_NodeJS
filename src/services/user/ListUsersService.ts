import prismaCLient from "../../prisma"

class ListUsersService {
  async execute() {
    const users = prismaCLient.user.findMany()

    try {
      return users
    } catch (error) {
      throw new Error('Erro ao listar usuários')
    }
  }
}

export { ListUsersService }