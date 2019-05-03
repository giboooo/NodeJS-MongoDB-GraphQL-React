// import Koa from 'koa'
// import KoaStatic from 'koa-static'
// import Router from 'koa-router' 
// import bodyParser from 'koa-bodyparser'

const Koa = require('koa')
const KoaStatic = require('koa-static') 
const Router = require('koa-router')  
const bodyParser = require('koa-bodyparser') 

require('../database/mongoose.js')

const GraphqlRouter = require('../router/index.js')

// create http server, router
const app = new Koa()
const router = new Router()

const port = process.env.PORT || 4000

// views middleware
app.use(bodyParser())
app.use(KoaStatic(__dirname + '/public'))

// graphQL routes
router.use('', GraphqlRouter.routes)

// router middleware
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, console.log(`server running on port: ${port}`))

// server error
app.on('error', err => {
  log.error('server error', err)
})