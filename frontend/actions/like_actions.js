import * as LikesApiUtil from '../util/likes_api_util';
import { camelizeKeys } from 'humps';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE= 'REMOVE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like: camelizeKeys(like)
})

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
})

export const createLike = like => dispatch => (
    LikesApiUtil.createLike(like).then( like => dispatch(receiveLike(like)))
)

export const deleteLike = likeId => dispatch => (
    LikesApiUtil.deleteLike(likeId).then( likeId => dispatch(removeLike(likeId)))
)