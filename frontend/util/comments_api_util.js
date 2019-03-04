import { decamelizeKeys } from "humps";

export const fetchComments = userId => (
    $.ajax({
        method: 'GET',
        url: 'api/comments',
        data: {comment: {user_id: userId}}
    })
)

export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: {comment: decamelizeKeys(comment)}
    })
)

export const deleteComment = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${id}`,
    })
)
export const updateComment = comment => (
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: {comment: decamelizeKeys(comment)}
    })
)