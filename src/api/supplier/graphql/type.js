import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from 'graphql'

import Product from '../../product/schema'
import productType from '../../product/graphql/type'

export default new GraphQLObjectType({
  name: 'Supplier',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    email: { type: GraphQLString },
    products: {
      type: new GraphQLList(productType),
      resolve(parent, args) {
        return Product.find({ supplierId: parent.id })
      }
    }
  })
})