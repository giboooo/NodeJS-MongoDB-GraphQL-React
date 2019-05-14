import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Supplier',
  fields: () => ({
    id: { type: GraphQLString},
    name: { type: GraphQLString},
    email: { type: GraphQLString}
  })
})