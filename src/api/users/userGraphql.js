import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from 'graphql'

import productType from '../products/productGraphql'

export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    email: { type: GraphQLString },
    products: {
      type: new GraphQLList(productType),
      resolve(root, params, options){
        return productType.find({}).populate({
            path: 'product',
            select: 'name price'
        }).exec()
      }
    }
  })
})