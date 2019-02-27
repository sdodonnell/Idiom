import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import { signup } from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()

    // TESTING
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.signup = signup
    // TESTING
    
    ReactDOM.render(
        <Root store={store}/>,
        document.getElementById('root')
    )
})