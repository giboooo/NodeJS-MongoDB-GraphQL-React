import {
  graphql,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  isOutputType
} from 'graphql'

import mongoose from 'mongoose'
const Supplier = mongoose.model('Supplier')

const objType = new GraphQLObjectType({
  name: 'meta',
  fields : {
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  }
})

let SupplierType = new GraphQLObjectType({
  name: 'Supplier',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    meta: {
      type: objType
    }
  }
})

export const Supplier = {
  type: new GraphQLList(SupplierType),
  args: {},
  resolve (root, params, options){
    return Supplier.find({}).exec()
  }
}