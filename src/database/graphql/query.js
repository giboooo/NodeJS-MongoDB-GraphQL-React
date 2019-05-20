import { GraphQLObjectType } from 'graphql'

import { productQuery, productsQuery } from '../../api/product/graphql/query'
import { userQuery, usersQuery } from '../../api/user/graphql/query'
import { supplierQuery, suppliersQuery } from '../../api/supplier/graphql/query'

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    product: productQuery,
    products: productsQuery,
    user: userQuery,
    users: usersQuery,
    supplier: supplierQuery,
    suppliers: suppliersQuery
  }
})