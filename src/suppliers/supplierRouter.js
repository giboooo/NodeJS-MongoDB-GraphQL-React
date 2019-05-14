import Router from 'koa-router'
import { saveSupplier, fetchSupplier } from './supplierController'

const router = new Router()

router.post('/saveSupplier', saveSupplier)
router.get('/supplier', fetchSupplier)

export default router