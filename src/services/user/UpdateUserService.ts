import prismaCLient from "../../prisma"

class UpdateUserService {

  async execute(id: string, name?: string, email?: string) {

    const user = await prismaCLient.user.update({
      where: {
        id: id
      },
      data: {
        name: name,
        email: email
      }
    })

    try {
      return user
    } catch (error) {
      throw new Error('Erro ao editar usuário')
    }
  }
}

export { UpdateUserService }