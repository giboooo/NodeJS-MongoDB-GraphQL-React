import Router from 'koa-router'
import { saveProduct, fetchProduct } from './productContorller'

const router = new Router()

router.post('/saveProduct', saveProduct)
router.get('/product', fetchProduct)

export default router