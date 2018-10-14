import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

 class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
            this.setState({
                [e.target.id] : e.target.value
            })
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    
    render() {
        const { authError } = this.props;
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
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button onClick={this.handleClick}>Sign İn</button>
                    <div className="center red-text">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div>
            </form>
          </div>
        )
      }
    }

    const mapDispactToProps = (dispatch) => {
    return ({
        signIn: (creds) => dispatch((signIn(creds)))
    })
}
    const mapStateToProps = (state) => {
        return {
            authError: state.auth.authError
        }
    }


export default connect(mapStateToProps,mapDispactToProps)(SignIn);
