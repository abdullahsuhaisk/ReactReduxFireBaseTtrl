import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signIn">Sıgn In</NavLink></li>
            <li><NavLink to="/signUp">Log In</NavLink></li>
        </ul>
    )
}
export default SignOutLinks;