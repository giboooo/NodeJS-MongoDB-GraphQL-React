import {
  GraphQLID,
  GraphQLList
} from 'graphql'

import product from './productSchema'
import productType from './productGraphql'

export const productQuery = {
  type: productType,
  args: { id: { type: GraphQLID }},
  resolve(parent, args) {
    return product.findById(args.id)
  }
}

export const productsQuery = {
  type: new GraphQLList(productType),
  args: {},
  resolve(root, params, options) {
    return product.find({}).exec()
  }
}