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
const Product = mongoose.model('Product')

// const parameterType = new GraphQLObjectType({
//   name: 'parameters',
//   fields: {
//     key: {
//       type: GraphQLString
//     },
//     value: {
//       type: GraphQLString
//     }
//   }
// })



const objType = new GraphQLObjectType({
  name: 'meta',
  fields: {
    createAT: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  }
})

export let ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    price: {
      type: GraphQLInt
    },
    meta: objType
  }
  // parameters: {
  //   type : new GraphQLList(parameterType)
  // }
})

export const products = {
  type: new GraphQLList(ProductType),
  args: {},
  resolve(root, params, options) {
    return Product.find({}).exec()
  }
}

export const product = {
  type: ProductType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options){
    return Product.findOne({
      _id: paraams.id
    }).exec()
  }
}