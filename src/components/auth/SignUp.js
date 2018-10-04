import React, { Component } from 'react'

 class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname:'',
        lastname:''
    }
    handleChange = (e) => {
            this.setState({
                [e.target.id] : e.target.value
            })
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

  render() {
    return (
      <div className="container">
        <form className="white">
            <h5 className="grey-text text-darken-3">
                Sign In
            </h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password" >Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="Name">Name</label>
                <input type="text" id="firstname" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" id="lastname" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button onClick={this.handleClick}>Sign Up</button>
            </div>
        </form>
      </div>
    )
  }
}
export default SignUp;
