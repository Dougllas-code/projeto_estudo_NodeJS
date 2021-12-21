import { Request, Response } from "express";
import { UpdateUserService } from "./UpdateUserService";

class UpdateUserController {

  constructor(private updateUserService: UpdateUserService) { }

  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name, email } = request.body

    try {
      const result = await this.updateUserService.execute(id, name, email)
      return response.status(200).json(result)

    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { UpdateUserController }