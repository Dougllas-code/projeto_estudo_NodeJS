import { NextFunction, Request, Response } from "express";
import prismaCLient from "../prisma";

export async function verifyUserExists(request: Request, response: Response, next: NextFunction) {
  const { id } = request.params

  const user = await prismaCLient.user.findUnique({
    where: {
      id: id
    },
  })

  try {
    if(!user){
      return response.status(404).json({error: "Usuário não existe"})
    }
    
    return next()

  } catch (error) {
    throw new Error('Erro ao verificar se o usuário existe')
  }
}