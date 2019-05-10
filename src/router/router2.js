const router = require('koa-router')()

// routes
router.get('/', index)
router.get('/search', search)
router.get('/cart', cart)
router.get('/menu', menu)

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

module.exports = router