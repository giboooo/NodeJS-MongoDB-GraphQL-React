import Router from 'koa-router'
import { saveUser, fetchUser } from './userController'

const router = new Router()

router.post('/saveUser', saveUser)
router.get('/fetchUser', fetchUser)

export default router