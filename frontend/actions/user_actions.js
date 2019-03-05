import * as UsersApiUtil from '../util/users_api_util';
import { camelizeKeys } from 'humps';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user: camelizeKeys(user)
})

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users: camelizeKeys(users)
})

export const fetchUser = id => dispatch => (
    UsersApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
)

export const fetchUsers = () => dispatch => (
    UsersApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
)