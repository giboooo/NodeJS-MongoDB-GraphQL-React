// import {GraphQLSchema, GraphQLObjectType} from 'garphql'
const {GraphQLSchema, GraphQLObjectType} = require('graphql')

// import {product, products} from '../products/productGraphql.js'
// import {user} from '../users/userGraphql.js'
// import {supplier} from '../suppliers/supplierGraphql.js'

const {product, products} = require( '../products/productGraphql.js')
const {user} = require( '../users/userGraphql.js')
const {supplier} = require( '../suppliers/supplierGraphql.js')

// NOK even with ES5
// export default new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQuery',
//     fields: {
//       product,
//       products,
//       supplier,
//       user
//     }
//   })
// })


// error : RootQueryType.product field config must be an object
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType', 
  fields: {
    product,
    products,
    supplier,
    user
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})