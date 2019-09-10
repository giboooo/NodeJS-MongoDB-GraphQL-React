import React, { Component } from 'react'

class Loggs extends Component {

  render() {
    return (
      <div>
        <br />
      <form>
        
        {/* <!-- name --> */}
        <div>
          <input id="name" type="text"/>
          <label htmlFor="name">Name</label>
        </div>
     
        {/* <!-- email --> */}
        <div>
          <input id="email" type="email"/>
          <label htmlFor="email">Email</label>
        </div>
      
        {/* <!-- password --> */}
        <div>
          <input id="password" type="text"/>
          <label htmlFor="password">Password</label>
        </div>

        {/* <!-- confirm password --> */}
        <div>
          <input id="okpassword" type="text"/>
          <label htmlFor="okpassword">Confirm Password</label>
        </div>
        <br/>
        {/* <!-- submit --> */}
        <button type="submit" name="SignUp">Sign Up</button>
      </form>
        <br />
        <br />
        
       {/**<!-- sign in --> */} 
      <form>
          <input id="email1" type="email" />
          <label htmlFor="email1">email</label>
          <input id="password1" type="password" />
          <label htmlFor="password1">password</label>
          <br />
          <br />
          <button type="submit" name="signIn">Sign in</button>
      </form>
      
      {/* google & facebook */}
        {/* <br /><br />
        
      <button type="submit" name="googel">Google</button>
        <br /><br />
        
      <button type="submit" name="facebook">facebook</button> */}
    </div>
    )
  }
}

export default Loggs