import { gql } from 'apollo-boost'

export const getUsersQuery = gql`
  {
    users {
      id
      name
      email
    }
  }`

export const getProductsQuery = gql`
  {
    products {
      id
      name
      price
    }
  }`

export const getSuppliersQuery = gql`
  {
    suppliers {
      id
      name
    }
  }`

export const AddProductMutation = gql`
  mutation productAdd($name: String!, $price: Int!, $supplierId: ID!) {
    productAdd(name: $name, price: $price, supplierId: $supplierId){
      name
    }
  }`

export const getProductQuery = gql`
  query($id: ID){
    product(id: $id){
      id
      name
      price
      supplier{
        id
        name
        email
        products{
          name
          price
        }
      }
    }
  }`