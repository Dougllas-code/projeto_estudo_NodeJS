import { Request, Response } from "express";
import { ListUsersService } from "./ListUsersService";

class ListUsersController {

  constructor(private listUsersService: ListUsersService) { }

  async handle(request: Request, response: Response) {

    try {
      const result = await this.listUsersService.execute()
      return response.status(200).json(result)

    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { ListUsersController }