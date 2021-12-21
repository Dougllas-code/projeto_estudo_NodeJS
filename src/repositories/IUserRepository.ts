import { Prisma, User } from ".prisma/client";

interface IUserRepository {
  create(name: string, userName: string, email: string): Prisma.Prisma__UserClient<User>
  list(): Prisma.Prisma__UserClient<User>[]
  update(id: string, name?: string, email?: string): Prisma.Prisma__UserClient<User>
  delete(id: string): Prisma.Prisma__UserClient<User>
}

export { IUserRepository }