import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} from 'graphql'

import Product from '../../schema'
import productType from '../type'

export default {
  type: productType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    supplierId: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve : (parent, args) => {
    return Product.findByIdAndUpdate(
      args.id,
      { $set: { name: args.name } },
      // { $set: { price: args.price } },
      // { $set: { supllierid: args.supplierId } },
      { new: true }
    )
      .catch(err => new Error(err, 'error updating product'));
  }
}