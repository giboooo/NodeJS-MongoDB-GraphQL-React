const router = require('koa-router')()
const { saveUser, fetchUser } = require('./productContorller')

router.post('/saveProduct', saveProduct)
router.get('/product', fetchProduct)

module.exports = router