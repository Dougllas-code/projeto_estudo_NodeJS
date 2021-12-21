import { Router } from 'express'
import { verifyUserExists } from '../middleware/verifyUserExists'
import { verifyUsernameExists } from '../middleware/verifyUsernameExists'
import { createUserController } from '../services/user/createUser'
import { deleteUserController } from '../services/user/deleteUser'
import { listUsersController } from '../services/user/listUser'
import { updateUserController } from '../services/user/updateUser'

const router = Router()

router.post('/user', verifyUsernameExists, (request, response) => {
  return createUserController.handle(request, response)
})
router.get('/user', (request, response) => {
  return listUsersController.handle(request, response)
})

router.delete('/user/:id', verifyUserExists, (request, response) => {
  return deleteUserController.handle(request, response)
})

router.put('/user/:id', verifyUserExists, (request, response) => {
  return updateUserController.handle(request, response)
})

export { router }