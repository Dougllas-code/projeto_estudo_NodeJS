import { Prisma, User } from "@prisma/client";
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

  list(): Prisma.Prisma__UserClient < User > [] {
  }

  update(id: string, name ?: string, email ?: string): Prisma.Prisma__UserClient < User > {
  }
  
  delete (id: string): Prisma.Prisma__UserClient < User > {
  }
}

export { UserRepository }