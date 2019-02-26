import { merge } from 'lodash'
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, {[action.user.id]: action.user});
        case LOGOUT_CURRENT_USER:
            let newState = merge({}, oldState);
            delete newState.users[action.user.id]
            return newState
        default:
            return oldState
    }
}

export default usersReducer