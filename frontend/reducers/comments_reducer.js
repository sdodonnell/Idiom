import { REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_STORY } from "../actions/story_actions";

const commentsReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_STORY:
            return action.story.comments
        case REMOVE_COMMENT:
            let newState = state;
            delete newState[action.commentId];
            return newState
        default:
            return state;
    }
}

export default commentsReducer