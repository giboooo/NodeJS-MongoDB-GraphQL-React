import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import User from '../../schema'
import userType from '../type'

export default {
type: userType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args) => {
    let uModel = new User(args);
    let newUser = await uModel.save();
    if (!newUser) throw new Error('error adding user')
    return newUser
  }
}