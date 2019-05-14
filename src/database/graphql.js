import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import Product from '../products/productSchema'
import productType from '../products/productGraphql'

import User from '../users/userSchema'
import userType from '../users/userGraphql'

import Supplier from '../suppliers/supplierSchema'
import supplierType from '../suppliers/supplierGraphql'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      product: {
        type: productType,
        args: { id: { type: GraphQLString }},
        resolve(parent, args) {
          return Product.findById(args.id)
        }
      },
      user: {
        type: userType,
        args: { id: { type: GraphQLString }},
        resolve(parent, args) {
          return User.findById(args.id)
        }
      },
      supplier: {
        type: supplierType,
        args: { id: { type: GraphQLString }},
        resolve(parent, args) {
          return Supplier.findById(args.id)
        }
      }
    }
  })
})