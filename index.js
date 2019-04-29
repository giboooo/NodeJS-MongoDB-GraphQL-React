const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const render = require('koa-ejs')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

// bodyparser middleware
app.use(bodyParser())
// database comes here
// const things = [toto,tata,titi]


// render
render(app, {
  root: path.join(__dirname, 'src/public/views'),
  layout : 'layout',
  viewExt: 'html',
  cache: false,
  debug: true
})


// routes
router.get('/', index)
router.get('/search', search)
router.get('/cart', cart)
router.get('/menu', menu)


// router.get('/add', showAdd)
// router.post('/add', add)

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

// showAdd fuction
async function showAdd(ctx) {
  await ctx.render('add')
}
// add function
async function add(ctx) {
  const body = ctx.request.body
  things.push(body.thing)
  ctx.redirect('/')
}



// router middleware
app.use(router.routes())
app.use(router.allowedMethods())


app.listen(3000, console.log('server runnig'))