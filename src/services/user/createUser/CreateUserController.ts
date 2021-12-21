import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {

  constructor(private createUserService: CreateUserService){}

  async handle(request: Request, response: Response) {
    const { name, userName, email } = request.body

    try {
      const result = await this.createUserService.execute(name, userName, email)
      return response.status(201).json(result)

    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { CreateUserController }