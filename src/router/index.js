import {graphqlKoa, graphiqlKoa} from 'graphql-server-koa'

import {saveUser, fetchUser} from '../users/userController.js'
import {saveProduct, fetchProduct} from '../products/productContorller.js'
import {saveSupplier, fetchSupplier} from '../suppliers/supplierController.js'

import schema from '../database/graphql.js'

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
 * npm i graphql-server-koa
 * 
 * TODO optimization: separate router into different file
 */