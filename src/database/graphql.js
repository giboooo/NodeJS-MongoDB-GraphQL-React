import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID
} from 'graphql'

import Product from '../api/products/productSchema'
import productType from '../api/products/productGraphql'

import User from '../api/users/userSchema'
import userType from '../api/users/userGraphql'

import Supplier from '../api/suppliers/supplierSchema'
import supplierType from '../api/suppliers/supplierGraphql'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      product: {
        type: productType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args) {
          return Product.findById(args.id)
        }
      },
      user: {
        type: userType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args) {
          return User.findById(args.id)
        }
      },
      supplier: {
        type: supplierType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args) {
          return Supplier.findById(args.id)
        }
      }
    }
  })
})