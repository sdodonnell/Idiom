import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from '../containers/signup_container';
import LoginContainer from '../containers/login_container';
import { AuthRoute } from '../util/auth_util';

const App = () => (
    <>
        <h1>Idiom</h1>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LoginContainer}/>
    </>
)

export default App