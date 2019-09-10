import React, { Component} from 'react'
import ApolloCilent from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// import logo from './logo.svg'
// import './App.css'
import UserList from './component/Userlist'
import AddProduct from './component/AddProduct'
import ProductList from './component/ProductList'
import Loggs from './component/Loggs'

// header
import Header from './component/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// apollo setup
const client = new ApolloCilent({
  uri: 'http://localhost:4000/graphql'
})


class App extends Component {
  render() {
    
    return(
      <ApolloProvider client={client}>
        <div className="App">
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                {/* <Route exact path="/" component={Header} /> */}
                <Route exact path="/user" component={UserList} />
                <Route exact path="/product" component={ProductList} />
                <Route exact path="/addProduct" component={AddProduct} />
                <Route exact path="/loggs" component={Loggs} />
                {/* <Route component={Error} /> */}
              </Switch>
            </div>
          </BrowserRouter>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header> */}
      </div>
    </ApolloProvider>
  )
}
}

export default App
