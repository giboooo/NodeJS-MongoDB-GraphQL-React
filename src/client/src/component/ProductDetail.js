import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getProductQuery } from '../queries/query'

class ProductDetail extends Component {
  render() {
    console.log(this.props)
    return (
      <div id="productDetail">
        <p>output product details here</p>
      </div>
    )
  }
}

export default graphql(getProductQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.productId
      }
    }
  }
})(ProductDetail)