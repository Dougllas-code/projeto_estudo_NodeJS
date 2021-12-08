import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService"

class CreateUserController {

  async handle(request: Request, response: Response) {
    const { name, userName, email } = request.body

    const service = new CreateUserService()

    try {
      const result = await service.execute(name, userName, email)
      return response.status(201).json(result)

    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { CreateUserController }