import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import render from 'koa-ejs' 
import mount from 'koa-mount'
import Router from 'koa-router'  
import serve from 'koa-static'
import path from 'path'
import cors from '@koa/cors'

// database connexion
import config from '../config/index'
import db from '../database/mongoose'

// graphql
import graphqlHTTP from "koa-graphql"
import schema from '../database/graphql/schema'

// routers
import PublicRouter from './router'
import ProductRouter from '../api/product/router'
import UserRouter from '../api/user/router'
import SupplierRouter from '../api/supplier/router'

// init http server, router
const app = new Koa()
const router = new Router()

// database connexion
app.context.db = db()

// bodyparser middleware --->  { extended: false }
app.use(bodyParser())

// static files middleware
app.use(serve('.'))

// cross-origin requests middleware
app.use(cors())

// render -ejs
render(app, {
  root: path.join(__dirname, '/../public/views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: true
})

// routing
router
  .use('', PublicRouter.routes())
  .use('', ProductRouter.routes())
  .use('', UserRouter.routes())
  .use('', SupplierRouter.routes())

// graphql
app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

// router middleware
app.use(router.routes()).use(router.allowedMethods())

// server connexion
app.listen(config.port, console.log(`server running on port: ${config.port}`))

// error
app.on('error', err => {
  console.log('server error', err)
})

export default app