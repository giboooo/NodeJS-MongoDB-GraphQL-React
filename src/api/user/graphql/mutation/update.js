import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import User from '../../schema'
import userType from '../type'

export default {
  type: userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (parent, args) => {
    return User.findByIdAndUpdate(
      args.id,
      { $set: { name: args.name } },
      // { $set: { email: args.email } },
      { new: true }
    )
      .catch(err => new Error(err, 'error updating user'));
  }
}