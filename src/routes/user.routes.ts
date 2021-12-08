import { Router } from 'express'
import { CreateUserController } from '../controller/user/CreateUserController'
import { DeleteUserController } from '../controller/user/DeleteUserController'
import { ListUsersController } from '../controller/user/ListUsersController'
import { UpdateUserController } from '../controller/user/UpdateUserController'
import { verifyUserExists } from '../middleware/verifyUserExists'
import { verifyUsernameExists } from '../middleware/verifyUsernameExists'

const router = Router()

router.post('/user', verifyUsernameExists, new CreateUserController().handle)
router.get('/user', new ListUsersController().handle)
router.delete('/user/:id', verifyUserExists, new DeleteUserController().handle)
router.put('/user/:id', verifyUserExists, new UpdateUserController().handle)

export { router }