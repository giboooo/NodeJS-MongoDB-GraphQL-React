import {
  GraphQLID,
  GraphQLList
} from 'graphql'

import user from '../schema'
import userType from './type'

// fetch one
export const userQuery = {
  type: userType,
  args: { id: { type: GraphQLID }},
  resolve: (parent, args) => {
    return user.findById(args.id)
  }
}

// fetch all
export const usersQuery = {
  type: new GraphQLList(userType),
  args: {},
  resolve: async () => {
    let users = await user.find()
    if (!users) throw new Error('error while fetching users')
    return users
  }
}