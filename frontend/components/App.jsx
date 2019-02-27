import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignupContainer from '../containers/signup_container';
import LoginContainer from '../containers/login_container';
import { AuthRoute } from '../util/auth_util';
import AuthNavContainer from '../containers/auth_nav_container'

const App = () => (
    <>
        <header className="nav-bar">
            <Link to='/'><h1>Idiom</h1></Link>
            <AuthNavContainer className="auth-nav"/>
        </header>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LoginContainer}/>
    </>
)

export default App