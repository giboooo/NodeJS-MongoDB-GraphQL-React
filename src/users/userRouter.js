const router = require('koa-router')()
const { saveUser, fetchUser } = require('./userController')

router.post('/saveUser', saveUser)
router.get('/user', fetchUser)

module.exports = router