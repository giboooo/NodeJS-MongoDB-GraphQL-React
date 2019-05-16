import { GraphQLSchema } from 'graphql'

import QueryType from './gqlQuery'
// import MutationType from './gqlMutation'
// import SubscriptionType from './gqlSubscription'


export default new GraphQLSchema({
  query: QueryType,
  // mutation: MutationType,
  // subscription: SubscriptionType
})