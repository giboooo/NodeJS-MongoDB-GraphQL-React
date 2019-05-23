import Router from 'koa-router'
const router = new Router()

// routes
router.get('/', index)
router.get('/admin', admin)
router.get('/cart', cart)
router.get('/menu', menu)
router.get('/search', search)
router.get('/admin2', admin2)

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

// client function
async function admin2(ctx){
  await ctx.render('admin2')
}

export default router