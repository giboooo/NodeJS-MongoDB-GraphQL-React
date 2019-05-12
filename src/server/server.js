const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const render = require('koa-ejs') 
const mount = require('koa-mount')
const Router = require('koa-router')  
const serve = require('koa-static')
const path = require('path')

// database connexion
require('../database/mongoose.js')

// graphql
const graphqlHTTP = require('koa-graphql')
const schema = require('../database/graphql.js')

// routers
const GraphqlRouter = require('../router/router.js')
const UserRouter = require('../users/userRouter.js')

// init http server, router
const app = new Koa()
const router = new Router()

const port = process.env.PORT || 4000

// bodyparser middleware
app.use(bodyParser())

// static files middleware
app.use(serve('.'))

// render -ejs
render(app, {
  root: path.join(__dirname, '/../public/views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: true
})

// routing
router.use('', GraphqlRouter.routes())
router.use('', UserRouter.routes())

// graphql
app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

// router middleware
app.use(router.routes())
app.use(router.allowedMethods())

// server connexion
app.listen(port, console.log(`server running on port: ${port}`))

// error
app.on('error', err => {
  log.error('server error', err)
})