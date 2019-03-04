import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { configureStore } from './store/store';
import { signup } from './actions/session_actions';
import { fetchStories } from "./util/stories_api_util";



document.addEventListener('DOMContentLoaded', () => {
    let store;
    // Boostrapping current user
    if (window.currentUser) {
        const preloadedState = {
          entities: {
            users: { [window.currentUser.id]: window.currentUser }
          },
          session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
      } else {
        store = configureStore();
      }
    //

    // TESTING
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.signup = signup
    window.fetchStories = fetchStories
    // TESTING

    
    ReactDOM.render(
        <Root store={store}/>,
        document.getElementById('root')
    )
})