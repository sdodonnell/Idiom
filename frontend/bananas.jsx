// import React from 'react';
// import ReactDOM from 'react-dom';
// import Root from './components/root';
// import { configureStore } from './store/store';
// import { signup } from './actions/session_actions'


// document.addEventListener('DOMContentLoaded', () => {
//     let store;
    
//     // Boostrapping current user
//     if (window.currentUser) {
//         const preloadedState = {
//           entities: {
//             users: { [window.currentUser.id]: window.currentUser }
//           },
//           session: { id: window.currentUser.id }
//         };
//         store = configureStore(preloadedState);
//         delete window.currentUser;
//       } else {
//         store = configureStore();
//       }
//     //

//     // TESTING
//     window.getState = store.getState
//     window.dispatch = store.dispatch
//     window.signup = signup
//     // TESTING

    
//     ReactDOM.render(
//         <Root store={store}/>,
//         document.getElementById('root')
//     )
// })