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
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (parent, args) => {
    return Supplier.findByIdAndUpdate(
      args.id,
      { $set: { name: args.name } },
      // { $set: { email: args.email } },
      { new: true }
    )
      .catch(err => new Error(err, 'error updating supplier'));
  }
}