import {GraphQLSchema, GraphQLObjectType} from 'garphql'

import {product, products} from '../products/productGraphql.js'
import {user} from '../users/userGraphql.js'
import {supplier} from '../suppliers/supplierGraphql.js'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      product,
      products,
      supplier,
      user
    }
  })
})