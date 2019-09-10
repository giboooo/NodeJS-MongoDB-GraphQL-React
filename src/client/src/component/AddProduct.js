import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'

import { getSuppliersQuery, AddProductMutation, getProductsQuery } from '../queries/query'


class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: 0,
      supplierId: ''  
    }
  }
  
  displaySuppliers() {
    let data = this.props.getSuppliersQuery
    if (data.loading) {
      return(<option disabled>Loading...</option>)
    } else {
      return data.suppliers.map(supplier => {
        return (
          <option key={supplier.id} value={supplier.id}>{supplier.name} </option>
        )
      })
    }
  }

  submitForm(e) {
    e.preventDefault()
    this.props.addProductMutation({
      variables: {
        name: this.state.name,
        price: Number(this.state.price),
        supplierId: this.state.supplierId
      },
      refetchQueries: [{ query: getProductsQuery}]
    })
  }


  render() {
    return (
      <form id="addProduct" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Product name:</label>
          <input type="text" onChange={(e) => this.setState({ name: e.target.value})}></input>
        </div>
        <div className="field">
          <label>Product price:</label>
          <input type="text" onChange={(e) => this.setState({ price: e.target.value})}></input>
        </div>
        <div className="field">
          <label>Supplier:</label>
          <select onChange={(e) => this.setState({ supplierId: e.target.value})}>
            <option>Select Supplier</option>
            {this.displaySuppliers()}
          </select>
        </div>
        <button>add</button>
      </form>
    )
  }
}

export default compose(
  graphql(getSuppliersQuery,{ name: "getSuppliersQuery"}),
  graphql(AddProductMutation,{ name: "addProductMutation"})  
)(AddProduct)