import { Request, Response } from "express";
import { DeleteUserService } from "./DeleteUserService";

class DeleteUserController {

  constructor(private deleteUserService: DeleteUserService) { }

  async handle(request: Request, response: Response) {
    const { id } = request.params

    try {
      const result = await this.deleteUserService.execute(id)
      return response.status(200).json(result)

    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { DeleteUserController }