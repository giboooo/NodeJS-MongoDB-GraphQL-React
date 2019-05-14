import Router from 'koa-router'
const router = new Router()

// routes
router.get('/', index)
router.get('/admin', admin)
router.get('/cart', cart)
router.get('/menu', menu)
router.get('/search', search)

// index function
async function index(ctx){
  await ctx.render('index')
}

// search function
async function search(ctx){
  await ctx.render('search')
}
// cart function
async function cart(ctx){
  await ctx.render('cart')
}
// menu function
async function menu(ctx){
  await ctx.render('menu')
}
// admin function
async function admin(ctx){
  await ctx.render('admin')
}

export default router