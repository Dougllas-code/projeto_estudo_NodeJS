import { Request, Response } from "express";
import { ListUsersService } from "../../services/user/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response){

    const service = new ListUsersService()

    const result = await service.execute()

    return response.json(result)
  }
}

export { ListUsersController }