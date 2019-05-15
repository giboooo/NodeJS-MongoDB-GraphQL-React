import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import render from 'koa-ejs' 
import mount from 'koa-mount'
import Router from 'koa-router'  
import serve from 'koa-static'
import path from 'path'

// database connexion
import '../database/mongoose'

// graphql
import graphqlHTTP from "koa-graphql"
import schema from '../database/graphql'

// routers
import GraphqlRouter from '../public/router'
import ProductRouter from '../api/products/productRouter'
import UserRouter from '../api/users/userRouter'
import SupplierRouter from '../api/suppliers/supplierRouter'

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
router.use('', ProductRouter.routes())
router.use('', UserRouter.routes())
router.use('', SupplierRouter.routes())

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
  console.log('server error', err)
})

export default app