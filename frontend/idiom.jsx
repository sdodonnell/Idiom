import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { configureStore } from './store/store';
import { fetchBookmarks } from './actions/bookmark_actions';


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

    window.getState = store.getState;
    window.fetchBookmarks = fetchBookmarks;
    window.dispatch = store.dispatch
    
    ReactDOM.render(
        <Root store={store}/>,
        document.getElementById('root')
    )
})