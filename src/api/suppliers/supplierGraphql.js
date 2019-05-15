import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Supplier',
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    email: { type: GraphQLString}
  })
})