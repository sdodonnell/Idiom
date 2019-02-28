import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignupContainer from '../containers/signup_container';
import LoginContainer from '../containers/login_container';
import { AuthRoute } from '../util/auth_util';
import AuthNavContainer from '../containers/auth_nav_container';
import HomePage from './home_page'

const App = () => (
    <>
        <div className="nav-bar">
            <NavLink to="/">
                <h1 id="site-title">Idiom</h1>
            </NavLink>
            <AuthNavContainer />
        </div>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LoginContainer}/>
        <Route exact path="/" component={HomePage}/>
    </>
)

export default App