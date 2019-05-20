import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import Supplier from '../../schema'
import supplierType from '../type'

export default {
  type: supplierType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (parent, args) => {
    let removedSupplier = Supplier.findByIdAndRemove(args.id).exec()
    if (!removedSupplier) throw new Error('Error removing supplier')
    return removedSupplier
  }
}