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
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    supplierId: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: async (parent, args)=> {
    let uModel = new Product(args);
    let newproduct = await uModel.save();
    if (!newproduct) throw new Error('error adding product')
    return newproduct
  }
}