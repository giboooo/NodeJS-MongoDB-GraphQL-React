import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLString},
    name: { type: GraphQLString},
    price: { type: GraphQLInt}
  })
})