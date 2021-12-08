import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const service = new DeleteUserService()

    try {
      const result = await service.execute(id)
      return response.status(200).json(result)

    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { DeleteUserController }