import { Request, Response } from "express";
import { ListUsersService } from "../../services/user/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response) {

    const service = new ListUsersService()

    try {
      const result = await service.execute()
      return response.status(200).json(result)

    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { ListUsersController }