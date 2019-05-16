import {
  GraphQLID,
  GraphQLList
} from 'graphql'

import supplier from './supplierSchema'
import supplierType from './supplierGraphql'

export const supplierQuery = {
  type: supplierType,
  args: { id: { type: GraphQLID }},
  resolve(parent, args) {
    return supplier.findById(args.id)
  }
}

export const suppliersQuery = {
  type: new GraphQLList(supplierType),
  args: {},
  resolve(root, params, options) {
    return supplier.find({}).exec()
  }
}