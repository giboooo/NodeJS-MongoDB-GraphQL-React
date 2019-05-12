const router = require('koa-router')()
const { saveUser, fetchUser } = require('./supplierController')

router.post('/saveSupplier', saveSupplier)
router.get('/supplier', fetchSupplier)

module.exports = router