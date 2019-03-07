import * as BookmarksApiUtil from '../util/bookmarks_api_util';
import { camelizeKeys } from 'humps';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK= 'REMOVE_BOOKMARK';

const receiveBookmark = comment => ({
    type: RECEIVE_BOOKMARK,
    bookmark: camelizeKeys(bookmark)
})

const removeBookmark = commentId => ({
    type: REMOVE_BOOKMARK,
    commentId
})

export const createBookmark = bookmark => dispatch => (
    BookmarksApiUtil.createBookmark(bookmark).then( bookmark => dispatch(receiveBookmark(bookmark)))
)

export const deleteBookmark = bookmarkId => dispatch => (
    BookmarksApiUtil.deleteBookmark(bookmarkId).then( bookmarkId => dispatch(removeBookmark(bookmarkId)))
)