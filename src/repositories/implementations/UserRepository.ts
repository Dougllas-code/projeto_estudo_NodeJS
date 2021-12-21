import { Prisma, PrismaPromise, User } from "@prisma/client";
import prismaCLient from "../../prisma";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  create(name: string, userName: string, email: string): Prisma.Prisma__UserClient<User> {
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

  list(): PrismaPromise<User[]> {
    const users = prismaCLient.user.findMany()

    try {
      return users

    } catch (error) {
      throw new Error('Erro ao listar usuários')
    }
  }

  update(id: string, name?: string, email?: string): Prisma.Prisma__UserClient<User> {
    const user = prismaCLient.user.update({
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

  delete(id: string): Prisma.Prisma__UserClient<User> {
    const deleteUser = prismaCLient.user.delete({
      where: {
        id: id
      },
    })

    try {
      return deleteUser

    } catch (error) {
      throw new Error('Erro ao excluir usuário')
    }
  }
}

export { UserRepository }