import prismaCLient from "../../prisma"

class CreateUserService {

  async execute(name: string, userName: string, email: string) { 

    const user = prismaCLient.user.create({
      data: {
        name,
        userName, email
      }
    })

    try {
      return user
    } catch (error) {
      throw new Error("Erro ao cadastrar usuario")
    }
  }
}

export { CreateUserService }