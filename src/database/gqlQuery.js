import { GraphQLObjectType } from 'graphql'

import { productQuery, productsQuery } from '../api/products/productQuery'
import { userQuery, usersQuery } from '../api/users/userQuery'
import { supplierQuery, suppliersQuery } from '../api/suppliers/supplierQuery'

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
