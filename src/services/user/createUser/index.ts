import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

const userRepository = new UserRepository()
const createUserService = new CreateUserService(userRepository)
const createUserController = new CreateUserController(createUserService)

export { createUserController }