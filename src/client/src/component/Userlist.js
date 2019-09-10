import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { getUsersQuery } from '../queries/query'

class UserList extends Component {
  displayUsers() {
    let data = this.props.data
    if (data.loading) {
      return(<div>Loading...</div>)
    } else {
      return data.users.map(user => {
        return (
          <li key={user.id} >{user.name}</li>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <ul id="userList">{this.displayUsers()}</ul>
      </div>
    )
  }
}

export default graphql(getUsersQuery)(UserList)