import {
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType
} from 'graphql'

import product from '../api/products/productSchema'
import productType from '../api/products/productGraphql'

import user from '../api/users/userSchema'
import userType from '../api/users/userGraphql'

import supplier from '../api/suppliers/supplierSchema'
import supplierType from '../api/suppliers/supplierGraphql'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      product: {
        type: productType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args) {
          return product.findById(args.id)
        }
      },
      products: {
        type: new GraphQLList(productType),
        args: {},
        resolve(root, params, options) {
          return product.find({}).exec()
        }
      },
      user: {
        type: userType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args) {
          return user.findById(args.id)
        }
      },
      users: {
        type: new GraphQLList(userType),
        args: {},
        resolve(root, params, options) {
          return user.find({}).exec()
        }
      },
      supplier: {
        type: supplierType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args) {
          return supplier.findById(args.id)
        }
      },
      suppliers: {
        type: new GraphQLList(supplierType),
        args: {},
        resolve(root, params, options) {
          return supplier.find({}).exec()
        }
      }
    }
  })
})