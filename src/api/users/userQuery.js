import {
  GraphQLID,
  GraphQLList
} from 'graphql'

import user from './userSchema'
import userType from './userGraphql'

export const userQuery = {
  type: userType,
  args: { id: { type: GraphQLID }},
  resolve(parent, args) {
    return user.findById(args.id)
  }
}

export const usersQuery = {
  type: new GraphQLList(userType),
  args: {},
  resolve(root, params, options) {
    return user.find({}).exec()
  }
}