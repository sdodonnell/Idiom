import * as FollowsApiUtil from '../util/follows_api_util';
import { camelizeKeys } from 'humps';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW= 'REMOVE_FOLLOW';

const receiveFollows = follows => ({
    type: RECEIVE_FOLLOWS,
    follows: camelizeKeys(follows)
})

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow: camelizeKeys(follow)
})

const removeFollow = commentId => ({
    type: REMOVE_FOLLOW,
    commentId
})

// export const fetchFollows = follows => dispatch => (
//     FollowsApiUtil.fetchFollows(follows).then ( follows => dispatch(receiveFollows(follows)))
// )

export const createFollow = follow => dispatch => (
    FollowsApiUtil.createFollow(follow).then( follow => dispatch(receiveFollow(follow)))
)

export const deleteFollow = followId => dispatch => (
    FollowsApiUtil.deleteFollow(followId).then( followId => dispatch(removeFollow(followId)))
)