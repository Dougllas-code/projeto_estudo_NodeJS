import { Router } from 'express'
import { CreateUserController } from '../controller/user/CreateUserController'
import { ListUsersController } from '../controller/user/ListUsersController'
import { verifyUsernameExists } from '../middleware/verifyUsernameExists'

const router = Router()

router.post('/user', verifyUsernameExists, new CreateUserController().handle)
router.get('/user', new ListUsersController().handle)

export { router }