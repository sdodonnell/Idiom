import * as CommentsApiUtil from '../util/comments_api_util';
import { camelizeKeys } from 'humps';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const REMOVE_BOOKMARK= 'REMOVE_BOOKMARK';

const receiveBookmark = comment => ({
    type: RECEIVE_BOOKMARK,
    comment: camelizeKeys(comment)
})

const receiveBookmarkss = comments => ({
    type: RECEIVE_BOOKMARKS,
    comments: camelizeKeys(comments)
})

const removeBookmark = commentId => ({
    type: REMOVE_BOOKMARK,
    commentId
})

export const fetchComments = storyId => dispatch => (
    CommentsApiUtil.fetchComments(storyId).then( comments => dispatch(receiveComments(comments)))
)

export const createComment = comment => dispatch => (
    CommentsApiUtil.createComment(comment).then( comment => dispatch(receiveComment(comment)))
)

export const deleteComment = commentId => dispatch => (
    CommentsApiUtil.deleteComment(commentId).then( commentId => dispatch(removeComment(commentId)))
)