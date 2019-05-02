// old (server + database + router)


// server
const Koa = require('koa') 

// router
const Router = require('koa-router')
const path = require('path')
const render = require('koa-ejs')
const bodyParser = require('koa-bodyparser')

// database
const initDB = require('./database/mongoose')
const graphqlHTTP = require('koa-graphql')
const mount = require('koa-mount')
const schema = require('./database/schema')

// server
const app = new Koa()
// router
const router = new Router()
// database
initDB()

// bodyparser middleware
app.use(bodyParser())

// database 
app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

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

// server
app.listen(3000, console.log('server runnig'))
// server error
app.on('error', err => {
  log.error('server error', err)
})