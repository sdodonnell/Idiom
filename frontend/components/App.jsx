import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from '../containers/signup_container';
import LoginContainer from '../containers/login_container';

const App = () => (
    <>
        <h1>Idiom</h1>
        <Route path="/signup" component={SignupContainer}/>
        <Route path="/login" component={LoginContainer}/>
    </>
)

export default App