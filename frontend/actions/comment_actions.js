import * as CommentsApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
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