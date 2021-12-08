import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name, email } = request.body

    const service = new UpdateUserService()

    try {
      const result = await service.execute(id, name, email)
      return response.status(200).json(result)

    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { UpdateUserController }