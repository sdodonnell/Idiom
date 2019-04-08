import { RECEIVE_STORY } from "../actions/story_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_BOOKMARK, REMOVE_BOOKMARK, RECEIVE_BOOKMARKS } from "../actions/bookmark_actions";

const bookmarksReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_BOOKMARKS:
            return action.bookmarks
        case RECEIVE_CURRENT_USER:
            return action.user.bookmarks;
        case RECEIVE_STORY:
            return action.story.bookmarks;
        case RECEIVE_BOOKMARK:
            return Object.assign({}, state, {[action.bookmark.id]: action.bookmark});
        case REMOVE_BOOKMARK:
            let newState = state;
            delete newState[action.bookmarkId];
            return newState
        default:
            return state;
    }
}

export default bookmarksReducer