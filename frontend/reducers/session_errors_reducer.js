import { RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (oldState=[], action) => {
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return []
        default:
            return oldState
    }
}

export default sessionErrorsReducer