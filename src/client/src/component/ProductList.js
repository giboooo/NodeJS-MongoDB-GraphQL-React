import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { getProductsQuery } from '../queries/query'

// components
import ProductDetail  from './ProductDetail'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }
  displayProducts() {
    let data = this.props.data
    if (data.loading) {
      return(<div>Loading...</div>)
    } else {
      return data.products.map(product => {
        return (
          <li key={product.id} onClick={(e)=>{this.setState({ selected: product.id})}} >name:{product.name} , price:{product.price}</li>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <ul id="productList">{this.displayProducts()}</ul>
        <ProductDetail productId = { this.state.selected }/>
      </div>
    )
  }
}

export default graphql(getProductsQuery)(ProductList)