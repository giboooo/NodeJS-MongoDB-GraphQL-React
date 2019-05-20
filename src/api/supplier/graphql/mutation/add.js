import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import Supplier from '../../schema'
import supplierType from '../type'

export default {
  type: supplierType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args) => {
    let uModel = new Supplier(args);
    let newSupplier = await uModel.save();
    if (!newSupplier) throw new Error('error adding supplier')
    return newSupplier
  }
}