import { RECEIVE_STORY } from "../actions/story_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const likesReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_USER:
            return action.user.likes;
        case RECEIVE_STORY:
            return action.story.likes;
        case RECEIVE_LIKE:
            return Object.assign({}, state, {[action.like.id]: action.like});
        case REMOVE_LIKE:
            let newState = state;
            delete newState[action.likeId];
            return newState
        default:
            return state;
    }
}

export default likesReducer