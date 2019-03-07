import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import storiesReducer from './stories_reducer';
import commentsReducer from './comments_reducer';
import bookmarksReducer from './bookmarks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    stories: storiesReducer,
    comments: commentsReducer,
    bookmarks: bookmarksReducer
})

export default entitiesReducer