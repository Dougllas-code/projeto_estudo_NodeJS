import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserService } from "./DeleteUserService";

const userRepository = new UserRepository()
const deleteUserService = new DeleteUserService(userRepository)
const deleteUserController = new DeleteUserController(deleteUserService)

export { deleteUserController }