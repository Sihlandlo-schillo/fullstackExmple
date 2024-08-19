import express from 'express'
import { deleteUser, fetchUsers, getUser, insertUser, updateUser, loginUser } from '../controller/usersController.js'
import { checkUser } from '../middleware/middlewareAuthentication.js'
// import exp from 'constants'

const router = express.Router()

router.post('/signIn', checkUser,loginUser)
router.get('/', fetchUsers)
router.get('/:id',getUser)
router.post('/insert',insertUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router