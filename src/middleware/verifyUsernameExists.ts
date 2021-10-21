import { NextFunction, Request, Response } from "express";
import prismaCLient from "../prisma";

export async function verifyUsernameExists(request: Request, response: Response, next: NextFunction) {
  const { userName, name, email } = request.body

  const user = await prismaCLient.user.findUnique({
    where: {
      userName: userName
    }
  })

  try {
    if(!user){
      request.body.userName = userName
      request.body.name = name
      request.body.email = email

      return next()
    }
    
    return response.status(401).json({error: "Username já está em uso"})

  } catch (error) {
    throw new Error('Erro ao buscar username')
  }
}