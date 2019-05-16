import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql'

import supplierType from '../suppliers/supplierGraphql'
import userType from '../users/userGraphql'

export default new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},          price: { type: GraphQLInt },
    supplier: {
      type: supplierType,
      resolve(parent, args) {
        return parent.findById(args.id)
      }
    },
    users: {
      type: new GraphQLList(userType),
      resolve(root, params, options) {
        return userType.find({}).populate({
          path: 'user',
          select: 'id name email'
        }).exec()
      }  
    }
  })
})