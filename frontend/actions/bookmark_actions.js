import * as BookmarksApiUtil from '../util/bookmarks_api_util';
import { camelizeKeys } from 'humps';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';

const receiveBookmarks = bookmarks => ({
    type: RECEIVE_BOOKMARKS,
    bookmarks: camelizeKeys(bookmarks)
})

const receiveBookmark = bookmark => ({
    type: RECEIVE_BOOKMARK,
    bookmark: camelizeKeys(bookmark)
})

const removeBookmark = commentId => ({
    type: REMOVE_BOOKMARK,
    commentId
})

export const fetchBookmarks = userId => dispatch => (
    BookmarksApiUtil.fetchBookmarks(userId).then( bookmarks => dispatch(receiveBookmarks(bookmarks)))
)

export const createBookmark = bookmark => dispatch => (
    BookmarksApiUtil.createBookmark(bookmark).then( bookmark => dispatch(receiveBookmark(bookmark)))
)

export const deleteBookmark = bookmarkId => dispatch => (
    BookmarksApiUtil.deleteBookmark(bookmarkId).then( bookmarkId => dispatch(removeBookmark(bookmarkId)))
)