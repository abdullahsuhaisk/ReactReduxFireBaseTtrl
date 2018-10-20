import React, { Component } from 'react';
import {signUp} from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

 class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName:'',
        lastName:''
    }
    handleChange = (e) => {
            this.setState({
                [e.target.id] : e.target.value
            })
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
  render() {
    // console.log(this.props);
    const {auth} = this.props;
    if(!auth.uid)  return (
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
                <input type="text" id="firstName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button onClick={this.handleClick}>Sign Up</button>
            </div>
        </form>
      </div>
    )
    else return <Redirect to='/' />
  }
}
const mapStateToProps = (state) => {
    //console.log(state);
    return ({
        auth: state.firebase.auth
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        signUp : (newUser) => dispatch(signUp(newUser))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
