import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersService } from "./ListUsersService";

const userRepository = new UserRepository()
const listUsersService = new ListUsersService(userRepository)
const listUsersController = new ListUsersController(listUsersService)

export { listUsersController }