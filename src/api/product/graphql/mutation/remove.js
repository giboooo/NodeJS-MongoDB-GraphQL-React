import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import Product from '../../schema'
import productType from '../type'

export default {
  type: productType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (parent, args) => {
    let removedProduct = Product.findByIdAndRemove(args.id).exec()
    if (!removedProduct) throw new Error('Error removing product')
    return removedProduct
  }
}