import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} from 'graphql'

import Supplier from '../../supplier/schema'
import supplierType from '../../supplier/graphql/type'

export default new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    supplier: {
      type: supplierType,
      resolve(parent, args) {
        return Supplier.findById(parent.supplierId)
      }
    }
  })
})