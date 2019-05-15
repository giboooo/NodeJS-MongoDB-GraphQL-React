import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    price: { type: GraphQLInt}
  })
})