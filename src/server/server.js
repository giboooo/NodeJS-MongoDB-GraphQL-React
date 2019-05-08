const Koa = require('koa')
const render = require('koa-ejs') 
const Router = require('koa-router')  
const bodyParser = require('koa-bodyparser')
const path = require('path')
const serve = require('koa-static')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')

// const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')

require('../database/mongoose.js')
const schema = require('../database/graphql.js')

// // TEST  
// const GraphqlRouter = require('../router/router3.js')
// const GraphqlRouter = require('../router/router.js')

// create http server, router
const app = new Koa()
const router = new Router()

const port = process.env.PORT || 4000

// bodyparser middleware
app.use(bodyParser())

// static files middleware (serving image)
app.use(serve('.'))

// render
render(app, {
  root: path.join(__dirname, '/../public/views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: true
})

// routes
router.get('/', index)
router.get('/search', search)
router.get('/cart', cart)
router.get('/menu', menu)

// router.post('/graphql', graphqlKoa({ schema: schema }))
// router.get('/graphql', graphqlKoa({ schema: schema }))
// router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

// graphql router
// router.post('/graphql', async (ctx, next) => {
//   await graphqlKoa({schema: schema})(ctx, next)
// })
// router.get('/graphql', async (ctx, next) => {
//   await graphqlKoa({schema: schema})(ctx, next)
// })
// router.get('/graphiql', async (ctx, next) => {
//   await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
// })



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

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))


// router middleware
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, console.log(`server running on port: ${port}`))

// server error
app.on('error', err => {
  log.error('server error', err)
})