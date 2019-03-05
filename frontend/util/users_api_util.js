export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
)

export const fetchUsers = (storyId) => (
    $.ajax({
        method: 'GET',
        url: 'api/users/',
        data: {storyId}
    })
)