import prismaCLient from "../../prisma"

class DeleteUserService {
  async execute(id: string){
    
    const deleteUser = await prismaCLient.user.delete({
      where: {
        id: id
      },
      select: {
        name: true,
        userName: true
      }
    })

    try {
      return deleteUser
      
    } catch (error) {
      throw new Error('Erro ao excluir usuário')
    }
  }
}

export { DeleteUserService }