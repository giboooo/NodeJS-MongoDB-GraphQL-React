// import {
//   graphql,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLList,
//   GraphQLNonNull,
//   GraphQLObjectType,
//   GraphQLSchema,
//   GraphQLString,
//   isOutputType
// } from 'graphql'

const {
  graphql,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  isOutputType
} = require('graphql')

// import mongoose from 'mongoose'
const mongoose = require('mongoose')
// import {ProductType} from '../products/productGraphql.js'
const {ProductType} = require('../products/productGraphql.js')

const User = mongoose.model('User')

let UserType = new GraphQLObjectType({
  name: 'User',
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
    product: {
      type: ProductType
    }
  }
})

// export
const user = {
  type: new GraphQLList(UserType),
  args: {},
  resolve(root, params, options){
    return User.find({}).populate({
      path: 'product',
      select: 'name price'
    }).exec()
  }
}

module.exports = {user}