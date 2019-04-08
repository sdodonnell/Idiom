import { RECEIVE_SEARCH_STORIES } from "../actions/story_actions";

const searchReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_SEARCH_STORIES:
            return action.stories;
        default:
            return state;
    }
}

export default searchReducer