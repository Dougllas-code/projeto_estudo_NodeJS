import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";

const userRepository = new UserRepository()
const updateUserService = new UpdateUserService(userRepository)
const updateUserController = new UpdateUserController(updateUserService)

export { updateUserController }