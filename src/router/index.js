// import {graphqlKoa, graphiqlKoa} from 'apollo-server-koa' 
const {graphqlKoa, graphiqlKoa} = require('apollo-server-koa') 

// import {saveUser, fetchUser} from '../users/userController.js'
// import {saveProduct, fetchProduct} from '../products/productContorller.js'
// import {saveSupplier, fetchSupplier} from '../suppliers/supplierController.js'

const {saveUser, fetchUser} = require('../users/userController.js')
const {saveProduct, fetchProduct} = require('../products/productContorller.js')
const {saveSupplier, fetchSupplier} = require('../suppliers/supplierController.js')

// import schema from '../database/graphql.js'
const schema = require('../database/graphql.js')

const Router = require('koa-router')
const router = new Router()

// user router
router.post('/saveUser', saveUser)
router.get('/user', fetchUser)

// product router
router.post('/saveProduct', saveProduct)
router.get('/product', fetchProduct)

// supplier router
router.post('/saveSupplier', saveSupplier)
router.get('/supplier', fetchSupplier)



// graphQL router
router.post('graphql', async (ctx, next) => {
  await graphqlKoa({schema: schema})(ctx, next)
})
.get('/graphql', async (ctx,next) => {
  await graphqlKoa({schema: schema})(ctx, next)
})
.get('/graphiql', async (ctx,next) => {
  await graphiqlKoa({endpointURL: 'graphql'})(ctx, next)
})

module.exports = router


/**
 * TODO optimization: separate router into different file
 */