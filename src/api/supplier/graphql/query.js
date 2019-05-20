import {
  GraphQLID,
  GraphQLList
} from 'graphql'

import supplier from '../schema'
import supplierType from './type'

// fetch one
export const supplierQuery = {
  type: supplierType,
  args: { id: { type: GraphQLID }},
  resolve: (parent, args) => {
    return supplier.findById(args.id)
  }
}

// fetch all
export const suppliersQuery = {
  type: new GraphQLList(supplierType),
  args: {},
  resolve: async () => {
    let suppliers = await supplier.find()
    if (!suppliers) throw new Error('error while fetching suppliers')
    return suppliers
  }
}