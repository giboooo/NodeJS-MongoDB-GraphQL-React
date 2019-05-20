import { GraphQLSchema } from 'graphql'

import QueryType from './query'
import MutationType from './mutation'
// import SubscriptionType from './Subscription'


export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  // subscription: SubscriptionType
})