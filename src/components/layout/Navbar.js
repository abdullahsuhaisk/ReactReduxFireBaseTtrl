import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    // console.log(props);
    const { auth } = props;
    const Links = auth.uid ? <SignInLinks /> :  <SignOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo"></Link>
                {Links}
               
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    //console.log(state);
    return{
        auth:state.firebase.auth
    }   
}
export default connect(mapStateToProps)(Navbar);