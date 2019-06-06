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
    let uModel = new Product(args)
    let newProduct = await uModel.save()
    if (!newProduct) throw new Error('error adding product')
    return newProduct
  }
  // resolve(parent, args) {
  //   let newProduct = new Product({
  //     name: args.name,
  //     price: args.price,
  //     supplierId: args.supplierId
  //   })
  //   return newProduct.save()
  // }
}