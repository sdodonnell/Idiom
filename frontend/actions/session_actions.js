import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})


export const login = user => dispatch => (
    SessionApiUtil.login(user).then( user => dispatch(receiveCurrentUser(user)))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
)

export const signup = user => dispatch => (
    SessionApiUtil.login(user).then( user => dispatch(receiveCurrentUser(user)))
)