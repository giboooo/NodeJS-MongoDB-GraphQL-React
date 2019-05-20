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
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (parent, args) => {
    let removedUser = User.findByIdAndRemove(args.id).exec()
    if (!removedUser) throw new Error('Error removing user')
    return removedUser
  }
}