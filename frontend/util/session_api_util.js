export const signup = user => (
    $.ajax({
        method: 'POST',
        url: 'api/users/create',
        data: user 
    })
)

export const login = user => (
    $.ajax({
        method: 'POST',
        url: 'api/session/create',
        data: user
    })
)

export const logout = user => (
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
)