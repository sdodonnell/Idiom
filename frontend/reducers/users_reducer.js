import { merge } from 'lodash'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_FOLLOW } from '../actions/follow_actions';


const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_FOLLOW:
            let follower = oldState[action.follow.followerId]
            let followed = oldState[action.follow.followedId]
            followed.numFollowers += 1
            followed.followerIds.push(follower.id)
            follower.numFollowing += 1
            return merge({}, oldState, {[follower.id]: follower}, {[followed.id]: followed})
        case RECEIVE_USER:
            return merge({}, oldState, {[action.user.id]: action.user});
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, {[action.user.id]: action.user});
        case RECEIVE_USERS:
            return merge({}, oldState, action.users)
        default:
            return oldState
    }
}

export default usersReducer