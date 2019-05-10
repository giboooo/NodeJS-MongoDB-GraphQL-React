const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const render = require('koa-ejs') 
const mount = require('koa-mount')
const Router = require('koa-router')  
const serve = require('koa-static')
const path = require('path')

// database
require('../database/mongoose.js')
const graphqlHTTP = require('koa-graphql')
const schema = require('../database/graphql.js')

// router
const GraphqlRouter = require('../router/router2.js')

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

// router routes
router.use('', GraphqlRouter.routes())

// graphql
app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

// router middleware
app.use(router.routes())
app.use(router.allowedMethods())

// connexion
app.listen(port, console.log(`server running on port: ${port}`))

// error
app.on('error', err => {
  log.error('server error', err)
})