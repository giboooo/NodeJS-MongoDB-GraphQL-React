import { GraphQLObjectType } from 'graphql'

import { productAdd, productUpdate, productRemove } from '../../api/product/graphql/mutation/index'
import { userAdd, userUpdate, userRemove } from '../../api/user/graphql/mutation/index'
import { supplierAdd, supplierUpdate, supplierRemove } from '../../api/supplier/graphql/mutation/index'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    productAdd,
    productUpdate,
    productRemove,
    userAdd,
    userUpdate,
    userRemove,
    supplierAdd,
    supplierUpdate,
    supplierRemove
  }
})
