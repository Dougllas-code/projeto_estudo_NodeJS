import { Request, Response } from "express";
import {CreateUserService} from "../../services/user/CreateUserService"

class CreateUserController {

  async handle(request: Request, response: Response){
    const {name, userName, email} = request.body

    const service = new CreateUserService()

    const result = await service.execute(name, userName, email)

    return response.json(result)
  }
}

export { CreateUserController }