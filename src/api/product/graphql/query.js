import {
  GraphQLID,
  GraphQLList
} from 'graphql'

import product from '../schema'
import productType from './type'

// fetch one
export const productQuery = {
  type: productType,
  args: { id: { type: GraphQLID }},
  resolve: (parent, args) => {
    return product.findById(args.id)
  }
}

// fetch all
export const productsQuery = {
  type: new GraphQLList(productType),
  args: {},
  resolve: async () => {
    let products = await product.find()
    if (!products) throw new Error('error while fetching products')
    return products
  }
}