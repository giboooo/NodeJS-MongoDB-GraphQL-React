// test separation (index.html not found)router from server NOK 


const Koa = require('koa')
  const render = require('koa-ejs') 
  const Router = require('koa-router')  
const bodyParser = require('koa-bodyparser')
  const path = require('path')
const serve = require('koa-static')

// require('../database/mongoose.js')

// const GraphqlRouter = require('../router/router.js')
// const GraphqlRouter = require('../router/router2.js')

// create http server, router
const app = new Koa()
const router = new Router()

// const port = process.env.PORT || 4000

// bodyparser middleware
app.use(bodyParser())

// static middleware (serve static file img)
app.use(serve('.'))

  // render
  render(app, {
    root: path.join(__dirname, '/../public/views'),
    layout: 'layout',
    viewExt: 'html',
    cache: true,
    debug: true
  })

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

// graphQL routes
// router.use('', GraphqlRouter.routes())
// router.use('', GraphqlRouter.routes())

  // // router middleware
  app.use(router.routes())
  app.use(router.allowedMethods())

// app.listen(port, console.log(`server running on port: ${port}`))

// server error
// app.on('error', err => {
//   log.error('server error', err)
// })

module.exports = router