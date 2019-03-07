import { RECEIVE_STORIES, RECEIVE_STORY, REMOVE_STORY } from "../actions/story_actions";
import { merge } from 'lodash';
import { RECEIVE_LIKE } from "../actions/like_actions";

const storiesReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_LIKE:
            const storyId = action.like.storyId;
            const story = state[storyId];
            story.numLikes += 1;
            return merge({}, state, {[storyId]: story})
        case RECEIVE_STORIES:
            return action.stories;
        case RECEIVE_STORY:
            return merge({}, state, {[action.story.story.id]: action.story.story});
        case REMOVE_STORY:
            let newState = state;
            delete newState[action.storyId];
            return newState
        default:
            return state;
    }
}

export default storiesReducer